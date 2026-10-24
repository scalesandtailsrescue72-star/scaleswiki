import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { createClient as createAdminClient } from "@supabase/supabase-js";
import { createClient } from "@/app/lib/database/server";

function getRuntimeEnv() {
  try {
    return getCloudflareContext().env as unknown as Record<string, string | undefined>;
  } catch {
    return process.env;
  }
}

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>\"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '\"': "&quot;" })[character] || character);
}

async function getAuthorizedAdmin() {
  const userClient = await createClient();
  const { data: { user } } = await userClient.auth.getUser();
  const env = getRuntimeEnv();
  const authorized = Boolean(user && env.NEWSLETTER_ADMIN_EMAIL && user.email?.toLowerCase() === env.NEWSLETTER_ADMIN_EMAIL.toLowerCase());
  return { user, env, authorized };
}

export async function POST(request: Request) {
  const { env, authorized } = await getAuthorizedAdmin();
  if (!authorized) return NextResponse.json({ error: "Administrator access is required." }, { status: 403 });
  if (!env.NEXT_PUBLIC_SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY || !env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Partner replies are not fully configured." }, { status: 503 });
  }

  const body = await request.json().catch(() => null);
  const feedbackId = cleanText(body?.feedbackId, 100);
  const subject = cleanText(body?.subject, 180);
  const message = cleanText(body?.message, 5000);
  if (!feedbackId || !subject || !message) {
    return NextResponse.json({ error: "A recipient, subject, and message are required." }, { status: 400 });
  }

  const admin = createAdminClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const { data: feedback, error: feedbackError } = await admin
    .from("rescue_partner_feedback")
    .select("id,submitted_by,organization_id")
    .eq("id", feedbackId)
    .maybeSingle();
  if (feedbackError || !feedback) return NextResponse.json({ error: "Partner submission not found." }, { status: 404 });

  const [{ data: accountData }, { data: organization }] = await Promise.all([
    admin.auth.admin.getUserById(feedback.submitted_by),
    admin.from("partner_organizations").select("name").eq("id", feedback.organization_id).maybeSingle(),
  ]);
  const recipient = accountData?.user?.email;
  if (!recipient) return NextResponse.json({ error: "The submitting account does not have a deliverable email address." }, { status: 409 });

  const organizationName = organization?.name || "Rescue Partner";
  const htmlMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env.PARTNER_FROM_EMAIL || "ScalesWiki Partnerships <partners@scaleswiki.org>",
      to: [recipient],
      reply_to: "partners@scaleswiki.org",
      subject,
      text: `${message}\n\nWilliam Pierce\nFounder, ScalesWiki\npartners@scaleswiki.org\nhttps://scaleswiki.org`,
      html: `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${escapeHtml(subject)}</title></head><body style="margin:0;background:#f4f7f5;color:#18231d;font-family:Arial,sans-serif"><div style="display:none;max-height:0;overflow:hidden">A reply from ScalesWiki Partnerships</div><main style="max-width:640px;margin:0 auto;padding:32px 20px"><div style="background:#ffffff;border:1px solid #dbe6df;border-radius:16px;padding:32px"><p style="margin:0 0 10px;color:#15803d;font-size:13px;font-weight:700;letter-spacing:.12em;text-transform:uppercase">ScalesWiki Partnerships</p><h1 style="margin:0 0 22px;font-size:26px;line-height:1.25">${escapeHtml(subject)}</h1><p style="margin:0 0 20px;color:#4b5d52;font-size:14px">Regarding input from ${escapeHtml(organizationName)}</p><div style="font-size:16px;line-height:1.7">${htmlMessage}</div><p style="margin:28px 0 0;font-size:15px;line-height:1.6">William Pierce<br>Founder, ScalesWiki<br><a href="mailto:partners@scaleswiki.org" style="color:#15803d">partners@scaleswiki.org</a></p></div></main></body></html>`,
    }),
  });
  if (!response.ok) {
    console.error("[Partner Feedback Reply] Resend failed", await response.text());
    return NextResponse.json({ error: "Resend could not deliver the reply." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, recipient });
}

export async function DELETE(request: Request) {
  const { env, authorized } = await getAuthorizedAdmin();
  if (!authorized) return NextResponse.json({ error: "Administrator access is required." }, { status: 403 });
  if (!env.NEXT_PUBLIC_SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json({ error: "Community moderation is not configured." }, { status: 503 });
  }

  const feedbackId = new URL(request.url).searchParams.get("id")?.trim() || "";
  if (!feedbackId) return NextResponse.json({ error: "Submission ID is required." }, { status: 400 });

  const admin = createAdminClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const { error } = await admin.from("rescue_partner_feedback").delete().eq("id", feedbackId);
  if (error) {
    console.error("[Partner Feedback Delete] Delete failed", error.message);
    return NextResponse.json({ error: "The submission could not be deleted." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

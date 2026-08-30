import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { ballPython52Week } from "@/app/lib/newsletter/ball-python-52-week";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export const dynamic = "force-dynamic";

function getRuntimeEnv() {
  try {
    return getCloudflareContext().env as unknown as Record<string, string | undefined>;
  } catch {
    return process.env;
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>\"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[character] || character));
}

function getDueWeek(subscribedAt: string, lastSentWeek: number | null) {
  const elapsedDays = Math.floor((Date.now() - new Date(subscribedAt).getTime()) / 86400000);
  return Math.min(52, Math.max(1, Math.floor(elapsedDays / 7) + 1));
}

export async function POST(request: Request) {
  const env = getRuntimeEnv();
  const secret = env.NEWSLETTER_CRON_SECRET;
  const supplied = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  if (!secret || supplied !== secret) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;
  const resendKey = env.RESEND_API_KEY;
  const from = env.NEWSLETTER_FROM_EMAIL;
  if (!serviceKey || !resendKey || !from) return NextResponse.json({ error: "Newsletter automation is not configured." }, { status: 503 });

  const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
  if (!supabaseUrl) return NextResponse.json({ error: "Newsletter database is not configured." }, { status: 503 });

  const supabase = createClient(supabaseUrl, serviceKey, { auth: { autoRefreshToken: false, persistSession: false } });
  const { data: subscribers, error } = await supabase.from("newsletter_subscribers").select("id,email,first_name,unsubscribe_token,subscribed_at,last_sent_week").eq("status", "active").eq("track", "ball-python");
  if (error) return NextResponse.json({ error: "Unable to load subscribers." }, { status: 500 });

  let sent = 0;
  for (const subscriber of subscribers ?? []) {
    const dueWeek = getDueWeek(subscriber.subscribed_at, subscriber.last_sent_week);
    if ((subscriber.last_sent_week ?? 0) >= dueWeek) continue;
    const lesson = ballPython52Week[dueWeek - 1];
    if (!lesson) continue;

    const unsubscribeUrl = `https://scaleswiki.org/api/newsletter/unsubscribe?token=${subscriber.unsubscribe_token}`;
    const cta = lesson.cta ? `<p><a href="https://scaleswiki.org${lesson.cta.href}" style="display:inline-block;padding:12px 18px;border-radius:10px;background:#16a34a;color:#fff;text-decoration:none;font-weight:700">${escapeHtml(lesson.cta.label)}</a></p>` : "";
    const greeting = subscriber.first_name ? `Hi ${escapeHtml(subscriber.first_name)},` : "Hi there,";
    const html = `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#18231d;max-width:680px;margin:auto"><p style="color:#15803d;font-weight:700;letter-spacing:.12em;text-transform:uppercase">ScalesWiki • Week ${lesson.week} of 52</p><h1>${escapeHtml(lesson.title)}</h1><p>${greeting}</p><p>${escapeHtml(lesson.body)}</p>${cta}<hr style="border:0;border-top:1px solid #ddd;margin:32px 0"><p style="font-size:12px;color:#667">You're receiving the free ScalesWiki 52-Week Ball Python learning series. <a href="${unsubscribeUrl}">Unsubscribe</a>.</p></div>`;

    const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to: [subscriber.email], subject: lesson.subject, html }) });
    if (!response.ok) { console.error("[Newsletter] send failed", subscriber.email, await response.text()); continue; }

    await supabase.from("newsletter_subscribers").update({ last_sent_week: lesson.week, last_sent_at: new Date().toISOString() }).eq("id", subscriber.id);
    sent += 1;
  }

  return NextResponse.json({ ok: true, processed: subscribers?.length ?? 0, sent });
}

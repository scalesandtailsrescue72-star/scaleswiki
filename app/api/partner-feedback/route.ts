import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { createClient } from "@/app/lib/database/server";

function getRuntimeEnv() {
  try {
    return getCloudflareContext().env as unknown as Record<string, string | undefined>;
  } catch {
    return process.env;
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>\"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '\"': "&quot;" })[character] || character);
}

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return NextResponse.json({ error: "Please sign in first." }, { status: 401 });
  if (user.user_metadata?.community_role !== "rescue") {
    return NextResponse.json({ error: "This form is reserved for Rescue Partner accounts." }, { status: 403 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") return NextResponse.json({ error: "Invalid submission." }, { status: 400 });

  const adopterChallenges = cleanText(body.adopterChallenges, 3000);
  const requestedResources = cleanText(body.requestedResources, 3000);
  const collaborationNotes = cleanText(body.collaborationNotes, 3000);
  const speciesHandled = cleanText(body.speciesHandled, 1000)
    .split(",")
    .map((species) => species.trim())
    .filter(Boolean)
    .slice(0, 30);

  if (!adopterChallenges || !requestedResources) {
    return NextResponse.json({ error: "Please complete the adopter challenges and requested resources fields." }, { status: 400 });
  }

  const { data: membership } = await supabase
    .from("partner_organization_members")
    .select("organization_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!membership?.organization_id) {
    return NextResponse.json(
      { error: "Your Rescue Partner account is not linked to an organization yet. Please contact ScalesWiki." },
      { status: 409 },
    );
  }

  const submission = {
    organization_id: membership.organization_id,
    submitted_by: user.id,
    species_handled: speciesHandled,
    adopter_challenges: adopterChallenges,
    requested_resources: requestedResources,
    collaboration_notes: collaborationNotes || null,
    spotlight_interest: Boolean(body.spotlightInterest),
    follow_up_ok: Boolean(body.followUpOkay),
  };

  const { error: insertError } = await supabase.from("rescue_partner_feedback").insert(submission);
  if (insertError) {
    console.error("[Rescue Partner Feedback] Insert failed", insertError.message);
    return NextResponse.json({ error: "We could not save your input right now. Please try again." }, { status: 500 });
  }

  const env = getRuntimeEnv();
  let notificationSent = false;
  if (env.RESEND_API_KEY && env.NEWSLETTER_FROM_EMAIL) {
    const name = [user.user_metadata?.first_name, user.user_metadata?.last_name].filter(Boolean).join(" ") || "Rescue Partner";
    const organization = user.user_metadata?.organization_name || user.email?.split("@")[1] || "Organization not provided";
    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.65;color:#18231d;max-width:680px;margin:auto">
        <p style="color:#15803d;font-weight:700;letter-spacing:.12em;text-transform:uppercase">New Rescue Partner input</p>
        <h1>${escapeHtml(name)} submitted partner feedback.</h1>
        <p><strong>Organization:</strong> ${escapeHtml(String(organization))}</p>
        <p><strong>Email:</strong> ${escapeHtml(user.email || "Unavailable")}</p>
        <h2>Species commonly handled</h2><p>${escapeHtml(speciesHandled.join(", ") || "Not specified")}</p>
        <h2>Biggest adopter challenges</h2><p>${escapeHtml(adopterChallenges)}</p>
        <h2>Requested resources</h2><p>${escapeHtml(requestedResources)}</p>
        ${collaborationNotes ? `<h2>Additional notes</h2><p>${escapeHtml(collaborationNotes)}</p>` : ""}
        <p><strong>Spotlight interest:</strong> ${body.spotlightInterest ? "Yes" : "No"}<br><strong>Follow-up welcome:</strong> ${body.followUpOkay ? "Yes" : "No"}</p>
        <p><a href="https://scaleswiki.org/community/admin" style="display:inline-block;padding:13px 20px;border-radius:10px;background:#16a34a;color:#fff;text-decoration:none;font-weight:700">Open Community Admin</a></p>
      </div>`;
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: env.NEWSLETTER_FROM_EMAIL,
        to: [env.PARTNER_NOTIFICATION_EMAIL || "partners@scaleswiki.org"],
        reply_to: user.email,
        subject: `New Rescue Partner input from ${name}`,
        html,
      }),
    });
    notificationSent = response.ok;
    if (!response.ok) console.error("[Rescue Partner Feedback] Notification failed", await response.text());
  }

  return NextResponse.json({ ok: true, notificationSent });
}

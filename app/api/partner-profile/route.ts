import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { createClient as createAdminClient } from "@supabase/supabase-js";
import { createClient } from "@/app/lib/database/server";
import { ensurePartnerOrganization } from "@/app/lib/partners/organizations";

const CONSENT_VERSION = "2026-10-24-v1";

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

function cleanList(value: unknown, maxItems = 30) {
  return cleanText(value, 1500).split(",").map((item) => item.trim()).filter(Boolean).slice(0, maxItems);
}

function cleanUrl(value: unknown) {
  const url = cleanText(value, 500);
  if (!url) return null;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:" ? parsed.toString() : null;
  } catch {
    return null;
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>\"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '\"': "&quot;" })[character] || character);
}

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Please sign in first." }, { status: 401 });
  if (user.user_metadata?.community_role !== "rescue") {
    return NextResponse.json({ error: "This profile is reserved for Rescue Partner accounts." }, { status: 403 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") return NextResponse.json({ error: "Invalid profile submission." }, { status: 400 });
  if (!body.representativeAuthorized) {
    return NextResponse.json({ error: "An authorized organization representative must confirm this submission." }, { status: 400 });
  }

  const name = cleanText(body.name, 180);
  if (!name) return NextResponse.json({ error: "Please enter the organization name." }, { status: 400 });

  const rawUrls = [body.websiteUrl, body.facebookUrl, body.instagramUrl];
  const cleanedUrls = rawUrls.map(cleanUrl);
  if (rawUrls.some((value, index) => cleanText(value, 500) && !cleanedUrls[index])) {
    return NextResponse.json({ error: "Please enter complete website and social links beginning with https://" }, { status: 400 });
  }

  const env = getRuntimeEnv();
  if (!env.NEXT_PUBLIC_SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json({ error: "Partner profiles are not configured." }, { status: 503 });
  }

  const admin = createAdminClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const organizationId = await ensurePartnerOrganization(admin, user);
  if (!organizationId) {
    return NextResponse.json({ error: "We could not securely link this account to an organization. Please contact ScalesWiki." }, { status: 409 });
  }

  const submittedAt = new Date().toISOString();
  const profile = {
    name,
    website_url: cleanedUrls[0],
    city: cleanText(body.city, 120) || null,
    state_region: cleanText(body.stateRegion, 120) || null,
    service_area: cleanText(body.serviceArea, 500) || null,
    public_description: cleanText(body.publicDescription, 2000) || null,
    species_handled: cleanList(body.speciesHandled),
    services_offered: cleanList(body.servicesOffered),
    facebook_url: cleanedUrls[1],
    instagram_url: cleanedUrls[2],
    preferred_contact_method: cleanText(body.preferredContactMethod, 200) || null,
    profile_status: "submitted",
    representative_authorized: true,
    directory_consent: Boolean(body.directoryConsent),
    name_logo_consent: Boolean(body.nameLogoConsent),
    spotlight_contact_consent: Boolean(body.spotlightContactConsent),
    public_links_consent: Boolean(body.publicLinksConsent),
    consent_version: CONSENT_VERSION,
    consented_by: user.id,
    consented_at: submittedAt,
    profile_submitted_at: submittedAt,
  };

  const { error: updateError } = await admin.from("partner_organizations").update(profile).eq("id", organizationId);
  if (updateError) {
    console.error("[Partner Profile] Update failed", updateError.message);
    return NextResponse.json({ error: "We could not save the organization profile right now." }, { status: 500 });
  }

  let notificationSent = false;
  if (env.RESEND_API_KEY && env.NEWSLETTER_FROM_EMAIL) {
    const consents = [
      `Public directory: ${profile.directory_consent ? "Approved" : "Not approved"}`,
      `Name/logo beyond directory: ${profile.name_logo_consent ? "Approved" : "Not approved"}`,
      `Spotlight contact: ${profile.spotlight_contact_consent ? "Approved" : "Not approved"}`,
      `Public website/social links: ${profile.public_links_consent ? "Approved" : "Not approved"}`,
    ];
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: env.NEWSLETTER_FROM_EMAIL,
        to: [env.PARTNER_NOTIFICATION_EMAIL || "partners@scaleswiki.org"],
        reply_to: user.email,
        subject: `Rescue Partner profile submitted: ${name}`,
        html: `<div style="font-family:Arial,sans-serif;line-height:1.65;color:#18231d;max-width:680px;margin:auto"><p style="color:#15803d;font-weight:700;letter-spacing:.12em;text-transform:uppercase">Private partner profile submitted</p><h1>${escapeHtml(name)}</h1><p><strong>Representative:</strong> ${escapeHtml(user.email || "Unavailable")}</p><p>This profile is awaiting review and has not been published.</p><ul>${consents.map((consent) => `<li>${escapeHtml(consent)}</li>`).join("")}</ul><p><a href="https://scaleswiki.org/community/admin" style="display:inline-block;padding:13px 20px;border-radius:10px;background:#16a34a;color:#fff;text-decoration:none;font-weight:700">Review in Community Admin</a></p></div>`,
      }),
    });
    notificationSent = response.ok;
    if (!response.ok) console.error("[Partner Profile] Notification failed", await response.text());
  }

  return NextResponse.json({ ok: true, notificationSent });
}

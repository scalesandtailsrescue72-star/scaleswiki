import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { createClient as createAdminClient, type SupabaseClient, type User } from "@supabase/supabase-js";
import { createClient } from "@/app/lib/database/server";

function getRuntimeEnv() {
  try {
    return getCloudflareContext().env as unknown as Record<string, string | undefined>;
  } catch {
    return process.env;
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character] || character);
}

type CommunityRole = "rescue" | "veterinary" | string | undefined;

const personalEmailDomains = new Set([
  "aol.com", "gmail.com", "hotmail.com", "icloud.com", "live.com",
  "me.com", "msn.com", "outlook.com", "proton.me", "protonmail.com",
  "yahoo.com", "ymail.com",
]);

function getAdminClient() {
  const env = getRuntimeEnv();
  if (!env.NEXT_PUBLIC_SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) return null;
  return createAdminClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

function normalizeOrganizationName(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

async function connectOrganization(admin: SupabaseClient, user: User) {
  const role = user.user_metadata?.community_role as CommunityRole;
  if (!role || !["rescue", "veterinary", "store", "educator"].includes(role)) return;

  const emailDomain = user.email?.split("@").pop()?.toLowerCase();
  const customDomain = emailDomain && !personalEmailDomains.has(emailDomain) ? emailDomain : null;
  const suppliedName = String(user.user_metadata?.organization_name || "").trim();
  const normalizedName = suppliedName ? normalizeOrganizationName(suppliedName) : null;
  if (!customDomain && !normalizedName) return;

  let organizationId: string | undefined;
  const lookup = customDomain
    ? admin.from("partner_organizations").select("id").eq("email_domain", customDomain).maybeSingle()
    : admin.from("partner_organizations").select("id").eq("normalized_name", normalizedName!).maybeSingle();
  const { data: existing, error: lookupError } = await lookup;
  if (lookupError) {
    console.error("[Partner Organization] Lookup failed", lookupError.message);
    return;
  }
  organizationId = existing?.id;

  if (!organizationId) {
    const fallbackName = customDomain
      ? customDomain.split(".")[0].replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase())
      : "Partner Organization";
    const { data: created, error: createError } = await admin
      .from("partner_organizations")
      .insert({
        name: suppliedName || fallbackName,
        normalized_name: normalizedName,
        email_domain: customDomain,
        organization_type: role,
      })
      .select("id")
      .single();
    if (createError) {
      console.error("[Partner Organization] Create failed", createError.message);
      return;
    }
    organizationId = created.id;
  } else if (suppliedName) {
    await admin.from("partner_organizations").update({ name: suppliedName, normalized_name: normalizedName }).eq("id", organizationId);
  }

  const localPart = user.email?.split("@")[0].toLowerCase() || "";
  const organizationAccount = ["admin", "contact", "hello", "info", "office", "team"].includes(localPart);
  const { error: membershipError } = await admin.from("partner_organization_members").upsert(
    {
      organization_id: organizationId,
      user_id: user.id,
      member_kind: organizationAccount ? "organization_account" : "staff",
    },
    { onConflict: "user_id" },
  );
  if (membershipError) console.error("[Partner Organization] Membership failed", membershipError.message);
}

const roleWelcomeContent = {
  rescue: {
    label: "Founding Rescue Partner",
    subject: "Welcome to the ScalesWiki Founding Rescue Partner program",
    heading: "You're part of the Founding Rescue Partner community.",
    introduction:
      "Thank you for bringing a rescue perspective into ScalesWiki. Your experience can help us build clearer, more practical education for adopters and keepers.",
    benefitsHeading: "Your Rescue Partner account",
    benefits: [
      "Explore current care resources and Ball Python 101 at your own pace.",
      "Suggest the guides, checklists, and lessons your adopters need most.",
      "Vote on future species resources and community priorities.",
      "Choose separately whether to participate in any future Rescue Spotlight.",
    ],
    buttonLabel: "Open Your Rescue Partner Dashboard",
    programHref: "https://scaleswiki.org/community/rescue-partners",
    programLabel: "review the Rescue Partner program",
  },
  veterinary: {
    label: "Founding Veterinary Reviewer",
    subject: "Welcome to the ScalesWiki Founding Veterinary Reviewer program",
    heading: "You're part of the Founding Veterinary Reviewer community.",
    introduction:
      "Thank you for considering a role in strengthening ScalesWiki's reptile education. Your account is ready, but joining creates no open-ended review obligation or endorsement.",
    benefitsHeading: "Your Veterinary Reviewer account",
    benefits: [
      "Review the program boundaries and current educational materials.",
      "Consider only clearly scoped requests that fit your expertise and schedule.",
      "Choose whether a completed review is public, practice-attributed, or private.",
      "Decline, pause, or stop participating at any time.",
    ],
    buttonLabel: "Open Your Reviewer Dashboard",
    programHref: "https://scaleswiki.org/veterinary-review/founding-reviewers",
    programLabel: "review the Veterinary Reviewer program",
  },
} as const;

async function sendWelcomeEmail(email: string, firstName?: string, communityRole?: CommunityRole) {
  const env = getRuntimeEnv();
  const resendKey = env.RESEND_API_KEY;
  const from = env.NEWSLETTER_FROM_EMAIL;
  if (!resendKey || !from) {
    console.error("[Community Welcome] Resend is not configured.");
    return false;
  }

  const greeting = firstName ? `Hi ${escapeHtml(firstName)},` : "Hi there,";
  const roleContent =
    communityRole === "rescue" || communityRole === "veterinary"
      ? roleWelcomeContent[communityRole]
      : null;
  const subject = roleContent?.subject ?? "Welcome to the ScalesWiki founding community";
  const benefits = roleContent?.benefits ?? [
    "Track Academy lessons and continue where you left off.",
    "Complete course exams and keep certificates tied to your account.",
    "Vote on which reptile guide ScalesWiki should build next.",
    "Help shape future community resources and Spotlight programs.",
    "Access care guides, articles, and rescue-backed education anytime.",
  ];
  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.65;color:#18231d;max-width:680px;margin:auto">
      <p style="color:#15803d;font-weight:700;letter-spacing:.12em;text-transform:uppercase">${roleContent?.label ?? "Welcome to ScalesWiki"}</p>
      <h1>${roleContent?.heading ?? "You're part of the founding community."}</h1>
      <p>${greeting}</p>
      <p>${roleContent?.introduction ?? "Thank you for joining ScalesWiki. You are helping build a better home for evidence-informed reptile education from the beginning."}</p>
      <h2>${roleContent?.benefitsHeading ?? "Your free member benefits"}</h2>
      <ul>
        ${benefits.map((benefit) => `<li>${benefit}</li>`).join("")}
      </ul>
      <p><a href="https://scaleswiki.org/dashboard" style="display:inline-block;padding:13px 20px;border-radius:10px;background:#16a34a;color:#fff;text-decoration:none;font-weight:700">${roleContent?.buttonLabel ?? "Open Your Dashboard"}</a></p>
      <p>You can also <a href="${roleContent?.programHref ?? "https://scaleswiki.org/community"}">${roleContent?.programLabel ?? "explore the community vision"}</a> or <a href="https://scaleswiki.org/academy">explore Ball Python 101</a>.</p>
      <hr style="border:0;border-top:1px solid #ddd;margin:32px 0">
      <p style="font-size:12px;color:#667">ScalesWiki provides evidence-informed husbandry education built from rescue experience. Educational content does not replace individualized veterinary care.</p>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [email],
      subject,
      html,
    }),
  });

  if (!response.ok) {
    console.error("[Community Welcome] Send failed", await response.text());
    return false;
  }

  return true;
}

async function sendOwnerSignupNotification(user: User) {
  const env = getRuntimeEnv();
  const resendKey = env.RESEND_API_KEY;
  const from = env.NEWSLETTER_FROM_EMAIL;
  const destination = env.PARTNER_NOTIFICATION_EMAIL || "partners@scaleswiki.org";
  if (!resendKey || !from) {
    console.error("[Signup Notification] Resend is not configured.");
    return false;
  }

  const metadata = user.user_metadata || {};
  const fullName = [metadata.first_name, metadata.last_name].filter(Boolean).join(" ") || "Name not provided";
  const role = metadata.community_role || "community member";
  const organization = metadata.organization_name || "Not provided";
  const guideInterest = metadata.guide_interest || "No preference";
  const spotlight = metadata.spotlight_interest ? "Interested" : "Not selected";
  const confirmedAt = user.email_confirmed_at || new Date().toISOString();
  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.65;color:#18231d;max-width:680px;margin:auto">
      <p style="color:#15803d;font-weight:700;letter-spacing:.12em;text-transform:uppercase">New confirmed ScalesWiki member</p>
      <h1>${escapeHtml(fullName)} joined ScalesWiki.</h1>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:700">Email</td><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(user.email || "Unavailable")}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:700">Community role</td><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(String(role))}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:700">Organization</td><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(String(organization))}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:700">Guide vote</td><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(String(guideInterest))}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:700">Spotlight interest</td><td style="padding:8px;border-bottom:1px solid #ddd">${spotlight}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:700">Confirmed</td><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(confirmedAt)}</td></tr>
      </table>
      <p style="margin-top:24px"><a href="https://supabase.com/dashboard" style="display:inline-block;padding:13px 20px;border-radius:10px;background:#16a34a;color:#fff;text-decoration:none;font-weight:700">Open Supabase Dashboard</a></p>
      <p style="font-size:12px;color:#667">Multiple accounts sharing one organization domain are grouped as one partner organization.</p>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [destination],
      reply_to: user.email,
      subject: `New ScalesWiki signup: ${fullName} (${role})`,
      html,
    }),
  });
  if (!response.ok) {
    console.error("[Signup Notification] Send failed", await response.text());
    return false;
  }
  return true;
}

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = await createClient();
    const { data: exchangeData, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);

    if (!exchangeError) {
      const user = exchangeData.user ?? (await supabase.auth.getUser()).data.user;

      const admin = getAdminClient();

      if (user && admin) {
        await connectOrganization(admin, user);
      }

      if (user?.email && !user.app_metadata?.welcome_email_sent && !user.user_metadata?.welcome_email_sent) {
        const sent = await sendWelcomeEmail(
          user.email,
          user.user_metadata?.first_name,
          user.user_metadata?.community_role,
        );
        if (sent) {
          if (admin) await admin.auth.admin.updateUserById(user.id, { app_metadata: { welcome_email_sent: true } });
          else await supabase.auth.updateUser({ data: { welcome_email_sent: true } });
        }
      }

      if (user && admin && !user.app_metadata?.admin_signup_notification_sent) {
        const notified = await sendOwnerSignupNotification(user);
        if (notified) {
          await admin.auth.admin.updateUserById(user.id, { app_metadata: { admin_signup_notification_sent: true } });
        }
      }
    } else {
      console.error("[Auth Callback] Code exchange failed", exchangeError);
    }
  }

  return NextResponse.redirect(`${origin}/dashboard`);
}

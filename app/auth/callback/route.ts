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
  return value.replace(/[&<>"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character] || character);
}

async function sendWelcomeEmail(email: string, firstName?: string) {
  const env = getRuntimeEnv();
  const resendKey = env.RESEND_API_KEY;
  const from = env.NEWSLETTER_FROM_EMAIL;
  if (!resendKey || !from) {
    console.error("[Community Welcome] Resend is not configured.");
    return false;
  }

  const greeting = firstName ? `Hi ${escapeHtml(firstName)},` : "Hi there,";
  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.65;color:#18231d;max-width:680px;margin:auto">
      <p style="color:#15803d;font-weight:700;letter-spacing:.12em;text-transform:uppercase">Welcome to ScalesWiki</p>
      <h1>You're part of the founding community.</h1>
      <p>${greeting}</p>
      <p>Thank you for joining ScalesWiki. You are helping build a better home for evidence-informed reptile education from the beginning.</p>
      <h2>Your free member benefits</h2>
      <ul>
        <li>Track Academy lessons and continue where you left off.</li>
        <li>Complete course exams and keep certificates tied to your account.</li>
        <li>Vote on which reptile guide ScalesWiki should build next.</li>
        <li>Help shape future community resources and Spotlight programs.</li>
        <li>Access care guides, articles, and rescue-backed education anytime.</li>
      </ul>
      <p><a href="https://scaleswiki.org/dashboard" style="display:inline-block;padding:13px 20px;border-radius:10px;background:#16a34a;color:#fff;text-decoration:none;font-weight:700">Open Your Dashboard</a></p>
      <p>You can also <a href="https://scaleswiki.org/community">explore the community vision</a> or <a href="https://scaleswiki.org/academy">start Ball Python 101</a>.</p>
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
      subject: "Welcome to the ScalesWiki founding community",
      html,
    }),
  });

  if (!response.ok) {
    console.error("[Community Welcome] Send failed", await response.text());
    return false;
  }

  return true;
}

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = await createClient();
    const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);

    if (!exchangeError) {
      const { data: { user } } = await supabase.auth.getUser();

      if (user?.email && !user.user_metadata?.welcome_email_sent) {
        const sent = await sendWelcomeEmail(user.email, user.user_metadata?.first_name);
        if (sent) {
          await supabase.auth.updateUser({
            data: { welcome_email_sent: true },
          });
        }
      }
    } else {
      console.error("[Auth Callback] Code exchange failed", exchangeError);
    }
  }

  return NextResponse.redirect(`${origin}/dashboard`);
}

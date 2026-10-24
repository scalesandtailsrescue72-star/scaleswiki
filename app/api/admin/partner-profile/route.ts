import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { createClient as createAdminClient } from "@supabase/supabase-js";
import { createClient } from "@/app/lib/database/server";

const actions = new Set(["approve", "decline", "publish", "unpublish"]);

function getRuntimeEnv() {
  try {
    return getCloudflareContext().env as unknown as Record<string, string | undefined>;
  } catch {
    return process.env;
  }
}

export async function POST(request: Request) {
  const userClient = await createClient();
  const { data: { user } } = await userClient.auth.getUser();
  if (!user) return NextResponse.json({ error: "Please sign in first." }, { status: 401 });

  const env = getRuntimeEnv();
  if (!env.NEWSLETTER_ADMIN_EMAIL || user.email?.toLowerCase() !== env.NEWSLETTER_ADMIN_EMAIL.toLowerCase()) {
    return NextResponse.json({ error: "Administrator access is required." }, { status: 403 });
  }
  if (!env.NEXT_PUBLIC_SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json({ error: "Community moderation is not configured." }, { status: 503 });
  }

  const body = await request.json().catch(() => null);
  const organizationId = typeof body?.organizationId === "string" ? body.organizationId : "";
  const action = typeof body?.action === "string" ? body.action : "";
  if (!organizationId || !actions.has(action)) {
    return NextResponse.json({ error: "Invalid moderation request." }, { status: 400 });
  }

  const admin = createAdminClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const { data: organization, error: lookupError } = await admin
    .from("partner_organizations")
    .select("id,name,profile_status,representative_authorized,directory_consent,public_description")
    .eq("id", organizationId)
    .maybeSingle();
  if (lookupError || !organization) {
    return NextResponse.json({ error: "Organization profile not found." }, { status: 404 });
  }

  let update: { profile_status: string; profile_published_at: string | null };
  if (action === "approve") {
    if (!organization.representative_authorized) {
      return NextResponse.json({ error: "The representative authorization is missing." }, { status: 409 });
    }
    update = { profile_status: "approved", profile_published_at: null };
  } else if (action === "decline") {
    update = { profile_status: "declined", profile_published_at: null };
  } else if (action === "publish") {
    if (organization.profile_status !== "approved") {
      return NextResponse.json({ error: "Approve the profile before publishing it." }, { status: 409 });
    }
    if (!organization.representative_authorized || !organization.directory_consent) {
      return NextResponse.json({ error: "Publication requires representative authorization and public-directory consent." }, { status: 409 });
    }
    if (!organization.public_description?.trim()) {
      return NextResponse.json({ error: "Add an organization description before publishing." }, { status: 409 });
    }
    update = { profile_status: "published", profile_published_at: new Date().toISOString() };
  } else {
    update = { profile_status: "approved", profile_published_at: null };
  }

  const { error: updateError } = await admin
    .from("partner_organizations")
    .update(update)
    .eq("id", organizationId);
  if (updateError) {
    console.error("[Partner Profile Moderation] Update failed", updateError.message);
    return NextResponse.json({ error: "The moderation action could not be saved." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, profileStatus: update.profile_status });
}

import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { createClient as createAdminClient } from "@supabase/supabase-js";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { createClient } from "@/app/lib/database/server";
import { ensurePartnerOrganization } from "@/app/lib/partners/organizations";
import { PartnerProfileForm, type PartnerProfile } from "./PartnerProfileForm";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Rescue Partner Organization Profile",
  description: "Privately submit organization information and choose public-use permissions for ScalesWiki review.",
  robots: { index: false, follow: false },
};

function getRuntimeEnv() {
  try {
    return getCloudflareContext().env as unknown as Record<string, string | undefined>;
  } catch {
    return process.env;
  }
}

export default async function RescuePartnerProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login?next=/community/rescue-partners/profile");

  if (user.user_metadata?.community_role !== "rescue") {
    return <main className="min-h-screen bg-[#08120D] text-white"><Navbar /><section className="mx-auto max-w-3xl px-6 py-20"><h1 className="text-4xl font-bold">Rescue Partner access</h1><p className="mt-5 leading-7 text-gray-300">Organization profiles are available to accounts registered as a rescue or adoption organization.</p><Link href="/community/rescue-partners" className="mt-7 inline-flex rounded-xl border border-green-600 px-6 py-3 font-semibold text-green-300">View the Rescue Partner Program</Link></section><Footer /></main>;
  }

  const env = getRuntimeEnv();
  let profile: PartnerProfile = { name: String(user.user_metadata?.organization_name || "") };
  if (env.NEXT_PUBLIC_SUPABASE_URL && env.SUPABASE_SERVICE_ROLE_KEY) {
    const admin = createAdminClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { autoRefreshToken: false, persistSession: false } });
    const organizationId = await ensurePartnerOrganization(admin, user);
    if (organizationId) {
      const { data } = await admin.from("partner_organizations").select("name,website_url,city,state_region,service_area,public_description,species_handled,services_offered,facebook_url,instagram_url,preferred_contact_method,profile_status,representative_authorized,directory_consent,name_logo_consent,spotlight_contact_consent,public_links_consent").eq("id", organizationId).maybeSingle();
      if (data) profile = data;
    }
  }

  return (
    <main className="min-h-screen bg-[#08120D] text-white">
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-green-400">Founding Rescue Partner</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Build your private organization profile.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">Provide the information ScalesWiki would need for future partner tools, then choose each permission separately. Submission places the profile in review—it does not make anything public.</p>
        {profile.profile_status && profile.profile_status !== "draft" && <div className="mt-7 rounded-2xl border border-green-500/20 bg-green-950/20 p-5 text-sm text-green-200">Current profile status: <strong className="capitalize">{profile.profile_status}</strong>. You may update the information or change any optional permission below.</div>}
        <PartnerProfileForm initialProfile={profile} />
      </section>
      <Footer />
    </main>
  );
}

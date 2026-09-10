import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { createClient as createAdminClient } from "@supabase/supabase-js";
import { createClient as createUserClient } from "@/app/lib/database/server";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Community Admin", robots: { index: false, follow: false } };

function getRuntimeEnv() {
  try {
    return getCloudflareContext().env as unknown as Record<string, string | undefined>;
  } catch {
    return process.env;
  }
}

export default async function CommunityAdminPage() {
  const userClient = await createUserClient();
  const { data: { user } } = await userClient.auth.getUser();
  if (!user) redirect("/auth/login?next=/community/admin");

  const env = getRuntimeEnv();
  const adminEmail = env.NEWSLETTER_ADMIN_EMAIL;
  if (!adminEmail || user.email?.toLowerCase() !== adminEmail.toLowerCase()) {
    return <main className="min-h-screen bg-[#08120D] px-6 py-20 text-white"><div className="mx-auto max-w-3xl rounded-3xl border border-red-500/20 bg-red-950/20 p-8"><h1 className="text-3xl font-bold">Community admin access</h1><p className="mt-3 text-gray-300">This page is restricted to the configured ScalesWiki administrator.</p></div></main>;
  }

  if (!env.NEXT_PUBLIC_SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) {
    return <main className="min-h-screen bg-[#08120D] px-6 py-20 text-white"><h1 className="text-3xl font-bold">Community data is not configured.</h1></main>;
  }

  const admin = createAdminClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { autoRefreshToken: false, persistSession: false } });
  const [{ data: organizations }, { data: memberships }, { data: feedback }, { data: authData }] = await Promise.all([
    admin.from("partner_organizations").select("id,name,email_domain,organization_type,created_at").order("created_at", { ascending: false }),
    admin.from("partner_organization_members").select("organization_id,user_id,member_kind,joined_at"),
    admin.from("rescue_partner_feedback").select("id,organization_id,submitted_by,species_handled,adopter_challenges,requested_resources,collaboration_notes,spotlight_interest,follow_up_ok,created_at").order("created_at", { ascending: false }),
    admin.auth.admin.listUsers({ page: 1, perPage: 1000 }),
  ]);

  const users = authData?.users || [];
  const userById = new Map(users.map((account) => [account.id, account]));
  const rescueAccounts = users.filter((account) => account.user_metadata?.community_role === "rescue");
  const spotlightCount = users.filter((account) => account.user_metadata?.spotlight_interest).length;

  return (
    <main className="min-h-screen bg-[#08120D] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><p className="text-sm font-semibold uppercase tracking-[0.28em] text-green-400">ScalesWiki operations</p><h1 className="mt-2 text-4xl font-bold">Community Admin</h1><p className="mt-3 text-gray-300">Organizations, participating accounts, and partner input in one place.</p></div>
          <Link href="/newsletter/admin" className="rounded-xl border border-green-600 px-5 py-3 text-center font-semibold text-green-300">View Newsletter Admin</Link>
        </div>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[["Partner organizations", organizations?.length || 0], ["Rescue accounts", rescueAccounts.length], ["Partner submissions", feedback?.length || 0], ["Spotlight volunteers", spotlightCount]].map(([label, value]) => <div key={label} className="rounded-2xl border border-white/10 bg-[#102017] p-5"><div className="text-sm text-gray-400">{label}</div><div className="mt-2 text-3xl font-bold text-green-300">{value}</div></div>)}
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Partner organizations</h2>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            {organizations?.map((organization) => {
              const organizationMembers = memberships?.filter((membership) => membership.organization_id === organization.id) || [];
              return <article key={organization.id} className="rounded-2xl border border-white/10 bg-[#102017] p-6"><div className="flex items-start justify-between gap-4"><div><h3 className="text-xl font-semibold text-white">{organization.name}</h3><p className="mt-1 text-sm text-gray-400">{organization.email_domain || "No organization domain"}</p></div><span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold capitalize text-green-300">{organization.organization_type}</span></div><div className="mt-5 space-y-3">{organizationMembers.map((membership) => { const account = userById.get(membership.user_id); const name = [account?.user_metadata?.first_name, account?.user_metadata?.last_name].filter(Boolean).join(" ") || "Member"; return <div key={membership.user_id} className="rounded-xl bg-black/20 p-4 text-sm"><div className="font-semibold text-white">{name}</div><div className="text-gray-400">{account?.email || membership.user_id}</div><div className="mt-1 text-xs capitalize text-gray-500">{membership.member_kind.replace("_", " ")}</div></div>; })}</div></article>;
            })}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Rescue Partner input</h2>
          <div className="mt-5 space-y-5">
            {feedback?.length ? feedback.map((entry) => { const account = userById.get(entry.submitted_by); const organization = organizations?.find((item) => item.id === entry.organization_id); return <article key={entry.id} className="rounded-2xl border border-white/10 bg-[#102017] p-6"><div className="flex flex-col justify-between gap-2 sm:flex-row"><div><h3 className="text-xl font-semibold">{organization?.name || "Rescue Partner"}</h3><p className="text-sm text-gray-400">{account?.email || "Account unavailable"}</p></div><time className="text-sm text-gray-500">{new Date(entry.created_at).toLocaleDateString()}</time></div><div className="mt-5 grid gap-5 lg:grid-cols-2"><div><h4 className="font-semibold text-green-300">Adopter challenges</h4><p className="mt-2 whitespace-pre-wrap leading-7 text-gray-300">{entry.adopter_challenges}</p></div><div><h4 className="font-semibold text-green-300">Requested resources</h4><p className="mt-2 whitespace-pre-wrap leading-7 text-gray-300">{entry.requested_resources}</p></div></div><p className="mt-5 text-sm text-gray-400">Species: {entry.species_handled?.join(", ") || "Not specified"} · Spotlight: {entry.spotlight_interest ? "Yes" : "No"} · Follow-up: {entry.follow_up_ok ? "Yes" : "No"}</p>{entry.collaboration_notes && <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-gray-400">Notes: {entry.collaboration_notes}</p>}</article>; }) : <div className="rounded-2xl border border-dashed border-white/15 p-8 text-gray-400">No Rescue Partner input has been submitted yet.</div>}
          </div>
        </section>
      </div>
    </main>
  );
}

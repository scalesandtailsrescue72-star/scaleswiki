import { redirect } from "next/navigation";
import { createClient as createUserClient } from "@/app/lib/database/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

export default async function NewsletterAdminPage() {
  const userClient = await createUserClient();
  const { data: { user } } = await userClient.auth.getUser();

  if (!user) redirect("/auth/login?next=/newsletter/admin");
  if (!process.env.NEWSLETTER_ADMIN_EMAIL || user.email?.toLowerCase() !== process.env.NEWSLETTER_ADMIN_EMAIL.toLowerCase()) {
    return <main className="min-h-screen bg-[#08120D] px-6 py-20 text-white"><div className="mx-auto max-w-3xl rounded-3xl border border-red-500/20 bg-red-950/20 p-8"><h1 className="text-3xl font-bold">Newsletter admin access</h1><p className="mt-3 text-gray-300">This page is restricted to the configured ScalesWiki admin email.</p></div></main>;
  }

  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) {
    return <main className="min-h-screen bg-[#08120D] px-6 py-20 text-white"><div className="mx-auto max-w-3xl rounded-3xl border border-yellow-500/20 bg-yellow-950/20 p-8"><h1 className="text-3xl font-bold">One setup step remains</h1><p className="mt-3 text-gray-300">Add SUPABASE_SERVICE_ROLE_KEY to the production environment so ScalesWiki can securely show your subscriber list without exposing it publicly.</p></div></main>;
  }

  const admin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceKey, { auth: { autoRefreshToken: false, persistSession: false } });
  const { data: subscribers, error } = await admin.from("newsletter_subscribers").select("email,first_name,track,status,subscribed_at,last_sent_week,last_sent_at").order("subscribed_at", { ascending: false });
  const active = subscribers?.filter((item) => item.status === "active").length ?? 0;

  return <main className="min-h-screen bg-[#08120D] px-6 py-16 text-white"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">ScalesWiki</p><h1 className="mt-2 text-4xl font-bold">52-Week Learning Subscribers</h1><p className="mt-3 text-gray-300">Your audience, owned by ScalesWiki.</p></div><div className="rounded-2xl border border-green-500/20 bg-green-950/20 px-5 py-4"><div className="text-sm text-gray-400">Active subscribers</div><div className="text-3xl font-bold text-green-300">{active}</div></div></div>{error ? <div className="mt-8 rounded-2xl border border-red-500/20 bg-red-950/20 p-5 text-red-200">Unable to load subscribers right now.</div> : <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"><div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="border-b border-white/10 bg-white/[0.04] text-gray-400"><tr><th className="px-5 py-4">Subscriber</th><th className="px-5 py-4">Track</th><th className="px-5 py-4">Status</th><th className="px-5 py-4">Joined</th><th className="px-5 py-4">Last sent</th></tr></thead><tbody>{subscribers?.map((subscriber) => <tr key={subscriber.email} className="border-b border-white/5"><td className="px-5 py-4"><div className="font-medium text-white">{subscriber.first_name || "Subscriber"}</div><div className="text-gray-400">{subscriber.email}</div></td><td className="px-5 py-4 capitalize text-gray-300">{subscriber.track.replace("-", " ")}</td><td className="px-5 py-4"><span className={subscriber.status === "active" ? "text-green-300" : "text-gray-500"}>{subscriber.status}</span></td><td className="px-5 py-4 text-gray-400">{new Date(subscriber.subscribed_at).toLocaleDateString()}</td><td className="px-5 py-4 text-gray-400">{subscriber.last_sent_week ? `Week ${subscriber.last_sent_week}` : "Not started"}</td></tr>)}</tbody></table></div></div>}</div></main>;
}

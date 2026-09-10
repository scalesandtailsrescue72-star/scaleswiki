import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Footer } from "@/app/components/Footer";
import { Navbar } from "@/app/components/Navbar";
import { createClient } from "@/app/lib/database/server";
import { RescuePartnerInputForm } from "./RescuePartnerInputForm";

export const metadata: Metadata = {
  title: "Rescue Partner Input",
  description: "Share the adopter education needs and resource priorities your reptile rescue sees most often.",
  robots: { index: false, follow: false },
};

export default async function RescuePartnerInputPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login?next=/community/rescue-partners/input");

  if (user.user_metadata?.community_role !== "rescue") {
    return (
      <main className="min-h-screen bg-[#08120D] text-white">
        <Navbar />
        <section className="mx-auto max-w-3xl px-6 py-20">
          <h1 className="text-4xl font-bold">Rescue Partner access</h1>
          <p className="mt-5 leading-7 text-gray-300">This input center is available to accounts registered as a rescue or adoption organization.</p>
          <Link href="/community/rescue-partners" className="mt-7 inline-flex rounded-xl border border-green-600 px-6 py-3 font-semibold text-green-300">View the Rescue Partner Program</Link>
        </section>
        <Footer />
      </main>
    );
  }

  const firstName = user.user_metadata?.first_name as string | undefined;
  return (
    <main className="min-h-screen bg-[#08120D] text-white">
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-green-400">Founding Rescue Partner</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">What would help your adopters most?</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">{firstName ? `${firstName}, your` : "Your"} practical perspective helps ScalesWiki prioritize resources that solve problems rescues encounter every day. This should take about five minutes.</p>
        <div className="mt-7 rounded-2xl border border-green-500/20 bg-green-950/20 p-5 text-sm leading-6 text-gray-300">There are no required meetings or future assignments. Share only what is useful, and ScalesWiki will ask permission separately before publishing your name, organization, or comments.</div>
        <RescuePartnerInputForm />
      </section>
      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Reptile Care Articles",
  description: "Evidence-informed reptile husbandry and welfare articles from ScalesWiki.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-[#0B1411] text-white">
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">ScalesWiki Articles</p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">Evidence-informed reptile care, made practical.</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">Long-form husbandry, biosecurity, welfare, and preventive-care education backed by rescue experience and carefully reviewed sources.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link href="/articles/thermal-gradient-for-healthy-reptiles" className="rounded-2xl border border-white/10 bg-[#111D17] p-7 transition hover:border-green-500/60 hover:bg-[#14231B]">
            <p className="text-sm font-semibold text-green-400">HEATING • HUSBANDRY</p>
            <h2 className="mt-3 text-2xl font-bold">The Thermal Gradient: Why One Temperature Is Never Enough for Your Reptile</h2>
            <p className="mt-4 leading-7 text-gray-300">How reptiles use behavioral thermoregulation, how to build a usable warm-to-cool range, and how to measure it safely.</p>
            <p className="mt-6 font-semibold text-green-300">Read article →</p>
          </Link>

          <Link href="/articles/quarantine-for-new-reptiles" className="rounded-2xl border border-white/10 bg-[#111D17] p-7 transition hover:border-green-500/60 hover:bg-[#14231B]">
            <p className="text-sm font-semibold text-green-400">BIOSECURITY • NEW ARRIVALS</p>
            <h2 className="mt-3 text-2xl font-bold">Quarantine: The Habit That Protects Every Reptile You’ll Ever Keep</h2>
            <p className="mt-4 leading-7 text-gray-300">How long to quarantine, what separation really means, what you are guarding against, and how to build a repeatable daily routine.</p>
            <p className="mt-6 font-semibold text-green-300">Read article →</p>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

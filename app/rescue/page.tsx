import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Reptile Rescue Mission",
  description: "How rescue experience shapes ScalesWiki education, welfare guidance, and the mission behind the platform.",
};

export default function RescuePage() {
  return (
    <main className="min-h-screen bg-[#08120D] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-green-400">🛟 Rescue Mission</p>
        <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">Better education can prevent preventable suffering.</h1>
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
          ScalesWiki grew from rescue experience: seeing what happens when keepers are given incomplete, outdated, or conflicting husbandry advice. Our goal is to make reliable education easier to find before an animal pays the price.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["📚", "Prevent problems earlier", "Clear care guides and structured learning help keepers make better decisions before husbandry problems become emergencies."],
            ["🏠", "Support adopters and rescues", "Practical checklists, quarantine education, and species resources can make transitions into new homes safer and more consistent."],
            ["🩺", "Know when education stops", "ScalesWiki teaches husbandry and prevention, while clearly directing illness, injury, diagnosis, and treatment to qualified reptile veterinary care."],
          ].map(([icon, title, body]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-[#102017] p-7">
              <div className="text-4xl">{icon}</div>
              <h2 className="mt-4 text-2xl font-semibold text-green-300">{title}</h2>
              <p className="mt-3 leading-7 text-gray-300">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-green-500/20 bg-gradient-to-br from-[#13231B] to-[#0B1411] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">What rescue changes about the curriculum</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Teach the decisions that matter before intake day.</h2>
          <div className="mt-7 grid gap-5 text-gray-300 md:grid-cols-2">
            <p className="leading-7">Rescue cases often expose the same underlying gaps: incorrect temperatures, poor enclosure planning, unsafe introductions, incomplete quarantine, unsuitable species matching, and owners who never received a clear care routine.</p>
            <p className="leading-7">That is why ScalesWiki puts preventive husbandry, realistic expectations, quarantine, record keeping, and species-appropriate setup at the center of its guides and Academy courses.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8">
        <h2 className="text-4xl font-bold">Support the mission without locking care behind a wall.</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">Founding Membership is being designed to support free educational resources, independent review, and the broader rescue-focused mission while keeping core husbandry information broadly accessible.</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/founders-tree" className="rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-500">Explore the Founders Tree</Link>
          <Link href="/articles" className="rounded-xl border border-green-600 px-7 py-4 font-semibold text-green-300 transition hover:bg-green-950/50">Read Care Articles</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

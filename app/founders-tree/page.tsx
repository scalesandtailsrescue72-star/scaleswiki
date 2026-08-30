import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Founders Tree",
  description: "Join the ScalesWiki Founders Tree and help expand accessible reptile education, independent veterinary review, and rescue-focused resources.",
  alternates: { canonical: "/founders-tree" },
};

const tiers = [
  {
    icon: "🌱",
    name: "Seed",
    subtitle: "Plant the first root.",
    benefits: ["Your name on the Founders Tree", "Early access to new care guides", "Members-only mission updates"],
  },
  {
    icon: "🌿",
    name: "Branch",
    subtitle: "Grow with the Academy.",
    benefits: ["Everything in Seed", "Full Academy access when membership launches", "Complete printable library", "Founding Member badge on your profile"],
  },
  {
    icon: "🌳",
    name: "Canopy",
    subtitle: "Help shade the whole tree.",
    benefits: ["Everything in Branch", "Annual rescue impact report", "Name in the Canopy thank-you", "Founding Member certificate"],
  },
];

export default function FoundersTreePage() {
  return (
    <main className="min-h-screen bg-[#08120D] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">🌳 The Founders Tree</p>
        <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">Every great tree begins with a single seed.</h1>
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
          ScalesWiki was planted to make reliable reptile husbandry education accessible to everyone. Founding Members are the people helping us grow free guides, independent veterinary review, Academy resources, and rescue-focused education from the beginning.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/auth/register" className="rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold transition hover:bg-green-500">Become a Founding Member</Link>
          <a href="#what-you-fund" className="rounded-xl border border-green-600 px-8 py-4 text-lg font-semibold text-green-300 transition hover:bg-green-950/50">See what you help fund ↓</a>
        </div>
      </section>

      <section id="what-you-fund" className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["📚", "Accessible care guides", "Help us keep core husbandry education easy to reach for reptile keepers everywhere."],
            ["🩺", "Independent review", "Support the work required to build a transparent veterinary-review program and improve content course by course."],
            ["🛟", "Rescue-focused education", "Help keep rescue experience central to our resources, adopter education, and welfare mission."],
          ].map(([icon, title, body]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-[#102017] p-7">
              <div className="text-4xl">{icon}</div>
              <h2 className="mt-4 text-2xl font-semibold text-green-300">{title}</h2>
              <p className="mt-3 leading-7 text-gray-300">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8">
        <h2 className="text-4xl font-bold">Why “Founding” matters</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          A resource like ScalesWiki is built by the first people who believe in it. Founding Member recognition is reserved for supporters who were here while the library, Academy, community, and review network were still taking root.
        </p>
        <p className="mt-7 text-xl font-medium text-green-300">Every supporter adds a new leaf. Every partnership grows another branch.</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article key={tier.name} className="rounded-3xl border border-white/10 bg-[#101B15] p-8">
              <div className="text-4xl">{tier.icon}</div>
              <p className="mt-4 text-sm uppercase tracking-[0.22em] text-green-400">Founding tier</p>
              <h2 className="mt-2 text-3xl font-bold">{tier.name}</h2>
              <p className="mt-2 text-gray-400">{tier.subtitle}</p>
              <p className="mt-6 rounded-lg border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">Launch pricing will be announced before paid membership opens.</p>
              <ul className="mt-6 space-y-3 text-left text-gray-300">
                {tier.benefits.map((benefit) => <li key={benefit}>✓ {benefit}</li>)}
              </ul>
              <Link href="/auth/register" className="mt-8 inline-flex w-full justify-center rounded-xl bg-green-600 px-6 py-3 font-semibold transition hover:bg-green-500">Create your ScalesWiki account</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <h2 className="text-center text-4xl font-bold">Founding Member FAQ</h2>
        <div className="mt-10 space-y-5">
          {[
            ["What does my membership support?", "The goal is to help ScalesWiki expand accessible care guides, pursue independent veterinary review, grow educational resources, and strengthen its rescue-focused mission. Exact allocations will be communicated transparently as membership launches."],
            ["Is this the same as being a community contributor?", "No. Founding Member recognizes financial support. Founding Contributor will recognize people who help improve ScalesWiki through useful feedback, discussion, review, or community participation. Someone can be one, the other, or both."],
            ["Are the care guides going behind a paywall?", "Our core mission is to keep essential husbandry education broadly accessible. Membership is intended to support and expand that mission, not replace it."],
            ["Can I join before paid tiers launch?", "Yes. Create a ScalesWiki account now and we can notify you when Founding Membership opens."],
          ].map(([question, answer]) => (
            <div key={question} className="rounded-2xl border border-white/10 bg-[#102017] p-6">
              <h3 className="text-xl font-semibold text-green-300">{question}</h3>
              <p className="mt-3 leading-7 text-gray-300">{answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
        <h2 className="text-4xl font-bold">Be part of the origin story.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">Create your account now and be ready when Founding Membership opens.</p>
        <Link href="/auth/register" className="mt-8 inline-flex rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold transition hover:bg-green-500">Join ScalesWiki</Link>
      </section>

      <Footer />
    </main>
  );
}

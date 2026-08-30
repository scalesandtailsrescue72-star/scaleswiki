import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Founding Rescue Partners",
  description: "Join ScalesWiki free as a Founding Rescue Partner and help shape practical reptile education for adopters, keepers, and rescue communities.",
  alternates: { canonical: "/community/rescue-partners" },
};

const benefits = [
  ["Shape adopter resources", "Tell us which care sheets, checklists, and lessons would make the greatest difference after adoption."],
  ["Vote on what comes next", "Help prioritize upcoming species guides and practical Academy resources."],
  ["Learn and test for free", "Explore ScalesWiki, track Academy progress, and give honest feedback from a rescue perspective."],
  ["Optional future Spotlight", "Interested partners may be considered for a future Rescue Spotlight, always with permission before anything is published."],
];

const expectations = [
  "Create one free ScalesWiki community account for your organization or representative.",
  "Explore the current resources when your schedule allows.",
  "Share practical feedback about what reptile adopters need most.",
  "Choose separately whether you want to participate in any future public Spotlight.",
];

export default function RescuePartnersPage() {
  return (
    <main className="min-h-screen bg-[#08120D] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-green-400">Founding Rescue Partners</p>
          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">Help us build better education for reptile adopters.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
            ScalesWiki is inviting a small group of reptile rescues and sanctuaries to help shape practical, evidence-informed resources around the needs they see every day.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/auth/register?role=rescue" className="rounded-xl bg-green-600 px-8 py-4 text-center text-lg font-semibold transition hover:bg-green-500">
              Join Free as a Rescue Partner
            </Link>
            <a href="mailto:partners@scaleswiki.org" className="rounded-xl border border-green-600 px-8 py-4 text-center text-lg font-semibold text-green-300 transition hover:bg-green-950/50">
              Ask a Question
            </a>
          </div>
          <p className="mt-5 text-sm text-gray-400">No donation, endorsement, content contribution, or public profile is required.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map(([title, description]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-[#102017] p-7">
              <h2 className="text-2xl font-semibold text-green-300">{title}</h2>
              <p className="mt-3 leading-7 text-gray-300">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-green-500/20 bg-gradient-to-br from-[#13231B] to-[#0B1411] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">A lightweight collaboration</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What we ask from founding partners</h2>
          <ul className="mt-7 space-y-4 text-gray-300">
            {expectations.map((expectation) => (
              <li key={expectation} className="rounded-xl bg-black/20 p-4">✓ {expectation}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-amber-400/20 bg-amber-500/10 p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-amber-100">Built on consent and transparency</h2>
          <p className="mt-5 leading-7 text-amber-50/80">
            Joining does not imply that your organization endorses ScalesWiki, has medically reviewed its content, or has entered a sponsorship. Your role and preferences remain private unless you explicitly approve a future public collaboration.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
        <h2 className="text-4xl font-bold">Bring the rescue perspective into ScalesWiki.</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
          Create a free account, choose “Rescue or adoption organization,” and tell us which resources would best support the animals and adopters you serve.
        </p>
        <Link href="/auth/register?role=rescue" className="mt-8 inline-flex rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold transition hover:bg-green-500">
          Become a Founding Rescue Partner
        </Link>
      </section>

      <Footer />
    </main>
  );
}

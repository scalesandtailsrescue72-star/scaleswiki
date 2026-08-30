import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Founding Veterinary Reviewers",
  description: "Learn about joining ScalesWiki as a Founding Veterinary Reviewer, including review scope, time commitments, attribution choices, and editorial boundaries.",
  alternates: { canonical: "/veterinary-review/founding-reviewers" },
};

const initialSteps = [
  ["1", "Brief fit check", "Spend about 15–20 minutes viewing the program, current Ball Python materials, and review standards."],
  ["2", "Choose a manageable scope", "Review one lesson, resource, claim set, or clearly defined section—not an entire course unless you explicitly choose to."],
  ["3", "Send practical feedback", "Flag accuracy, safety, terminology, welfare, sourcing, or wording concerns through email or the structured feedback form."],
];

const boundaries = [
  "No blanket endorsement of ScalesWiki, its platform, or future content.",
  "No recurring commitment, meeting requirement, promotion, donation, or patient referral obligation.",
  "No use of your name, credentials, practice, or comments publicly without explicit approval.",
  "Each review request states the material, purpose, and estimated time before you accept it.",
  "You may decline, pause, or stop participating at any time.",
];

export default function FoundingVeterinaryReviewersPage() {
  return (
    <main className="min-h-screen bg-[#08120D] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-green-400">Founding Veterinary Reviewers</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl">Help strengthen reptile education without taking on an open-ended obligation.</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
          ScalesWiki is building a small, independent network of qualified veterinary professionals who can review clearly scoped educational materials for accuracy, safety, clarity, and animal-welfare implications.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/auth/register?role=veterinary" className="rounded-xl bg-green-600 px-8 py-4 text-center text-lg font-semibold transition hover:bg-green-500">
            Join as a Veterinary Professional
          </Link>
          <a href="mailto:partners@scaleswiki.org" className="rounded-xl border border-green-600 px-8 py-4 text-center text-lg font-semibold text-green-300 transition hover:bg-green-950/50">
            Ask About the Program
          </a>
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-6 text-gray-400">
          The founding pilot is currently voluntary. If funded or paid review work becomes available later, compensation and scope will be agreed before any work begins.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">A manageable first step</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What participation looks like</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {initialSteps.map(([step, title, description]) => (
            <article key={step} className="rounded-2xl border border-white/10 bg-[#102017] p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 font-bold">{step}</div>
              <h3 className="mt-5 text-2xl font-semibold text-green-300">{title}</h3>
              <p className="mt-3 leading-7 text-gray-300">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-green-500/20 bg-gradient-to-br from-[#13231B] to-[#0B1411] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">Clear boundaries</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What joining does not mean</h2>
          <ul className="mt-7 space-y-4 text-gray-300">
            {boundaries.map((boundary) => (
              <li key={boundary} className="rounded-xl bg-black/20 p-4">✓ {boundary}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-[#102017] p-7">
            <h2 className="text-2xl font-semibold text-green-300">Review attribution is your choice</h2>
            <p className="mt-4 leading-7 text-gray-300">
              A completed review may be credited by name and credentials, credited to a practice with permission, or recorded privately without public attribution. ScalesWiki confirms your preference before publication.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-[#102017] p-7">
            <h2 className="text-2xl font-semibold text-green-300">Review applies only to the material reviewed</h2>
            <p className="mt-4 leading-7 text-gray-300">
              A review mark applies to a specific version of a specific resource. It does not imply approval of unrelated lessons, future revisions, products, sponsors, or individualized medical advice.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="rounded-2xl border border-amber-400/20 bg-amber-950/20 p-7">
          <h2 className="text-2xl font-semibold text-amber-200">Professional and medical boundary</h2>
          <p className="mt-4 leading-7 text-gray-300">
            ScalesWiki provides general husbandry education and does not establish a veterinarian-client-patient relationship. Reviewers are not responsible for user decisions, diagnoses, treatment, emergencies, or material outside their accepted review scope.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
        <h2 className="text-4xl font-bold">Start with a conversation, not a commitment.</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
          Create a free veterinary-professional account or email us to request the current review scope before deciding whether it fits your expertise and availability.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/auth/register?role=veterinary" className="rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold transition hover:bg-green-500">
            Create a Free Account
          </Link>
          <Link href="/veterinary-review" className="rounded-xl border border-white/15 px-8 py-4 text-lg font-semibold text-gray-200 transition hover:border-green-500/50">
            Read the Review Standards
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

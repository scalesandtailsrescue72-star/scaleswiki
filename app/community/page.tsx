import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Reptile Community",
  description: "Join the free ScalesWiki community for evidence-informed reptile education, rescue-backed resources, Academy learning, and future Community Spotlights.",
  alternates: { canonical: "/community" },
};

const memberTypes = [
  ["🐍", "Reptile Keepers", "Learn, track Academy progress, and help shape practical resources for responsible care."],
  ["🛟", "Rescues", "Share rescue-informed priorities and connect education with the needs seen during intake and adoption."],
  ["🩺", "Veterinary Professionals", "Follow the review program, contribute professional perspective, and discover future collaboration opportunities."],
  ["🏪", "Stores & Educators", "Support better pre-purchase education and help new keepers begin with realistic expectations."],
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#08120D] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-green-400">ScalesWiki Community</p>
        <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">Help build a better home for reptile education.</h1>
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
          Join keepers, rescues, veterinary professionals, educators, and responsible reptile businesses helping ScalesWiki grow practical education from the ground up.
        </p>
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-amber-400/20 bg-amber-500/10 px-6 py-5 text-amber-100">
          <strong>Founding 25:</strong> We are welcoming our first 25 genuine community members to help shape what ScalesWiki builds next.
        </div>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/auth/register" className="rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold transition hover:bg-green-500">Join the Community Free</Link>
          <Link href="/academy" className="rounded-xl border border-green-600 px-8 py-4 text-lg font-semibold text-green-300 transition hover:bg-green-950/50">Explore the Academy</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {memberTypes.map(([icon, title, description]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-[#102017] p-7">
              <div className="text-4xl">{icon}</div>
              <h2 className="mt-4 text-2xl font-semibold text-green-300">{title}</h2>
              <p className="mt-3 leading-7 text-gray-300">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-green-500/20 bg-gradient-to-br from-[#13231B] to-[#0B1411] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">Free founding membership</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What members receive now</h2>
          <ul className="mt-7 grid gap-4 text-gray-300 md:grid-cols-2">
            <li className="rounded-xl bg-black/20 p-4">✓ Academy progress tracking</li>
            <li className="rounded-xl bg-black/20 p-4">✓ Course exams and certificates</li>
            <li className="rounded-xl bg-black/20 p-4">✓ Early community updates</li>
            <li className="rounded-xl bg-black/20 p-4">✓ A voice in future resources and Spotlights</li>
          </ul>
          <p className="mt-7 leading-7 text-gray-400">
            Your selected community role and Spotlight interest are kept as private account preferences. Joining does not publish a public profile or imply veterinary review, endorsement, or accreditation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8">
        <h2 className="text-4xl font-bold">Be one of the first people inside.</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
          The first members will help determine which community tools, educational resources, and recognition programs ScalesWiki develops next.
        </p>
        <Link href="/auth/register" className="mt-8 inline-flex rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold transition hover:bg-green-500">Create Your Free Account</Link>
      </section>

      <Footer />
    </main>
  );
}

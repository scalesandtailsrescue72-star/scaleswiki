import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Veterinary Review Program",
  description: "How ScalesWiki handles veterinary review, source standards, review status, and transparency across guides and Academy lessons.",
};

export default function VeterinaryReviewPage() {
  return (
    <main className="min-h-screen bg-[#08120D] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-green-400">🩺 Veterinary Review Program</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">We mark review honestly — never before it happens.</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
          ScalesWiki builds educational material from veterinary references, published husbandry science, and carefully selected specialist sources. Independent veterinary review is being added progressively, and content is only labeled reviewed when that review is complete.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["1", "Build from sources", "Drafts begin with veterinary references, peer-reviewed literature, and reputable species-specific husbandry sources."],
            ["2", "Independent review", "Qualified reptile veterinary professionals are invited to evaluate husbandry claims, safety, clarity, and areas needing revision."],
            ["3", "Mark the status", "Only content that has completed review receives a veterinary-review mark. Unreviewed content stays clearly identified as evidence-informed, not vet-reviewed."],
          ].map(([step, title, body]) => (
            <article key={step} className="rounded-2xl border border-white/10 bg-[#102017] p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 font-bold">{step}</div>
              <h2 className="mt-5 text-2xl font-semibold text-green-300">{title}</h2>
              <p className="mt-3 leading-7 text-gray-300">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#101B15] p-8 sm:p-10">
          <h2 className="text-3xl font-bold">What a review mark means</h2>
          <div className="mt-6 space-y-4 leading-7 text-gray-300">
            <p>A review mark means a qualified reviewer has evaluated that specific guide, lesson, or resource for veterinary accuracy and identified revisions where needed.</p>
            <p>It does not turn educational content into individual medical advice, diagnosis, or treatment. Illness and injury still belong with a qualified reptile veterinarian who can examine the animal.</p>
            <p>ScalesWiki may update reviewed material as stronger evidence or husbandry standards emerge. Review is a quality-control process, not a claim that knowledge can never change.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">Current status</p>
        <h2 className="mt-3 text-3xl font-bold">The review network is still being built.</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
          Veterinary review is currently rolling out. Until a resource is explicitly marked as reviewed, treat it as evidence-informed ScalesWiki educational content that has not yet completed independent veterinary signoff.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href="/veterinary-review/access" className="rounded-xl bg-green-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-green-500">Veterinary Reviewer Access</Link>
          <Link href="/support" className="rounded-xl border border-green-600 px-6 py-3 text-center font-semibold text-green-300 transition hover:bg-green-950/50">Contact ScalesWiki</Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="rounded-2xl border border-amber-400/20 bg-amber-950/20 p-6 text-sm leading-7 text-gray-300">
          <strong className="text-amber-200">Medical boundary:</strong> ScalesWiki provides husbandry education. If a reptile is ill, injured, losing weight unexpectedly, having trouble breathing, neurologically abnormal, or otherwise concerning, contact a qualified reptile veterinarian. Do not use internet content alone as a treatment plan.
        </div>
      </section>

      <Footer />
    </main>
  );
}

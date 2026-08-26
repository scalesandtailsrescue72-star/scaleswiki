import type { Metadata } from "next";
import Link from "next/link";
import { GuideContents } from "@/app/components/ui/GuideContents";
import { GuideDownloadCard } from "@/app/components/ui/GuideDownloadCard";

import { Hero } from "./components/Hero";
import { PublicationHeader } from "@/app/components/ui/PublicationHeader";
import { PublicationCover } from "@/app/components/ui/PublicationCover";
import { QuickFacts } from "./components/QuickFacts";
import { Introduction } from "./components/Introduction";
import { NaturalHistory } from "./components/NaturalHistory";
import { IsItRightForYou } from "./components/IsItRightForYou";
import { Enclosure } from "./components/Enclosure";
import { EnclosureBlueprint } from "./components/EnclosureBlueprint";
import { Heating } from "./components/Heating";
import { Humidity } from "./components/Humidity";
import { Lighting } from "./components/Lighting";
import { Substrate } from "./components/Substrate";
import { Water } from "./components/Water";
import { Feeding } from "./components/Feeding";
import { Handling } from "./components/Handling";
import { Health } from "./components/Health";
import { CommonMistakes } from "./components/CommonMistakes";
import { FAQ } from "./components/FAQ";
import { References } from "./components/References";

export const metadata: Metadata = {
  title: "Ball Python Care Guide",
  description: "Evidence-informed Ball Python husbandry covering enclosure design, heating, humidity, lighting, feeding, handling, health, supplies, and preventive care.",
  alternates: { canonical: "/species/ball-python" },
  openGraph: {
    type: "article",
    title: "Ball Python Care Guide | ScalesWiki",
    description: "A practical, evidence-informed Ball Python husbandry reference from ScalesWiki.",
    url: "/species/ball-python",
  },
};

export default function BallPythonPage() {
  return (
    <main className="min-h-screen bg-[#08120D] text-white">
      <Hero />
      <PublicationCover />
      <PublicationHeader />
      <GuideDownloadCard />

      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/shop/ball-python-supplies" className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6 transition hover:border-green-400/50 hover:bg-green-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">Build the habitat</p>
            <h2 className="mt-2 text-xl font-semibold">Setup & Supplies</h2>
            <p className="mt-2 text-sm leading-6 text-gray-300">Required and recommended enclosure, heating, monitoring, feeding, cleaning, and quarantine supplies.</p>
            <p className="mt-4 font-semibold text-green-300">View checklist →</p>
          </Link>

          <Link href="/academy/ball-python" className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6 transition hover:border-green-400/50 hover:bg-green-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">Learn step by step</p>
            <h2 className="mt-2 text-xl font-semibold">Ball Python 101</h2>
            <p className="mt-2 text-sm leading-6 text-gray-300">Turn the guide into structured lessons, practical examples, quizzes, progress tracking, and a course certificate.</p>
            <p className="mt-4 font-semibold text-green-300">Start Academy course →</p>
          </Link>

          <Link href="/articles/quarantine-for-new-reptiles" className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6 transition hover:border-green-400/50 hover:bg-green-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">Before arrival</p>
            <h2 className="mt-2 text-xl font-semibold">Quarantine Guide</h2>
            <p className="mt-2 text-sm leading-6 text-gray-300">Learn how separation, dedicated equipment, observation, and veterinary testing protect new and established reptiles.</p>
            <p className="mt-4 font-semibold text-green-300">Read quarantine article →</p>
          </Link>
        </div>
      </section>

      <QuickFacts />
      <GuideContents
        title="Ball Python Guide"
        sections={[
          { id: "introduction", title: "Introduction" },
          { id: "natural-history", title: "Natural History" },
          { id: "is-it-right-for-you", title: "Is It Right For You?" },
          { id: "enclosure", title: "Enclosure" },
          { id: "heating", title: "Heating" },
          { id: "humidity", title: "Humidity" },
          { id: "lighting", title: "Lighting" },
          { id: "substrate", title: "Substrate" },
          { id: "water", title: "Water" },
          { id: "feeding", title: "Feeding" },
          { id: "handling", title: "Handling" },
          { id: "health", title: "Health" },
          { id: "common-mistakes", title: "Common Mistakes" },
          { id: "faq", title: "FAQ" },
          { id: "references", title: "References" },
        ]}
      />
      <Introduction />
      <NaturalHistory />
      <IsItRightForYou />
      <Enclosure />
      <EnclosureBlueprint />
      <Heating />
      <Humidity />
      <Lighting />
      <Substrate />
      <Water />
      <Feeding />
      <Handling />
      <Health />
      <CommonMistakes />
      <FAQ />
      <References />
    </main>
  );
}

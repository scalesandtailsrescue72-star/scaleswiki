import { GuideContents } from "@/app/components/ui/GuideContents";

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

export default function BallPythonPage() {
  return (
    <main className="min-h-screen bg-[#08120D] text-white">

      <Hero />

      <PublicationCover />

      <PublicationHeader />

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
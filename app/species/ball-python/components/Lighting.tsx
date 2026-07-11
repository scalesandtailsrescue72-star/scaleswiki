import { Hero } from "./components/Hero";
import { QuickFacts } from "./components/QuickFacts";
import { Introduction } from "./components/Introduction";
import { NaturalHistory } from "./components/NaturalHistory";
import { IsItRightForYou } from "./components/IsItRightForYou";
import { Enclosure } from "./components/Enclosure";
import { EnclosureBlueprint } from "./components/EnclosureBlueprint";
import { Heating } from "./components/Heating";
import { Humidity } from "./components/Humidity";
import { Lighting } from "./components/Lighting";

export default function BallPythonPage() {
  return (
    <main className="min-h-screen bg-[#08120D] text-white">

      <Hero />

      <QuickFacts />

      <Introduction />

      <NaturalHistory />

      <IsItRightForYou />

      <Enclosure />

      <EnclosureBlueprint />

      <Heating />

      <Humidity />

      <Lighting />

    </main>
  );
}
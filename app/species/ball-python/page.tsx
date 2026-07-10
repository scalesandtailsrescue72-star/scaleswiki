import { Hero } from "./components/Hero";
import { QuickFacts } from "./components/QuickFacts";
import { Introduction } from "./components/Introduction";

export default function BallPythonPage() {
  return (
    <main className="min-h-screen bg-[#08120D] text-white">
      <Hero />

      <QuickFacts />

      <Introduction />
    </main>
  );
}
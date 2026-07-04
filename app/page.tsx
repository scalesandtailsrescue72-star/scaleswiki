import { Academy } from "../components/Academy";
import { Footer } from "../components/Footer";
import { GuideCards } from "../components/GuideCards";
import Hero from "@/components/Hero";
import { Navbar } from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { Rescue } from "../components/Rescue";
import { SpeciesGrid } from "../components/SpeciesGrid";
import { TrustBar } from "../components/TrustBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1411] text-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <SpeciesGrid />
      <GuideCards />
      <Academy />
      <Rescue />
      <Newsletter />
      <Footer />
    </main>
  );
}

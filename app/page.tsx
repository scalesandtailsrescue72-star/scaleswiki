import { Academy } from "@/app/components/Academy";
import { Footer } from "@/app/components/Footer";
import { FoundersTreePreview } from "@/app/components/FoundersTreePreview";
import { GuideCards } from "@/components/GuideCards";
import { Hero } from "@/app/components/Hero";
import { Navbar } from "@/app/components/Navbar";
import { Newsletter } from "@/components/Newsletter";
import { Rescue } from "@/app/components/Rescue";
import { SpeciesGrid } from "@/app/components/SpeciesGrid";
import { TrustBar } from "@/components/TrustBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1411] text-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <SpeciesGrid />
      <GuideCards />
      <Academy />
      <FoundersTreePreview />
      <Rescue />
      <Newsletter />
      <Footer />
    </main>
  );
}
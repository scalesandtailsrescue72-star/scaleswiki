import type { Metadata } from "next";
import { Academy } from "@/app/components/Academy";
import { GuideCards } from "@/app/components/GuideCards";
import { Hero } from "@/app/components/Hero";
import { Navbar } from "@/app/components/Navbar";
import { SpeciesGrid } from "@/app/components/SpeciesGrid";
import { TrustBar } from "@/app/components/TrustBar";
import { FoundersTreePreview } from "@/app/components/FoundersTreePreview";
import { SupportMission } from "@/app/components/SupportMission";
import { Rescue } from "@/app/components/Rescue";
import { Newsletter } from "@/app/components/Newsletter";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

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
<SupportMission />
<Rescue />
<Newsletter />
<Footer />
    </main>
  );
}
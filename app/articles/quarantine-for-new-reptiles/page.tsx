import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Quarantine for New Reptiles",
  description: "A practical, evidence-informed guide to reptile quarantine, biosecurity, observation, veterinary screening, and safer collection management.",
  alternates: { canonical: "/articles/quarantine-for-new-reptiles" },
  openGraph: {
    type: "article",
    url: "/articles/quarantine-for-new-reptiles",
    title: "Quarantine: The Habit That Protects Every Reptile You'll Ever Keep",
    description: "A practical, evidence-informed guide to reptile quarantine, biosecurity, observation, veterinary screening, and safer collection management.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quarantine for New Reptiles",
    description: "Evidence-informed reptile quarantine and biosecurity guidance from ScalesWiki.",
  },
};

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-28 border-t border-white/10 pt-10">
    <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
    <div className="mt-5 space-y-5 text-[17px] leading-8 text-gray-300">{children}</div>
  </section>
);

const sourceClass = "font-semibold text-green-300 underline decoration-green-500/40 underline-offset-4 hover:text-green-200";

export default function QuarantineArticle() {
  return (
    <main className="min-h-screen bg-[#0B1411] text-white">
      <Navbar />
      <article className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
        <Link href="/articles" className="text-sm font-semibold text-green-400 hover:text-green-300">← All Articles</Link>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">Biosecurity • Preventive Care</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Quarantine: The Habit That Protects Every Reptile You’ll Ever Keep</h1>
        <p className="mt-6 text-xl leading-8 text-gray-300">New reptiles bring more than a new enclosure and a hopeful keeper. They can also bring mites, parasites, bacteria, and viruses from previous environments. Quarantine creates time and distance to identify problems before they reach other animals.</p>

        <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-950/30 p-6">
          <p className="font-semibold text-green-300">The practical standard</p>
          <p className="mt-2 leading-7 text-gray-200">Quarantine recommendations vary with species, source, collection risk, and veterinary guidance. The Association of Reptile and Amphibian Veterinarians has recommended a minimum of 60 days in most cases; 90 days is commonly used as a more conservative standard. A reptile-experienced veterinarian may recommend longer isolation or additional testing based on individual risk.</p>
        </div>

        <nav className="my-10 rounded-2xl border border-white/10 bg-[#111D17] p-6">
          <p className="font-bold">In this article</p>
          <div className="mt-4 grid gap-2 text-green-300 sm:grid-cols-2">
            <a href="#what-it-is">What quarantine actually is</a><a href="#risks">What you are guarding against</a><a href="#routine">Daily quarantine routine</a><a href="#ending">When quarantine ends</a><a href="#rescue">A note from rescue work</a><a href="#takeaways">Practical takeaways</a>
          </div>
        </nav>

        <div className="space-y-12">
          <Section id="what-it-is" title="What quarantine actually is">
            <p>Quarantine means housing a new arrival separately from established animals for a defined observation period. A separate room provides a stronger biosecurity barrier and reduces opportunities for direct, equipment-mediated, and environmental cross-contamination.</p>
            <ul className="list-disc space-y-3 pl-6"><li><strong className="text-white">Separate room:</strong> not merely another enclosure beside established reptiles.</li><li><strong className="text-white">Separate equipment:</strong> dedicated tongs, bowls, cleaning tools, décor, and other supplies.</li><li><strong className="text-white">Separate care order:</strong> care for established animals first and quarantined or sick animals afterward, with appropriate hand hygiene and cleaning between groups.</li></ul>
            <p>A quarantine enclosure should prioritize easy observation, sanitation, species-appropriate security, and correct environmental conditions. Disposable or easily cleaned substrate and minimal, cleanable furnishings can make parasites, abnormal stools, and other changes easier to detect.</p>
          </Section>

          <Section id="risks" title="What you are really guarding against">
            <p>Some infectious and parasitic problems may be difficult to recognize early, and apparently healthy reptiles can still warrant careful screening. Quarantine reduces risk; it does not guarantee that every disease will be detected.</p>
            <div className="space-y-5"><div><h3 className="font-bold text-white">Snake mites</h3><p>Snake mites (<em>Ophionyssus natricis</em>) can reproduce rapidly and spread through captive environments. Published estimates place their life cycle roughly in the one-to-three-week range depending on conditions, and low-level infestations can be easy to miss.</p></div><div><h3 className="font-bold text-white">Cryptosporidium</h3><p><em>Cryptosporidium</em> species are an important concern in reptile collections. Some infections may be subclinical, while <em>Cryptosporidium serpentis</em> can cause serious chronic gastrointestinal disease in snakes. Environmental persistence and resistance to many routine disinfection approaches can make control difficult.</p></div><div><h3 className="font-bold text-white">Serpentoviruses (reptile nidoviruses)</h3><p>Serpentoviruses are significant pathogens in captive snakes, particularly pythons, and have been associated with severe respiratory disease and rapid spread through collections. Prevention, separation, testing when indicated, and veterinary guidance are therefore important components of collection biosecurity.</p></div></div>
          </Section>

          <Section id="routine" title="The daily quarantine routine">
            <ol className="list-decimal space-y-4 pl-6"><li><strong className="text-white">Observe consistently.</strong> Track appetite, stool, shedding, breathing, activity, and body weight. A digital scale and written log turn impressions into useful trends.</li><li><strong className="text-white">Care for established animals first.</strong> Quarantined animals come afterward to reduce cross-contamination.</li><li><strong className="text-white">Keep the enclosure clean and observable.</strong> Use easy-to-change substrate and furnishings that can be appropriately cleaned or replaced.</li><li><strong className="text-white">Practice hand and equipment hygiene.</strong> Dedicated supplies and careful cleaning are core biosecurity barriers.</li><li><strong className="text-white">Arrange veterinary evaluation.</strong> A reptile-experienced veterinarian can determine whether fecal testing or pathogen-specific screening is appropriate based on species, source, history, and examination findings.</li></ol>
          </Section>

          <Section id="ending" title="When quarantine ends">
            <p>Do not release an animal from quarantine simply because a calendar date arrives. Consider the completed observation period together with the animal’s appetite, stools, weight, behavior, examination findings, and any testing recommended by your veterinarian.</p>
            <p>If illness is detected, keep the animal isolated and work with your veterinarian to determine treatment, additional testing, and whether the quarantine period should restart or be extended. Adding another reptile to the same quarantine area can also change the risk picture and may require the timeline to be reconsidered.</p>
          </Section>

          <Section id="rescue" title="A note from the rescue world">
            <p>In rescue work, quarantine is a basic intake safeguard because animals often arrive with incomplete histories and unknown exposures. Bringing that same discipline into a private collection is a practical, low-cost way to protect both a new arrival and the reptiles already in your care.</p>
          </Section>

          <Section id="takeaways" title="Practical takeaways">
            <ul className="list-disc space-y-3 pl-6"><li>Use a dedicated quarantine area, ideally a separate room, with dedicated tools and supplies.</li><li>Plan for at least 60 days in most cases; 90 days is a commonly used conservative standard, with longer periods possible when risk warrants.</li><li>Maintain correct species-specific husbandry while keeping the setup easy to observe and clean.</li><li>Log appetite, weight, stool, shedding, breathing, and behavior.</li><li>Arrange an examination with a reptile-experienced veterinarian and follow individualized testing recommendations.</li><li>Do not rush release from quarantine when illness or abnormal findings occur.</li></ul>
          </Section>
        </div>

        <div className="mt-12 rounded-2xl border border-amber-400/20 bg-amber-950/20 p-6 text-sm leading-7 text-gray-300"><strong className="text-amber-200">Health note:</strong> This article is educational and is not a diagnosis or treatment plan. If a reptile shows signs of illness, contact a qualified reptile veterinarian. Do not attempt to treat illness based only on internet guidance.</div>

        <section className="mt-12 border-t border-white/10 pt-10">
          <h2 className="text-2xl font-bold">Sources & further reading</h2>
          <p className="mt-3 text-sm leading-6 text-gray-400">ScalesWiki prioritizes veterinary guidance and peer-reviewed literature. Links below open the underlying sources.</p>
          <ul className="mt-6 space-y-5 text-sm leading-6 text-gray-300">
            <li><a className={sourceClass} href="https://arav.org/wp-content/uploads/2024/02/ARAV-COVID19-with-Reptiles-and-Amphibians-1.pdf" target="_blank" rel="noreferrer">Association of Reptile and Amphibian Veterinarians (ARAV): Caring for Captive Reptiles and Amphibians</a><br />Includes separate-room quarantine, a minimum of 60 days in most cases, separate supplies, and caring for established animals before quarantined animals.</li>
            <li><a className={sourceClass} href="https://assets.ctfassets.net/rt5zmd3ipxai/1SouVQYaqsgZylRnCHnXNO/69e75fd271f8368f9d6029e0c389676f/Reptile_Quarantine_Aurora_Animal_Hospital.pdf" target="_blank" rel="noreferrer">Dayna Willems, DVM: Quarantine of New Reptiles — Aurora Animal Hospital</a><br />Discusses a 90-day zoo standard, dedicated equipment, simple quarantine setups, weight monitoring, fecal testing, and veterinary screening.</li>
            <li><a className={sourceClass} href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4345101/" target="_blank" rel="noreferrer">Human Dermatitis Caused by Ophionyssus natricis, a Snake Mite</a><br />Peer-reviewed literature describing the snake mite life cycle, including a 13–19 day estimate.</li>
            <li><a className={sourceClass} href="https://www.frontiersin.org/journals/veterinary-science/articles/10.3389/fvets.2021.733404/full" target="_blank" rel="noreferrer">Parrish K, Kirkland PD, Skerratt LF, Ariel E. Nidoviruses in Reptiles: A Review</a><br />Frontiers in Veterinary Science. 2021;8:733404. Reviews serpentovirus disease, diagnosis, management, and spread in captive reptile populations.</li>
            <li><a className={sourceClass} href="https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/parasitic-diseases-of-reptiles" target="_blank" rel="noreferrer">Merck Veterinary Manual: Parasitic Diseases of Reptiles</a><br />Veterinary reference covering reptile parasites, screening, diagnosis, and collection-level parasite management.</li>
          </ul>
        </section>

        <div className="mt-12 rounded-3xl bg-green-900/30 p-8 text-center"><h2 className="text-2xl font-bold">Build better husbandry from the ground up.</h2><p className="mx-auto mt-3 max-w-2xl text-gray-300">Continue with structured ScalesWiki lessons and practical reptile-care education.</p><Link href="/academy" className="mt-6 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500">Start Learning →</Link></div>
      </article>
      <Footer />
    </main>
  );
}

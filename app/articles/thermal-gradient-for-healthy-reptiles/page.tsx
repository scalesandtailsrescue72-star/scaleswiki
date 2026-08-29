import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Thermal Gradients for Reptiles",
  description:
    "An evidence-informed guide to reptile thermal gradients, behavioral thermoregulation, thermostat use, temperature measurement, and enclosure setup.",
  alternates: { canonical: "/articles/thermal-gradient-for-healthy-reptiles" },
  openGraph: {
    type: "article",
    url: "/articles/thermal-gradient-for-healthy-reptiles",
    title: "The Thermal Gradient: Why One Temperature Is Never Enough for Your Reptile",
    description:
      "Practical, evidence-informed guidance for building and measuring a safer reptile thermal gradient.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thermal Gradients for Reptiles",
    description:
      "Evidence-informed reptile heating and thermoregulation guidance from ScalesWiki.",
  },
};

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-28 border-t border-white/10 pt-10">
    <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
    <div className="mt-5 space-y-5 text-[17px] leading-8 text-gray-300">{children}</div>
  </section>
);

const sourceClass =
  "font-semibold text-green-300 underline decoration-green-500/40 underline-offset-4 hover:text-green-200";

export default function ThermalGradientArticle() {
  return (
    <main className="min-h-screen bg-[#0B1411] text-white">
      <Navbar />

      <article className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
        <Link href="/articles" className="text-sm font-semibold text-green-400 hover:text-green-300">
          ← All Articles
        </Link>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
          Heating & Husbandry
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          The Thermal Gradient: Why One Temperature Is Never Enough for Your Reptile
        </h1>
        <p className="mt-6 text-xl leading-8 text-gray-300">
          Reptiles rely on environmental heat and behavior to regulate body temperature. A well-designed enclosure therefore needs more than one “correct” reading: it needs a usable range that lets the animal move between warmer and cooler areas as its needs change.
        </p>

        <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-950/30 p-6">
          <p className="font-semibold text-green-300">The practical standard</p>
          <p className="mt-2 leading-7 text-gray-200">
            Place the primary heat source toward one end of the enclosure, regulate appropriate heat sources with a thermostat, and measure temperatures where the animal actually spends time. Species-specific targets matter; use a current care guide rather than applying one set of numbers to every reptile.
          </p>
        </div>

        <nav className="my-10 rounded-2xl border border-white/10 bg-[#111D17] p-6">
          <p className="font-bold">In this article</p>
          <div className="mt-4 grid gap-2 text-green-300 sm:grid-cols-2">
            <a href="#why-it-matters">Why temperature matters</a>
            <a href="#what-gradient-is">What a thermal gradient is</a>
            <a href="#building">Building a usable gradient</a>
            <a href="#measuring">Measuring it correctly</a>
            <a href="#mistakes">Common mistakes</a>
            <a href="#takeaways">Practical takeaways</a>
          </div>
        </nav>

        <div className="space-y-12">
          <Section id="why-it-matters" title="Why temperature matters">
            <p>
              Reptiles are ectothermic. Instead of maintaining a nearly constant internal temperature the way mammals and birds do, they depend heavily on environmental conditions and behavior to reach body temperatures appropriate for different activities.
            </p>
            <p>
              Veterinary references describe a species-specific preferred optimal temperature zone, or POTZ. This is not a single magic number. Preferred body temperature can vary with time of day, season, age, sex, feeding, activity, and other biological needs. The enclosure therefore has to provide choices rather than forcing the animal to remain at one temperature.
            </p>
            <p>
              Appropriate temperature is one of several major husbandry variables that influence feeding, digestion, activity, and overall health. Humidity, lighting, nutrition, enclosure design, stress, and other factors remain important too.
            </p>
          </Section>

          <Section id="what-gradient-is" title="What a thermal gradient actually is">
            <p>
              A thermal gradient is a range of temperatures across an enclosure, usually progressing from a warmer end toward a cooler end. In species that bask, the setup may also include a warmer basking surface within that broader range.
            </p>
            <p>
              The goal is behavioral thermoregulation: the animal can choose a warmer location when it needs to increase body temperature and move away when it needs to cool down. Depending on the species, useful microclimates may include warm and cool hides, elevated basking areas, shaded retreats, or differences in temperature at different heights.
            </p>
            <p>
              A single hot object in an otherwise uniform enclosure is not the same thing as a functional gradient. The animal needs enough space and environmental variation to choose between meaningfully different thermal zones.
            </p>
          </Section>

          <Section id="building" title="Building a gradient that works">
            <ol className="list-decimal space-y-4 pl-6">
              <li>
                <strong className="text-white">Put heat toward one end.</strong> Position the primary heat source so one side can warm while the opposite side remains cooler. Merck Veterinary Manual specifically recommends positioning heaters toward one end to create a thermal gradient.
              </li>
              <li>
                <strong className="text-white">Use species-specific targets.</strong> Temperature requirements differ substantially among reptiles. Instead of memorizing one universal range, verify the current husbandry guidance for the species you keep.
              </li>
              <li>
                <strong className="text-white">Provide enough enclosure space.</strong> If the whole enclosure becomes the warm zone, the animal has no meaningful opportunity to move away from heat.
              </li>
              <li>
                <strong className="text-white">Regulate heat safely.</strong> Appropriate heat sources should be controlled and installed so the animal cannot contact dangerously hot equipment. Thermostat setup and probe placement must match the type of heater and enclosure design.
              </li>
            </ol>
          </Section>

          <Section id="measuring" title="Measure the environment the animal actually experiences">
            <p>
              One thermometer in the middle of an enclosure cannot describe the whole thermal environment. Record temperatures at the warm area and cool area, and measure a basking surface separately when the species uses one.
            </p>
            <ul className="list-disc space-y-3 pl-6">
              <li><strong className="text-white">Digital probe thermometers:</strong> useful for monitoring air temperatures at relevant locations.</li>
              <li><strong className="text-white">Infrared thermometer:</strong> useful for spot-checking surface temperatures such as a basking area.</li>
              <li><strong className="text-white">Thermostat:</strong> regulates compatible heat sources; it is not a substitute for independently checking temperatures.</li>
            </ul>
            <p>
              Placement matters. Measure at the height and location where the reptile actually rests, hides, climbs, or basks rather than relying on a reading from an unrelated part of the enclosure.
            </p>
          </Section>

          <Section id="mistakes" title="Common mistakes that undermine a thermal gradient">
            <ul className="list-disc space-y-3 pl-6">
              <li><strong className="text-white">Treating one number as the whole enclosure.</strong> A single reading cannot show whether the animal has both warmer and cooler options.</li>
              <li><strong className="text-white">Heating the center.</strong> Central placement can make it harder to preserve a clearly cooler retreat.</li>
              <li><strong className="text-white">Using unregulated heat.</strong> Heat equipment can overheat or create dangerous surfaces when it is not appropriately controlled and monitored.</li>
              <li><strong className="text-white">Using an enclosure too small to hold a gradient.</strong> Physical space is part of thermal choice.</li>
              <li><strong className="text-white">Judging temperature by touch.</strong> Human perception is not a reliable substitute for measured air and surface temperatures.</li>
              <li><strong className="text-white">Assuming daytime and nighttime needs are identical.</strong> Some species experience or benefit from nighttime temperature changes, while others require different management. Follow species-specific guidance.</li>
            </ul>
          </Section>

          <Section id="takeaways" title="Practical takeaways">
            <ul className="list-disc space-y-3 pl-6">
              <li>Build a range of temperatures rather than chasing one enclosure-wide number.</li>
              <li>Place the main heat source toward one end so a cooler retreat remains available.</li>
              <li>Use species-specific husbandry targets for warm, cool, and basking zones.</li>
              <li>Measure relevant air and surface temperatures with appropriate tools.</li>
              <li>Use thermostatic control where appropriate and verify that temperatures remain safe.</li>
              <li>Re-check the gradient after room-temperature changes, equipment changes, seasonal shifts, or enclosure modifications.</li>
            </ul>
            <p>
              Temperature is one of the most important environmental variables in reptile husbandry, but it works together with lighting, humidity, nutrition, enclosure design, and stress reduction. Good care means giving the animal a safe environment in which it can make meaningful choices.
            </p>
          </Section>
        </div>

        <div className="mt-12 rounded-2xl border border-amber-400/20 bg-amber-950/20 p-6 text-sm leading-7 text-gray-300">
          <strong className="text-amber-200">Health note:</strong> This article is educational and is not a diagnosis or treatment plan. If a reptile shows signs of illness, overheating, burns, persistent appetite changes, or abnormal behavior, contact a qualified reptile veterinarian. Do not attempt to treat illness based only on internet guidance.
        </div>

        <section className="mt-12 border-t border-white/10 pt-10">
          <h2 className="text-2xl font-bold">Sources & further reading</h2>
          <p className="mt-3 text-sm leading-6 text-gray-400">
            ScalesWiki prioritizes veterinary references and peer-reviewed literature. These sources support the thermoregulation and husbandry principles discussed above.
          </p>
          <ul className="mt-6 space-y-5 text-sm leading-6 text-gray-300">
            <li>
              <a className={sourceClass} href="https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/management-and-husbandry-of-reptiles" target="_blank" rel="noreferrer">
                Merck Veterinary Manual: Management and Husbandry of Reptiles
              </a>
              <br />Veterinary guidance on reptile heating, thermostat control, heat-source placement, POTZ, and thermal gradients.
            </li>
            <li>
              <a className={sourceClass} href="https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/overview-of-reptiles" target="_blank" rel="noreferrer">
                Merck Veterinary Manual: Overview of Reptiles
              </a>
              <br />Explains reptile ectothermy, environmental temperature dependence, and species-specific preferred optimal temperature zones.
            </li>
            <li>
              <a className={sourceClass} href="https://www.merckvetmanual.com/management-and-nutrition/nutrition-exotic-and-zoo-animals/nutrition-in-reptiles" target="_blank" rel="noreferrer">
                Merck Veterinary Manual: Nutrition in Reptiles
              </a>
              <br />Discusses how husbandry variables influence feeding and notes the value of temperature and humidity gradients that allow reptiles to select among microclimates.
            </li>
            <li>
              <a className={sourceClass} href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11105118/" target="_blank" rel="noreferrer">
                Cutler B, Haesemeyer M. Vertebrate behavioral thermoregulation: knowledge and future directions
              </a>
              <br />Peer-reviewed review of the mechanisms and behavioral basis of thermoregulation.
            </li>
            <li>
              <a className={sourceClass} href="https://pubmed.ncbi.nlm.nih.gov/25766667/" target="_blank" rel="noreferrer">
                Reptile wellness management
              </a>
              <br />Veterinary review emphasizing the role of enclosure, lighting, temperature, humidity, nutrition, and other husbandry factors in captive reptile health.
            </li>
          </ul>
        </section>

        <div className="mt-12 rounded-3xl bg-green-900/30 p-8 text-center">
          <h2 className="text-2xl font-bold">Turn the principle into species-specific care.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-300">
            Use the ScalesWiki species guides for current setup targets, then continue into the Academy for structured lessons. Veterinary review status is marked transparently where completed.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/species" className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500">
              Explore Species Guides →
            </Link>
            <Link href="/academy" className="rounded-xl border border-green-600 px-6 py-3 font-semibold text-green-300 transition hover:bg-green-950/50">
              Enter Academy
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

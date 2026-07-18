import Image from "next/image";
import { Callout } from "@/app/components/ui/Callout";

export function EnclosureBlueprint() {
  return (
    <section
      id="enclosure-blueprint"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
    >
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
          Habitat Illustration
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Ball Python Enclosure Blueprint
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          This technical blueprint demonstrates a modern, welfare-focused Ball
          Python enclosure designed to provide appropriate environmental
          gradients, security, enrichment, and opportunities for natural
          behavior. Use it as a visual reference alongside the enclosure
          recommendations discussed throughout this guide.
        </p>
      </div>

      <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-[#101B15] p-4 shadow-2xl">
     <p className="text-red-600 text-2xl font-bold">
</p>
      <Image
  src="/illustrations/ball-python-enclosure-blueprint-v1.jpg"
  alt="Technical illustration of a recommended Ball Python enclosure showing heating, lighting, environmental gradients, hides, enrichment, ventilation, and husbandry parameters."
  width={1600}
  height={1200}
  priority
  className="h-auto w-full rounded-2xl"
/>

        <p className="mt-6 text-center text-sm italic text-gray-400">
          <strong>Figure 1.</strong> <strong>ScalesWiki Technical Plate 01.</strong>{" "}
          Recommended enclosure layout for an adult <em>Ball Python (Python regius)</em>.
          Environmental parameters should always be verified using calibrated
          digital instruments.
        </p>
      </div>

      <div className="mt-12 space-y-6">
        <Callout
          type="tip"
          title="ScalesWiki Recommendation"
        >
          Ball Pythons thrive in enclosures that provide multiple secure hiding
          places, climbing opportunities, proper temperature gradients, and
          environmental enrichment. A successful enclosure gives the snake
          choices, allowing it to select preferred temperatures, humidity
          levels, and secure resting locations throughout the day while the
          keeper maintains stable husbandry conditions.
        </Callout>

        <Callout
          type="warning"
          title="Common Mistake"
        >
          Large, empty enclosures often increase stress. Instead, provide visual
          barriers, live or artificial plants, cork bark, branches, and other
          clutter so your Ball Python feels secure while exploring. Ensure the
          enclosure remains easy to inspect and maintain.
        </Callout>

        <Callout
          type="science"
          title="Science Note"
        >
          Ball Pythons naturally use underground burrows and sheltered areas to
          regulate temperature and humidity. A captive enclosure should recreate
          these environmental choices rather than providing a single uniform
          environment. Allowing the snake to choose between different
          microhabitats supports normal thermoregulation and natural behavior.
        </Callout>

        <Callout
          type="science"
          title="Equipment Before the Animal"
        >
          Assemble the enclosure, install all heating and lighting equipment,
          and verify that temperatures and humidity remain stable for several
          days before introducing your Ball Python. Testing the habitat first
          helps reduce stress during acclimation and allows equipment issues to
          be corrected before the snake arrives.
        </Callout>
      </div>
    </section>
  );
}
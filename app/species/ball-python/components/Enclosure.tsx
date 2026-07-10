import Image from "next/image";
import { Callout } from "@/app/components/ui/Callout";

export function EnclosureBlueprint() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

      <div className="text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
          Habitat Illustration
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Ball Python Enclosure Blueprint
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          This ScalesWiki enclosure blueprint illustrates a modern Ball Python
          habitat with proper heating, hides, enrichment, ventilation, water,
          and environmental gradients.
        </p>

      </div>

      <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-[#101B15] p-4 shadow-2xl">

        <Image
          src="/illustrations/ball-python-enclosure-blueprint.png"
          alt="ScalesWiki Ball Python Enclosure Blueprint"
          width={1536}
          height={1024}
          priority
          className="w-full h-auto rounded-2xl"
        />

      </div>

      <Callout
        type="tip"
        title="ScalesWiki Recommendation"
      >
        Ball Pythons thrive in enclosures that provide multiple secure hiding
        places, climbing opportunities, proper temperature gradients, and
        environmental enrichment. The goal is to encourage natural behaviors
        while allowing the keeper to maintain stable husbandry conditions.
      </Callout>

      <Callout
        type="warning"
        title="Common Mistake"
      >
        Large empty enclosures often increase stress. Provide visual barriers,
        plants, cork bark, and clutter so your Ball Python feels secure while
        exploring.
      </Callout>

      <Callout
        type="science"
        title="Science Note"
      >
        Ball Pythons naturally use underground burrows and sheltered areas to
        regulate temperature and humidity. A captive enclosure should recreate
        these environmental choices rather than offering a single uniform
        climate.
      </Callout>

    </section>
  );
}
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { Callout } from "@/app/components/ui/Callout";

export function Enclosure() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

      <SectionHeading
        eyebrow="Enclosure"
        title="Designing a Healthy Habitat"
        description="A well-designed enclosure should provide security, proper environmental gradients, and opportunities for natural behavior."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2">

        <div className="rounded-3xl border border-white/10 bg-[#101B15] p-8">
          <h3 className="text-2xl font-bold text-white">
            Minimum Adult Size
          </h3>

          <p className="mt-6 text-4xl font-bold text-green-400">
            4' × 2' × 2'
          </p>

          <p className="mt-6 text-gray-300">
            A four-foot enclosure provides sufficient room for an adult Ball
            Python to thermoregulate, explore, and display natural behaviors.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#101B15] p-8">
          <h3 className="text-2xl font-bold text-white">
            Essential Features
          </h3>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>• Warm hide</li>
            <li>• Cool hide</li>
            <li>• Large water bowl</li>
            <li>• Climbing branches</li>
            <li>• Leaf litter & enrichment</li>
            <li>• Secure ventilation</li>
          </ul>
        </div>

      </div>

      <Callout
        type="tip"
        title="ScalesWiki Tip"
      >
        Design the enclosure around the snake's natural behaviors rather than
        simply meeting minimum dimensions.
      </Callout>

    </section>
  );
}
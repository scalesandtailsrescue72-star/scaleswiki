import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { Callout } from "@/app/components/ui/Callout";

export function Humidity() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Humidity"
        title="Humidity, Hydration & Healthy Shedding"
        description="Humidity supports hydration, healthy sheds, and natural behavior. Stable environmental conditions are more important than chasing a single humidity number."
      />

      <div className="mt-12 space-y-6 text-lg leading-8 text-gray-300">
        <p>Ball Pythons naturally experience different humidity levels throughout their habitat. A well-designed enclosure should provide stable ambient humidity while allowing the snake to choose suitable microclimates.</p>
        <p>Rather than relying on frequent misting, focus on enclosure design, substrate, ventilation, water availability, and a humid hide when appropriate.</p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-[#101B15] p-8">
          <h3 className="text-2xl font-bold text-white">Everyday Humidity</h3>
          <p className="mt-6 text-5xl font-bold text-green-400">60–70%</p>
          <p className="mt-6 text-gray-300">Maintain consistent humidity with proper substrate, ventilation, and fresh water.</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#101B15] p-8">
          <h3 className="text-2xl font-bold text-white">During Shed</h3>
          <p className="mt-6 text-5xl font-bold text-blue-400">70–80%</p>
          <p className="mt-6 text-gray-300">A humid hide or modest humidity increase may support a complete shed without making the enclosure excessively damp.</p>
        </div>
      </div>

      <Callout type="tip" title="ScalesWiki Tip">
        Place a quality digital hygrometer probe near the level where your Ball Python spends most of its time. Measurements near the enclosure ceiling may not reflect the humidity experienced by the snake.
      </Callout>

      <Callout type="warning" title="Common Mistake">
        Repeated heavy misting often creates humidity spikes instead of stable environmental conditions. Consistency is generally more beneficial than dramatic fluctuations.
      </Callout>

      <Callout type="science" title="Science Note">
        Modern reptile husbandry encourages providing environmental choice. Thermal and humidity gradients allow Ball Pythons to select the conditions that best support hydration, shedding, and normal behavior.
      </Callout>
    </section>
  );
}

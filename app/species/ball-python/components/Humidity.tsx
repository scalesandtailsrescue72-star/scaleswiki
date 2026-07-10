import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { Callout } from "@/app/components/ui/Callout";

export function Humidity() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

      <SectionHeading
        eyebrow="Humidity"
        title="Maintaining Proper Humidity"
        description="Humidity plays an important role in hydration, healthy shedding, and respiratory health. Ball Pythons benefit from stable humidity levels rather than frequent fluctuations."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2">

        <div className="rounded-3xl border border-white/10 bg-[#101B15] p-8">
          <h3 className="text-2xl font-bold text-white">
            Everyday Humidity
          </h3>

          <p className="mt-6 text-4xl font-bold text-green-400">
            60–70%
          </p>

          <p className="mt-6 text-gray-300">
            Maintain a stable humidity level throughout the enclosure using
            an appropriately sized water bowl, moisture-retaining substrate,
            and adequate ventilation.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#101B15] p-8">
          <h3 className="text-2xl font-bold text-white">
            During Shed
          </h3>

          <p className="mt-6 text-4xl font-bold text-blue-400">
            70–80%
          </p>

          <p className="mt-6 text-gray-300">
            During shedding, slightly higher humidity or access to a humid
            hide can help support a complete shed without increasing the risk
            of excessive moisture throughout the enclosure.
          </p>
        </div>

      </div>

      <Callout
        type="tip"
        title="ScalesWiki Tip"
      >
        Use a digital hygrometer with its probe positioned near the level
        where your Ball Python spends most of its time. Readings taken near
        the top of the enclosure may not reflect the humidity experienced by
        the snake.
      </Callout>

      <Callout
        type="warning"
        title="Common Mistake"
      >
        Constantly misting the enclosure without addressing substrate,
        ventilation, or water availability can create large humidity swings.
        Stable conditions are generally preferable to frequent fluctuations.
      </Callout>

      <Callout
        type="science"
        title="Science Note"
      >
        Ball Pythons naturally encounter areas with different humidity levels.
        Providing a humid hide allows them to choose a more humid
        microenvironment when needed while keeping the overall enclosure
        balanced.
      </Callout>

    </section>
  );
}
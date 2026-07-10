import { Callout } from "@/app/components/ui/Callout";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

export function Heating() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

      <SectionHeading
        eyebrow="Heating"
        title="Creating a Safe Thermal Gradient"
        description="Ball Pythons rely on environmental temperatures to regulate their body functions. A properly designed thermal gradient allows them to choose the temperature they need throughout the day."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2">

        <div className="rounded-3xl border border-white/10 bg-[#101B15] p-8">
          <h3 className="text-2xl font-bold text-white">Warm Side</h3>

          <p className="mt-4 text-gray-300">
            Ambient temperature:
          </p>

          <p className="mt-2 text-3xl font-bold text-green-400">
            88–92°F (31–33°C)
          </p>

          <p className="mt-6 text-gray-300">
            The warm side provides the temperatures needed for digestion,
            immune function, and normal metabolism.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#101B15] p-8">
          <h3 className="text-2xl font-bold text-white">Cool Side</h3>

          <p className="mt-4 text-gray-300">
            Ambient temperature:
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-400">
            76–80°F (24–27°C)
          </p>

          <p className="mt-6 text-gray-300">
            The cool side allows your Ball Python to cool down naturally and
            avoid overheating.
          </p>
        </div>

      </div>

      <Callout
        type="tip"
        title="ScalesWiki Tip"
      >
        Always use a quality thermostat with every heat source. A thermostat
        helps maintain consistent temperatures and reduces the risk of
        overheating.
      </Callout>

      <Callout
        type="warning"
        title="Common Mistake"
      >
        Heat rocks are not recommended. They can develop localized hot spots
        capable of causing thermal burns even when the enclosure's ambient
        temperature appears normal.
      </Callout>

      <Callout
        type="science"
        title="Science Note"
      >
        Ball Pythons regulate their body temperature behaviorally by moving
        between warmer and cooler areas. Providing a thermal gradient allows
        them to select the temperature that best supports digestion,
        activity, and other physiological processes.
      </Callout>

    </section>
  );
}
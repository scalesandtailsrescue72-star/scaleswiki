import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { SpeciesStat } from "@/app/components/ui/SpeciesStat";
import { RecommendationCard } from "@/app/components/ui/RecommendationCard";
import { InfoCard } from "@/app/components/ui/InfoCard";
import { ReferenceBox } from "@/app/components/ui/ReferenceBox";
import { VetReviewBadge } from "@/app/components/ui/VetReviewBadge";

export function Lighting() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

      <SectionHeading
        eyebrow="Lighting"
        title="Providing an Appropriate Light Cycle"
        description="Ball Pythons are primarily crepuscular to nocturnal, but they still benefit from a consistent day and night cycle. Appropriate lighting, combined with a proper thermal gradient and warm basking area, supports normal behavior, thermoregulation, and overall welfare."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <SpeciesStat
          label="Photoperiod"
          value="12 Hours"
          description="Provide a consistent day/night schedule."
        />

        <SpeciesStat
          label="UVB"
          value="Beneficial"
          accent="blue"
          description="Low-output UVB may provide welfare benefits when properly installed."
        />

        <SpeciesStat
          label="Night Lighting"
          value="None"
          accent="orange"
          description="Allow complete darkness overnight."
        />

        <SpeciesStat
          label="Warm Basking / Hot Spot"
          value="Required"
          accent="purple"
          description="Provide a properly heated warm area as part of the enclosure's thermal gradient."
        />

      </div>

      <div className="mt-16 space-y-8">

        <RecommendationCard
          type="evidence"
          title="Maintain a Consistent Photoperiod"
          references={3}
        >
          Providing approximately 12 hours of light and 12 hours of darkness
          each day helps establish predictable environmental rhythms while
          supporting natural activity cycles.
        </RecommendationCard>

        <RecommendationCard
          type="consensus"
          title="Provide a Warm Basking / Hot Spot"
        >
          Ball Pythons require access to an appropriately heated warm basking
          area as part of a proper thermal gradient. Although many individuals
          warm themselves from within a secure hide rather than basking openly,
          access to this heated area is essential for normal thermoregulation,
          digestion, immune function, and overall health.
        </RecommendationCard>

        <RecommendationCard
          type="warning"
          title="Avoid Colored Night Bulbs"
        >
          Red, blue, and other colored nighttime bulbs are generally not
          recommended. Ball Pythons benefit from a natural dark period. If
          supplemental overnight heat is necessary, use equipment that produces
          heat without emitting visible light.
        </RecommendationCard>

      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">

        <InfoCard
          icon="💡"
          title="LED Lighting"
        >
          Full-spectrum LED lighting provides excellent visibility and helps
          establish a natural day/night cycle without producing significant
          heat.
        </InfoCard>

        <InfoCard
          icon="☀️"
          title="UVB Lighting"
        >
          Low-output UVB is not universally considered essential for Ball
          Pythons, but an increasing number of veterinarians and experienced
          keepers recognize potential welfare benefits when appropriate
          fixtures, distances, and replacement schedules are used.
        </InfoCard>

        <InfoCard
          icon="🌙"
          title="Night Cycle"
        >
          Turn all visible lights off at night. If additional heat is required,
          use a thermostat-controlled heat source that does not produce visible
          light so the snake experiences a normal dark period.
        </InfoCard>

      </div>

      <ReferenceBox>

        <p>
          Divers SJ, Mader DR.
          <em> Current Therapy in Reptile Medicine and Surgery.</em>
        </p>

        <p>
          Baines FM et al. Reptile Lighting Recommendations.
        </p>

        <p>
          Veterinary Clinics of North America: Exotic Animal Practice.
        </p>

      </ReferenceBox>

      <div className="mt-16">

        <VetReviewBadge
          status="pending"
          version="0.5"
        />

      </div>

    </section>
  );
}
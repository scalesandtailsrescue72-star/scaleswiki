import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { SpeciesStat } from "@/app/components/ui/SpeciesStat";
import { RecommendationCard } from "@/app/components/ui/RecommendationCard";
import { InfoCard } from "@/app/components/ui/InfoCard";
import { ReferenceBox } from "@/app/components/ui/ReferenceBox";
import { VetReviewBadge } from "@/app/components/ui/VetReviewBadge";

export function Lighting() {
  return (
    <section
      id="lighting"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
    >
      <SectionHeading
        eyebrow="Lighting"
        title="Lighting, Photoperiod & Visible Light"
        description="Consistent lighting helps establish normal daily rhythms while working alongside proper heating and enclosure design."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <SpeciesStat
          label="Photoperiod"
          value="12 Hours"
          description="Maintain a regular schedule."
        />

        <SpeciesStat
          label="UVB"
          value="Beneficial"
          accent="blue"
          description="Low-output UVB may provide welfare benefits."
        />

        <SpeciesStat
          label="Night Lighting"
          value="None"
          accent="orange"
          description="Allow complete darkness overnight."
        />

        <SpeciesStat
          label="Warm Zone"
          value="Required"
          accent="purple"
          description="Provide a proper thermal gradient."
        />
      </div>

      <div className="mt-16 space-y-8">
        <RecommendationCard
          type="evidence"
          title="Maintain a Consistent Photoperiod"
          references={3}
        >
          Aim for approximately 12 hours of light and 12 hours of darkness
          each day. Consistency is far more important than the exact clock
          time.
        </RecommendationCard>

        <RecommendationCard
          type="consensus"
          title="Use Automatic Timers"
        >
          Automatic timers help maintain a predictable day/night cycle every
          day, reducing stress and preventing accidental schedule changes.
        </RecommendationCard>

        <RecommendationCard
          type="warning"
          title="Avoid Colored Night Bulbs"
        >
          If overnight heat is required, use a thermostat-controlled heat
          source that produces no visible light. Ball Pythons benefit from a
          naturally dark nighttime environment.
        </RecommendationCard>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        <InfoCard
          icon="💡"
          title="LED Lighting"
        >
          LED lighting provides excellent visibility while producing very
          little additional heat.
        </InfoCard>

        <InfoCard
          icon="☀️"
          title="UVB"
        >
          Low-output UVB may provide welfare benefits when installed correctly,
          although recommendations continue to evolve as new research becomes
          available.
        </InfoCard>

        <InfoCard
          icon="🌙"
          title="Night Cycle"
        >
          Turn off all visible lights overnight to provide a normal period of
          darkness. This helps maintain a natural daily rhythm.
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
      </ReferenceBox>

      <div className="mt-16">
        <VetReviewBadge
          status="pending"
          version="1.0"
        />
      </div>
    </section>
  );
}
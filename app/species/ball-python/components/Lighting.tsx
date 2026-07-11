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
        description="Ball Pythons are primarily crepuscular to nocturnal, but they still benefit from a consistent day and night cycle. Proper lighting supports normal behavior, environmental awareness, and overall welfare."
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
          description="Low-output UVB may provide welfare benefits."
        />

        <SpeciesStat
          label="Night Lighting"
          value="None"
          accent="orange"
          description="Allow complete darkness overnight."
        />

        <SpeciesStat
          label="Basking Lamp"
          value="Optional"
          accent="purple"
          description="Heating and lighting serve different purposes."
        />

      </div>

      <div className="mt-16 space-y-8">

        <RecommendationCard
          type="evidence"
          title="Maintain a Consistent Photoperiod"
          references={3}
        >
          Providing approximately 12 hours of light and 12 hours of darkness
          each day helps establish predictable environmental rhythms.
        </RecommendationCard>

        <RecommendationCard
          type="consensus"
          title="Consider Low-Level UVB"
        >
          Many experienced keepers successfully maintain Ball Pythons without
          UVB, while others report behavioral and welfare benefits when
          appropriate low-output UVB is provided.
        </RecommendationCard>

        <RecommendationCard
          type="warning"
          title="Avoid Colored Night Bulbs"
        >
          Red, blue, and other colored nighttime bulbs are generally not
          recommended. Ball Pythons benefit from a natural dark period.
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
          When used, choose a low-output UVB fixture appropriate for a
          crepuscular species and follow manufacturer recommendations for
          distance and replacement intervals.
        </InfoCard>

        <InfoCard
          icon="🌙"
          title="Night Cycle"
        >
          Turn all visible lights off at night. If supplemental heat is
          required overnight, use equipment that does not emit visible light.
        </InfoCard>

      </div>

      <ReferenceBox>

        <p>
          Mader DR, Divers SJ. <em>Current Therapy in Reptile Medicine and
          Surgery.</em>
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
          version="0.4"
        />

      </div>

    </section>
  );
}
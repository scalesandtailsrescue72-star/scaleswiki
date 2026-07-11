import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { SpeciesStat } from "@/app/components/ui/SpeciesStat";
import { RecommendationCard } from "@/app/components/ui/RecommendationCard";
import { InfoCard } from "@/app/components/ui/InfoCard";
import { ReferenceBox } from "@/app/components/ui/ReferenceBox";
import { VetReviewBadge } from "@/app/components/ui/VetReviewBadge";

export function Water() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

      <SectionHeading
        eyebrow="Water"
        title="Hydration and Water Quality"
        description="Fresh, clean water is essential for hydration, healthy shedding, kidney function, and overall well-being. Every Ball Python should always have access to clean drinking water."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <SpeciesStat
          label="Fresh Water"
          value="Always"
          description="Clean drinking water should be available at all times."
        />

        <SpeciesStat
          label="Bowl Cleaning"
          value="Daily"
          accent="blue"
          description="Clean and disinfect the bowl regularly."
        />

        <SpeciesStat
          label="Soaking"
          value="Optional"
          accent="green"
          description="Many Ball Pythons soak occasionally, especially during shedding."
        />

        <SpeciesStat
          label="Water Bowl"
          value="Large"
          accent="purple"
          description="Large enough for the snake to fully coil inside if desired."
        />

      </div>

      <div className="mt-16 space-y-8">

        <RecommendationCard
          type="evidence"
          title="Provide Fresh Water at All Times"
          references={3}
        >
          Ball Pythons should have unrestricted access to clean drinking water.
          Replace water whenever it becomes dirty and at least once each day.
        </RecommendationCard>

        <RecommendationCard
          type="consensus"
          title="Choose a Stable Water Bowl"
        >
          Heavy ceramic or stone bowls are preferred because they are difficult
          to tip over and help maintain enclosure humidity.
        </RecommendationCard>

        <RecommendationCard
          type="warning"
          title="Do Not Ignore Dirty Water"
        >
          Feces, substrate, or shed skin can quickly contaminate water. Dirty
          bowls should be cleaned immediately to reduce bacterial growth.
        </RecommendationCard>

      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">

        <InfoCard
          icon="💧"
          title="Water Bowl Size"
        >
          The bowl should be large enough for your Ball Python to drink
          comfortably and, if it chooses, soak its entire body.
        </InfoCard>

        <InfoCard
          icon="🧼"
          title="Cleaning Routine"
        >
          Wash the bowl with hot water during routine cleaning and disinfect it
          regularly using a reptile-safe disinfectant before rinsing thoroughly.
        </InfoCard>

        <InfoCard
          icon="🌿"
          title="Humidity Support"
        >
          Water bowls contribute modestly to enclosure humidity. Proper
          substrate and ventilation remain the primary methods for maintaining
          appropriate humidity levels.
        </InfoCard>

      </div>

      <ReferenceBox>

        <p>
          Divers SJ, Mader DR.
          <em> Current Therapy in Reptile Medicine and Surgery.</em>
        </p>

        <p>
          Association of Reptile and Amphibian Veterinarians (ARAV)
          husbandry recommendations.
        </p>

        <p>
          Peer-reviewed veterinary literature on reptile hydration and
          husbandry.
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
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { SpeciesStat } from "@/app/components/ui/SpeciesStat";
import { RecommendationCard } from "@/app/components/ui/RecommendationCard";
import { InfoCard } from "@/app/components/ui/InfoCard";
import { ReferenceBox } from "@/app/components/ui/ReferenceBox";
import { VetReviewBadge } from "@/app/components/ui/VetReviewBadge";

export function Feeding() {
  return (
    <section
    id="feeding" 
    className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

      <SectionHeading
        eyebrow="Feeding"
        title="Nutrition and Feeding"
        description="Proper nutrition is one of the most important aspects of Ball Python husbandry. Feeding schedules, prey size, and monitoring body condition all contribute to long-term health and well-being."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <SpeciesStat
          label="Juveniles"
          value="5–7 Days"
          description="Typically fed more frequently while growing."
        />

        <SpeciesStat
          label="Adults"
          value="10–21 Days"
          accent="green"
          description="Adjust based on age, body condition, and breeding status."
        />

        <SpeciesStat
          label="Prey"
          value="Whole Prey"
          accent="blue"
          description="Use appropriately sized rodents from a reputable source."
        />

        <SpeciesStat
          label="Body Condition"
          value="Monitor"
          accent="purple"
          description="Adjust feeding based on the individual animal, not just a schedule."
        />

      </div>

      <div className="mt-16 space-y-8">

        <RecommendationCard
          type="evidence"
          title="Feed Appropriately Sized Prey"
          references={4}
        >
          Choose prey that is suitable for the snake's size and body condition.
          Oversized prey may increase the risk of regurgitation or injury.
        </RecommendationCard>

        <RecommendationCard
          type="consensus"
          title="Frozen-Thawed Prey is Preferred"
        >
          Frozen-thawed rodents reduce the risk of injury from live prey and
          provide consistent nutrition when sourced from reputable suppliers.
        </RecommendationCard>

        <RecommendationCard
          type="warning"
          title="Avoid Overfeeding"
        >
          Feeding too frequently can contribute to obesity, fatty liver disease,
          and reduced overall health. Monitor body condition rather than relying
          solely on a fixed feeding calendar.
        </RecommendationCard>

      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">

        <InfoCard
          icon="🐁"
          title="Frozen-Thawed Prey"
        >
          Frozen-thawed rodents are widely recommended because they reduce the
          risk of bite injuries while providing complete nutrition.
        </InfoCard>

        <InfoCard
          icon="❄️"
          title="Safe Thawing"
        >
          Thaw prey completely and warm it appropriately before feeding. Never
          use a microwave, as it can create uneven heating and damage tissues.
        </InfoCard>

        <InfoCard
          icon="⚖️"
          title="Monitor Body Condition"
        >
          Healthy Ball Pythons should have a rounded triangular body profile.
          Adjust feeding frequency if your snake becomes overweight or loses
          condition.
        </InfoCard>

      </div>

      <ReferenceBox>

        <p>
          Divers SJ, Mader DR.
          <em> Current Therapy in Reptile Medicine and Surgery.</em>
        </p>

        <p>
          Association of Reptile and Amphibian Veterinarians (ARAV) husbandry
          recommendations.
        </p>

        <p>
          Peer-reviewed veterinary literature on reptile nutrition and feeding.
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
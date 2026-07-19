import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { SpeciesStat } from "@/app/components/ui/SpeciesStat";
import { RecommendationCard } from "@/app/components/ui/RecommendationCard";
import { InfoCard } from "@/app/components/ui/InfoCard";
import { ReferenceBox } from "@/app/components/ui/ReferenceBox";
import { VetReviewBadge } from "@/app/components/ui/VetReviewBadge";

export function Handling() {
  return (
    <section
  id="handling"
  className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
>

      <SectionHeading
        eyebrow="Handling"
        title="Safe and Low-Stress Handling"
        description="Ball Pythons are generally calm snakes, but every individual has its own temperament. Respectful, gradual handling helps build confidence while reducing stress for both the snake and keeper."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <SpeciesStat
          label="New Arrival"
          value="5–7 Days"
          description="Allow time to settle before the first handling session."
        />

        <SpeciesStat
          label="After Feeding"
          value="48 Hours"
          accent="blue"
          description="Avoid handling to reduce the risk of regurgitation."
        />

        <SpeciesStat
          label="Sessions"
          value="10–15 Min"
          accent="green"
          description="Keep early handling sessions short and calm."
        />

        <SpeciesStat
          label="Approach"
          value="Gentle"
          accent="purple"
          description="Support the snake's body and avoid sudden movements."
        />

      </div>

      <div className="mt-16 space-y-8">

        <RecommendationCard
          type="evidence"
          title="Support the Entire Body"
          references={3}
        >
          When lifting a Ball Python, support as much of its body as possible.
          This helps the snake feel secure and reduces unnecessary stress.
        </RecommendationCard>

        <RecommendationCard
          type="consensus"
          title="Handle Calmly and Consistently"
        >
          Regular, gentle handling sessions can help many Ball Pythons become
          more accustomed to routine interaction over time.
        </RecommendationCard>

        <RecommendationCard
          type="warning"
          title="Do Not Handle After Feeding"
        >
          Avoid handling for approximately 48 hours after feeding, as this may
          increase the risk of regurgitation.
        </RecommendationCard>

      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">

        <InfoCard
          icon="🤲"
          title="Supporting the Snake"
        >
          Always support multiple sections of the body and allow the snake to
          move naturally through your hands rather than gripping tightly.
        </InfoCard>

        <InfoCard
          icon="🕒"
          title="Handling Frequency"
        >
          Short, calm sessions a few times per week are generally better than
          infrequent, prolonged handling.
        </InfoCard>

        <InfoCard
          icon="🐍"
          title="Recognizing Stress"
        >
          Rapid escape attempts, defensive postures, repeated striking, or
          prolonged hiding may indicate the snake is stressed and should be
          given time to settle.
        </InfoCard>

      </div>

      <ReferenceBox>

        <p>
          Divers SJ, Mader DR.
          <em> Current Therapy in Reptile Medicine and Surgery.</em>
        </p>

        <p>
          Association of Reptile and Amphibian Veterinarians (ARAV) handling
          and welfare recommendations.
        </p>

        <p>
          Peer-reviewed literature on reptile behavior and stress reduction.
        </p>

      </ReferenceBox>

      <div className="mt-16">

        <VetReviewBadge status="pending" />
        

      </div>

    </section>
  );
}
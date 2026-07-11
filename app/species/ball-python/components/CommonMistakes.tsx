import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { RecommendationCard } from "@/app/components/ui/RecommendationCard";
import { VetReviewBadge } from "@/app/components/ui/VetReviewBadge";

export function CommonMistakes() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

      <SectionHeading
        eyebrow="Common Mistakes"
        title="Avoiding Common Husbandry Mistakes"
        description="Many Ball Python health problems begin with preventable husbandry mistakes. Understanding these common errors can improve welfare and reduce unnecessary stress."
      />

      <div className="mt-16 space-y-8">

        <RecommendationCard
          type="warning"
          title="Using Heat Without a Thermostat"
        >
          Every heat source should be regulated by a quality thermostat.
          Unregulated heating equipment can create dangerously high surface
          temperatures capable of causing thermal burns.
        </RecommendationCard>

        <RecommendationCard
          type="warning"
          title="Keeping the Enclosure Too Empty"
        >
          Large open spaces often increase stress. Add multiple hides,
          climbing branches, cork bark, plants, and visual barriers to create
          a secure environment.
        </RecommendationCard>

        <RecommendationCard
          type="warning"
          title="Handling Immediately After Feeding"
        >
          Wait approximately 48 hours after feeding before handling.
          Handling too soon may increase the risk of regurgitation.
        </RecommendationCard>

        <RecommendationCard
          type="warning"
          title="Incorrect Humidity"
        >
          Humidity that is consistently too low may contribute to poor sheds,
          while excessive moisture without adequate ventilation may encourage
          bacterial or fungal problems.
        </RecommendationCard>

        <RecommendationCard
          type="warning"
          title="Feeding Oversized Prey"
        >
          Select prey that is appropriately sized for the individual snake.
          Oversized prey increases the risk of regurgitation and unnecessary
          digestive stress.
        </RecommendationCard>

        <RecommendationCard
          type="warning"
          title="Ignoring Small Changes"
        >
          Subtle changes in appetite, body condition, breathing, shedding, or
          behavior are often the earliest signs that something may be wrong.
          Early recognition allows problems to be addressed sooner.
        </RecommendationCard>

      </div>

      <div className="mt-16">

        <VetReviewBadge
          status="pending"
          version="0.4"
        />

      </div>

    </section>
  );
}
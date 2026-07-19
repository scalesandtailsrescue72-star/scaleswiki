import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { RecommendationCard } from "@/app/components/ui/RecommendationCard";
import { VetReviewBadge } from "@/app/components/ui/VetReviewBadge";

export function CommonMistakes() {
  return (
    <section
  id="common-mistakes"
  className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
>

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
          Every primary heat source should be regulated by a reliable thermostat that is appropriate for the type of heating device being used.
          Unregulated heating equipment can create dangerously high surface
          temperatures capable of causing thermal burns.
        </RecommendationCard>

        <RecommendationCard
          type="warning"
          title="Keeping the Enclosure Too Empty"
        >
          Ball Pythons naturally spend much of their time concealed in secure retreats. An enclosure with multiple hiding opportunities often promotes more natural behavior and reduces chronic stress.
        </RecommendationCard>

        <RecommendationCard
          type="warning"
          title="Handling Immediately After Feeding"
        >
          Wait approximately 48 hours after feeding before handling.
          Handling too soon may increase the risk of regurgitation.
          Some larger meals or individual snakes may benefit from longer.
        </RecommendationCard>

        <RecommendationCard
          type="warning"
          title="Incorrect Humidity"
        >
          Humidity that is consistently too low may contribute to poor sheds,
          while excessive moisture without adequate ventilation may encourage
          bacterial or fungal problems.
          Monitor humidity with a calibrated digital hygrometer rather than estimating by appearance or feel.
        </RecommendationCard>

        <RecommendationCard
          type="warning"
          title="Feeding Oversized Prey"
        >
          Select prey that is appropriately sized for the individual snake.
          Oversized prey increases the risk of regurgitation and unnecessary
          digestive stress.
          Select prey that is approximately equal to the widest part of the snake's body unless otherwise advised by a qualified reptile veterinarian.
        </RecommendationCard>

        <RecommendationCard
          type="warning"
          title="Ignoring Small Changes"
        >
          Subtle changes in appetite, body condition, breathing, shedding, or
          behavior are often the earliest signs that something may be wrong.
          Early recognition allows problems to be addressed sooner.Maintaining written records of feeding, shedding, body weight, and behavior makes subtle changes much easier to recognize.
        </RecommendationCard>

        <RecommendationCard
  type="warning"
  title="Making Frequent Enclosure Changes"
>
  Once a Ball Python is established in a properly designed enclosure,
  avoid making frequent changes to the layout, temperatures, or overall
  environment. Constantly rearranging the enclosure or repeatedly moving
  the snake between habitats can increase stress and interfere with
  normal behavior.
</RecommendationCard>

<RecommendationCard
  type="warning"
  title="Relying on Social Media Instead of Evidence"
>
  Husbandry advice shared on social media varies widely in quality.
  Whenever possible, compare recommendations with veterinary literature,
  experienced reptile professionals, and evidence-based resources rather
  than relying on a single video, influencer, or online post.
</RecommendationCard>

      </div>

      <div className="mt-16">

        <VetReviewBadge
          status="pending"
          version="1.0"
        />

      </div>

    </section>
  );
}
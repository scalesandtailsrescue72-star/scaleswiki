import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { RecommendationCard } from "@/app/components/ui/RecommendationCard";
import { VetReviewBadge } from "@/app/components/ui/VetReviewBadge";

export function CommonMistakes() {
  return (
    <section id="common-mistakes" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Common Mistakes"
        title="Avoiding Common Husbandry Mistakes"
        description="Many Ball Python health problems begin with preventable husbandry mistakes. Understanding these common errors can improve welfare and reduce unnecessary stress."
      />

      <div className="mt-16 space-y-8">
        <RecommendationCard type="warning" title="Using Heat Without a Thermostat">
          Every primary heat source should be regulated by a reliable thermostat appropriate for that heating device. Unregulated heating equipment can create dangerously high temperatures and cause thermal burns.
        </RecommendationCard>

        <RecommendationCard type="warning" title="Keeping the Enclosure Too Empty">
          Ball Pythons naturally spend much of their time concealed in secure retreats. Multiple snug hides, cover, and visual barriers support natural behavior and help reduce stress.
        </RecommendationCard>

        <RecommendationCard type="warning" title="Handling Immediately After Feeding">
          Avoid handling for approximately 48 hours after feeding. Handling too soon may increase the risk of regurgitation, and some individuals or larger meals may warrant additional time.
        </RecommendationCard>

        <RecommendationCard type="warning" title="Incorrect Humidity">
          Humidity that is consistently too low may contribute to poor sheds, while excessive moisture without adequate ventilation may encourage bacterial or fungal growth. Monitor conditions with a reliable digital hygrometer rather than estimating by appearance or feel.
        </RecommendationCard>

        <RecommendationCard type="warning" title="Feeding Inappropriately Sized Prey">
          Select prey appropriate for the individual snake's size and body condition. A commonly used starting point is prey around the width of the snake's widest body section, but feeding decisions should also account for age, body condition, meal frequency, and veterinary guidance when needed.
        </RecommendationCard>

        <RecommendationCard type="warning" title="Ignoring Small Changes">
          Subtle changes in appetite, body condition, breathing, shedding, or behavior may be early signs that something is wrong. Written records of feeding, shedding, body weight, and behavior make changes easier to recognize and discuss with a reptile veterinarian.
        </RecommendationCard>

        <RecommendationCard type="warning" title="Making Frequent Enclosure Changes">
          Once a Ball Python is established in a properly designed enclosure, avoid unnecessary major changes to the layout or environment. Constant rearrangement or repeated moves between habitats can increase stress and interfere with normal behavior.
        </RecommendationCard>

        <RecommendationCard type="warning" title="Relying on Social Media Instead of Evidence">
          Husbandry advice shared online varies widely in quality. Compare recommendations with veterinary literature, qualified reptile veterinarians, experienced reptile professionals, and evidence-based resources rather than relying on a single video, influencer, forum post, or social-media claim.
        </RecommendationCard>
      </div>

      <div className="mt-16"><VetReviewBadge status="pending" /></div>
    </section>
  );
}

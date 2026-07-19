import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { SpeciesStat } from "@/app/components/ui/SpeciesStat";
import { RecommendationCard } from "@/app/components/ui/RecommendationCard";
import { InfoCard } from "@/app/components/ui/InfoCard";
import { ReferenceBox } from "@/app/components/ui/ReferenceBox";
import { VetReviewBadge } from "@/app/components/ui/VetReviewBadge";

export function Feeding() {
  return (
    <section id="feeding" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Feeding"
        title="Feeding & Nutrition"
        description="Proper nutrition is one of the most important aspects of ball python husbandry."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <SpeciesStat label="Hatchlings" value="5–7 Days" description="Feed every 5–7 days." />
        <SpeciesStat label="Juveniles" value="7–10 Days" accent="blue" description="Increase prey size gradually." />
        <SpeciesStat label="Adults" value="14–28 Days" accent="purple" description="Adjust feeding by body condition." />
        <SpeciesStat label="Preferred Prey" value="Frozen/Thawed" accent="orange" description="Recommended over live prey." />
      </div>

      <div className="mt-16 space-y-8">
        <RecommendationCard type="evidence" title="Choose the Correct Prey Size" references={3}>
          Prey should be approximately equal to the widest part of the snake's body.
        </RecommendationCard>

        <RecommendationCard type="consensus" title="Frozen-Thawed is Best">
          Frozen-thawed rodents are safer than live rodents because they eliminate the risk of bites.
        </RecommendationCard>

        <RecommendationCard type="warning" title="Do Not Handle After Feeding">
          Avoid handling for at least 48 hours after a meal.
        </RecommendationCard>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        <InfoCard icon="🐭" title="Natural Diet">Wild ball pythons primarily consume small mammals and occasionally birds.</InfoCard>
        <InfoCard icon="🔥" title="Digestion">Proper temperatures are essential for healthy digestion.</InfoCard>
        <InfoCard icon="⚖️" title="Body Condition">Feed to maintain a healthy body condition rather than maximum growth.</InfoCard>
      </div>

      <ReferenceBox>
        <p>Divers SJ, Mader DR. <em>Current Therapy in Reptile Medicine and Surgery.</em></p>
        <p>BSAVA Manual of Reptiles.</p>
        <p>Association of Reptile and Amphibian Veterinarians (ARAV).</p>
      </ReferenceBox>

      <div className="mt-16">
        <VetReviewBadge status="pending" />
      </div>
    </section>
  );
}

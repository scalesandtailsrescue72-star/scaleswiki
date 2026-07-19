import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { SpeciesStat } from "@/app/components/ui/SpeciesStat";
import { RecommendationCard } from "@/app/components/ui/RecommendationCard";
import { InfoCard } from "@/app/components/ui/InfoCard";
import { ReferenceBox } from "@/app/components/ui/ReferenceBox";
import { VetReviewBadge } from "@/app/components/ui/VetReviewBadge";

export function IsItRightForYou() {
  return (
    <section
  id="is-it-right-for-you"
  className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
>

      <SectionHeading
        eyebrow="Choosing a Ball Python"
        title="Is a Ball Python the Right Pet for You?"
        description="Ball Pythons can make rewarding companions, but they are a long-term commitment. Before bringing one home, consider the time, financial investment, enclosure space, and ongoing husbandry required throughout its lifetime."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <SpeciesStat
          label="Commitment"
          value="20–30+ Years"
          description="Many Ball Pythons live for several decades with excellent care."
        />

        <SpeciesStat
          label="Handling"
          value="Generally Calm"
          accent="green"
          description="Many individuals tolerate gentle, routine handling well."
        />

        <SpeciesStat
          label="Care Level"
          value="Beginner+"
          accent="blue"
          description="Suitable for dedicated beginners willing to learn proper husbandry."
        />

        <SpeciesStat
          label="Daily Care"
          value="Moderate"
          accent="purple"
          description="Daily observation is important, even though routine maintenance is moderate."
        />

      </div>

      <div className="mt-16 space-y-8">

        <RecommendationCard
          type="evidence"
          title="Research Before You Buy"
          references={4}
        >
          Successful Ball Python ownership begins long before bringing a snake
          home. Learn about enclosure design, environmental requirements,
          nutrition, veterinary care, and long-term costs before making your
          decision.Consider locating an experienced reptile veterinarian before acquiring your Ball Python so you are prepared if medical care is needed.
        </RecommendationCard>

        <RecommendationCard
          type="consensus"
          title="Prepare the Enclosure First"
        >
          Assemble and test the enclosure before purchasing your Ball Python.
          Stable temperatures and humidity help reduce stress during the
          acclimation period.Operate the enclosure for several days before introducing your Ball Python to confirm that temperatures, humidity, lighting, and thermostat settings remain stable.
        </RecommendationCard>

        <RecommendationCard
          type="warning"
          title="Avoid Impulse Purchases"
        >
          Ball Pythons are long-lived reptiles that require ongoing financial,
          time, and husbandry commitments. Never purchase one without planning
          for its lifelong care.Responsible ownership also includes planning for vacations, emergencies, and the possibility that your circumstances may change over the snake's lifetime.
        </RecommendationCard>

      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">

        <InfoCard
          icon="🏠"
          title="Space Requirements"
        >
          Adult Ball Pythons require appropriately sized enclosures that provide
          secure hiding places, climbing opportunities, and environmental
          gradients.Adult Ball Pythons benefit from enclosures that allow them to fully stretch out, thermoregulate effectively, and engage in natural behaviors.
        </InfoCard>

        <InfoCard
          icon="💲"
          title="Ongoing Costs"
        >
          Budget for electricity, substrate, feeders, enclosure maintenance,
          replacement equipment, and veterinary care throughout the snake's
          lifetime.Unexpected veterinary care can be one of the largest expenses, so it is wise to plan for emergency medical costs.
        </InfoCard>

        <InfoCard
          icon="❤️"
          title="A Long-Term Responsibility"
        >
          Purchasing a Ball Python is a commitment that may last several
          decades. Responsible ownership means planning for the animal's care
          throughout its entire life.
        </InfoCard>

        <InfoCard
  icon="👨‍👩‍👧"
  title="Household Considerations"
>
  Consider whether everyone in your household is comfortable living with a
  snake, and ensure that children interact with Ball Pythons only under
  appropriate adult supervision.
</InfoCard>

      </div>

      <ReferenceBox>

        <p>
          Barker DG, Barker TM.
          <em> Ball Pythons: The History, Natural History, Care and Breeding.</em>
        </p>

        <p>
          Divers SJ, Mader DR.
          <em> Current Therapy in Reptile Medicine and Surgery.</em>
        </p>

        <p>
          Association of Reptile and Amphibian Veterinarians (ARAV)
          educational resources.
        </p>

      </ReferenceBox>

      <div className="mt-16">

       <VetReviewBadge status="pending" />

      </div>

    </section>
  );
}
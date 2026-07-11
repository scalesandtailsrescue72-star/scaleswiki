import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { InfoCard } from "@/app/components/ui/InfoCard";
import { VetReviewBadge } from "@/app/components/ui/VetReviewBadge";

export function FAQ() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

      <SectionHeading
        eyebrow="Frequently Asked Questions"
        title="Ball Python FAQ"
        description="Answers to some of the most common questions new and experienced Ball Python keepers ask."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-2">

        <InfoCard
          icon="🐍"
          title="Are Ball Pythons good beginner snakes?"
        >
          Yes. Ball Pythons are generally calm, manageable, and widely considered
          suitable for beginners when provided with proper husbandry and
          appropriate long-term care.
        </InfoCard>

        <InfoCard
          icon="💡"
          title="Do Ball Pythons need UVB lighting?"
        >
          While Ball Pythons can survive without UVB under appropriate husbandry,
          many keepers and veterinarians choose to provide low-level UVB as part
          of a naturalistic enclosure. A regular day/night light cycle is
          recommended.
        </InfoCard>

        <InfoCard
          icon="🍽️"
          title="Why won't my Ball Python eat?"
        >
          Reduced feeding can occur for several reasons including seasonal
          changes, stress, environmental conditions, or health problems.
          Persistent refusal to eat—especially with weight loss—should be
          evaluated by a reptile veterinarian.
        </InfoCard>

        <InfoCard
          icon="🧽"
          title="How often should I clean the enclosure?"
        >
          Spot clean waste as it appears, clean water bowls daily, and perform
          routine substrate replacement according to the enclosure type and
          husbandry system being used.
        </InfoCard>

        <InfoCard
          icon="🩺"
          title="How long do Ball Pythons live?"
        >
          With excellent husbandry, Ball Pythons commonly live 20–30 years,
          and some individuals exceed 40 years in captivity.
        </InfoCard>

        <InfoCard
          icon="🌿"
          title="Can Ball Pythons live in bioactive enclosures?"
        >
          Yes. Properly designed bioactive enclosures can provide enrichment,
          improve environmental stability, and support natural behaviors when
          maintained correctly.
        </InfoCard>

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
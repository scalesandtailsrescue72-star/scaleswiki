import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { SpeciesStat } from "@/app/components/ui/SpeciesStat";
import { RecommendationCard } from "@/app/components/ui/RecommendationCard";
import { InfoCard } from "@/app/components/ui/InfoCard";
import { ReferenceBox } from "@/app/components/ui/ReferenceBox";
import { VetReviewBadge } from "@/app/components/ui/VetReviewBadge";

export function Introduction() {
  return (
    <section
  id="introduction"
  className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
>

      <SectionHeading
        eyebrow="Introduction"
        title="Getting Started with Ball Python Care"
        description="Ball Pythons (Python regius) are among the world's most popular pet snakes because of their generally calm temperament, manageable adult size, and long lifespan. Providing appropriate husbandry from the beginning helps establish the foundation for a healthy, thriving snake."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <SpeciesStat
          label="Scientific Name"
          value="Python regius"
          description="A nonvenomous constrictor native to western and central Africa."
        />

        <SpeciesStat
          label="Adult Size"
          value="3–5 ft"
          accent="green"
          description="Most adults remain within this range, although individual variation occurs."
        />

        <SpeciesStat
          label="Lifespan"
          value="20–30+ yrs"
          accent="blue"
          description="Excellent husbandry can result in several decades of companionship."
        />

        <SpeciesStat
          label="Experience"
          value="Beginner+"
          accent="purple"
          description="Suitable for many new keepers who are committed to proper care."
        />

      </div>

      <div className="mt-16 space-y-8">

        <RecommendationCard
          type="evidence"
          title="Successful Keeping Starts with Husbandry"
          references={4}
        >
          Proper enclosure design, temperature regulation, humidity,
          nutrition, hygiene, and routine observation all work together to
          support long-term health. There is no single "magic" piece of
          equipment that replaces good overall husbandry.
        </RecommendationCard>

        <RecommendationCard
          type="consensus"
          title="Plan Before Bringing Your Snake Home"
        >
          Purchase equipment, test temperatures and humidity, and fully cycle
          the enclosure before introducing your Ball Python. A prepared habitat
          reduces stress during acclimation.
        </RecommendationCard>

      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">

        <InfoCard
          icon="🌍"
          title="Native Habitat"
        >
          Ball Pythons naturally inhabit grasslands, scrublands, and forest
          edges where they spend much of their time using burrows and other
          sheltered retreats.
        </InfoCard>

        <InfoCard
          icon="🛡️"
          title="Why They're Called Ball Pythons"
        >
          When frightened, Ball Pythons often curl into a tight ball with
          their head protected in the center. This defensive behavior inspired
          their common name.
        </InfoCard>

        <InfoCard
          icon="📚"
          title="What This Guide Covers"
        >
          This guide walks through enclosure design, environmental parameters,
          feeding, handling, health, and long-term care using current husbandry
          recommendations and veterinary references.
        </InfoCard>

      </div>

      <ReferenceBox>

        <p>
          Barker DG, Barker TM. <em>Ball Pythons: The History, Natural History, Care and Breeding.</em>
        </p>

        <p>
          Divers SJ, Mader DR. <em>Current Therapy in Reptile Medicine and Surgery.</em>
        </p>

        <p>
          Association of Reptile and Amphibian Veterinarians (ARAV) educational resources.
        </p>

      </ReferenceBox>

      <div className="mt-16">

        <VetReviewBadge
          status="pending"
          version="0.5"
        />

      </div>

    </section>
  );
}
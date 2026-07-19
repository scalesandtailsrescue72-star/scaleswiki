import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { SpeciesStat } from "@/app/components/ui/SpeciesStat";
import { RecommendationCard } from "@/app/components/ui/RecommendationCard";
import { InfoCard } from "@/app/components/ui/InfoCard";
import { ReferenceBox } from "@/app/components/ui/ReferenceBox";
import { VetReviewBadge } from "@/app/components/ui/VetReviewBadge";

export function Substrate() {
  return (
    <section
    id="substrate"
     className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

      <SectionHeading
        eyebrow="Substrate"
        title="Choosing the Right Substrate"
        description="Substrate influences humidity, cleanliness, environmental enrichment, and natural behaviors. A well-chosen substrate allows your Ball Python to feel secure while supporting healthy enclosure conditions."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <SpeciesStat
          label="Depth"
          value="2–4 in"
          description="Enough depth for natural movement and humidity retention."
        />

        <SpeciesStat
          label="Bioactive"
          value="Optional"
          accent="green"
          description="Bioactive setups can provide enrichment when properly maintained."
        />

        <SpeciesStat
          label="Spot Clean"
          value="Daily"
          accent="blue"
          description="Remove waste promptly to maintain hygiene."
        />

        <SpeciesStat
          label="Replace"
          value="4–8 Weeks"
          accent="purple"
          description="Frequency depends on enclosure type and substrate used."
        />

      </div>

      <div className="mt-16 space-y-8">

        <RecommendationCard
          type="evidence"
          title="Use a Humidity-Friendly Substrate"
          references={3}
        >
          Coconut husk, coconut fiber, cypress mulch, and suitable soil blends
          help maintain stable humidity while encouraging natural behaviors.
        </RecommendationCard>

        <RecommendationCard
          type="consensus"
          title="Provide a Naturalistic Environment"
        >
          Many experienced keepers find that deeper, textured substrates allow
          Ball Pythons to explore, burrow slightly, and feel more secure.
        </RecommendationCard>

        <RecommendationCard
          type="warning"
          title="Avoid Cedar and Pine"
        >
          Cedar and pine contain aromatic oils that may be harmful to reptiles
          and are generally not recommended.
        </RecommendationCard>

      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">

        <InfoCard
          icon="🥥"
          title="Coconut Husk"
        >
          One of the most popular choices because it retains moisture well,
          resists mold when maintained properly, and provides a natural
          appearance.
        </InfoCard>

        <InfoCard
          icon="🌱"
          title="Topsoil Mixes"
        >
          Organic topsoil mixed with other suitable materials can create a
          naturalistic enclosure and works especially well in bioactive setups.
        </InfoCard>

        <InfoCard
          icon="🍂"
          title="Cypress Mulch"
        >
          Cypress mulch helps retain humidity while allowing airflow through
          the substrate. Use products free from added chemicals or fragrances.
        </InfoCard>

      </div>

      <ReferenceBox>

        <p>
          Divers SJ, Mader DR. <em>Current Therapy in Reptile Medicine and Surgery.</em>
        </p>

        <p>
          Association of Reptile and Amphibian Veterinarians (ARAV) husbandry guidance.
        </p>

        <p>
          Peer-reviewed reptile husbandry literature and veterinary references.
        </p>

      </ReferenceBox>

      <div className="mt-16">

        <VetReviewBadge status="pending" />

      </div>

    </section>
  );
}
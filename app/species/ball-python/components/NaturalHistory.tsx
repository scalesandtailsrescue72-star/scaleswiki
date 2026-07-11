import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { SpeciesStat } from "@/app/components/ui/SpeciesStat";
import { RecommendationCard } from "@/app/components/ui/RecommendationCard";
import { InfoCard } from "@/app/components/ui/InfoCard";
import { ReferenceBox } from "@/app/components/ui/ReferenceBox";
import { VetReviewBadge } from "@/app/components/ui/VetReviewBadge";

export function NaturalHistory() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

      <SectionHeading
        eyebrow="Natural History"
        title="Understanding Ball Pythons in the Wild"
        description="Understanding how Ball Pythons live in their natural environment helps explain why they require secure hiding places, environmental gradients, and stable husbandry in captivity. Good captive care begins with respecting the species' natural biology."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <SpeciesStat
          label="Native Range"
          value="West & Central Africa"
          description="Found across a broad range of countries and habitats."
        />

        <SpeciesStat
          label="Activity"
          value="Crepuscular"
          accent="green"
          description="Most active during dawn, dusk, and nighttime hours."
        />

        <SpeciesStat
          label="Lifestyle"
          value="Terrestrial"
          accent="blue"
          description="Primarily ground-dwelling while also using low branches and burrows."
        />

        <SpeciesStat
          label="Defense"
          value="Balling"
          accent="purple"
          description="Curls into a tight defensive ball when threatened."
        />

      </div>

      <div className="mt-16 space-y-8">

        <RecommendationCard
          type="evidence"
          title="Natural Behaviors Should Guide Husbandry"
          references={4}
        >
          Ball Pythons spend much of their lives utilizing burrows, termite
          mounds, dense vegetation, and other sheltered environments.
          Captive enclosures should provide similar opportunities for hiding,
          exploration, and thermoregulation.
        </RecommendationCard>

        <RecommendationCard
          type="consensus"
          title="Security Reduces Stress"
        >
          Multiple snug hides, visual barriers, and enclosure clutter allow
          Ball Pythons to display natural behaviors while helping many
          individuals feel more secure in captivity.
        </RecommendationCard>

      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">

        <InfoCard
          icon="🌍"
          title="Native Habitat"
        >
          Ball Pythons inhabit grasslands, savannas, lightly wooded areas,
          and agricultural landscapes where suitable shelter and prey are
          available.
        </InfoCard>

        <InfoCard
          icon="🐀"
          title="Natural Diet"
        >
          Wild Ball Pythons feed primarily on small mammals and occasionally
          birds. They are ambush predators that rely on patience rather than
          actively pursuing prey.
        </InfoCard>

        <InfoCard
          icon="🌙"
          title="Daily Activity"
        >
          During daylight hours Ball Pythons often remain hidden inside
          burrows or other secure retreats before becoming more active during
          cooler evening and nighttime periods.
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

        <VetReviewBadge
          status="pending"
          version="0.5"
        />

      </div>

    </section>
  );
}
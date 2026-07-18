import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { SpeciesStat } from "@/app/components/ui/SpeciesStat";
import { RecommendationCard } from "@/app/components/ui/RecommendationCard";
import { InfoCard } from "@/app/components/ui/InfoCard";
import { ReferenceBox } from "@/app/components/ui/ReferenceBox";
import { VetReviewBadge } from "@/app/components/ui/VetReviewBadge";

export function Enclosure() {
  return (
    <section
  id="enclosure"
  className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
>

      <SectionHeading
        eyebrow="Enclosure"
        title="Designing the Ideal Ball Python Habitat"
        description="A properly designed enclosure is the foundation of successful Ball Python husbandry. It should provide security, appropriate environmental gradients, opportunities for natural behavior, and enough space for the snake to fully stretch out and explore."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <SpeciesStat
          label="Adult Enclosure"
          value="4 × 2 × 2 ft"
          description="A 4 × 2 × 2 ft enclosure is widely recommended as a practical minimum for many adult Ball Pythons. Larger enclosures may provide additional opportunities for exercise, environmental enrichment, and natural behaviors."
        />

        <SpeciesStat
          label="Juveniles"
          value="Appropriately Sized"
          accent="green"
          description="Juveniles can thrive in appropriately sized enclosures that provide secure hiding places, environmental gradients, and opportunities to explore. As the snake grows, the enclosure should be upgraded accordingly."
        />

        <SpeciesStat
          label="Temperature"
          value="Thermal Gradient"
          accent="blue"
          description="Provide both warm and cool areas so the snake can regulate its body temperature."
        />

        <SpeciesStat
          label="Humidity"
          value="Stable"
          accent="purple"
          description="Monitor humidity with a calibrated digital hygrometer rather than estimating by appearance."
        />

      </div>

      <div className="mt-16 space-y-8">

        <RecommendationCard
          type="evidence"
          title="Replicate Natural Conditions"
          references={5}
        >
          Ball Pythons naturally seek secure shelters with access to different
          temperatures and humidity levels. Captive enclosures should recreate
          these choices by providing multiple hides, environmental gradients,
          and opportunities for natural behavior.Enclosures should allow the snake to choose between different temperatures, humidity levels, and hiding locations throughout the day.
        </RecommendationCard>

        <RecommendationCard
          type="consensus"
          title="Choose an Enclosure That Maintains Stability"
        >
          PVC enclosures are popular because they generally retain heat and
          humidity well, but glass, wood, and other enclosure materials can
          also work when designed and managed correctly.The best enclosure is one that consistently maintains appropriate environmental conditions and can be easily cleaned and monitored.
        </RecommendationCard>

        <RecommendationCard
          type="warning"
          title="Avoid Empty Enclosures"
        >
          Ball Pythons often feel more secure when provided with multiple hides,
          cork bark, branches, plants, and visual barriers. Large open spaces
          without cover may contribute to stress
        </RecommendationCard>

      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">

        <InfoCard
          icon="🏠"
          title="Choosing an Enclosure"
        >
          Select an enclosure that allows your Ball Python to fully stretch out,
          thermoregulate, and explore while providing multiple secure hiding
          locations.Front-opening enclosures often make routine maintenance and handling less stressful for both the keeper and the snake.
        </InfoCard>

        <InfoCard
          icon="🌿"
          title="Environmental Enrichment"
        >
          Branches, cork bark, plants, leaf litter, and climbing opportunities
          encourage natural behaviors and provide additional security.Rearranging enrichment occasionally can encourage exploration, but avoid frequent major changes that may increase stress.
        </InfoCard>

        <InfoCard
          icon="🌡️"
          title="Environmental Stability"
        >
          Consistent temperatures, humidity, lighting, and husbandry practices
          are generally more important than purchasing expensive equipment.
        </InfoCard>Consistent husbandry is generally more important than purchasing expensive equipment.

<InfoCard
  icon="🔒"
  title="Security"
>
  Ball Pythons are excellent escape artists. Ensure the enclosure has secure
  locks or latches, and inspect doors and vents regularly to prevent escapes.
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
          Association of Reptile and Amphibian Veterinarians (ARAV) husbandry
          guidance and educational resources.
        </p>

      </ReferenceBox>

      <div className="mt-16">

        <VetReviewBadge
          status="pending"
          version="0.6"
        />

      </div>

    </section>
  );
}
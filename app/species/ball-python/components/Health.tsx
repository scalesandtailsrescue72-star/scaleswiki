import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { SpeciesStat } from "@/app/components/ui/SpeciesStat";
import { RecommendationCard } from "@/app/components/ui/RecommendationCard";
import { InfoCard } from "@/app/components/ui/InfoCard";
import { ReferenceBox } from "@/app/components/ui/ReferenceBox";
import { VetReviewBadge } from "@/app/components/ui/VetReviewBadge";

export function Health() {
  return (
    <section
  id="health"
  className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
>

      <SectionHeading
        eyebrow="Health"
        title="Monitoring Health and Recognizing Problems"
        description="Routine observation and good husbandry are the foundation of maintaining a healthy Ball Python. Many health issues can be prevented through proper enclosure design, nutrition, hygiene, and regular monitoring."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <SpeciesStat
          label="Daily Check"
          value="Observe"
          description="Watch for changes in behavior, appetite, and activity."
        />

        <SpeciesStat
          label="Weight"
          value="Monthly"
          accent="blue"
          description="Track weight monthly using a digital gram scale. Consistent weight records are one of the earliest indicators of developing health problems."
        />

        <SpeciesStat
          label="Shedding"
          value="Monitor"
          accent="green"
          description="Healthy sheds are typically complete and occur regularly."
        />

        <SpeciesStat
          label="Veterinary Exam"
          value="When Ill"
          accent="purple"
          description="Consult a reptile veterinarian whenever illness is suspected."
        />

      </div>

      <div className="mt-16 space-y-8">

        <RecommendationCard
          type="evidence"
          title="Early Recognition Improves Outcomes"
          references={4}
        >
          Monitor your Ball Python regularly for changes in appetite, activity,
          breathing, body condition, skin, and shedding. Early recognition of
          abnormalities often allows veterinary care to begin sooner.
        </RecommendationCard>

        <RecommendationCard
          type="tip"
          title="Keep Health Records"
        >
          Recording feeding dates, shedding events, weights, and behavioral
          observations can help identify trends over time and provide valuable
          information for your veterinarian.
        </RecommendationCard>

        <RecommendationCard
          type="warning"
          title="Do Not Attempt to Diagnose Serious Illness Online"
        >
          Information found online should not replace examination by a qualified
          reptile veterinarian. Seek professional care if your snake appears ill
          or has persistent abnormal symptoms.
        </RecommendationCard>

      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">

        <InfoCard
          icon="🫁"
          title="Respiratory Problems"
        >
          Wheezing, bubbling around the nostrils or mouth, open-mouth breathing,
          or repeated mucus production require prompt veterinary evaluation.
        </InfoCard>

        <InfoCard
          icon="🐍"
          title="Shedding Issues"
        >
          Retained shed may indicate problems with humidity or hydration.
          Persistent retained shed should be evaluated and addressed safely.
        </InfoCard>

        <InfoCard
          icon="⚖️"
          title="Body Condition"
        >
          Sudden weight loss, obesity, or visible changes in body shape should
          be investigated. Regular weight tracking is one of the best ways to
          monitor long-term health.
        </InfoCard>

      </div>

      <ReferenceBox>

        <p>
          Divers SJ, Mader DR.
          <em> Current Therapy in Reptile Medicine and Surgery.</em>
        </p>

        <p>
          Association of Reptile and Amphibian Veterinarians (ARAV) educational
          resources.
        </p>

        <p>
          Peer-reviewed veterinary literature on reptile medicine and welfare.
        </p>

      </ReferenceBox>

      <div className="mt-16">

       <VetReviewBadge status="pending" />

      </div>

    </section>
  );
}
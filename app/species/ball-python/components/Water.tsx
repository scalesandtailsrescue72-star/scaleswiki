import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { SpeciesStat } from "@/app/components/ui/SpeciesStat";
import { RecommendationCard } from "@/app/components/ui/RecommendationCard";
import { InfoCard } from "@/app/components/ui/InfoCard";
import { ReferenceBox } from "@/app/components/ui/ReferenceBox";
import { VetReviewBadge } from "@/app/components/ui/VetReviewBadge";

export function Water() {
  return (
    
    <section
    id="water" 
    className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Water"
        title="Hydration, Water Quality & Drinking Behavior"
        description="Fresh, clean water is essential for hydration, healthy shedding, kidney function, digestion, and overall health. Every Ball Python should have uninterrupted access to clean drinking water."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <SpeciesStat label="Fresh Water" value="Always" description="Clean drinking water should always be available." />
        <SpeciesStat label="Water Temperature" value="Room Temp" accent="blue" description="Avoid extremely hot or cold water." />
        <SpeciesStat label="Bowl Cleaning" value="Daily" accent="green" description="Replace dirty water immediately." />
        <SpeciesStat label="Water Bowl" value="Heavy" accent="purple" description="Choose a stable bowl that resists tipping." />
      </div>

      <div className="mt-16 space-y-8">
        <RecommendationCard type="evidence" title="Fresh Water Every Day" references={3}>
          Replace drinking water at least once daily and immediately if it becomes contaminated with substrate, feces, urates, or shed skin.
        </RecommendationCard>

        <RecommendationCard type="consensus" title="Use a Heavy Ceramic Bowl">
          Ceramic or stone bowls are durable, difficult to tip, easy to disinfect, and may provide a small contribution to enclosure humidity.
        </RecommendationCard>

        <RecommendationCard type="consensus" title="Monitor Drinking Behavior">
          Ball Pythons often drink when their keeper is not present. Instead of relying on observation alone, monitor hydration, body condition, and shedding quality.
        </RecommendationCard>

        <RecommendationCard type="warning" title="Constant Soaking Deserves Investigation">
          Occasional soaking can be normal, particularly during shedding. Persistent soaking should prompt a review of enclosure conditions and may warrant veterinary advice if accompanied by other clinical signs.
        </RecommendationCard>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        <InfoCard icon="💧" title="Water Quality">
          Most keepers successfully use municipal tap water. If your local supply is known to have issues, discuss suitable alternatives with your veterinarian.
        </InfoCard>

        <InfoCard icon="🧼" title="Cleaning Routine">
          Wash the bowl with hot water during routine maintenance and periodically disinfect it with a reptile-safe disinfectant before rinsing thoroughly.
        </InfoCard>

        <InfoCard icon="🐍" title="Hydration">
          Healthy hydration supports kidney function, digestion, normal skin health, and successful shedding.
        </InfoCard>

        <InfoCard icon="🌿" title="Humidity">
          Water bowls contribute only modestly to enclosure humidity. Proper substrate and enclosure design remain the primary tools for maintaining humidity.
        </InfoCard>

        <InfoCard icon="👀" title="Watch For">
          Sunken eyes, repeated poor sheds, tacky saliva, and loss of skin elasticity may indicate dehydration and should be evaluated together with overall husbandry.
        </InfoCard>

        <InfoCard icon="🏥" title="Rescue Note">
          Many rescued Ball Pythons arrive chronically dehydrated. Correcting hydration should always occur alongside improvements to temperature, humidity, nutrition, and enclosure design.
        </InfoCard>
      </div>

      <div className="mt-16 overflow-hidden rounded-3xl border border-white/10">
        <table className="w-full">
          <thead className="bg-[#16231c] text-left text-white">
            <tr>
              <th className="p-4">Situation</th>
              <th className="p-4">Likely Explanation</th>
              <th className="p-4">Recommended Action</th>
            </tr>
          </thead>
          <tbody className="bg-[#101B15] text-gray-300">
            <tr>
              <td className="p-4">Dirty water every day</td>
              <td className="p-4">Substrate or waste contamination</td>
              <td className="p-4">Clean bowl and review placement.</td>
            </tr>
            <tr>
              <td className="p-4">Frequent soaking</td>
              <td className="p-4">Shedding or husbandry issue</td>
              <td className="p-4">Review humidity, temperature, and inspect for mites.</td>
            </tr>
            <tr>
              <td className="p-4">Rarely seen drinking</td>
              <td className="p-4">Often normal behavior</td>
              <td className="p-4">Monitor hydration rather than observation alone.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ReferenceBox>
        <p>Divers SJ, Mader DR. <em>Current Therapy in Reptile Medicine and Surgery.</em></p>
        <p>Association of Reptile and Amphibian Veterinarians (ARAV) husbandry guidance.</p>
        <p>Peer-reviewed literature on reptile hydration, renal physiology, and captive husbandry.</p>
      </ReferenceBox>

      <div className="mt-16">
        <VetReviewBadge status="pending" />
      </div>
    </section>
  );
}

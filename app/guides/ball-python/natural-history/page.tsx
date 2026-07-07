import ChapterLayout from "@/app/components/ChapterLayout";
import KeeperInsight from "@/app/components/callouts/KeeperInsight";
import VetPerspective from "@/app/components/callouts/VetPerspective";
import CommonMistake from "@/app/components/callouts/CommonMistake";
import WhyThisMatters from "@/app/components/callouts/WhyThisMatters";

export default function NaturalHistoryPage() {
  return (
    <ChapterLayout
      chapter="Chapter 2"
      title="Natural History"
      readingTime="8 minutes"
      guideHref="/guides/ball-python"
      previousHref="/guides/ball-python/introduction"
      nextHref="/guides/ball-python/is-a-ball-python-right-for-you"
    >
      <p className="text-lg text-gray-300">
        Understanding the natural history of the ball python provides the
        foundation for successful captive care. Every aspect of modern
        husbandry—from enclosure design and heating to humidity and feeding—is
        rooted in the environments where this species evolved.
      </p>

      <section className="mt-12 rounded-2xl border border-[#2ECC71]/30 bg-[#10351E] p-8">
        <h2 className="text-2xl font-bold text-[#2ECC71]">
          Species Profile
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold">Scientific Name</h3>
            <p className="italic text-gray-300">Python regius</p>
          </div>

          <div>
            <h3 className="font-semibold">Family</h3>
            <p className="text-gray-300">Pythonidae</p>
          </div>

          <div>
            <h3 className="font-semibold">Native Range</h3>
            <p className="text-gray-300">West & Central Africa</p>
          </div>

          <div>
            <h3 className="font-semibold">Average Length</h3>
            <p className="text-gray-300">3–5 feet (0.9–1.5 m)</p>
          </div>

          <div>
            <h3 className="font-semibold">Lifespan</h3>
            <p className="text-gray-300">20–30+ years</p>
          </div>

          <div>
            <h3 className="font-semibold">IUCN Status</h3>
            <p className="text-gray-300">Least Concern</p>
          </div>
        </div>
      </section>

      <KeeperInsight>
        Successful husbandry begins with understanding where a species evolved.
        Ball pythons evolved in warm environments with abundant secure hiding
        places. Every major husbandry recommendation in this guide is rooted in
        that natural history.
      </KeeperInsight>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">Native Range</h2>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Ball pythons occur throughout portions of West and Central Africa,
          occupying savannas, open woodlands, agricultural landscapes and forest
          edges.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Their habitats all share one important feature—secure refuges where
          the snake can avoid predators and regulate temperature and humidity.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">Habitat & Climate</h2>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Ball pythons experience warm temperatures year-round with distinct wet
          and dry seasons. They spend much of the day inside burrows, termite
          mounds and dense vegetation where environmental conditions remain more
          stable.
        </p>
      </section>

      <WhyThisMatters>
        Understanding the species' natural environment explains why captive
        enclosures require thermal gradients, secure hides and appropriate
        humidity rather than one uniform environment.
      </WhyThisMatters>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">Daily Activity & Behavior</h2>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Ball pythons are primarily crepuscular and nocturnal ambush predators.
          Healthy individuals often remain hidden during the day and become more
          active after dusk.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">Diet in the Wild</h2>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Wild ball pythons primarily consume small mammals. They rely on
          patience, camouflage and ambush hunting rather than actively pursuing
          prey.
        </p>
      </section>

      <VetPerspective>
        Feeding schedules should be based on age, body condition and individual
        health rather than rigid calendar schedules.
      </VetPerspective>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">Predators & Defense</h2>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Ball pythons avoid confrontation whenever possible. Their famous
          defensive posture—curling into a tight ball—helps protect the head
          from predators.
        </p>
      </section>

      <CommonMistake>
        Hiding during the day is normal behavior and should not automatically be
        interpreted as illness or an unfriendly temperament.
      </CommonMistake>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">Reproduction</h2>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Females lay eggs inside protected shelters and remain coiled around
          them during incubation until the hatchlings emerge.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">Conservation</h2>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Ball pythons are currently listed as Least Concern, although habitat
          loss and collection pressure affect some local populations.
        </p>
      </section>

      <section className="mt-16 rounded-2xl border border-[#2ECC71] bg-[#10351E] p-8">
        <h2 className="text-3xl font-bold text-[#2ECC71]">
          Natural History → Husbandry Connections
        </h2>

        <ul className="mt-8 space-y-4 text-gray-300">
          <li>• Wild snakes hide → Provide multiple secure hides.</li>
          <li>• Wild snakes thermoregulate → Provide a thermal gradient.</li>
          <li>• Wild snakes experience seasonal humidity → Maintain proper humidity.</li>
          <li>• Wild snakes are ambush predators → Feed appropriate prey at appropriate intervals.</li>
        </ul>
      </section>

      <section className="mt-16 rounded-2xl border border-white/10 bg-[#122018] p-8">
        <h2 className="text-3xl font-bold">Chapter Summary</h2>

        <ul className="mt-8 space-y-3 text-gray-300">
          <li>✓ Native to West & Central Africa.</li>
          <li>✓ Warm, humid microhabitats influence captive care.</li>
          <li>✓ Primarily crepuscular and nocturnal.</li>
          <li>✓ Ambush predator.</li>
          <li>✓ Natural history should guide husbandry decisions.</li>
        </ul>
      </section>
    </ChapterLayout>
  );
}
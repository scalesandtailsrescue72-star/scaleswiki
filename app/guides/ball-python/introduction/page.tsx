import ChapterLayout from "@/app/components/ChapterLayout";
import KeeperInsight from "@/app/components/callouts/KeeperInsight";
import DecisionChecklist from "@/app/components/DecisionChecklist";
import ChapterSnapshot from "@/app/components/snapshots/ChapterSnapshot";

export default function IntroductionPage() {
  return (
    <ChapterLayout
      chapter="Chapter 1"
      title="Introduction"
      readingTime="6 minutes"
      guideHref="/guides/ball-python"
      previousHref="/guides/ball-python"
      nextHref="/guides/ball-python/natural-history"
    >
      <p className="text-lg leading-8 text-gray-300">
        Welcome to the ScalesWiki Ball Python Care Guide. This guide is designed
        to help both new and experienced keepers provide evidence-informed,
        responsible care for one of the world's most popular pet snakes.
      </p>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">Why This Guide Exists</h2>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Ball pythons are often recommended as beginner reptiles, but they are
          still complex animals with specific environmental, nutritional, and
          health requirements. This guide explains not only what to do, but why
          those recommendations matter.
        </p>
      </section>

      <KeeperInsight>
        Successful reptile keeping starts with understanding the natural needs
        of the animal—not simply following a checklist.
      </KeeperInsight>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          Evidence-Informed Husbandry
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Throughout this guide you'll find recommendations based on current
          husbandry practices, veterinary guidance, and the natural history of
          the species. Reptile care continues to evolve, and ScalesWiki is
          committed to keeping information accurate and up to date.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          A Long-Term Commitment
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Healthy ball pythons commonly live for twenty to thirty years, and
          some live even longer. Bringing one home is a long-term commitment
          that deserves thoughtful planning.
        </p>
      </section>

      <DecisionChecklist
        title="Before You Continue"
        items={[
          "I understand that a ball python may live for decades.",
          "I am willing to continue learning as husbandry recommendations improve.",
          "I understand this guide is educational and not a substitute for veterinary care.",
          "I am committed to responsible reptile ownership.",
        ]}
      />

      <section className="mt-16 rounded-2xl border border-white/10 bg-[#122018] p-8">
        <h2 className="text-3xl font-bold">
          Chapter Summary
        </h2>

        <ul className="mt-8 space-y-3 text-gray-300">
          <li>✓ This guide is based on evidence-informed husbandry.</li>
          <li>✓ Responsible reptile ownership begins with education.</li>
          <li>✓ Ball pythons are a long-term commitment.</li>
          <li>✓ Understanding natural history improves captive care.</li>
        </ul>
      </section>
      <ChapterSnapshot
  number="001"
  chapter="Chapter 1"
  title="Introduction"
>
  <ul className="space-y-4">
    <li>✓ Ball pythons require specialized care.</li>
    <li>✓ Responsible ownership begins with education.</li>
    <li>✓ Husbandry recommendations should be evidence-informed.</li>
    <li>✓ Caring for a ball python is a long-term commitment.</li>
  </ul>
</ChapterSnapshot>
    </ChapterLayout>
  );
}
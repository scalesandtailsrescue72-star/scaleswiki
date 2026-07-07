import ChapterLayout from "@/app/components/ChapterLayout";
import DecisionChecklist from "@/app/components/callouts/DecisionChecklist";
import KeeperInsight from "@/app/components/callouts/KeeperInsight";

export default function IsABallPythonRightForYouPage() {
  return (
    <ChapterLayout
      chapter="Chapter 3"
      title="Is a Ball Python Right for You?"
      readingTime="10 minutes"
      guideHref="/guides/ball-python"
      previousHref="/guides/ball-python/natural-history"
      nextHref="/guides/ball-python/preparing-before-you-buy"
    >
      <p className="text-lg text-gray-300">
        Choosing a ball python should never be an impulse decision. These snakes
        are remarkable animals, but they require a long-term commitment of
        time, money, and responsible care. This chapter will help you honestly
        evaluate whether a ball python is the right pet for your lifestyle and
        expectations.
      </p>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          Why This Chapter Matters
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          The goal of this guide is not to convince you to own a ball python.
          Instead, it is to provide the information you need to make a thoughtful,
          informed decision. Sometimes the most responsible choice is deciding
          to wait until your circumstances are better suited for caring for one.
        </p>
      </section><section className="mt-16">
  <h2 className="text-3xl font-bold">
    A Long-Term Commitment
  </h2>

  <p className="mt-6 text-lg leading-8 text-gray-300">
    Ball pythons are among the longest-lived reptiles commonly kept in
    captivity. With proper husbandry and veterinary care, many individuals
    live for 20 to 30 years, and some exceed that. Bringing home a ball
    python is a commitment that can span decades.
  </p>

  <p className="mt-6 text-lg leading-8 text-gray-300">
    Think about how much your own life may change during that time. You may
    move to a new home, attend college, change careers, start a family, or
    relocate to another state. A responsible keeper plans for those changes
    before acquiring an animal, not after.
  </p>

  <p className="mt-6 text-lg leading-8 text-gray-300">
    Ask yourself whether you can continue providing proper housing, heating,
    nutrition, and veterinary care regardless of where life takes you. If
    the answer is uncertain, waiting until your circumstances are more stable
    may be the most responsible decision.
  </p>
</section>

<KeeperInsight>
  A ball python may be with you longer than your first car, your first home,
  or even your first career. Choosing to own one means planning for decades
  of responsible care, not just the excitement of bringing home a new pet.
</KeeperInsight>
<DecisionChecklist>
  <ul className="space-y-4">
    <li>☐ I understand a ball python may live 20–30+ years.</li>
    <li>☐ I have space for an adult enclosure.</li>
    <li>☐ I am comfortable feeding frozen-thawed rodents.</li>
    <li>☐ I have identified a qualified reptile veterinarian.</li>
    <li>☐ I can afford routine and emergency veterinary care.</li>
    <li>☐ I am prepared to care for this animal throughout major life changes.</li>
  </ul>
</DecisionChecklist>
    </ChapterLayout>
  );
}
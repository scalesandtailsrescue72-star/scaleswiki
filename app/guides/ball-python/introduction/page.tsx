import ChapterLayout from "../../../components/ChapterLayout";

export default function IntroductionPage() {
  return (
    <ChapterLayout
      chapter="Chapter 1"
      title="Introduction"
      readingTime="3 minutes"
      guideHref="/guides/ball-python"
      nextHref="/guides/ball-python/natural-history"
    >
      <p className="text-lg text-gray-300">
        Ball pythons are calm, manageable reptiles that thrive when their
        environment closely matches their natural habitat. This guide was
        created to help keepers build confidence through evidence-informed
        husbandry, practical experience, and veterinary-reviewed
        recommendations.
      </p>

      <p className="mt-8 text-lg text-gray-300">
        Whether this is your first snake or your tenth, understanding the
        fundamentals of proper care is the foundation of keeping a healthy,
        stress-free animal.
      </p>

      <section className="mt-12 rounded-2xl border border-[#2ECC71]/30 bg-[#10351E] p-8">
        <h2 className="text-2xl font-bold text-[#2ECC71]">
          Quick Reference
        </h2>

        <ul className="mt-6 space-y-3 text-gray-300">
          <li>✔ Excellent beginner snake</li>
          <li>✔ Generally calm temperament</li>
          <li>✔ Requires proper heat and humidity</li>
          <li>✔ Long lifespan with proper care</li>
        </ul>
      </section>
    </ChapterLayout>
  );
}
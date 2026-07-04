const features = [
  {
    title: "📚 Care Guides",
    text: "Detailed, evidence-based reptile care guides with printable checklists and logs.",
  },
  {
    title: "🎓 Keeper Academy",
    text: "A 52-week learning journey covering husbandry from beginner to advanced levels.",
  },
  {
    title: "❤️ Rescue Mission",
    text: "Every purchase directly supports Scales & Tails Reptile Rescue.",
  },
];

export function FeatureCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="rounded-2xl border border-white/10 bg-gray-900/70 p-6">
            <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-4 text-sm leading-7 text-gray-300">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

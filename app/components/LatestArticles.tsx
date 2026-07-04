const articles = [
  {
    title: "How to Build a Safe Seasonal Routine",
    description: "Practical steps for adapting your reptile care plan as temperatures and activity change.",
  },
  {
    title: "The Essentials of Healthy Shedding",
    description: "A simple guide to spotting common issues and supporting a smooth shed cycle.",
  },
  {
    title: "What to Pack for a Reptile Vet Visit",
    description: "A checklist to help you bring the right notes and supplies when it matters most.",
  },
];

export function LatestArticles() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">Latest articles</p>
        <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Fresh guidance for everyday reptile care.</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {articles.map((article) => (
          <article key={article.title} className="rounded-2xl border border-white/10 bg-[#101B15] p-6">
            <h3 className="text-xl font-semibold text-white">{article.title}</h3>
            <p className="mt-3 text-sm leading-7 text-gray-300">{article.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

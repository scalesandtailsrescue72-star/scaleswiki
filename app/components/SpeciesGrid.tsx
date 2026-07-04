const species = [
  {
    name: "Leopard Gecko",
    description: "Gentle, beginner-friendly care guidance with habitat and feeding essentials.",
    accent: "🦎",
  },
  {
    name: "Ball Python",
    description: "Warmth, enrichment, and feeding routines for a calm and curious snake.",
    accent: "🐍",
  },
  {
    name: "Bearded Dragon",
    description: "Lighting, nutrition, and handling tips for active, engaging reptiles.",
    accent: "🦎",
  },
];

export function SpeciesGrid() {
  return (
    <section id="guides" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">Popular guides</p>
          <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Care resources for the reptiles you love.</h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {species.map((item) => (
          <article key={item.name} className="rounded-2xl border border-white/10 bg-[#101B15] p-6 shadow-lg shadow-black/20">
            <div className="text-4xl">{item.accent}</div>
            <h3 className="mt-4 text-xl font-semibold text-white">{item.name}</h3>
            <p className="mt-3 text-sm leading-7 text-gray-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

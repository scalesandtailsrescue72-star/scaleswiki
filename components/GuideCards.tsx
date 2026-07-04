const guides = [
  { title: "Enclosure Checklist", detail: "A printable setup guide for new reptile keepers." },
  { title: "Feeding Log", detail: "Track meals, shedding cycles, and health observations." },
  { title: "Emergency Care Sheet", detail: "Quick-reference steps for common care concerns." },
];

export function GuideCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2ECC71]">Featured PDF guides</p>
        <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Practical downloads for everyday husbandry.</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {guides.map((guide) => (
          <div key={guide.title} className="rounded-2xl border border-white/10 bg-[#122018] p-6">
            <h3 className="text-xl font-semibold text-white">{guide.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{guide.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

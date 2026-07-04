const resources = [
  { title: "Enclosure Checklist", detail: "A printable setup guide for new reptile keepers." },
  { title: "Feeding Log", detail: "Track meals, shedding cycles, and health observations." },
  { title: "Emergency Care Sheet", detail: "Quick-reference steps for common reptile care concerns." },
];

export function PdfStore() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-950/80 to-[#0D1610] p-8 sm:p-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">Printable resources</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Downloadable PDFs for everyday reptile care.</h2>
          <p className="mt-4 text-lg text-gray-300">
            Keep your husbandry routines organized with clean, practical guides you can print at home.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {resources.map((resource) => (
            <div key={resource.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-lg font-semibold text-white">{resource.title}</p>
              <p className="mt-2 text-sm text-gray-300">{resource.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

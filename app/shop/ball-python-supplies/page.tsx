import Link from "next/link";

const groups = [
  {
    title: "Enclosure & Security",
    items: [
      ["Required", "Secure adult enclosure", "Plan around a 4 × 2 × 2 ft minimum adult enclosure with secure, escape-resistant doors and ventilation."],
      ["Required", "Two snug hides", "Provide at least one secure hide on the warm side and one on the cool side."],
      ["Recommended", "Clutter and cover", "Artificial plants, cork, branches, and other visual barriers help the snake move through the enclosure while feeling protected."],
      ["Recommended", "Climbing opportunities", "Stable branches or low climbing structures add usable space and enrichment."],
    ],
  },
  {
    title: "Heat & Environmental Monitoring",
    items: [
      ["Required", "Appropriate heat source", "Choose a heat source suited to the enclosure design and room conditions."],
      ["Required", "Thermostat", "Every heat source capable of overheating the enclosure should be controlled by an appropriate thermostat."],
      ["Required", "Digital probe thermometers", "Measure the warm and cool areas rather than estimating temperature by touch."],
      ["Required", "Digital hygrometer", "Use a reliable hygrometer to monitor enclosure humidity."],
      ["Recommended", "Infrared temperature gun", "Useful for quick surface-temperature checks, but not a replacement for continuous probe monitoring."],
      ["Recommended", "Day/night lighting", "Provide a consistent light-dark cycle appropriate for the enclosure and room."],
    ],
  },
  {
    title: "Substrate, Water & Cleaning",
    items: [
      ["Required", "Appropriate substrate", "Choose a substrate that supports safe husbandry and moisture management. Avoid aromatic cedar and pine products."],
      ["Required", "Sturdy water bowl", "Use a stable bowl that is easy to remove, wash, disinfect, and refill with fresh water."],
      ["Required", "Reptile-safe cleaning supplies", "Keep cleaning products and tools dedicated to reptile husbandry and follow product directions."],
      ["Recommended", "Disposable gloves / paper towels", "Useful for spot cleaning and reducing cross-contamination during messy cleanups."],
    ],
  },
  {
    title: "Feeding & Routine Care",
    items: [
      ["Required", "Frozen-thawed appropriately sized prey", "Choose prey size and feeding frequency based on the individual snake's age, size, and body condition."],
      ["Required", "Feeding tongs", "Long feeding tongs keep hands away from the prey item and make feeding more controlled."],
      ["Recommended", "Digital gram scale", "Regular weight records help you identify trends that can be difficult to notice visually."],
      ["Recommended", "Husbandry log", "Track feeding, weight, sheds, stools, behavior, temperatures, humidity, and health observations."],
    ],
  },
  {
    title: "Quarantine Kit",
    items: [
      ["Required", "Separate quarantine enclosure", "New reptiles should be housed separately from established animals during quarantine."],
      ["Required", "Dedicated quarantine tools", "Use separate tongs, bowls, cleaning tools, and other supplies for quarantined animals."],
      ["Required", "Paper substrate", "A simple disposable substrate makes observation and sanitation easier during quarantine."],
      ["Recommended", "Veterinary exam & testing plan", "Arrange an examination with a reptile-experienced veterinarian and follow individualized recommendations for fecal or pathogen testing."],
    ],
  },
];

function Badge({ type }: { type: string }) {
  const required = type === "Required";
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${required ? "bg-green-500/15 text-green-300" : "bg-amber-400/10 text-amber-200"}`}>
      {type}
    </span>
  );
}

export default function BallPythonSuppliesPage() {
  return (
    <main className="min-h-screen bg-[#0B1411] text-white">
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <Link href="/species/ball-python" className="text-sm font-semibold text-green-400 hover:text-green-300">← Ball Python Care Guide</Link>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">Equipment Checklist</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold sm:text-5xl">Ball Python Supplies & Setup Checklist</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
          Build the enclosure before your snake comes home. This retailer-neutral checklist explains what you need, what is optional, and why each item matters so you can shop by husbandry requirement instead of marketing claims.
        </p>

        <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-500/5 p-6">
          <h2 className="text-lg font-semibold text-green-300">Before you buy</h2>
          <p className="mt-2 leading-7 text-gray-300">Set up and test heating, thermostat control, temperature monitoring, and humidity before the animal arrives. Product choice does not replace correct setup and measurement.</p>
        </div>

        <div className="mt-12 space-y-10">
          {groups.map((group) => (
            <section key={group.title}>
              <h2 className="text-2xl font-semibold">{group.title}</h2>
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#101B15]">
                {group.items.map(([type, item, description], index) => (
                  <div key={item} className={`p-6 ${index ? "border-t border-white/10" : ""}`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge type={type} />
                      <h3 className="text-lg font-semibold">{item}</h3>
                    </div>
                    <p className="mt-3 leading-7 text-gray-300">{description}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-[#101B15] p-7">
          <h2 className="text-xl font-semibold">A note about product links</h2>
          <p className="mt-3 leading-7 text-gray-300">ScalesWiki currently keeps this checklist retailer-neutral. When specific recommended products are added, the husbandry requirement will remain the priority. Any future affiliate relationship will be clearly disclosed.</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/species/ball-python" className="rounded-xl bg-green-600 px-5 py-3 font-semibold transition hover:bg-green-500">Read the full Ball Python guide</Link>
          <Link href="/articles/quarantine-for-new-reptiles" className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-gray-200 transition hover:border-green-500/40">Read the quarantine article</Link>
        </div>

        <p className="mt-10 text-sm leading-6 text-gray-400">ScalesWiki provides educational husbandry information, not individualized veterinary diagnosis or treatment. Husbandry recommendations may be refined as veterinary review continues.</p>
      </section>
    </main>
  );
}

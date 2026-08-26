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

const recommendedProducts = [
  {
    category: "Adult enclosure",
    name: "Kages 4 × 2 × 2 PVC Reptile Enclosure",
    why: "A full-size PVC enclosure with secure sliding doors, strong heat/humidity retention, easy-clean nonporous surfaces, and configuration options appropriate for overhead heat and lighting.",
    note: "Choose the venting and screen configuration around your actual heating and lighting plan before ordering.",
    href: "https://reptilekages.com/products/4x2x2-premium-pvc-reptile-enclosure-kit",
  },
  {
    category: "Thermostat",
    name: "Spyder Robotics Herpstat 1",
    why: "A proportional thermostat with dimming/pulse control, high/low alarms, probe-failure protection, soft startup, and a built-in safety relay. A strong fit for a single primary heat source.",
    note: "If you need independent control of multiple heat devices, choose a multi-output Herpstat model instead.",
    href: "https://spyderrobotics.com/index.php?main_page=product_info&products_id=25",
  },
  {
    category: "Heat source",
    name: "Arcadia Reptile Deep Heat Projector",
    why: "A dimmable overhead heat source available in 50 W and 80 W versions. Arcadia specifically instructs users to run it through a thermostat.",
    note: "Do not choose wattage by guesswork. Enclosure material, room temperature, mounting height, ventilation, and target temperatures all matter.",
    href: "https://arcadiareptile.com/heating/deep-heat-projector/",
  },
  {
    category: "Temperature & humidity monitor",
    name: "Govee H5075 Bluetooth Hygrometer Thermometer",
    why: "Provides temperature and humidity readings, app alerts, stored history, and exportable data, making it useful for spotting trends instead of relying on one-time readings.",
    note: "Use it as an environmental monitor, not as the thermostat that controls the heat source.",
    href: "https://us.govee.com/products/govee-bluetooth-hygrometer-thermometer-h5075",
  },
  {
    category: "Substrate",
    name: "ReptiChip Coconut Chip Substrate",
    why: "A coconut-husk substrate option with strong moisture retention and multiple chip sizes. ReptiChip specifically lists pythons among its intended uses.",
    note: "Adjust moisture based on measured enclosure humidity rather than keeping the substrate uniformly wet.",
    href: "https://reptichip.com/products/reptichip-breeder-blocks-and-bundles",
  },
  {
    category: "Secure hide",
    name: "Zilla Rock Lair",
    why: "A dark, enclosed hide with multiple sizes available. The design reduces light exposure inside and gives the snake a more secure retreat.",
    note: "Choose a size that lets your ball python contact the sides of the hide rather than sitting in an oversized cave.",
    href: "https://www.zillarules.com/all-products/decor/rock-lair",
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
          Build the enclosure before your snake comes home. This checklist explains what you need, what is optional, and why each item matters so you can shop by husbandry requirement instead of marketing claims.
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

        <section className="mt-16 border-t border-white/10 pt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">ScalesWiki Recommended</p>
          <h2 className="mt-3 text-3xl font-semibold">Research-backed product options</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-300">
            These are examples that match the husbandry requirements above. We prioritize controllability, safety features, enclosure suitability, monitoring quality, and practical keeper use. You do not need to buy these exact brands to provide good care.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {recommendedProducts.map((product) => (
              <article key={product.name} className="rounded-2xl border border-white/10 bg-[#101B15] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-400">{product.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{product.name}</h3>
                <p className="mt-3 leading-7 text-gray-300">{product.why}</p>
                <p className="mt-3 text-sm leading-6 text-gray-400"><strong className="text-gray-300">Setup note:</strong> {product.note}</p>
                <a href={product.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl border border-green-600/60 px-4 py-2 text-sm font-semibold text-green-300 transition hover:bg-green-900/40">
                  View manufacturer / product page →
                </a>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-12 rounded-2xl border border-white/10 bg-[#101B15] p-7">
          <h2 className="text-xl font-semibold">Product-link disclosure</h2>
          <p className="mt-3 leading-7 text-gray-300">
            ScalesWiki does not currently receive a commission from the product links on this page. If affiliate links are introduced later, they will be clearly disclosed and will not change the husbandry standards used to select products.
          </p>
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

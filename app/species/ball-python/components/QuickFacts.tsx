export function QuickFacts() {
  const facts = [
    { title: "🐍 Scientific Name", value: "Python regius" },
    { title: "🌍 Native Range", value: "West & Central Africa" },
    { title: "📏 Adult Length", value: "3–5 ft (0.9–1.5 m)" },
    { title: "⚖️ Adult Weight", value: "1.5–5 lb (0.7–2.3 kg)" },
    { title: "⏳ Lifespan", value: "20–30+ Years" },
    { title: "🟢 Experience", value: "Beginner-Friendly with Proper Research" },
    { title: "😌 Temperament", value: "Generally Docile" },
    { title: "🌙 Activity", value: "Primarily Crepuscular to Nocturnal" },
    { title: "🏠 Adult Enclosure", value: "Minimum 4 × 2 × 2 ft (120 × 60 × 60 cm)" },
    { title: "🌡️ Warm Side", value: "88–92°F (31–33°C)" },
    { title: "❄️ Cool Side", value: "76–80°F (24–27°C)" },
    { title: "💧 Humidity", value: "60–70% (70–80% During Shed)" },
    { title: "🍽️ Diet", value: "Frozen/Thawed Rodents" },
    { title: "☀️ UVB", value: "Beneficial (Low-Output)" },
    { title: "📖 IUCN Status", value: "Least Concern" },
  ];

  return (
    <section id="quick-facts" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">Species Overview</p>
        <h2 className="mt-4 text-5xl font-bold text-white">Quick Facts</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
          An at-a-glance summary of the essential husbandry requirements for maintaining a healthy Ball Python in captivity.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {facts.map((fact) => (
          <div key={fact.title} className="rounded-3xl border border-white/10 bg-[#101B15] p-8 transition duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-2xl">
            <p className="text-sm uppercase tracking-widest text-green-400">{fact.title}</p>
            <h3 className="mt-4 text-2xl font-bold text-white">{fact.value}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

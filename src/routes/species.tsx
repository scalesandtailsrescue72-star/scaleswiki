import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/species")({ component: SpeciesLibrary });

const species = [
  { name: "Bearded Dragon", latin: "Pogona vitticeps", description: "One of the most popular pet reptiles. Our vet-reviewed guides cover enclosure setup, UVB lighting, diet, brumation cycles, and common health issues.", topics: ["Lighting & UVB", "Diet & Supplementation", "Brumation", "MBD Prevention"], difficulty: "Beginner" },
  { name: "Ball Python", latin: "Python regius", description: "Known for their docile temperament. Get expert guidance on humidity management, feeding schedules, shedding issues, and respiratory health.", topics: ["Humidity & Shedding", "Feeding Guide", "Enclosure Size", "Common Ailments"], difficulty: "Beginner" },
  { name: "Leopard Gecko", latin: "Eublepharis macularius", description: "Hardy and beginner-friendly. Learn about heat gradients, calcium supplementation, handling techniques, and breeding setups.", topics: ["Heat Gradients", "Calcium & D3", "Handling", "Breeding"], difficulty: "Beginner" },
  { name: "Russian Tortoise", latin: "Testudo horsfieldii", description: "Active and personable tortoises. Covers hibernation protocols, pyramiding prevention, and seasonal care.", topics: ["Outdoor Enclosure", "Hibernation", "Pyramiding", "Seasonal Care"], difficulty: "Intermediate" },
  { name: "Crested Gecko", latin: "Correlophus ciliatus", description: "Nocturnal, arboreal geckos. Learn about bio-active setups, temperature requirements, and tail loss recovery.", topics: ["Bioactive Setup", "Temperature", "Breeding", "Tail Loss"], difficulty: "Beginner" },
  { name: "Corn Snake", latin: "Pantherophis guttatus", description: "Active, curious snakes. Get protocols for escape-proof enclosures, feeding, handling, and scale rot prevention.", topics: ["Escape-Proof Enclosure", "Feeding Schedule", "Handling", "Scale Rot"], difficulty: "Beginner" },
  { name: "Green Iguana", latin: "Iguana iguana", description: "Large, intelligent lizards requiring specialized care. Covers enclosure requirements, proper UVB, renal health.", topics: ["Giant Enclosures", "UVB Requirements", "Renal Health", "Behavior"], difficulty: "Advanced" },
  { name: "Red-Eared Slider", latin: "Trachemys scripta elegans", description: "Semiaquatic turtles with specific water quality needs. Covers filtration, basking setups, shell health.", topics: ["Filtration", "Basking Setup", "Shell Health", "Aquatic UVB"], difficulty: "Intermediate" },
];

function SpeciesLibrary() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: "#2ECC71" }}>Species Library</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Expert care guides for every reptile</h1>
          <p className="mt-4 text-lg" style={{ color: "var(--text-gray)" }}>Each species has unique needs. Our vet-reviewed guides give you the protocols that work.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {species.map((s) => (
            <div key={s.name} className="rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: "rgba(255,255,255,0.1)", background: "#101B15" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(46,204,113,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="rounded-full px-3 py-1 text-sm font-semibold" style={{ background: "#16A34A", color: "white" }}>{s.difficulty}</span>
              </div>
              <h2 className="text-xl font-semibold text-white">{s.name}</h2>
              <p className="mt-1 text-sm italic" style={{ color: "#2ECC71" }}>{s.latin}</p>
              <p className="mt-2 text-sm" style={{ color: "var(--text-gray)" }}>{s.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.topics.map((t) => (
                  <span key={t} className="rounded-full px-2.5 py-0.5 text-xs font-medium" style={{ background: "rgba(46,204,113,0.1)", color: "#2ECC71" }}>{t}</span>
                ))}
              </div>
              <a href="#" className="mt-4 inline-flex items-center text-sm font-semibold transition" style={{ color: "#2ECC71" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#27AE60"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#2ECC71"}>View care guide &rarr;</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

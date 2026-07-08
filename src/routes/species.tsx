import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/species")({
  component: SpeciesLibrary,
});

const species = [
  {
    name: "Bearded Dragon",
    latin: "Pogona vitticeps",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Eastern_Bearded_Dragon%2C_Majura%2C_ACT_2609%2C_Australia_imported_from_iNaturalist_photo_67070853_%28cropped%29.jpg/200px-Eastern_Bearded_Dragon%2C_Majura%2C_ACT_2609%2C_Australia_imported_from_iNaturalist_photo_67070853_%28cropped%29.jpg",
    description: "One of the most popular pet reptiles. Our vet-reviewed guides cover enclosure setup, UVB lighting, diet (including proper gut-loading), brumation cycles, and common health issues like metabolic bone disease.",
    topics: ["Lighting & UVB", "Diet & Supplementation", "Brumation", "MBD Prevention"],
    difficulty: "Beginner",
  },
  {
    name: "Ball Python",
    latin: "Python regius",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Ball_python_lucy.JPG/200px-Ball_python_lucy.JPG",
    description: "Known for their docile temperament. Get expert guidance on humidity management, feeding schedules, shedding issues, respiratory infections, and enclosure enrichment.",
    topics: ["Humidity & Shedding", "Feeding Guide", "Enclosure Size", "Common Ailments"],
    difficulty: "Beginner",
  },
  {
    name: "Leopard Gecko",
    latin: "Eublepharis macularius",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Eublepharis_macularius1.jpg/200px-Eublepharis_macularius1.jpg",
    description: "Hardy and beginner-friendly. Learn about heat gradients, calcium supplementation, handling techniques, tail fat storage health, and breeding setups.",
    topics: ["Heat Gradients", "Calcium & D3", "Handling", "Breeding"],
    difficulty: "Beginner",
  },
  {
    name: "Russian Tortoise",
    latin: "Testudo horsfieldii",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Testudo_horsfieldii%3B_Baikonur_001.jpg/200px-Testudo_horsfieldii%3B_Baikonur_001.jpg",
    description: "Active and personable tortoises that thrive with proper outdoor enclosures. Our guides cover substrate, hibernation protocols, pyramiding prevention, and seasonal care adjustments.",
    topics: ["Outdoor Enclosure", "Hibernation", "Pyramiding", "Seasonal Care"],
    difficulty: "Intermediate",
  },
  {
    name: "Crested Gecko",
    latin: "Correlophus ciliatus",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Crested_gecko_-_1.jpg/200px-Crested_gecko_-_1.jpg",
    description: "Nocturnal, arboreal geckos that thrive on powdered diets. Learn about bio-active setups, temperature requirements, breeding, and tail loss recovery.",
    topics: ["Bioactive Setup", "Temperature", "Breeding", "Tail Loss"],
    difficulty: "Beginner",
  },
  {
    name: "Corn Snake",
    latin: "Pantherophis guttatus",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/CornSnake.jpg/200px-CornSnake.jpg",
    description: "Active, curious snakes ideal for intermediate keepers. Get protocols for escape-proof enclosures, feeding, handling, and scale rot prevention.",
    topics: ["Escape-Proof Enclosure", "Feeding Schedule", "Handling", "Scale Rot"],
    difficulty: "Beginner",
  },
  {
    name: "Green Iguana",
    latin: "Iguana iguana",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Iguana_iguana_%28male_resting%29.jpg/200px-Iguana_iguana_%28male_resting%29.jpg",
    description: "Large, intelligent lizards requiring specialized care. Our vets cover enclosure requirements, proper UVB, renal health, and behavioral enrichment.",
    topics: ["Giant Enclosures", "UVB Requirements", "Renal Health", "Behavior"],
    difficulty: "Advanced",
  },
  {
    name: "Red-Eared Slider",
    latin: "Trachemys scripta elegans",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/RedEaredSlider05.jpg/200px-RedEaredSlider05.jpg",
    description: "Semiaquatic turtles with specific water quality needs. Guides cover filtration, basking setups, shell health, and UVB for aquatic species.",
    topics: ["Filtration", "Basking Setup", "Shell Health", "Aquatic UVB"],
    difficulty: "Intermediate",
  },
];

function SpeciesLibrary() {
  return (
    <>
      <section style={{ background: "var(--charcoal)", padding: "8rem 2rem 4rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="text-center max-w-2xl mx-auto">
            <span style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--amber)", fontWeight: 500 }}>
              Species Library
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--cream)", letterSpacing: "-0.02em" }}>
              Expert care guides for every reptile
            </h1>
            <p style={{ fontSize: "1.05rem", color: "var(--text-body)", lineHeight: 1.7, fontWeight: 300 }}>
              Each species has unique needs. Our vet-reviewed guides give you the protocols that work.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--charcoal)", padding: "2rem 2rem 6rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid gap-6 md:grid-cols-2">
            {species.map((s) => (
              <div key={s.name} className="rounded-2xl p-6 transition-all" style={{ background: "rgba(247,244,238,0.04)", border: "1px solid rgba(247,244,238,0.07)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(232,162,61,0.25)"; e.currentTarget.style.background = "rgba(232,162,61,0.04)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(247,244,238,0.07)"; e.currentTarget.style.background = "rgba(247,244,238,0.04)"; }}
              >
                <div className="flex items-start gap-4">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl" style={{ border: "1px solid rgba(247,244,238,0.1)" }}>
                    <img src={s.image} alt={s.name} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h2 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--cream)" }}>{s.name}</h2>
                      <span style={{ fontSize: "0.72rem", padding: "0.2rem 0.6rem", borderRadius: 100, background: "rgba(247,244,238,0.06)", color: "var(--text-muted)", border: "1px solid rgba(247,244,238,0.1)" }}>
                        {s.difficulty}
                      </span>
                    </div>
                    <p className="mt-1" style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontStyle: "italic" }}>{s.latin}</p>
                    <p className="mt-2" style={{ fontSize: "0.88rem", color: "var(--text-body)", lineHeight: 1.65, fontWeight: 300 }}>{s.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.topics.map((topic) => (
                        <span key={topic} style={{ fontSize: "0.72rem", padding: "0.2rem 0.6rem", borderRadius: 100, color: "var(--amber)", background: "rgba(232,162,61,0.1)", border: "1px solid rgba(232,162,61,0.2)" }}>
                          {topic}
                        </span>
                      ))}
                    </div>
                    <a href="#" className="inline-flex items-center mt-3 no-underline font-medium transition-colors" style={{ fontSize: "0.82rem", color: "var(--amber)", letterSpacing: "0.03em" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "var(--cream)" }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "var(--amber)" }}
                    >
                      View care guide &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

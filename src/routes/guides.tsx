import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/guides")({ component: PremiumGuides });

const guides = [
  { title: "Ball Python Field Manual", desc: "Our flagship evidence-informed guide covering husbandry, behavior, preventive care, and printable keeper resources.", pages: 28, price: "$10", badge: "Veterinary Review Draft" },
  { title: "Bearded Dragon Field Manual", desc: "A complete care guide currently being written and reviewed. Covers lighting, diet, supplementation, and common health issues.", pages: 24, price: "$9", badge: "In Development" },
  { title: "Corn Snake Field Manual", desc: "Planned as part of the ScalesWiki Professional Field Guide Series. Escape-proof enclosures, feeding, handling, and scale rot prevention.", pages: 22, price: "$10", badge: "Coming Soon" },
  { title: "Reptile Nutrition & Supplementation", desc: "Comprehensive guide to feeding across species: gut-loading, dusting schedules, feeder insect nutrition, and species-specific dietary needs.", pages: 36, price: "$14", badge: null },
  { title: "Tortoise Hibernation Protocol", desc: "A veterinary-approved hibernation protocol covering pre-hibernation checks, temperature monitoring, and safe emergence.", pages: 20, price: "$8", badge: null },
  { title: "Leopard Gecko Breeding Guide", desc: "From pairing to hatchling care. Covers genetic morphs, incubation temperatures, egg care, and raising healthy juveniles.", pages: 22, price: "$10", badge: null },
];

function PremiumGuides() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--green)" }}>Premium Guides</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Professional Field Guides</h1>
          <p className="mt-4 text-lg" style={{ color: "var(--text-gray)" }}>Learn from evidence-informed reptile care guides. Downloadable PDFs you can reference anytime.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-2xl border p-8 mb-12" style={{ borderColor: "rgba(46,204,113,0.2)", background: "rgba(46,204,113,0.06)" }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Bundle Deal — All 6 Guides</h2>
              <p style={{ color: "var(--text-gray)" }}>Get the complete library at a 40% discount.</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold">$45</span>
              <span className="text-sm line-through" style={{ color: "var(--text-muted)" }}>$63</span>
              <a href="#" className="rounded-xl px-6 py-2.5 text-sm font-semibold transition" style={{ background: "var(--green)", color: "#08120D" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "var(--green-hover)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "var(--green)"}>Buy Bundle</a>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <div key={g.title} className="relative rounded-2xl border p-6 flex flex-col" style={{ borderColor: "rgba(255,255,255,0.1)", background: "var(--bg-card)" }}>
              {g.badge && (
                <span className="absolute -top-2.5 right-4 rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "rgba(46,204,113,0.15)", color: "var(--green)" }}>{g.badge}</span>
              )}
              <h3 className="text-lg font-semibold">{g.title}</h3>
              <p className="flex-1 mt-3 text-sm" style={{ color: "var(--text-gray)" }}>{g.desc}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>{g.pages} pages</span>
                <span className="text-xl font-bold" style={{ color: "var(--green)" }}>{g.price}</span>
              </div>
              <a href="#" className="inline-flex items-center justify-center w-full mt-4 rounded-xl px-4 py-2.5 text-sm font-semibold transition" style={{ color: "var(--green)", border: "1.5px solid rgba(46,204,113,0.3)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(46,204,113,0.1)"; e.currentTarget.style.borderColor = "var(--green)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(46,204,113,0.3)"; }}>Download</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

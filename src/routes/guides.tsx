import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/guides")({
  component: PremiumGuides,
});

const guides = [
  {
    title: "Bearded Dragon Metabolic Bone Disease Prevention",
    description: "A complete guide to preventing and managing MBD in bearded dragons. Covers UVB requirements, calcium supplementation, D3 metabolism, and early warning signs every owner should know.",
    pages: 24,
    price: "$9",
    badge: "Best Seller",
  },
  {
    title: "Setting Up a Bioactive Vivarium",
    description: "Step-by-step guide to creating a self-cleaning bioactive enclosure. Substrate layers, clean-up crew selection, plant choices, and long-term maintenance for tropical and arid setups.",
    pages: 32,
    price: "$12",
    badge: null,
  },
  {
    title: "Ball Python Health & First Aid",
    description: "Recognize and respond to common health issues: respiratory infections, scale rot, mites, prolapses, and refusal to eat. Includes a printable first-aid checklist.",
    pages: 28,
    price: "$10",
    badge: null,
  },
  {
    title: "Tortoise Hibernation Protocol",
    description: "A veterinary-approved hibernation protocol covering pre-hibernation health checks, temperature monitoring, weight tracking, and safe emergence. For Mediterranean and temperate species.",
    pages: 20,
    price: "$8",
    badge: "New",
  },
  {
    title: "Reptile Nutrition & Supplementation",
    description: "Comprehensive guide to feeding across species: gut-loading, dusting schedules, feeder insect nutrition, vitamin/mineral balance, and species-specific dietary needs.",
    pages: 36,
    price: "$14",
    badge: null,
  },
  {
    title: "Leopard Gecko Breeding Guide",
    description: "From pairing to hatchling care. Covers genetic morphs, incubation temperatures, egg care, incubator setup, and raising healthy juveniles.",
    pages: 22,
    price: "$10",
    badge: null,
  },
];

function PremiumGuides() {
  return (
    <>
      <section style={{ background: "var(--charcoal)", padding: "8rem 2rem 4rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="text-center max-w-2xl mx-auto">
            <span style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--amber)", fontWeight: 500 }}>
              Premium Guides
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--cream)", letterSpacing: "-0.02em" }}>
              Deep-dive PDF guides
            </h1>
            <p style={{ fontSize: "1.05rem", color: "var(--text-body)", lineHeight: 1.7, fontWeight: 300 }}>
              In-depth, vet-reviewed resources on specific topics. Downloadable PDFs you can reference anytime.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--charcoal)", padding: "2rem 2rem 6rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="rounded-2xl p-8 mb-12" style={{ background: "rgba(232,162,61,0.06)", border: "1px solid rgba(232,162,61,0.2)" }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--cream)" }}>Bundle Deal — All 6 Guides</h2>
                <p style={{ fontSize: "0.88rem", color: "var(--text-body)" }}>Get the complete library at a 40% discount.</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "var(--cream)" }}>$45</span>
                <span style={{ fontSize: "0.88rem", color: "var(--text-muted)", textDecoration: "line-through" }}>$63</span>
                <a href="#" className="inline-flex items-center gap-2 no-underline font-medium rounded-full transition-all" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "var(--charcoal)", background: "var(--amber)", padding: "0.6rem 1.4rem", letterSpacing: "0.03em" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "var(--amber-dim)" }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "var(--amber)" }}
                >Buy Bundle</a>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <div key={guide.title} className="relative rounded-2xl p-6 flex flex-col transition-all" style={{ background: "rgba(247,244,238,0.04)", border: "1px solid rgba(247,244,238,0.07)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(232,162,61,0.25)"; e.currentTarget.style.background = "rgba(232,162,61,0.04)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(247,244,238,0.07)"; e.currentTarget.style.background = "rgba(247,244,238,0.04)"; }}
              >
                {guide.badge && (
                  <span className="absolute -top-2.5 right-4 rounded-full px-3 py-1 text-xs font-semibold" style={{ background: guide.badge === "Best Seller" ? "var(--amber)" : "var(--green-light)", color: "var(--charcoal)" }}>
                    {guide.badge}
                  </span>
                )}
                <h3 className="text-lg font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--cream)" }}>{guide.title}</h3>
                <p className="flex-1 mt-3" style={{ fontSize: "0.88rem", color: "var(--text-body)", lineHeight: 1.65, fontWeight: 300 }}>{guide.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{guide.pages} pages</span>
                  <span className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "var(--amber)" }}>{guide.price}</span>
                </div>
                <a href="#" className="inline-flex items-center justify-center w-full mt-4 no-underline font-medium rounded-full transition-all" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", padding: "0.55rem 1rem", color: "var(--cream)", background: "transparent", border: "1.5px solid rgba(247,244,238,0.25)", letterSpacing: "0.03em" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--amber)"; e.currentTarget.style.color = "var(--amber)"; e.currentTarget.style.background = "rgba(232,162,61,0.06)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(247,244,238,0.25)"; e.currentTarget.style.color = "var(--cream)"; e.currentTarget.style.background = "transparent"; }}
                >Download</a>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-8 mt-12 text-center" style={{ background: "rgba(247,244,238,0.04)", border: "1px solid rgba(247,244,238,0.07)" }}>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
              Premium guides are also included with a{" "}
              <a href="/#pricing" className="font-semibold no-underline transition-colors" style={{ color: "var(--amber)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--cream)" }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--amber)" }}
              >ScalesWiki Premium subscription</a>{" "}
              — get access to all current and future guides.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

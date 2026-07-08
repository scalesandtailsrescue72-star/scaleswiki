import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

const species = [
  "Ball Python", "Leopard Gecko", "Bearded Dragon", "Crested Gecko",
  "Corn Snake", "Blue-Tongued Skink", "Red-Eared Slider", "Russian Tortoise",
  "Green Iguana", "Veiled Chameleon",
];

const rescueCosts = [
  { amount: "$15–35", label: "Vet exam & intake health check" },
  { amount: "$40–80", label: "Parasite treatment & medication" },
  { amount: "$50–150", label: "Custom enclosure setup" },
  { amount: "$25–60", label: "Specialized diet (1–2 months)" },
  { amount: "$20–40", label: "Lighting & heat equipment" },
  { amount: "$100+", label: "Surgical intervention & long-term care" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0" style={{ background: "var(--charcoal)" }} />
        <div className="absolute rounded-full" style={{ width: 700, height: 700, background: "radial-gradient(circle, #2A5228 0%, transparent 70%)", filter: "blur(120px)", opacity: 0.18, top: -200, right: -150 }} />
        <div className="absolute rounded-full" style={{ width: 500, height: 500, background: "radial-gradient(circle, #E8A23D 0%, transparent 70%)", filter: "blur(120px)", opacity: 0.08, bottom: -100, left: -100 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(247,244,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(247,244,238,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 text-center px-8 pt-32 pb-20" style={{ maxWidth: 820 }}>
          <div className="inline-flex items-center gap-2 mb-8 font-medium" style={{ fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--amber)" }}>
            <span className="inline-block rounded-full" style={{ width: 6, height: 6, background: "var(--amber)" }} />
            Trusted reptile care guides, written by rescuers &amp; reviewed by vets
          </div>
          <h1 className="font-bold tracking-tight mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "var(--cream)", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            The right care guide.<br />Not the loudest one.
          </h1>
          <p className="mx-auto mb-12 font-light" style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "var(--text-body)", lineHeight: 1.7, maxWidth: 600 }}>
            ScalesWiki is a community-curated knowledge base for reptile keepers. Species guides, husbandry tips, and habitat advice — sorted by what actually works, not what gets the most votes.
          </p>
          <div className="flex flex-col items-center gap-3">
            <span style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>Species covered:</span>
            <div className="flex flex-wrap justify-center gap-2">
              {species.slice(0, 8).map((s) => (
                <a key={s} href="/species" className="no-underline transition-all" style={{ fontSize: "0.8rem", padding: "0.35rem 0.85rem", borderRadius: 100, border: "1px solid rgba(247,244,238,0.15)", color: "var(--text-body)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(232,162,61,0.5)"; e.currentTarget.style.color = "var(--amber)"; e.currentTarget.style.background = "rgba(232,162,61,0.06)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(247,244,238,0.15)"; e.currentTarget.style.color = "var(--text-body)"; e.currentTarget.style.background = "transparent"; }}
                >{s}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="py-6 px-8" style={{ background: "var(--green-deep)", borderTop: "1px solid rgba(247,244,238,0.07)", borderBottom: "1px solid rgba(247,244,238,0.07)" }}>
        <div className="mx-auto flex justify-center gap-6 sm:gap-12 flex-wrap" style={{ maxWidth: 1200 }}>
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--amber)", flexShrink: 0 }}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
            </svg>
            <span style={{ fontSize: "0.88rem", color: "var(--text-body)" }}>Care guides reviewed by exotic animal veterinarians</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--amber)", flexShrink: 0 }}>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span style={{ fontSize: "0.88rem", color: "var(--text-body)" }}>Backed by real rescue experience — Scales &amp; Tails Reptile Rescue</span>
          </div>
        </div>
      </div>

      {/* Trust Why */}
      <section style={{ background: "var(--charcoal)", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="mb-16">
            <span style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--amber)", fontWeight: 500 }}>Editorial Standard</span>
            <h2 className="text-4xl font-bold mt-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--cream)", letterSpacing: "-0.02em" }}>Why Trust ScalesWiki</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: "shield", title: "Vet Reviewed", body: "Every guide reviewed by exotic animal veterinarians. Sources include ARAV, VCA Animal Hospitals, and university veterinary schools." },
              { icon: "heart", title: "Rescue-Backed", body: "Written from real rescue experience at Scales & Tails Reptile Rescue, NE Ohio. Not pet store myths — safety-first accuracy." },
              { icon: "x-circle", title: "Not Reddit", body: "Distinct from Reddit and generic pet advice. Community-vetted, expert-confirmed — one clear answer per species." },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl p-8 relative overflow-hidden transition-all" style={{ background: "rgba(247,244,238,0.04)", border: "1px solid rgba(247,244,238,0.07)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(232,162,61,0.25)"; e.currentTarget.style.background = "rgba(232,162,61,0.04)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(247,244,238,0.07)"; e.currentTarget.style.background = "rgba(247,244,238,0.04)"; }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, transparent, var(--amber), transparent)", opacity: 0 }} />
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--amber)", marginBottom: "1.25rem" }}>
                  {card.icon === "shield" && <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></>}
                  {card.icon === "heart" && <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></>}
                  {card.icon === "x-circle" && <><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></>}
                </svg>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", fontWeight: 500, color: "var(--cream)", marginBottom: "0.75rem" }}>{card.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-body)", lineHeight: 1.65, fontWeight: 300 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: "var(--green-deep)", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="mb-16">
            <span style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--amber)", fontWeight: 500 }}>What ScalesWiki does</span>
            <h2 className="text-4xl font-bold mt-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--cream)", letterSpacing: "-0.02em" }}>Three layers of good information</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: "rgba(247,244,238,0.04)", border: "1px solid rgba(247,244,238,0.07)" }}>
              <span className="absolute top-4 right-6 font-bold" style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", color: "rgba(247,244,238,0.06)", lineHeight: 1 }}>01</span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ color: "var(--amber)", marginBottom: "1.25rem" }}>
                <path d="M4 8h24M4 16h16M4 24h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", fontWeight: 500, color: "var(--cream)", marginBottom: "0.75rem" }}>Species Care Sheets</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-body)", lineHeight: 1.65, fontWeight: 300 }}>Curated pages for each species — temperature ranges, diet schedules, habitat minimums, lighting requirements. Community-written, vet-reviewed, kept up to date.</p>
            </div>
            <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: "rgba(247,244,238,0.04)", border: "1px solid rgba(247,244,238,0.07)" }}>
              <span className="absolute top-4 right-6 font-bold" style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", color: "rgba(247,244,238,0.06)", lineHeight: 1 }}>02</span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ color: "var(--amber)", marginBottom: "1.25rem" }}>
                <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2.5"/>
                <path d="M16 11v5l3 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", fontWeight: 500, color: "var(--cream)", marginBottom: "0.75rem" }}>Living Guides</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-body)", lineHeight: 1.65, fontWeight: 300 }}>Care standards evolve. ScalesWiki guides are living documents — updated as husbandry research advances, not frozen in 2019. Your pet deserves current knowledge.</p>
            </div>
            <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: "rgba(247,244,238,0.04)", border: "1px solid rgba(247,244,238,0.07)" }}>
              <span className="absolute top-4 right-6 font-bold" style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", color: "rgba(247,244,238,0.06)", lineHeight: 1 }}>03</span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ color: "var(--amber)", marginBottom: "1.25rem" }}>
                <path d="M8 22l6-6 5 5 7-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="26" cy="6" r="3" stroke="currentColor" strokeWidth="2.5"/>
              </svg>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", fontWeight: 500, color: "var(--cream)", marginBottom: "0.75rem" }}>Community Voting</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-body)", lineHeight: 1.65, fontWeight: 300 }}>Tips and tricks submitted by keepers get ranked by the community. Best practices rise. Bad advice gets buried. No more scrolling through pages of conflicting forum answers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ background: "var(--charcoal)", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--amber)", fontWeight: 500 }}>How it works</span>
              <h2 className="text-4xl font-bold mt-3 mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--cream)", letterSpacing: "-0.02em" }}>From conflicting noise to one clear answer</h2>
              <p className="mb-10 font-light" style={{ fontSize: "1rem", color: "var(--text-body)", lineHeight: 1.7 }}>The reptile internet has a noise problem. Reddit threads contradict each other. Facebook groups gatekeep. YouTube videos are outdated. ScalesWiki cuts through it.</p>
              <div className="flex flex-col gap-6">
                {[
                  { num: 1, text: "<strong>Pick your species.</strong> Browse by reptile — snake, gecko, lizard, tortoise, more." },
                  { num: 2, text: "<strong>Read the care sheet.</strong> Vet-reviewed baseline for enclosure, diet, lighting, humidity." },
                  { num: 3, text: "<strong>Dig into community tips.</strong> Ranked by usefulness, filtered by species and experience level." },
                  { num: 4, text: "<strong>Contribute what you know.</strong> Submit tips, vote on others, build the commons." },
                ].map((step) => (
                  <div key={step.num} className="flex gap-5">
                    <div className="flex-shrink-0 flex items-center justify-center rounded-full" style={{ width: 32, height: 32, border: "1.5px solid var(--amber)" }}>
                      <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--amber)" }}>{step.num}</span>
                    </div>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-body)", lineHeight: 1.55, paddingTop: "0.25rem" }} dangerouslySetInnerHTML={{ __html: step.text }} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden" style={{ background: "#0D200D", border: "1px solid rgba(247,244,238,0.1)", boxShadow: "0 40px 80px rgba(0,0,0,0.5)" }}>
                <div className="flex items-center gap-1.5 px-5 py-4" style={{ background: "rgba(247,244,238,0.04)", borderBottom: "1px solid rgba(247,244,238,0.06)" }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(247,244,238,0.15)" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(247,244,238,0.15)" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(247,244,238,0.15)" }} />
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginLeft: "0.5rem", letterSpacing: "0.05em" }}>Ball Python — ScalesWiki</span>
                </div>
                <div className="flex flex-col gap-5 p-6">
                  <div>
                    <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--amber)", fontWeight: 500 }}>Enclosure</span>
                    <div className="flex justify-between py-1" style={{ fontSize: "0.78rem", color: "var(--text-muted)", borderBottom: "1px solid rgba(247,244,238,0.04)" }}><span>Min size</span><span style={{ color: "var(--cream)", fontWeight: 500 }}>40 gal (36\"x18\"x18\")</span></div>
                    <div className="flex justify-between py-1" style={{ fontSize: "0.78rem", color: "var(--text-muted)", borderBottom: "1px solid rgba(247,244,238,0.04)" }}><span>Basking zone</span><span style={{ color: "var(--cream)", fontWeight: 500 }}>88–92°F</span></div>
                    <div className="flex justify-between py-1" style={{ fontSize: "0.78rem", color: "var(--text-muted)", borderBottom: "1px solid rgba(247,244,238,0.04)" }}><span>Cool side</span><span style={{ color: "var(--cream)", fontWeight: 500 }}>75–80°F</span></div>
                    <div className="flex justify-between py-1" style={{ fontSize: "0.78rem", color: "var(--text-muted)", borderBottom: "1px solid rgba(247,244,238,0.04)" }}><span>UVB</span><span style={{ color: "var(--cream)", fontWeight: 500 }}>Recommended</span></div>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--amber)", fontWeight: 500 }}>Diet</span>
                    <div className="flex justify-between py-1" style={{ fontSize: "0.78rem", color: "var(--text-muted)", borderBottom: "1px solid rgba(247,244,238,0.04)" }}><span>Frequency</span><span style={{ color: "var(--cream)", fontWeight: 500 }}>Every 7–14 days</span></div>
                    <div className="flex justify-between py-1" style={{ fontSize: "0.78rem", color: "var(--text-muted)", borderBottom: "1px solid rgba(247,244,238,0.04)" }}><span>Prey size</span><span style={{ color: "var(--cream)", fontWeight: 500 }}>≤ 1.25× body width</span></div>
                    <div className="flex justify-between py-1" style={{ fontSize: "0.78rem", color: "var(--text-muted)", borderBottom: "1px solid rgba(247,244,238,0.04)" }}><span>Water</span><span style={{ color: "var(--cream)", fontWeight: 500 }}>Always available, 60–80% RH</span></div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-full" style={{ fontSize: "0.65rem", letterSpacing: "0.08em", color: "var(--text-muted)", background: "rgba(232,162,61,0.1)", border: "1px solid rgba(232,162,61,0.2)" }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--amber)" }} />
                    Community-vetted · Vet-reviewed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="relative overflow-hidden" style={{ background: "var(--green-deep)", padding: "7rem 2rem" }}>
        <div className="absolute pointer-events-none" style={{ top: -200, right: -200, width: 600, height: 600, background: "radial-gradient(circle, rgba(232,162,61,0.06) 0%, transparent 70%)", filter: "blur(80px)", borderRadius: "50%" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div>
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--amber)", fontWeight: 500 }}>Why this exists</span>
              <h2 className="text-4xl font-bold mt-3 mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--cream)", letterSpacing: "-0.02em" }}>The rescue work shows you the gap</h2>
              <p className="font-light mb-4" style={{ fontSize: "0.95rem", color: "var(--text-body)", lineHeight: 1.75 }}>Scales &amp; Tails Reptile Rescue in North East Ohio takes in animals surrendered for one reason above all others: the owner couldn't find reliable information before they got started.</p>
              <p className="font-light mb-4" style={{ fontSize: "0.95rem", color: "var(--text-body)", lineHeight: 1.75 }}>ScalesWiki was born from watching that cycle repeat. The knowledge exists — in veterinary literature, in ARAV guidelines, in the work of researchers like Mariah Healey at ReptiFiles. It's just buried under a decade of forum noise and outdated YouTube videos.</p>
              <p className="font-light" style={{ fontSize: "0.95rem", color: "var(--text-body)", lineHeight: 1.75 }}>This platform changes that. One species at a time. One vetted guide at a time.</p>
            </div>
            <div className="flex flex-col gap-8 pt-8">
              <div style={{ borderLeft: "2px solid var(--amber)", paddingLeft: "1.5rem" }}>
                <span style={{ display: "block", fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "var(--amber)", lineHeight: 1 }}>50%+</span>
                <span style={{ fontSize: "0.85rem", color: "var(--text-body)", lineHeight: 1.55 }}>of reptile owners seek care info online first — but face conflicting, outdated advice</span>
              </div>
              <div style={{ borderLeft: "2px solid var(--amber)", paddingLeft: "1.5rem" }}>
                <span style={{ display: "block", fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "var(--amber)", lineHeight: 1 }}>Gen Z</span>
                <span style={{ fontSize: "0.85rem", color: "var(--text-body)", lineHeight: 1.55 }}>is the primary driver of reptile ownership growth, naturally turning to digital-first resources</span>
              </div>
              <div style={{ borderLeft: "2px solid var(--amber)", paddingLeft: "1.5rem" }}>
                <span style={{ display: "block", fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "var(--amber)", lineHeight: 1 }}>0</span>
                <span style={{ fontSize: "0.85rem", color: "var(--text-body)", lineHeight: 1.55 }}>dominant platforms own "curated care guides + community" for reptile keepers — until now</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rescue Costs */}
      <section style={{ background: "var(--green-deep)", padding: "7rem 2rem", borderTop: "1px solid rgba(247,244,238,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div>
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--amber)", fontWeight: 500 }}>Where your money goes</span>
              <h2 className="text-4xl font-bold mt-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--cream)", letterSpacing: "-0.02em" }}>Every dollar helps a reptile in need.</h2>
              <p className="font-light mt-5" style={{ fontSize: "0.95rem", color: "var(--text-body)", lineHeight: 1.75 }}>Scales and Tails Rescue takes in reptiles surrendered, seized, or abandoned — often with weeks of vet care, specialized food, and custom enclosures needed before a safe placement can be found. Here's what it actually costs.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {rescueCosts.map((cost, i) => (
                <div key={i} className="rounded-xl p-6 relative overflow-hidden" style={{ background: "rgba(247,244,238,0.04)", border: "1px solid rgba(247,244,238,0.07)" }}>
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, transparent, var(--amber), transparent)", opacity: 0.4 }} />
                  <span style={{ display: "block", fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--amber)", lineHeight: 1, marginBottom: "0.4rem" }}>{cost.amount}</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-body)", lineHeight: 1.5, fontWeight: 300 }}>{cost.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section style={{ background: "var(--charcoal)", padding: "7rem 2rem", borderTop: "1px solid rgba(247,244,238,0.05)" }}>
        <div className="mx-auto text-center flex flex-col items-center gap-8" style={{ maxWidth: 760 }}>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ opacity: 0.15 }}>
            <circle cx="60" cy="60" r="56" stroke="#E8A23D" strokeWidth="2"/>
            <circle cx="60" cy="60" r="40" stroke="#E8A23D" strokeWidth="2"/>
            <circle cx="60" cy="60" r="24" stroke="#E8A23D" strokeWidth="2"/>
            <circle cx="60" cy="60" r="8" fill="#E8A23D"/>
          </svg>
          <h2 className="font-semibold" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "var(--cream)", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
            Better information. Better care. Better lives for the animals we share our homes with.
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)", fontWeight: 300 }}>
            ScalesWiki is being built now. The knowledge base is open, and every contribution matters.
          </p>
          <div className="text-left max-w-md p-7 rounded-xl flex flex-col gap-3" style={{ background: "rgba(247,244,238,0.04)", border: "1px solid rgba(247,244,238,0.07)" }}>
            <span className="inline-flex items-center gap-1.5 uppercase font-medium" style={{ fontSize: "0.68rem", letterSpacing: "0.12em", color: "var(--amber)" }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              About ScalesWiki
            </span>
            <p className="font-light" style={{ fontSize: "0.9rem", color: "var(--text-body)", lineHeight: 1.7 }}>
              ScalesWiki is a project of <strong style={{ color: "var(--cream)", fontWeight: 500 }}>Scales &amp; Tails Reptile Rescue</strong>, serving reptile keepers and adopters across North East Ohio. Every care guide on this site is built to reflect the real standards our rescue team holds for proper husbandry — because the animals in our community deserve accurate, usable information.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

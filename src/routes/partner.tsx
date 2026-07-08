import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/partner")({
  component: PartnerProgram,
});

const tiers = [
  {
    name: "Rescue Partner",
    price: "Free",
    audience: "Verified non-profit reptile rescues & rehab centers",
    badge: "Most Popular",
    features: ["Full Rescue Pack — 8 essential guides", "Unlimited digital distribution to adopters", "Co-branded guides with your rescue logo", "Free annual premium subscription ($84 value)", "Listed on our 'Recommended Rescues' page", "Early access to new species guides", "Print permission for adoption events"],
    cta: "Apply as a Rescue",
    href: "#apply",
  },
  {
    name: "Pet Store Partner",
    price: "40% off",
    audience: "Reptile-focused brick & mortar stores",
    badge: null,
    features: ["40% wholesale discount on all guide bundles", "In-store display kit (counter card + QR code)", "Co-branded guides with your store logo", "Listed on 'Find a Reptile Store' directory", "Employee education discount (50% off)", "Bulk reorder discount at $200+", "No minimum after first $50 order"],
    cta: "Become a Store Partner",
    href: "#apply",
  },
  {
    name: "Breeder Partner",
    price: "25% off",
    audience: "Ethical reptile breeders",
    badge: null,
    features: ["25% discount on all individual guides", "Bulk pricing on 10+ copies of same guide", "Co-branded care packs for your buyers", "Listed on 'Ethical Breeders' directory", "Must agree to Ethical Breeder Standards"],
    cta: "Apply as a Breeder",
    href: "#apply",
  },
];

const rescuePackItems = [
  { title: "Reptile Lighting 101", desc: "UVB, basking, and day/night cycles — the fundamentals every owner needs." },
  { title: "Bearded Dragon Checklist", desc: "Habitat setup, diet, supplement schedule, and red flags." },
  { title: "Corn Snake Checklist", desc: "Enclosure, feeding schedule, humidity during shed, and first aid." },
  { title: "Leopard Gecko Checklist", desc: "Heat mats vs CHE, supplementation, and stuck shed prevention." },
  { title: "Ball Python Checklist", desc: "Humidity management, feeding reluctance, and respiratory health." },
  { title: "Aquatic Turtle Checklist", desc: "Water quality, basking platform, UVB through glass, and shell health." },
  { title: "Your First 7 Days", desc: "Day-by-day acclimation guide — setup, feeding, handling, and when to worry." },
  { title: "Emergency Red Flags", desc: "Symptoms requiring immediate vet attention. Printable for the fridge." },
];

const benefits = [
  { title: "Co-branded guides", body: "Upload your logo. We'll apply it to every guide you distribute." },
  { title: "Directory listing", body: "Featured on ScalesWiki — adopters find your organization." },
  { title: "Early access", body: "New guides 2 weeks before public release." },
  { title: "Free premium access", body: "Annual subscription for rescue partners." },
  { title: "Vet-reviewed trust", body: "Every guide reviewed by qualified reptile vets." },
  { title: "Donation support", body: "Rescue partners can add a donation link." },
];

const faqs = [
  { q: "What counts as a verified rescue?", a: "We accept 501(c)(3) letters, charity registration, or state wildlife rehab licenses. Contact us if you are established but lack formal status." },
  { q: "Can pet stores give guides away for free?", a: "Yes. Many give them as value-add. You can also resell at retail." },
  { q: "How does co-branding work?", a: "Upload your logo when accepted. We apply it to covers and footers." },
  { q: "What if I am not a rescue, store, or breeder?", a: "Reach out directly. We build custom partnerships for vets, educators, and community orgs." },
];

function PartnerProgram() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--charcoal)", padding: "8rem 2rem 5rem" }}>
        <div className="absolute rounded-full" style={{ width: 600, height: 600, background: "radial-gradient(circle, #2A5228 0%, transparent 70%)", filter: "blur(100px)", opacity: 0.12, top: -200, right: -100 }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div className="max-w-3xl mx-auto text-center">
            <span style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--amber)", fontWeight: 500 }}>Partners Program</span>
            <h1 className="font-bold mt-6 mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "var(--cream)", letterSpacing: "-0.02em" }}>
              Help every new reptile owner <span style={{ color: "var(--amber)", fontStyle: "italic" }}>start right</span>
            </h1>
            <p style={{ fontSize: "1.05rem", color: "var(--text-body)", lineHeight: 1.7, fontWeight: 300, maxWidth: 640, margin: "0 auto 2.5rem" }}>
              You are on the front lines. We provide vet-reviewed care guides. You hand them out. Together every owner gets trusted information.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href="#tiers" className="inline-flex items-center no-underline font-medium rounded-full" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "var(--charcoal)", background: "var(--amber)", padding: "0.65rem 1.5rem" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "var(--amber-dim)"} onMouseLeave={(e) => e.currentTarget.style.background = "var(--amber)"}>See Partner Tiers</a>
              <a href="#apply" className="inline-flex items-center no-underline font-medium rounded-full" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", padding: "0.65rem 1.5rem", color: "var(--cream)", background: "transparent", border: "1.5px solid rgba(247,244,238,0.25)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--amber)"; e.currentTarget.style.color = "var(--amber)"; e.currentTarget.style.background = "rgba(232,162,61,0.06)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(247,244,238,0.25)"; e.currentTarget.style.color = "var(--cream)"; e.currentTarget.style.background = "transparent"; }}>Apply Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ background: "var(--charcoal)", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className="text-center font-bold mb-12" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--cream)" }}>How it works</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[{ num: 1, title: "Apply", body: "Fill out our short application. We verify your organization within 3 business days." },
              { num: 2, title: "Get access", body: "Receive your guide pack, co-branding tools, and partner welcome kit." },
              { num: 3, title: "Distribute", body: "Hand out guides to every new owner. They get expert care info." }
            ].map((step) => (
              <div key={step.num} className="text-center p-8 rounded-2xl" style={{ background: "rgba(247,244,238,0.04)", border: "1px solid rgba(247,244,238,0.07)" }}>
                <div className="mx-auto flex items-center justify-center rounded-2xl mb-4" style={{ width: 64, height: 64, background: "rgba(232,162,61,0.12)" }}>
                  <span className="font-bold" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "var(--amber)" }}>{step.num}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.2rem", fontWeight: 600, color: "var(--cream)", marginBottom: "0.5rem" }}>{step.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-body)", lineHeight: 1.65, fontWeight: 300 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section id="tiers" style={{ background: "var(--green-deep)", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className="text-center font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--cream)" }}>Choose your partner tier</h2>
          <p className="mx-auto mt-4 text-center" style={{ fontSize: "1rem", color: "var(--text-body)", fontWeight: 300, maxWidth: 560 }}>
            Every tier includes co-branding, listing on ScalesWiki, and early access to new guides.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <div key={tier.name} className="relative flex flex-col rounded-2xl p-8" style={{ background: "rgba(247,244,238,0.04)", border: i === 0 ? "1px solid rgba(232,162,61,0.3)" : "1px solid rgba(247,244,238,0.07)" }}>
                {tier.badge && <span className="absolute -top-3 right-6 rounded-full px-4 py-1 text-xs font-semibold" style={{ background: "var(--amber)", color: "var(--charcoal)" }}>{tier.badge}</span>}
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.3rem", fontWeight: 600, color: "var(--cream)" }}>{tier.name}</h3>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>{tier.audience}</p>
                <p className="mt-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--amber)" }}>{tier.price}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2" style={{ fontSize: "0.85rem", color: "var(--text-body)" }}>
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" style={{ color: "var(--amber)" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={tier.href} className="inline-flex items-center justify-center w-full mt-8 no-underline font-medium rounded-full transition-all" style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", padding: "0.6rem 1rem", letterSpacing: "0.03em",
                  color: i === 0 ? "var(--charcoal)" : "var(--cream)", background: i === 0 ? "var(--amber)" : "transparent", border: i === 0 ? "none" : "1.5px solid rgba(247,244,238,0.25)"
                }}
                  onMouseEnter={(e) => { if (i === 0) e.currentTarget.style.background = "var(--amber-dim)"; else { e.currentTarget.style.borderColor = "var(--amber)"; e.currentTarget.style.color = "var(--amber)"; e.currentTarget.style.background = "rgba(232,162,61,0.06)"; } }}
                  onMouseLeave={(e) => { if (i === 0) e.currentTarget.style.background = "var(--amber)"; else { e.currentTarget.style.borderColor = "rgba(247,244,238,0.25)"; e.currentTarget.style.color = "var(--cream)"; e.currentTarget.style.background = "transparent"; } }}
                >{tier.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rescue Pack */}
      <section style={{ background: "var(--charcoal)", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="text-center mb-12">
            <h2 className="font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--cream)" }}>The Rescue Pack</h2>
            <p className="mt-4" style={{ fontSize: "1rem", color: "var(--text-body)", fontWeight: 300 }}>
              8 essential guides included free for all rescue partners.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {rescuePackItems.map((item) => (
              <div key={item.title} className="rounded-xl p-5" style={{ background: "rgba(247,244,238,0.04)", border: "1px solid rgba(247,244,238,0.07)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--amber)", marginBottom: "0.75rem" }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
                </svg>
                <h3 style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--cream)", marginBottom: "0.35rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.55 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ background: "var(--green-deep)", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className="text-center font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--cream)" }}>More than just discounts</h2>
          <p className="mx-auto mt-4 text-center" style={{ fontSize: "0.95rem", color: "var(--text-body)", fontWeight: 300, maxWidth: 520 }}>
            Our partners are part of the ScalesWiki community.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: "rgba(247,244,238,0.04)", border: "1px solid rgba(247,244,238,0.07)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--amber)", marginBottom: "1rem" }}>
                  {i === 0 ? <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/> :
                   i === 1 ? <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/> :
                   i === 2 ? <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/> :
                   i === 3 ? <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/> :
                   i === 4 ? <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"/> :
                   <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>}
                </svg>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--cream)", marginBottom: "0.5rem" }}>{b.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-body)", lineHeight: 1.6, fontWeight: 300 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" style={{ background: "var(--charcoal)", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div className="rounded-2xl p-8 sm:p-12" style={{ background: "rgba(247,244,238,0.04)", border: "1px solid rgba(247,244,238,0.07)" }}>
            <h2 className="text-center font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "var(--cream)" }}>Apply for partnership</h2>
            <p className="mx-auto mt-3 text-center" style={{ fontSize: "0.9rem", color: "var(--text-body)", fontWeight: 300, maxWidth: 480 }}>
              We review applications within 3 business days.
            </p>
            <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--cream)" }}>Organization name *</label>
                  <input type="text" placeholder="e.g., East Bay Reptile Rescue" required
                    style={{ width: "100%", marginTop: "0.35rem", padding: "0.6rem 1rem", borderRadius: 12, border: "1px solid rgba(247,244,238,0.15)", background: "rgba(247,244,238,0.06)", color: "var(--cream)", fontSize: "0.88rem", outline: "none" }}
                    onFocus={(e) => e.currentTarget.style.borderColor = "var(--amber)"}
                    onBlur={(e) => e.currentTarget.style.borderColor = "rgba(247,244,238,0.15)"} />
                </div>
                <div>
                  <label style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--cream)" }}>Organization type *</label>
                  <select required defaultValue=""
                    style={{ width: "100%", marginTop: "0.35rem", padding: "0.6rem 1rem", borderRadius: 12, border: "1px solid rgba(247,244,238,0.15)", background: "rgba(247,244,238,0.06)", color: "var(--cream)", fontSize: "0.88rem", outline: "none" }}
                    onFocus={(e) => e.currentTarget.style.borderColor = "var(--amber)"}
                    onBlur={(e) => e.currentTarget.style.borderColor = "rgba(247,244,238,0.15)"}>
                    <option value="" disabled style={{ background: "#1a1a1a" }}>Select one</option>
                    <option value="rescue" style={{ background: "#1a1a1a" }}>Reptile Rescue (non-profit)</option>
                    <option value="store" style={{ background: "#1a1a1a" }}>Pet Store</option>
                    <option value="breeder" style={{ background: "#1a1a1a" }}>Ethical Breeder</option>
                  </select>
                </div>
              </div>
              <div>
                <label style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--cream)" }}>Email address *</label>
                <input type="email" placeholder="you@organization.org" required
                  style={{ width: "100%", marginTop: "0.35rem", padding: "0.6rem 1rem", borderRadius: 12, border: "1px solid rgba(247,244,238,0.15)", background: "rgba(247,244,238,0.06)", color: "var(--cream)", fontSize: "0.88rem", outline: "none" }}
                  onFocus={(e) => e.currentTarget.style.borderColor = "var(--amber)"}
                  onBlur={(e) => e.currentTarget.style.borderColor = "rgba(247,244,238,0.15)"} />
              </div>
              <div>
                <label style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--cream)" }}>Website URL *</label>
                <input type="url" placeholder="https://yourorganization.org" required
                  style={{ width: "100%", marginTop: "0.35rem", padding: "0.6rem 1rem", borderRadius: 12, border: "1px solid rgba(247,244,238,0.15)", background: "rgba(247,244,238,0.06)", color: "var(--cream)", fontSize: "0.88rem", outline: "none" }}
                  onFocus={(e) => e.currentTarget.style.borderColor = "var(--amber)"}
                  onBlur={(e) => e.currentTarget.style.borderColor = "rgba(247,244,238,0.15)"} />
              </div>
              <div>
                <label style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--cream)" }}>Why partner with us? (optional)</label>
                <textarea rows={3} placeholder="Tell us about your organization..."
                  style={{ width: "100%", marginTop: "0.35rem", padding: "0.6rem 1rem", borderRadius: 12, border: "1px solid rgba(247,244,238,0.15)", background: "rgba(247,244,238,0.06)", color: "var(--cream)", fontSize: "0.88rem", outline: "none", resize: "vertical" }}
                  onFocus={(e) => e.currentTarget.style.borderColor = "var(--amber)"}
                  onBlur={(e) => e.currentTarget.style.borderColor = "rgba(247,244,238,0.15)"} />
              </div>
              <button type="submit" className="w-full font-medium rounded-full" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", padding: "0.7rem 1.5rem", color: "var(--charcoal)", background: "var(--amber)", border: "none", cursor: "pointer" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "var(--amber-dim)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "var(--amber)"}>Submit Application</button>
              <p className="text-center" style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>By submitting, you agree to our Partner Terms.</p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--green-deep)", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 className="text-center font-bold mb-10" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "var(--cream)" }}>Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-2xl overflow-hidden" style={{ background: "rgba(247,244,238,0.04)", border: "1px solid rgba(247,244,238,0.07)" }}>
                <summary className="flex cursor-pointer items-center justify-between p-5 font-medium" style={{ color: "var(--cream)", fontSize: "0.9rem" }}>
                  {faq.q}
                  <svg className="h-4 w-4 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" style={{ color: "var(--amber)", flexShrink: 0 }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="px-5 pb-5" style={{ fontSize: "0.85rem", color: "var(--text-body)", lineHeight: 1.65, fontWeight: 300 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

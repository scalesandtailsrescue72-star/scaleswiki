import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

const speciesData = [
  { name: "Ball Python", latin: "Python regius", origin: "West & Central Africa", active: true, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Ball_python_lucy.JPG/400px-Ball_python_lucy.JPG" },
  { name: "Bearded Dragon", latin: "Pogona vitticeps", origin: "Australia", active: false, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Eastern_Bearded_Dragon%2C_Majura%2C_ACT_2609%2C_Australia_imported_from_iNaturalist_photo_67070853_%28cropped%29.jpg/400px-Eastern_Bearded_Dragon%2C_Majura%2C_ACT_2609%2C_Australia_imported_from_iNaturalist_photo_67070853_%28cropped%29.jpg" },
  { name: "Leopard Gecko", latin: "Eublepharis macularius", origin: "Afghanistan & Pakistan", active: false, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Eublepharis_macularius1.jpg/400px-Eublepharis_macularius1.jpg" },
  { name: "Corn Snake", latin: "Pantherophis guttatus", origin: "United States", active: false, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/CornSnake.jpg/400px-CornSnake.jpg" },
  { name: "Crested Gecko", latin: "Correlophus ciliatus", origin: "New Caledonia", active: false, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Crested_gecko_-_1.jpg/400px-Crested_gecko_-_1.jpg" },
  { name: "Blue-Tongued Skink", latin: "Tiliqua scincoides", origin: "Australia", active: false, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Blue-tongued_skink_%28Tiliqua_scincoides%29_head.jpg/400px-Blue-tongued_skink_%28Tiliqua_scincoides%29_head.jpg" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:px-8 lg:py-32">
        <span className="rounded-full border px-4 py-1 text-sm font-medium" style={{ borderColor: "rgba(46,204,113,0.3)", background: "rgba(46,204,113,0.1)", color: "#2ECC71" }}>
          📚 Learn • ❤️ Care • 🌳 Grow
        </span>
        <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          The Place Where People Learn Reptile Husbandry.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 sm:text-xl" style={{ color: "var(--text-gray)" }}>
          Explore evidence-based reptile care guides, structured Academy courses, downloadable resources, and a growing community dedicated to improving reptile welfare through education.
        </p>
        <p className="mt-4 text-base font-medium" style={{ color: "#2ECC71" }}>Education first. Sustainability second.</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="/species" className="rounded-xl px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700" style={{ background: "#16A34A" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#15803D"} onMouseLeave={(e) => e.currentTarget.style.background = "#16A34A"}>Start Learning</a>
          <a href="/#academy" className="rounded-xl border px-8 py-4 text-lg font-semibold transition" style={{ borderColor: "rgba(46,204,113,0.5)", color: "#2ECC71" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(46,204,113,0.1)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}>Explore Academy</a>
        </div>
        <div className="mt-14 grid gap-6 text-left sm:grid-cols-3">
          {[
            { icon: "📚", title: "Learn for Free", desc: "Explore evidence-based reptile care guides written to help keepers provide better care." },
            { icon: "🎓", title: "Academy", desc: "Coming soon: Track progress, earn certificates, complete quizzes, and continue learning." },
            { icon: "🌳", title: "Support the Mission", desc: "Every Academy membership helps keep evidence-based reptile education free for everyone." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl p-6" style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" }}>
              <span className="text-3xl">{c.icon}</span>
              <h3 className="mt-3 text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--text-gray)" }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <div className="border-y" style={{ borderColor: "rgba(255,255,255,0.1)", background: "#101B15" }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 py-5 text-sm font-semibold lg:gap-12" style={{ color: "#2ECC71" }}>
          <span>Evidence-Based Husbandry</span>
          <span className="text-gray-500">•</span>
          <span>Rescue Supported</span>
          <span className="text-gray-500">•</span>
          <span>Printable Resources</span>
          <span className="text-gray-500">•</span>
          <span>Veterinary Review in Progress</span>
        </div>
      </div>

      {/* Species Library */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: "#2ECC71" }}>Species Library</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Explore by Species</h2>
          <p className="mt-5" style={{ color: "var(--text-gray)" }}>Browse evidence-based reptile care guides, Academy lessons, printable resources, and husbandry information.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {speciesData.map((s) => (
            <a key={s.name} href={s.active ? "/species" : undefined} className={`group overflow-hidden rounded-3xl border shadow-lg transition-all duration-300 ${s.active ? 'hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl' : ''}`} style={{ borderColor: s.active ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.1)", background: "#101B15", opacity: s.active ? 1 : 0.9 }}>
              <div className="relative h-64 overflow-hidden">
                <img src={s.image} alt={s.name} className={`h-full w-full object-cover ${s.active ? '' : 'grayscale'}`} loading="lazy" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #08120D, transparent, transparent)" }} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <span className="rounded-full px-3 py-1 text-sm font-semibold" style={{ background: s.active ? "#16A34A" : "#374151", color: s.active ? "white" : "#E5E7EB" }}>Beginner</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{s.name}</h3>
                <p className="mt-2 italic" style={{ color: "#2ECC71" }}>{s.latin}</p>
                <p className="mt-2 text-sm" style={{ color: "var(--text-gray)" }}>{s.origin}</p>
                {s.active ? (
                  <span className="mt-4 inline-block rounded-xl px-6 py-3 font-semibold text-white transition hover:bg-green-700" style={{ background: "#16A34A" }}>View Care Guide</span>
                ) : (
                  <span className="mt-4 inline-block rounded-xl border px-6 py-3 font-semibold text-center" style={{ borderColor: "#374151", color: "var(--text-muted)" }}>Coming Soon</span>
                )}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Care Guides */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: "#2ECC71" }}>Care Guides</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Species Guides</h2>
          <p className="mt-5" style={{ color: "var(--text-gray)" }}>Professionally organized reptile care guides built from veterinary references, published husbandry resources, and rescue experience.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { name: "Ball Python", desc: "Complete evidence-based husbandry guide covering enclosure setup, heating, humidity, feeding, health, and more.", active: true },
            { name: "Leopard Gecko", desc: "Comprehensive care guide currently in development.", active: false },
            { name: "Bearded Dragon", desc: "Complete husbandry guide coming soon.", active: false },
          ].map((g) => (
            <div key={g.name} className="rounded-3xl border p-8" style={{ borderColor: "rgba(255,255,255,0.1)", background: "#101B15" }}>
              <h3 className="text-xl font-semibold text-white">{g.name}</h3>
              <p className="mt-5" style={{ color: "var(--text-gray)" }}>{g.desc}</p>
              {g.active ? (
                <a href="/guides" className="mt-8 inline-block rounded-xl px-8 py-4 font-semibold text-white transition hover:bg-green-700" style={{ background: "#16A34A" }}>Read Guide</a>
              ) : (
                <span className="mt-8 inline-block rounded-xl border px-8 py-4 font-semibold text-center" style={{ borderColor: "#374151", color: "var(--text-muted)" }}>Coming Soon</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Academy */}
      <section id="academy" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border p-10 text-center" style={{ borderColor: "rgba(255,255,255,0.1)", background: "linear-gradient(135deg, #13231B, #0B1411)" }}>
          <div className="mx-auto mb-6 flex items-center justify-center">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <rect width="80" height="80" rx="16" fill="#2ECC71" fillOpacity="0.15"/>
              <path d="M40 20L20 32v16l20 12 20-12V32L40 20z" stroke="#2ECC71" strokeWidth="2.5" fill="none"/>
              <path d="M20 32l20 12 20-12" stroke="#2ECC71" strokeWidth="2" fill="none"/>
              <path d="M40 44v12" stroke="#2ECC71" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: "#2ECC71" }}>ScalesWiki Academy</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Learn Through Structured Courses</h2>
          <p className="mx-auto mt-6 max-w-2xl" style={{ color: "var(--text-gray)" }}>Learn reptile husbandry through structured lessons, quizzes, printable resources, and completion certificates.</p>
          <a href="/#academy" className="mt-8 inline-flex rounded-xl px-10 py-4 text-lg font-semibold text-white transition hover:bg-green-700" style={{ background: "#16A34A" }}>Enter Academy</a>
        </div>
      </section>

      {/* Founders Tree */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border p-10 text-center" style={{ borderColor: "rgba(255,255,255,0.1)", background: "#101B15" }}>
          <div className="mx-auto mb-6 flex items-center justify-center">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <rect width="80" height="80" rx="16" fill="#2ECC71" fillOpacity="0.15"/>
              <path d="M40 12v56M28 24l12-12 12 12M24 36l16-8 16 8M32 48l8-4 8 4" stroke="#2ECC71" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="40" cy="12" r="4" fill="#2ECC71"/>
            </svg>
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: "#2ECC71" }}>Community</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">The Founders Tree</h2>
          <p className="mx-auto mt-6 max-w-2xl" style={{ color: "var(--text-gray)" }}>Every great tree begins with a single seed. Every supporter adds a new leaf. Every partnership grows another branch.</p>
          <p className="mx-auto mt-6 max-w-2xl" style={{ color: "var(--text-gray)" }}>Join the first members helping ScalesWiki grow into the world's most trusted reptile education platform.</p>
          <a href="#" className="mt-8 inline-flex rounded-xl px-10 py-4 text-lg font-semibold text-white transition hover:bg-green-700" style={{ background: "#16A34A" }}>Join the Founders Tree</a>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <p className="text-4xl">❤️</p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: "#2ECC71" }}>Our Mission</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Help Build the Future of Reptile Education</h2>
          <p className="mx-auto mt-6 max-w-3xl" style={{ color: "var(--text-gray)" }}>ScalesWiki exists to make evidence-based reptile husbandry accessible to everyone. Your support helps us create free care guides, Academy courses, printable resources, veterinary collaborations, and rescue initiatives that improve reptile welfare worldwide.</p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {[
            { icon: "📚", title: "Free Education", desc: "Keep high-quality reptile husbandry information available to everyone." },
            { icon: "🩺", title: "Veterinary Collaboration", desc: "Help expand veterinary-reviewed educational content and trusted husbandry recommendations." },
            { icon: "🌳", title: "Grow the Community", desc: "Every member helps another branch grow on the Founders Tree." },
          ].map((p) => (
            <div key={p.title} className="rounded-3xl border p-8 text-center" style={{ borderColor: "rgba(255,255,255,0.1)", background: "linear-gradient(135deg, #132218, #0B1411)" }}>
              <span className="text-4xl">{p.icon}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-5" style={{ color: "var(--text-gray)" }}>{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex rounded-xl px-10 py-4 text-lg font-semibold text-white transition hover:bg-green-700" style={{ background: "#16A34A" }}>Become a Founding Member</a>
        </div>
      </section>

      {/* Rescue */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border p-10 text-center" style={{ borderColor: "rgba(255,255,255,0.1)", background: "linear-gradient(135deg, #13231B, #0B1411)" }}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: "#2ECC71" }}>Rescue mission</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Every purchase helps support reptile rescue work.</h2>
          <p className="mx-auto mt-6 max-w-2xl" style={{ color: "var(--text-gray)" }}>ScalesWiki exists to make reptile care more accessible while giving back to the rescue community that inspired it.</p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border p-10 text-center" style={{ borderColor: "rgba(255,255,255,0.1)", background: "#101B15" }}>
          <h2 className="text-3xl font-semibold sm:text-4xl">Stay Updated</h2>
          <p className="mx-auto mt-6 max-w-2xl" style={{ color: "var(--text-gray)" }}>Receive new care guides, Academy courses, printable resources, and rescue updates.</p>
          <form className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="your@email.com" required
              className="flex-1 rounded-xl border px-5 py-4 text-white outline-none"
              style={{ borderColor: "rgba(255,255,255,0.1)", background: "#15211A" }}
              onFocus={(e) => e.currentTarget.style.borderColor = "var(--green)"}
              onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"} />
            <button type="submit" className="rounded-xl px-8 py-4 font-semibold text-white transition hover:bg-green-700" style={{ background: "#16A34A" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#15803D"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#16A34A"}>Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}

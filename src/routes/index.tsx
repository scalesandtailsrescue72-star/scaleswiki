import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:px-8 lg:py-32">
        <span className="rounded-full border px-4 py-1 text-sm font-medium" style={{ borderColor: "rgba(46,204,113,0.3)", background: "rgba(46,204,113,0.1)", color: "var(--green)" }}>
          Trusted reptile care from rescue experience
        </span>
        <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Reptile knowledge that helps every keeper thrive.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 sm:text-xl" style={{ color: "var(--text-gray)" }}>
          Explore evidence-based care guides, printable resources, and a growing learning library built for beginners and seasoned keepers alike.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="/species" className="rounded-xl px-8 py-4 text-lg font-semibold transition" style={{ background: "var(--green)", color: "#08120D" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--green-hover)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "var(--green)"}>Browse Species Guides</a>
          <a href="/guides" className="rounded-xl border px-8 py-4 text-lg font-semibold transition" style={{ borderColor: "var(--green)", color: "var(--green)" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(46,204,113,0.1)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}>Explore Shop</a>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-4 rounded-2xl border p-6 md:grid-cols-3" style={{ borderColor: "rgba(255,255,255,0.1)", background: "var(--bg-card)" }}>
          {[
            { label: "Rescue-backed guidance", desc: "Built from real experience" },
            { label: "Printable resources", desc: "Checklists and logs" },
            { label: "Community learning", desc: "Beginner to advanced" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--green)" }}>{s.label}</p>
              <p className="mt-2 text-sm" style={{ color: "var(--text-gray)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Species */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--green)" }}>Featured species</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">A quick look at popular reptile care topics.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Ball Python", desc: "Simple, beginner-friendly guidance" },
            { name: "Leopard Gecko", desc: "Habitat and feeding essentials" },
            { name: "Bearded Dragon", desc: "Lighting and husbandry tips" },
          ].map((s) => (
            <a key={s.name} href="/species" className="rounded-2xl border p-6 transition" style={{ borderColor: "rgba(255,255,255,0.1)", background: "var(--bg-card)" }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(46,204,113,0.4)"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}>
              <h3 className="text-xl font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--text-gray)" }}>{s.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Field Guides */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--green)" }}>Professional Field Guides</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Learn from evidence-informed reptile care guides.</h2>
          <p className="mt-4 max-w-3xl" style={{ color: "var(--text-gray)" }}>
            Every ScalesWiki guide is designed to combine practical husbandry, rescue experience, and veterinary review into one easy-to-use resource.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-6" style={{ borderColor: "rgba(255,255,255,0.1)", background: "var(--bg-card)" }}>
            <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "rgba(46,204,113,0.15)", color: "var(--green)" }}>Veterinary Review Draft</span>
            <h3 className="mt-4 text-xl font-semibold">Ball Python Field Manual</h3>
            <p className="mt-2 text-sm" style={{ color: "var(--text-gray)" }}>Our flagship evidence-informed guide covering husbandry, behavior, preventive care, and printable keeper resources.</p>
            <a href="#" className="mt-4 inline-block font-semibold transition" style={{ color: "var(--green)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--green-hover)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--green)"}>Open Guide &rarr;</a>
          </div>
          <div className="rounded-2xl border p-6" style={{ borderColor: "rgba(255,255,255,0.1)", background: "var(--bg-card)" }}>
            <span className="inline-block rounded-full border px-3 py-1 text-xs font-semibold" style={{ borderColor: "rgba(255,255,255,0.2)", color: "var(--text-muted)" }}>In Development</span>
            <h3 className="mt-4 text-xl font-semibold">Bearded Dragon Field Manual</h3>
            <p className="mt-2 text-sm" style={{ color: "var(--text-gray)" }}>A complete care guide currently being written and reviewed.</p>
            <span className="mt-4 inline-block font-semibold" style={{ color: "var(--text-muted)" }}>Coming Soon</span>
          </div>
          <div className="rounded-2xl border p-6" style={{ borderColor: "rgba(255,255,255,0.1)", background: "var(--bg-card)" }}>
            <span className="inline-block rounded-full border px-3 py-1 text-xs font-semibold" style={{ borderColor: "rgba(255,255,255,0.2)", color: "var(--text-muted)" }}>Coming Soon</span>
            <h3 className="mt-4 text-xl font-semibold">Corn Snake Field Manual</h3>
            <p className="mt-2 text-sm" style={{ color: "var(--text-gray)" }}>Planned as part of the ScalesWiki Professional Field Guide Series.</p>
            <span className="mt-4 inline-block font-semibold" style={{ color: "var(--text-muted)" }}>Coming Soon</span>
          </div>
        </div>
      </section>

      {/* Keeper Academy */}
      <section id="academy" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-2xl border p-10 md:p-14" style={{ borderColor: "rgba(255,255,255,0.1)", background: "var(--bg-card)" }}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--green)" }}>Keeper Academy</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">A structured path from first steps to advanced husbandry.</h2>
          <p className="mt-4 max-w-3xl" style={{ color: "var(--text-gray)" }}>
            Join a 52-week curriculum designed to build confidence, improve care routines, and deepen your understanding of reptile wellbeing.
          </p>
          <div className="mt-8">
            <h3 className="font-semibold">What you&rsquo;ll learn</h3>
            <ul className="mt-3 space-y-2" style={{ color: "var(--text-gray)" }}>
              <li>&bull; Habitat setup and environmental balance</li>
              <li>&bull; Feeding plans, enrichment, and seasonal care</li>
              <li>&bull; Observation habits for health and behavior</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Rescue Mission */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--green)" }}>Rescue mission</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Every purchase helps support reptile rescue work.</h2>
          <p className="mt-4" style={{ color: "var(--text-gray)" }}>
            ScalesWiki exists to make reptile care more accessible while giving back to the rescue community that inspired it.
          </p>
        </div>
      </section>

      {/* Email Signup */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-2xl border p-10 text-center md:p-14" style={{ borderColor: "rgba(255,255,255,0.1)", background: "var(--bg-card)" }}>
          <h2 className="text-3xl font-semibold sm:text-4xl">Stay in the loop</h2>
          <p className="mx-auto mt-4 max-w-2xl" style={{ color: "var(--text-gray)" }}>
            Get new care guides and rescue-backed updates in your inbox. Join our list for practical advice, printable resources, and the latest from the ScalesWiki community.
          </p>
          <form className="mx-auto mt-8 flex max-w-md gap-3" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="your@email.com" required
              className="min-w-0 flex-1 rounded-xl border px-4 py-3 text-sm outline-none transition"
              style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)", color: "var(--text-white)" }}
              onFocus={(e) => e.currentTarget.style.borderColor = "var(--green)"}
              onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"} />
            <button type="submit" className="rounded-xl px-6 py-3 text-sm font-semibold transition" style={{ background: "var(--green)", color: "#08120D" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--green-hover)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "var(--green)"}>Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";

const categories = [
  { title: "Ball Python Supplies", description: "Required, recommended, and optional equipment for a responsible Ball Python setup.", href: "/shop/ball-python-supplies", status: "Available", cta: "View shopping list →" },
  { title: "Ball Python Care Guide", description: "Open the complete Ball Python husbandry reference with links to Academy, supplies, and downloadable guides.", href: "/species/ball-python", status: "Available", cta: "Open care guide →" },
  { title: "Free Quick-Start PDF", description: "Download the beginner-friendly Ball Python setup and first-care guide for free.", href: "/api/download-free-guide", status: "Available", cta: "Download free PDF →" },
  { title: "Species Guides", description: "Browse the species directory and see which ScalesWiki care guides are currently available.", href: "/species", status: "Available", cta: "Browse species →" },
  { title: "Equipment Checklists", description: "Simple setup checklists for housing and husbandry, beginning with Ball Pythons.", href: "/shop/ball-python-supplies", status: "Available", cta: "View checklist →" },
  { title: "Bundles & New Releases", description: "Curated care packs and additional species resources will appear here as they are released.", status: "Coming Soon" },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#0B1411] text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">Shop & Resources</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Find the resources that fit your setup.</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">Browse care guides, free downloads, equipment checklists, and species-focused resources designed for responsible reptile care.</p>
        </div>

        <div className="mb-10 rounded-2xl border border-green-500/30 bg-green-500/10 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">Featured now</p>
          <h2 className="mt-2 text-2xl font-bold">Ball Python resource collection</h2>
          <p className="mt-3 max-w-3xl text-gray-300">Start with the complete care reference, download the free quick-start guide, or build your habitat using the ScalesWiki supplies checklist.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/species/ball-python" className="rounded-xl bg-green-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-green-700">Ball Python care guide</Link>
            <Link href="/shop/ball-python-supplies" className="rounded-xl border border-green-400/40 px-5 py-3 text-center font-semibold text-green-200 transition hover:bg-green-900/30">Supplies & shopping list</Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const content = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${category.status === "Available" ? "bg-green-500/15 text-green-300" : "bg-white/10 text-gray-300"}`}>{category.status}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-300">{category.description}</p>
                {category.cta && <p className="mt-5 text-sm font-semibold text-green-300">{category.cta}</p>}
              </>
            );

            return category.href ? (
              <Link key={category.title} href={category.href} className="rounded-2xl border border-white/10 bg-[#101B15] p-6 transition hover:border-green-500/40 hover:bg-[#14201a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400">{content}</Link>
            ) : (
              <div key={category.title} className="rounded-2xl border border-white/10 bg-[#101B15] p-6 opacity-80">{content}</div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

const categories = [
  { title: "Ball Python Supplies", description: "Required, recommended, and optional equipment for a responsible Ball Python setup.", href: "/shop/ball-python-supplies", status: "Available" },
  { title: "Species Guides", description: "Species-specific care references and plans.", href: "/species", status: "Available" },
  { title: "Equipment Checklists", description: "Simple setup checklists for housing and husbandry, beginning with Ball Pythons.", href: "/shop/ball-python-supplies", status: "Available" },
  { title: "Bundles", description: "Curated care packs and starter collections are being developed.", status: "Coming Soon" },
  { title: "Free Downloads", description: "Printable checklists and beginner-friendly resources are on the way.", status: "Coming Soon" },
  { title: "New Releases", description: "A home for newly published guides, resources, and templates.", status: "Coming Soon" },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#0B1411] text-white">
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">Shop</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Find the resources that fit your setup.</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">Browse species-focused checklists, guides, and resources designed for responsible reptile care.</p>
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
              </>
            );

            return category.href ? (
              <Link key={category.title} href={category.href} className="rounded-2xl border border-white/10 bg-[#101B15] p-6 transition hover:border-green-500/40 hover:bg-[#14201a]">{content}</Link>
            ) : (
              <div key={category.title} className="rounded-2xl border border-white/10 bg-[#101B15] p-6 opacity-80">{content}</div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

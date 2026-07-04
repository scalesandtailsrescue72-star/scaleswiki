import Link from "next/link";

const categories = [
  { title: "Bundles", description: "Curated care packs and starter collections." },
  { title: "Free Downloads", description: "Printable checklists and beginner-friendly guides." },
  { title: "New Releases", description: "Fresh resources, guides, and templates." },
  { title: "Best Sellers", description: "Most popular reptile care products and downloads." },
  { title: "Species Guides", description: "Species-specific care references and plans." },
  { title: "Equipment Checklists", description: "Simple setup checklists for housing and husbandry." },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#0B1411] text-white">
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">Shop</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Find the resources that fit your setup.</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Browse bundles, printable guides, and species-focused resources designed for responsible reptile care.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href="/"
              className="rounded-2xl border border-white/10 bg-[#101B15] p-6 transition hover:border-green-500/40 hover:bg-[#14201a]"
            >
              <h2 className="text-xl font-semibold text-white">{category.title}</h2>
              <p className="mt-2 text-sm text-gray-300">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

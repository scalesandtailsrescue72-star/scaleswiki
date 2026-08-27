import Link from "next/link";

type SpeciesCard = {
  name: string;
  description: string;
  status: "Available" | "Coming Soon";
  href?: string;
};

const species: SpeciesCard[] = [
  {
    name: "Ball Python",
    description: "Complete care reference with husbandry guidance, Academy lessons, free and paid PDFs, and a dedicated supplies checklist.",
    status: "Available",
    href: "/species/ball-python",
  },
  { name: "Leopard Gecko", description: "Species guide planned for a future ScalesWiki release.", status: "Coming Soon" },
  { name: "Bearded Dragon", description: "Species guide planned for a future ScalesWiki release.", status: "Coming Soon" },
  { name: "Corn Snake", description: "Species guide planned for a future ScalesWiki release.", status: "Coming Soon" },
  { name: "Blue Tongue Skink", description: "Species guide planned for a future ScalesWiki release.", status: "Coming Soon" },
  { name: "Russian Tortoise", description: "Species guide planned for a future ScalesWiki release.", status: "Coming Soon" },
  { name: "Veiled Chameleon", description: "Species guide planned for a future ScalesWiki release.", status: "Coming Soon" },
  { name: "Green Iguana", description: "Species guide planned for a future ScalesWiki release.", status: "Coming Soon" },
  { name: "Red Eared Slider", description: "Species guide planned for a future ScalesWiki release.", status: "Coming Soon" },
  { name: "Crested Gecko", description: "Species guide planned for a future ScalesWiki release.", status: "Coming Soon" },
];

export default function SpeciesPage() {
  return (
    <main className="min-h-screen bg-[#0B1411] text-white">
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">Species directory</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Explore reptile care by species.</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Browse ScalesWiki care guides, habitat essentials, Academy learning, and rescue-backed guidance by species.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {species.map((item) => {
            const card = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-semibold text-white">{item.name}</h2>
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${item.status === "Available" ? "bg-green-500/15 text-green-300" : "bg-white/10 text-gray-400"}`}>
                    {item.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-300">{item.description}</p>
                {item.href && <p className="mt-5 text-sm font-semibold text-green-300">Explore {item.name} →</p>}
              </>
            );

            return item.href ? (
              <Link key={item.name} href={item.href} className="rounded-2xl border border-green-500/20 bg-[#101B15] p-6 transition hover:border-green-500/50 hover:bg-[#14201a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400">
                {card}
              </Link>
            ) : (
              <div key={item.name} className="rounded-2xl border border-white/10 bg-[#101B15] p-6 opacity-75">
                {card}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

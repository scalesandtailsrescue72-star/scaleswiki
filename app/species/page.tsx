import Link from "next/link";

const species = [
  "Ball Python",
  "Leopard Gecko",
  "Bearded Dragon",
  "Corn Snake",
  "Blue Tongue Skink",
  "Russian Tortoise",
  "Veiled Chameleon",
  "Green Iguana",
  "Red Eared Slider",
  "Crested Gecko",
];

export default function SpeciesPage() {
  return (
    <main className="min-h-screen bg-[#0B1411] text-white">
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">Species directory</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Explore reptile care by species.</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Browse a growing library of care guides, habitat essentials, and rescue-backed guidance for popular reptiles.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {species.map((name) => (
            <Link
              key={name}
              href="/"
              className="rounded-2xl border border-white/10 bg-[#101B15] p-6 transition hover:border-green-500/40 hover:bg-[#14201a]"
            >
              <h2 className="text-xl font-semibold text-white">{name}</h2>
              <p className="mt-2 text-sm text-gray-300">Care guide coming soon.</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

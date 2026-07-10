<h2 className="text-6xl text-red-500">
  TESTING SPECIES GRID
</h2>
import Link from "next/link";

const species = [
  {
    name: "Ball Python",
    scientific: "Python regius",
    difficulty: "Beginner",
    region: "West & Central Africa",
    href: "/species/ball-python",
  },
  {
    name: "Bearded Dragon",
    scientific: "Pogona vitticeps",
    difficulty: "Beginner",
    region: "Australia",
    href: "/species/bearded-dragon",
  },
  {
    name: "Leopard Gecko",
    scientific: "Eublepharis macularius",
    difficulty: "Beginner",
    region: "Afghanistan & Pakistan",
    href: "/species/leopard-gecko",
  },
  {
    name: "Corn Snake",
    scientific: "Pantherophis guttatus",
    difficulty: "Beginner",
    region: "United States",
    href: "/species/corn-snake",
  },
  {
    name: "Crested Gecko",
    scientific: "Correlophus ciliatus",
    difficulty: "Beginner",
    region: "New Caledonia",
    href: "/species/crested-gecko",
  },
  {
    name: "Blue-Tongued Skink",
    scientific: "Tiliqua scincoides",
    difficulty: "Intermediate",
    region: "Australia",
    href: "/species/blue-tongued-skink",
  },
];

export function SpeciesGrid() {
  return (
    <section
      id="species"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
    >
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
          Species Library
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Explore by Species
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
          Every guide is designed to help reptile keepers make informed,
          evidence-based husbandry decisions.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {species.map((animal) => (
          <Link
            key={animal.name}
            href={animal.href}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101B15] transition hover:border-green-500/40 hover:-translate-y-2"
          >
            <div className="h-56 bg-gradient-to-br from-green-900 to-[#16271E] flex items-center justify-center">
              <span className="text-5xl text-white/20">
                Image Coming Soon
              </span>
            </div>

            <div className="p-8">
              <span className="rounded-full bg-green-900/40 px-3 py-1 text-sm text-green-300">
                {animal.difficulty}
              </span>

              <h3 className="mt-5 text-2xl font-semibold text-white">
                {animal.name}
              </h3>

              <p className="italic text-green-300">
                {animal.scientific}
              </p>

              <p className="mt-4 text-gray-400">
                Native Region: {animal.region}
              </p>

              <div className="mt-8 font-medium text-green-400">
                View Care Guide →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
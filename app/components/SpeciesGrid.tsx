import Image from "next/image";
import Link from "next/link";

type Species = {
  name: string;
  scientific: string;
  difficulty: string;
  region: string;
  href: string;
  image: string;
};

const species: Species[] = [
  {
    name: "Ball Python",
    scientific: "Python regius",
    difficulty: "Beginner",
    region: "West & Central Africa",
    image: "/species/ball-python.jpeg",
    href: "/species/ball-python",
  },
  {
    name: "Bearded Dragon",
    scientific: "Pogona vitticeps",
    difficulty: "Beginner",
    region: "Australia",
    image: "/species/bearded-dragon.jpeg",
    href: "/species/bearded-dragon",
  },
  {
    name: "Leopard Gecko",
    scientific: "Eublepharis macularius",
    difficulty: "Beginner",
    region: "Afghanistan & Pakistan",
    image: "/species/leopard-gecko.jpeg",
    href: "/species/leopard-gecko",
  },
  {
    name: "Corn Snake",
    scientific: "Pantherophis guttatus",
    difficulty: "Beginner",
    region: "United States",
    image: "/species/corn-snake.jpeg",
    href: "/species/corn-snake",
  },
  {
    name: "Crested Gecko",
    scientific: "Correlophus ciliatus",
    difficulty: "Beginner",
    region: "New Caledonia",
    image: "/species/crested-gecko.jpeg",
    href: "/species/crested-gecko",
  },
  {
    name: "Blue-Tongued Skink",
    scientific: "Tiliqua scincoides",
    difficulty: "Intermediate",
    region: "Australia",
    image: "/species/blue-tongued-skink.jpeg",
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

        <h2 className="mt-4 text-5xl font-bold text-white">
          Explore by Species
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          Browse evidence-based reptile care guides, printable resources,
          Academy lessons, and husbandry information for the world's most
          popular reptiles.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {species.map((animal) => (
          <Link
            key={animal.name}
            href={animal.href}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101B15] shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-green-500 hover:shadow-2xl"
          >
            <div className="relative h-64 overflow-hidden rounded-t-3xl">
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#08120D] via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white shadow-lg">
                  {animal.difficulty}
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-white">
                {animal.name}
              </h3>

              <p className="mt-2 italic text-green-300">
                {animal.scientific}
              </p>

              <p className="mt-5 flex items-center gap-2 text-gray-400">
                🌍 <span>{animal.region}</span>
              </p>

              <button className="mt-8 w-full rounded-xl border border-green-500 bg-green-600/90 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-green-500">
                View Care Guide
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
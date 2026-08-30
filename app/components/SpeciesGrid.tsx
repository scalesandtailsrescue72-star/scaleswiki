import Image from "next/image";
import Link from "next/link";

type Species = {
  name: string;
  scientific: string;
  difficulty: string;
  region: string;
  image: string;
  href?: string;
  interest: string;
  available: boolean;
};

const species: Species[] = [
  {
    name: "Ball Python",
    scientific: "Python regius",
    difficulty: "Beginner",
    region: "West & Central Africa",
    image: "/species/ball-python.jpeg",
    href: "/species/ball-python",
    interest: "ball-python",
    available: true,
  },
  {
    name: "Bearded Dragon",
    scientific: "Pogona vitticeps",
    difficulty: "Beginner",
    region: "Australia",
    image: "/species/bearded-dragon.jpeg",
    interest: "bearded-dragon",
    available: false,
  },
  {
    name: "Leopard Gecko",
    scientific: "Eublepharis macularius",
    difficulty: "Beginner",
    region: "Afghanistan & Pakistan",
    image: "/species/leopard-gecko.jpeg",
    interest: "leopard-gecko",
    available: false,
  },
  {
    name: "Corn Snake",
    scientific: "Pantherophis guttatus",
    difficulty: "Beginner",
    region: "United States",
    image: "/species/corn-snake.jpeg",
    interest: "corn-snake",
    available: false,
  },
  {
    name: "Crested Gecko",
    scientific: "Correlophus ciliatus",
    difficulty: "Beginner",
    region: "New Caledonia",
    image: "/species/crested-gecko.jpeg",
    interest: "crested-gecko",
    available: false,
  },
  {
    name: "Blue-Tongued Skink",
    scientific: "Tiliqua scincoides",
    difficulty: "Intermediate",
    region: "Australia",
    image: "/species/blue-tongued-skink.jpeg",
    interest: "blue-tongued-skink",
    available: false,
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
          Browse evidence-based reptile care guides, Academy lessons,
          printable resources, and husbandry information.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {species.map((animal) => {
          const Card = (
            <>
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  className={`object-cover transition duration-500 ${
                    animal.available
                      ? "group-hover:scale-110"
                      : "opacity-60 grayscale"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#08120D] via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      animal.available
                        ? "bg-green-600 text-white"
                        : "bg-gray-700 text-gray-200"
                    }`}
                  >
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

                <p className="mt-5 text-gray-400">
                  {animal.region}
                </p>

                <div
                  className={`mt-8 rounded-xl py-3 text-center font-semibold ${
                    animal.available
                      ? "bg-green-600 text-white"
                      : "border border-gray-700 text-gray-400"
                  }`}
                >
                  {animal.available
                    ? "View Care Guide"
                    : "Vote for this guide"}
                </div>
              </div>
            </>
          );

          if (animal.available && animal.href) {
            return (
              <Link
                key={animal.name}
                href={animal.href}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101B15] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl"
              >
                {Card}
              </Link>
            );
          }

          return (
            <Link
              key={animal.name}
              href={`/auth/register?guide=${animal.interest}`}
              className="group block overflow-hidden rounded-3xl border border-white/10 bg-[#101B15] opacity-90 transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:opacity-100"
              aria-label={`Join ScalesWiki and vote for the ${animal.name} guide`}
            >
              {Card}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
import Link from "next/link";

const species = [
  { name: "Ball Python", description: "Simple, beginner-friendly guidance" },
  { name: "Leopard Gecko", description: "Habitat and feeding essentials" },
  { name: "Bearded Dragon", description: "Lighting and husbandry tips" },
];

export function SpeciesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2ECC71]">Featured species</p>
        <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">A quick look at popular reptile care topics.</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {species.map((item) => (
          <Link key={item.name} href="/species" className="rounded-2xl border border-white/10 bg-[#122018] p-6 transition hover:border-[#2ECC71]/40">
            <h3 className="text-xl font-semibold text-white">{item.name}</h3>
            <p className="mt-2 text-sm text-gray-300">{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";

const guides = [
  {
    title: "Ball Python Field Manual",
    status: "Veterinary Review Draft",
    description:
      "Our flagship evidence-informed guide covering husbandry, behavior, preventive care, and printable keeper resources.",
    href: "/guides/ball-python",
    available: true,
  },
  {
    title: "Bearded Dragon Field Manual",
    status: "In Development",
    description:
      "A complete care guide currently being written and reviewed.",
    href: "#",
    available: false,
  },
  {
    title: "Corn Snake Field Manual",
    status: "Coming Soon",
    description:
      "Planned as part of the ScalesWiki Professional Field Guide Series.",
    href: "#",
    available: false,
  },
];

export function GuideCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2ECC71]">
          Professional Field Guides
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Learn from evidence-informed reptile care guides.
        </h2>

        <p className="mt-4 max-w-3xl text-gray-400">
          Every ScalesWiki guide is designed to combine practical husbandry,
          rescue experience, and veterinary review into one easy-to-use
          resource.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {guides.map((guide) => (
          <div
            key={guide.title}
            className="rounded-2xl border border-white/10 bg-[#122018] p-6 shadow-lg"
          >
            <div className="mb-3 inline-block rounded-full bg-green-900/40 px-3 py-1 text-xs font-semibold text-green-300">
              {guide.status}
            </div>

            <h3 className="text-2xl font-semibold text-white">
              {guide.title}
            </h3>

            <p className="mt-4 text-gray-300">
              {guide.description}
            </p>

            <div className="mt-8">
              {guide.available ? (
                <Link
                  href={guide.href}
                  className="inline-flex rounded-lg bg-[#2ECC71] px-5 py-3 font-semibold text-black transition hover:bg-green-400"
                >
                  Open Guide →
                </Link>
              ) : (
                <span className="inline-flex rounded-lg border border-white/10 px-5 py-3 text-gray-500">
                  Coming Soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

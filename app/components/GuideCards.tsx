import Link from "next/link";

const guides = [
  {
    title: "Ball Python",
    description:
      "Complete evidence-based husbandry guide covering enclosure setup, heating, humidity, feeding, health, and more.",
    href: "/species/ball-python",
    status: "Available",
  },
  {
    title: "Leopard Gecko",
    description:
      "Comprehensive care guide currently in development.",
    href: "#",
    status: "Coming Soon",
  },
  {
    title: "Bearded Dragon",
    description:
      "Complete husbandry guide coming soon.",
    href: "#",
    status: "Coming Soon",
  },
];

export function GuideCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

      <div className="text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
          Care Guides
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Species Guides
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          Professionally organized reptile care guides built from veterinary
          references, published husbandry resources, and rescue experience.
        </p>

      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">

        {guides.map((guide) => (

          <div
            key={guide.title}
            className="rounded-3xl border border-white/10 bg-[#101B15] p-8"
          >

            <h3 className="text-2xl font-bold text-white">
              {guide.title}
            </h3>

            <p className="mt-5 leading-7 text-gray-300">
              {guide.description}
            </p>

            <div className="mt-8">

              {guide.status === "Available" ? (
                <Link
                  href={guide.href}
                  className="inline-flex rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500"
                >
                  Read Guide
                </Link>
              ) : (
                <span className="rounded-xl bg-gray-700 px-5 py-3 text-gray-300">
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
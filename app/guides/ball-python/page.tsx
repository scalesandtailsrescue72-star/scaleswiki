import Link from "next/link";

const chapters = [
  {

    title: "Cover",
    href: "/content/guides/ball-python/00-cover.md",
  },
  {
    title: "Introduction",
    href: "/guides/ball-python/introduction",
  },
 {
  title: "Natural History",
  href: "/guides/ball-python/natural-history",
},
  {
    title: "Is a Ball Python Right for You?",
   href:"/guides/ball-python/is-a-ball-python-right-for-you",
  } ,
  {
    title: "Preparing Before You Buy",
    href: "/content/guides/ball-python/04-preparing-before-you-buy.md",
  },
  {
    title: "Selecting a Healthy Ball Python",
    href: "/content/guides/ball-python/05-selecting-a-healthy-ball-python.md",
  },
  {
    title: "Quarantine and Biosecurity",
    href: "/content/guides/ball-python/06-quarantine-biosecurity.md",
  },
  {
    title: "Enclosure Design",
    href: "/content/guides/ball-python/07-enclosure-design.md",
  },
  {
    title: "Illustrations",
    href: "/content/guides/ball-python/illustrations.md",
  },
  {
    title: "Worksheets",
    href: "/content/guides/ball-python/worksheets.md",
  },
  {
    title: "References",
    href: "/content/guides/ball-python/references.md",
  },
];

export default function BallPythonGuidePage() {
  return (
    <main className="min-h-screen bg-[#08120D] text-[#F5F5F5]">
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2ECC71]">
          Guide
        </p>

        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
          Ball Python Care Guide
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-[#9CA3AF]">
          A structured, beginner-friendly guide covering setup, care, and
          health considerations.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {chapters.map((chapter) => (
            <Link
              key={chapter.title}
              href={chapter.href}
              className="rounded-2xl border border-white/10 bg-[#122018] p-6 transition hover:border-[#2ECC71]/40"
            >
              <h2 className="text-xl font-semibold text-white">
                {chapter.title}
              </h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
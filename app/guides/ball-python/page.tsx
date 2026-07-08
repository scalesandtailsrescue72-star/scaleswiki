import Link from "next/link";

const chapters = [
  {
    title: "Introduction",
    href: "/guides/ball-python/introduction",
    available: true,
  },
  {
    title: "Natural History",
    href: "/guides/ball-python/natural-history",
    available: true,
  },
  {
    title: "Is a Ball Python Right for You?",
    href: "/guides/ball-python/is-a-ball-python-right-for-you",
    available: true,
  },
  {
    title: "Preparing Before You Buy",
    available: false,
  },
  {
    title: "Selecting a Healthy Ball Python",
    available: false,
  },
  {
    title: "Quarantine & Biosecurity",
    available: false,
  },
  {
    title: "Enclosure Design",
    available: false,
  },
  {
    title: "Lighting & Heating",
    available: false,
  },
  {
    title: "Humidity",
    available: false,
  },
  {
    title: "Feeding",
    available: false,
  },
  {
    title: "Health & Disease",
    available: false,
  },
  {
    title: "References",
    available: false,
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
          A structured, evidence-based guide covering every stage of responsible
          ball python care.
        </p>

        <div className="mt-8 rounded-2xl border border-[#2ECC71]/30 bg-[#10351E] p-6">
          <h2 className="text-xl font-bold text-[#2ECC71]">
            🚧 Guide Progress
          </h2>

          <p className="mt-3 text-gray-300">
            The Ball Python Guide is being released chapter by chapter. New
            chapters are added as they are researched, written, and reviewed.
          </p>

          <p className="mt-4 font-semibold text-white">
            3 of 12 chapters currently available
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {chapters.map((chapter) =>
            chapter.available ? (
              <Link
                key={chapter.title}
                href={chapter.href!}
                className="rounded-2xl border border-white/10 bg-[#122018] p-6 transition hover:border-[#2ECC71]/40 hover:scale-[1.02]"
              >
                <h2 className="text-xl font-semibold text-white">
                  {chapter.title}
                </h2>

                <div className="mt-4 flex items-center gap-2">
                  <span className="rounded-full bg-[#2ECC71]/20 px-3 py-1 text-xs font-semibold text-[#2ECC71]">
                    ✓ Published
                  </span>

                  <span className="text-sm text-gray-400">
                    Read Chapter →
                  </span>
                </div>
              </Link>
            ) : (
              <div
                key={chapter.title}
                className="rounded-2xl border border-dashed border-white/10 bg-[#0D1712] p-6 opacity-70"
              >
                <h2 className="text-xl font-semibold text-gray-400">
                  {chapter.title}
                </h2>

                <p className="mt-2 text-sm font-semibold text-yellow-400">
                  🚧 Coming Soon
                </p>

                <p className="mt-3 text-sm text-gray-400">
                  This chapter is currently being researched and prepared for
                  publication.
                </p>
              </div>
            )
          )}
        </div>

        <section className="mt-16 rounded-2xl border border-[#2ECC71]/30 bg-[#10351E] p-8 text-center">
          <h2 className="text-2xl font-bold text-[#2ECC71]">
            More Chapters Coming Soon
          </h2>

          <p className="mt-4 text-lg text-gray-300">
            ScalesWiki is continuously expanding with new chapters, printable
            resources, quizzes, and educational tools.
          </p>
        </section>
      </section>
    </main>
  );
}
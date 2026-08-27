import Link from "next/link";

const chapters = [
  { title: "Introduction", href: "/guides/ball-python/introduction" },
  { title: "Natural History", href: "/guides/ball-python/natural-history" },
  { title: "Is a Ball Python Right for You?", href: "/guides/ball-python/is-a-ball-python-right-for-you" },
];

const resources = [
  {
    title: "Complete Ball Python Care Reference",
    description: "Read the full ScalesWiki husbandry reference covering enclosure design, heating, humidity, feeding, handling, health, and more.",
    href: "/species/ball-python",
    cta: "Open full care reference →",
  },
  {
    title: "Ball Python Supplies & Shopping List",
    description: "Use the setup checklist for enclosure, heating, monitoring, feeding, cleaning, and quarantine equipment.",
    href: "/shop/ball-python-supplies",
    cta: "View supplies →",
  },
  {
    title: "Ball Python 101 Academy",
    description: "Learn step by step with structured lessons, quizzes, progress tracking, a final exam, and a ScalesWiki certificate.",
    href: "/academy/ball-python",
    cta: "Enter Academy →",
  },
  {
    title: "Free Quick-Start PDF",
    description: "Download the practical beginner guide for pre-arrival setup and first-care essentials at no cost.",
    href: "/api/download-free-guide",
    cta: "Download free PDF →",
  },
];

export default function BallPythonGuidePage() {
  return (
    <main className="min-h-screen bg-[#08120D] text-[#F5F5F5]">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2ECC71]">Ball Python Resource Center</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Ball Python Care Guide</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[#B4B9B6]">
          Start with the published chapters below, then use the complete care reference, Academy course, setup checklist, and downloadable guides to go deeper.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {resources.map((resource) => (
            <Link
              key={resource.title}
              href={resource.href}
              className="rounded-2xl border border-[#2ECC71]/25 bg-[#10351E]/70 p-6 transition hover:border-[#2ECC71]/60 hover:bg-[#123D23] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ECC71]"
            >
              <h2 className="text-xl font-semibold text-white">{resource.title}</h2>
              <p className="mt-3 text-sm leading-6 text-gray-300">{resource.description}</p>
              <p className="mt-5 text-sm font-semibold text-[#75E8A4]">{resource.cta}</p>
            </Link>
          ))}
        </div>

        <section className="mt-14">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2ECC71]">Published chapters</p>
              <h2 className="mt-2 text-3xl font-semibold">Read chapter by chapter</h2>
            </div>
            <Link href="/species/ball-python" className="text-sm font-semibold text-[#75E8A4] hover:text-white">Prefer the full reference? Open it here →</Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {chapters.map((chapter) => (
              <Link
                key={chapter.title}
                href={chapter.href}
                className="rounded-2xl border border-white/10 bg-[#122018] p-6 transition hover:border-[#2ECC71]/40 hover:bg-[#16281E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ECC71]"
              >
                <span className="rounded-full bg-[#2ECC71]/20 px-3 py-1 text-xs font-semibold text-[#75E8A4]">Published</span>
                <h3 className="mt-4 text-xl font-semibold text-white">{chapter.title}</h3>
                <p className="mt-4 text-sm font-semibold text-gray-300">Read chapter →</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-[#2ECC71]/30 bg-[#0E2517] p-8">
          <h2 className="text-2xl font-bold text-[#75E8A4]">Want the complete guide?</h2>
          <p className="mt-3 max-w-3xl text-gray-300">
            The complete Ball Python care reference is already available online, while the chapter-by-chapter edition continues to expand. You can also download the free Quick-Start PDF or purchase the full Ball Python 101 PDF from the care reference page.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/species/ball-python" className="rounded-xl bg-green-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-green-700">Open complete reference</Link>
            <Link href="/shop/ball-python-supplies" className="rounded-xl border border-green-500/40 px-5 py-3 text-center font-semibold text-green-300 transition hover:bg-green-900/30">View setup & supplies</Link>
          </div>
        </section>
      </section>
    </main>
  );
}

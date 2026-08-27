import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:px-8 lg:py-32">
      <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-sm font-medium text-green-300">
        📚 Learn • ❤️ Care • 🌳 Grow
      </span>

      <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
        The Place Where People Learn Reptile Husbandry.
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
        Explore evidence-based reptile care guides, structured Academy courses,
        downloadable resources, and a growing community dedicated to improving
        reptile welfare through education.
      </p>

      <p className="mt-4 text-base font-medium text-green-300">
        Education first. Sustainability second.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="#guides"
          className="rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
        >
          Start Learning
        </Link>

        <Link
          href="/academy"
          className="rounded-xl border border-green-600 px-8 py-4 text-lg font-semibold text-green-300 transition hover:bg-green-900/40"
        >
          Enter Academy
        </Link>
      </div>

      <div className="mt-14 grid gap-6 text-left sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-3xl">📚</p>

          <h3 className="mt-4 text-xl font-semibold text-white">
            Learn for Free
          </h3>

          <p className="mt-2 text-sm text-gray-300">
            Explore evidence-based reptile care guides written to help keepers
            provide better care.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-3xl">🎓</p>

          <h3 className="mt-4 text-xl font-semibold text-white">
            ScalesWiki Academy
          </h3>

          <p className="mt-2 text-sm text-gray-300">
            Learn at your own pace with structured lessons, quizzes, progress
            tracking, final exams, and ScalesWiki certificates.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-3xl">🌳</p>

          <h3 className="mt-4 text-xl font-semibold text-white">
            Support the Mission
          </h3>

          <p className="mt-2 text-sm text-gray-300">
            Every Academy membership helps keep evidence-based reptile education
            free for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}
export function Academy() {
  return (
    <section
      id="academy"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
    >
      <div className="rounded-3xl border border-white/10 bg-[#101B15] p-10">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
          🎓 ScalesWiki Academy
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Learn. Track. Achieve.
          <p className="mt-3 text-green-300 font-medium">
  Education first. Sustainability second.
</p>
        </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
  The ScalesWiki Academy transforms reptile care into a structured
  learning experience through guided lessons, quizzes, certificates,
  and printable educational resources.
</p>

<p className="mt-4 text-base text-gray-400 italic">
  Every expert reptile keeper started by learning one chapter at a time.
</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-4xl">📈</div>
            <h3 className="mt-4 text-xl font-semibold">
              Track Progress
            </h3>
            <p className="mt-2 text-gray-300">
              Monitor your learning across every Academy course.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-4xl">📝</div>
            <h3 className="mt-4 text-xl font-semibold">
              Chapter Quizzes
            </h3>
            <p className="mt-2 text-gray-300">
              Reinforce important concepts with interactive quizzes.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-4xl">🏆</div>
            <h3 className="mt-4 text-xl font-semibold">
              Certificates
            </h3>
            <p className="mt-2 text-gray-300">
              Earn certificates as you complete Academy courses.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-4xl">📄</div>
            <h3 className="mt-4 text-xl font-semibold">
              Study Guides
            </h3>
            <p className="mt-2 text-gray-300">
              Download printable resources designed for long-term success.
            </p>
          </div>

        </div>

        <div className="mt-12 rounded-2xl border border-green-500/20 bg-green-950/40 p-8 text-center">

          <h3 className="text-2xl font-semibold text-white">
          Coming Soon • Founding Academy
          </h3>

          <p className="mt-4 text-lg text-gray-300">
            We're building the Academy one course at a time to create
            the most trusted educational platform for reptile husbandry.
          </p>

          <p className="mt-8 text-green-300 font-medium">
            ❤️ Every Academy membership helps keep evidence-based reptile education free for everyone.
          </p>
          <div className="mt-8">
  <button className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700">
    Academy Launching Soon
  </button>
</div>

        </div>

      </div>
    </section>
  );
}
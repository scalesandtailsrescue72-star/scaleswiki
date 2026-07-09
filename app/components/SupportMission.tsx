export function SupportMission() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="rounded-3xl border border-green-500/20 bg-gradient-to-br from-[#13231B] to-[#0B1411] p-10 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
          ❤️ Our Mission
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Help Build the Future of Reptile Education
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          ScalesWiki exists to make evidence-based reptile husbandry accessible
          to everyone. Your support helps us create free care guides, Academy
          courses, printable resources, veterinary collaborations, and rescue
          initiatives that improve reptile welfare worldwide.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-5xl">📚</div>

            <h3 className="mt-4 text-xl font-semibold text-white">
              Free Education
            </h3>

            <p className="mt-3 text-gray-300">
              Keep high-quality reptile husbandry information available to
              everyone.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-5xl">🩺</div>

            <h3 className="mt-4 text-xl font-semibold text-white">
              Veterinary Collaboration
            </h3>

            <p className="mt-3 text-gray-300">
              Help expand veterinary-reviewed educational content and trusted
              husbandry recommendations.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-5xl">🌳</div>

            <h3 className="mt-4 text-xl font-semibold text-white">
              Grow the Community
            </h3>

            <p className="mt-3 text-gray-300">
              Every member helps another branch grow on the Founders Tree.
            </p>
          </div>

        </div>

        <div className="mt-12">
          <button className="rounded-xl bg-green-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-green-700">
            Become a Founding Member
          </button>
        </div>

      </div>
    </section>
  );
}
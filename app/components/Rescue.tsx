import Link from "next/link";

export function Rescue() {
  return (
    <section id="rescue" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#132218] to-[#0B1411] p-8 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">Rescue mission</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Better education can prevent preventable suffering.</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
          ScalesWiki grew from rescue experience. Our guides and Academy are designed to help keepers make stronger husbandry decisions before problems become emergencies.
        </p>
        <Link
          href="/rescue"
          className="mt-7 inline-flex rounded-xl border border-green-600 px-6 py-3 font-semibold text-green-300 transition hover:bg-green-950/50"
        >
          See how rescue shapes ScalesWiki →
        </Link>
      </div>
    </section>
  );
}

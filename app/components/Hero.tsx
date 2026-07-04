import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:px-8 lg:py-32">
      <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-sm font-medium text-green-300">
        Trusted reptile care from rescue experience
      </span>

      <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
        Reptile knowledge that helps every keeper thrive.
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
        Explore evidence-based care guides, printable resources, and a growing learning library built for beginners and seasoned keepers alike.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="#guides"
          className="rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
        >
          Browse Care Guides
        </Link>
        <Link
          href="#academy"
          className="rounded-xl border border-green-600 px-8 py-4 text-lg font-semibold text-green-300 transition hover:bg-green-900/40"
        >
          Join Keeper Academy
        </Link>
      </div>

      <div className="mt-14 grid gap-6 text-left sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-3xl font-semibold text-green-400">52</p>
          <p className="mt-2 text-sm text-gray-300">Weeks of beginner-friendly academy lessons</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-3xl font-semibold text-green-400">100%</p>
          <p className="mt-2 text-sm text-gray-300">Printable care sheets and checklists</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-3xl font-semibold text-green-400">1</p>
          <p className="mt-2 text-sm text-gray-300">Rescue mission supported with every purchase</p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[600px]">

      {/* Background Image */}
      <Image
        src="/species/ball-python.jpeg"
        alt="Ball Python resting on a branch"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08120D] via-[#08120D]/60 to-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">

        <div className="mx-auto flex w-full max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <span className="rounded-full border border-green-500/40 bg-green-900/40 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
              Species Guide
            </span>

            <h1 className="mt-8 text-6xl font-black tracking-tight text-white lg:text-7xl">
              Ball Python
            </h1>

            <p className="mt-4 text-3xl italic text-green-300">
              Python regius
            </p>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-200">
              The Ball Python is one of the world's most popular pet snakes,
              prized for its calm temperament, manageable size, and incredible
              diversity of naturally occurring and selectively bred color
              morphs. This guide combines evidence-based husbandry practices
              with practical experience to help keepers provide exceptional,
              welfare-focused care.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">

              <div className="rounded-2xl bg-green-600 px-6 py-4 shadow-lg">
                <div className="text-sm uppercase tracking-wider text-green-100">
                  Difficulty
                </div>

                <div className="mt-1 text-xl font-bold">
                  Beginner
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 px-6 py-4 backdrop-blur">

                <div className="text-sm uppercase tracking-wider text-gray-300">
                  Adult Size
                </div>

                <div className="mt-1 text-xl font-bold text-white">
                  3–5 ft
                </div>

              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 px-6 py-4 backdrop-blur">

                <div className="text-sm uppercase tracking-wider text-gray-300">
                  Lifespan
                </div>

                <div className="mt-1 text-xl font-bold text-white">
                  20–30 Years
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
export function Introduction() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

      <div className="max-w-4xl">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
          Introduction
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Meet the Ball Python
        </h2>

        <p className="mt-8 text-xl leading-9 text-gray-300">
          The Ball Python (<span className="italic">Python regius</span>) is one
          of the most popular pet snakes in the world. Native to the grasslands
          and forests of West and Central Africa, this species is well known for
          its calm temperament, manageable adult size, and remarkable diversity
          of naturally occurring and selectively bred color morphs.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          Ball Pythons earned their common name from their natural defensive
          behavior. When frightened, they curl into a tight ball with their head
          protected in the center rather than striking. This behavior, combined
          with their generally calm disposition, has made them one of the most
          commonly recommended snake species for responsible first-time keepers.
        </p>

      </div>

      <div className="mt-16 rounded-3xl border border-blue-500/30 bg-blue-950/30 p-8">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
          ScalesWiki Fact
        </p>

        <h3 className="mt-4 text-2xl font-bold text-white">
          Why are they called "Royal Pythons"?
        </h3>

        <p className="mt-4 text-lg leading-8 text-gray-300">
          In many parts of Europe, Ball Pythons are known as
          <span className="font-semibold text-white"> Royal Pythons</span>.
          Historical accounts suggest they were associated with African royalty,
          where they were respected and sometimes worn ceremonially as symbols
          of status.
        </p>

      </div>

      <div className="mt-10 rounded-3xl border border-green-500/20 bg-green-950/30 p-8">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
          Why This Guide Exists
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-300">
          This guide was created to provide evidence-based husbandry
          recommendations that prioritize animal welfare. Husbandry practices
          continue to evolve as new research and keeper experience become
          available, so ScalesWiki regularly reviews and updates its guides to
          reflect current best practices.
        </p>

      </div>

    </section>
  );
}
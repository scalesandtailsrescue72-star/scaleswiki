export function NaturalHistory() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

      <div className="max-w-5xl">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
          Natural History
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Understanding the Species
        </h2>

        <p className="mt-8 text-xl leading-9 text-gray-300">
          Ball Pythons are native to West and Central Africa, where they inhabit
          savannas, grasslands, lightly wooded forests, and agricultural areas.
          Rather than living in dense tropical rainforests, they spend much of
          their lives hidden beneath vegetation or inside abandoned rodent
          burrows that provide protection from predators and extreme
          temperatures.
        </p>

        <p className="mt-8 text-lg leading-8 text-gray-400">
          These underground retreats create stable environmental conditions,
          helping maintain humidity while shielding the snakes from intense
          daytime heat. Understanding this natural behavior explains why secure
          hiding places and appropriate humidity are essential in captivity.
        </p>

      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">

        <div className="rounded-3xl border border-white/10 bg-[#101B15] p-8">

          <h3 className="text-2xl font-bold text-white">
            🌍 Habitat
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Grasslands, forest edges, scrublands and abandoned mammal burrows
            throughout West and Central Africa.
          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-[#101B15] p-8">

          <h3 className="text-2xl font-bold text-white">
            🌙 Activity
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Primarily nocturnal and crepuscular, becoming most active during
            the evening and overnight hours.
          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-[#101B15] p-8">

          <h3 className="text-2xl font-bold text-white">
            🐀 Diet
          </h3>

          <p className="mt-5 leading-8 text-gray-300">
            Wild Ball Pythons consume a variety of appropriately sized mammals
            and occasionally birds depending on age, season and habitat.
          </p>

        </div>

      </div>

      <div className="mt-16 rounded-3xl border border-amber-500/30 bg-amber-950/20 p-8">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
          ScalesWiki Insight
        </p>

        <h3 className="mt-4 text-2xl font-bold text-white">
          Good husbandry starts with understanding the wild animal.
        </h3>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Successful captive care isn't about copying nature exactly—it's about
          understanding the environmental conditions that shaped the species'
          evolution. By recreating those key conditions in captivity, keepers
          can promote natural behaviors and long-term health.
        </p>

      </div>

    </section>
  );
}
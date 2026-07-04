export function Academy() {
  return (
    <section id="academy" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-8 rounded-3xl border border-white/10 bg-[#122018] p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2ECC71]">Keeper Academy</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A structured path from first steps to advanced husbandry.</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Join a 52-week curriculum designed to build confidence, improve care routines, and deepen your understanding of reptile wellbeing.
          </p>
        </div>

        <div className="rounded-2xl border border-[#2ECC71]/20 bg-[#2ECC71]/10 p-6">
          <h3 className="text-xl font-semibold text-white">What you’ll learn</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            <li>• Habitat setup and environmental balance</li>
            <li>• Feeding plans, enrichment, and seasonal care</li>
            <li>• Observation habits for health and behavior</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

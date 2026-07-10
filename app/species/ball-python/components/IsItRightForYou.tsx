export function IsItRightForYou() {
  const checklist = [
    {
      title: "First Snake",
      answer: "Excellent Choice",
      color: "text-green-400",
    },
    {
      title: "Handle Frequently",
      answer: "Usually Calm",
      color: "text-green-400",
    },
    {
      title: "Display Animal",
      answer: "Often Hidden",
      color: "text-yellow-400",
    },
    {
      title: "Feed Frozen Rodents",
      answer: "Required",
      color: "text-red-400",
    },
    {
      title: "Long-Term Commitment",
      answer: "20–30+ Years",
      color: "text-yellow-400",
    },
    {
      title: "Daily Care",
      answer: "Low Maintenance",
      color: "text-green-400",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

      <div className="text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
          Ownership Assessment
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Is a Ball Python Right for You?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
          Every reptile is a long-term commitment. Before bringing one home,
          consider whether its care requirements match your lifestyle and
          expectations.
        </p>

      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">

        {checklist.map((item) => (

          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-[#101B15] p-8 transition hover:border-green-500/40"
          >

            <h3 className="text-xl font-semibold text-white">
              {item.title}
            </h3>

            <p className={`mt-4 text-2xl font-bold ${item.color}`}>
              {item.answer}
            </p>

          </div>

        ))}

      </div>

      <div className="mt-16 rounded-3xl border border-green-500/20 bg-green-950/30 p-10">

        <h3 className="text-3xl font-bold text-white">
          Our Recommendation
        </h3>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Ball Pythons are among the best choices for keepers willing to
          research proper husbandry and commit to decades of responsible care.
          Their calm temperament and manageable size make them approachable for
          many beginners, but they still require thoughtful enclosure design,
          environmental monitoring, and regular health observation.
        </p>

      </div>

    </section>
  );
}
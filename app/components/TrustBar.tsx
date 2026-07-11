export function TrustBar() {
  const items = [
    "Evidence-Based Husbandry",
    "Rescue Supported",
    "Printable Resources",
    "Veterinary Review in Progress",
  ];

  return (
    <section className="border-y border-white/10 bg-[#101B15]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 py-5 text-sm font-semibold text-green-300 lg:gap-12">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
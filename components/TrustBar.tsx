const trustItems = [
  { label: "Rescue-backed guidance", value: "Built from real experience" },
  { label: "Printable resources", value: "Checklists and logs" },
  { label: "Community learning", value: "Beginner to advanced" },
];

export function TrustBar() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <div className="grid gap-4 rounded-2xl border border-white/10 bg-[#122018] p-6 md:grid-cols-3">
        {trustItems.map((item) => (
          <div key={item.label}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2ECC71]">{item.label}</p>
            <p className="mt-2 text-sm text-gray-300">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

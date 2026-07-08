interface DecisionChecklistProps {
  title: string;
  items: string[];
}

export default function DecisionChecklist({
  title,
  items,
}: DecisionChecklistProps) {
  return (
    <section className="mt-16 rounded-2xl border border-yellow-500/30 bg-[#2A2113] p-8">
      <h2 className="text-2xl font-bold text-yellow-400">
        {title}
      </h2>

      <ul className="mt-6 space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex gap-3 text-gray-300"
          >
            <span className="text-yellow-400">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
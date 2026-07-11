interface ObjectiveListProps {
  objectives: string[];
}

export function ObjectiveList({
  objectives,
}: ObjectiveListProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#101B15] p-6">

      <h3 className="text-2xl font-bold text-white">
        Learning Objectives
      </h3>

      <ul className="mt-6 space-y-4">

        {objectives.map((objective) => (

          <li
            key={objective}
            className="flex gap-3 text-gray-300"
          >
            <span className="text-green-400">✓</span>

            <span>{objective}</span>

          </li>

        ))}

      </ul>

    </div>
  );
}
interface SpeciesStatProps {
  label: string;
  value: string;
  description?: string;
  accent?: "green" | "blue" | "orange" | "purple";
}

const accentStyles = {
  green: "text-green-400",
  blue: "text-blue-400",
  orange: "text-orange-400",
  purple: "text-purple-400",
};

export function SpeciesStat({
  label,
  value,
  description,
  accent = "green",
}: SpeciesStatProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#101B15] p-8 transition hover:border-green-500/40 hover:bg-[#14201a]">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
        {label}
      </p>

      <h3
        className={`mt-4 text-4xl font-bold ${accentStyles[accent]}`}
      >
        {value}
      </h3>

      {description && (
        <p className="mt-6 leading-7 text-gray-300">
          {description}
        </p>
      )}
    </div>
  );
}
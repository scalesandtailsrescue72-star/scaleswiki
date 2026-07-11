interface ProgressBarProps {
  completed: number;
  total: number;
}

export function ProgressBar({
  completed,
  total,
}: ProgressBarProps) {
  const percent = Math.round((completed / total) * 100);

  return (
    <div className="rounded-2xl border border-white/10 bg-[#101B15] p-6">

      <div className="flex items-center justify-between">

        <h3 className="text-xl font-bold text-white">
          Course Progress
        </h3>

        <span className="text-green-400 font-semibold">
          {percent}%
        </span>

      </div>

      <div className="mt-5 h-4 overflow-hidden rounded-full bg-gray-700">

        <div
          className="h-full rounded-full bg-green-500 transition-all"
          style={{ width: `${percent}%` }}
        />

      </div>

      <p className="mt-4 text-gray-300">
        {completed} of {total} lessons completed.
      </p>

    </div>
  );
}
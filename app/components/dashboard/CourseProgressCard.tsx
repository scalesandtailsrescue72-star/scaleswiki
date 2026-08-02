import Link from "next/link";

type CourseProgressCardProps = {
  title: string;
  slug: string;
  completed: number;
  total: number;
};

export default function CourseProgressCard({
  title,
  slug,
  completed,
  total,
}: CourseProgressCardProps) {
  const percent =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="rounded-2xl border border-green-900 bg-[#102017] p-6 shadow-lg">
      <h3 className="text-2xl font-bold text-green-300">
        {title}
      </h3>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-800">
        <div
          className="h-full rounded-full bg-green-500 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="mt-4 text-gray-300">
        {completed} of {total} lessons completed
      </p>

      <p className="mt-1 text-sm text-green-300">
        {percent}% Complete
      </p>

      <Link
        href={`/academy/${slug}`}
        className="mt-6 inline-block rounded-lg bg-green-600 px-5 py-2 font-semibold hover:bg-green-500"
      >
        Open Course →
      </Link>
    </div>
  );
}
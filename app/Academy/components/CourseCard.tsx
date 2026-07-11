import Link from "next/link";

interface CourseCardProps {
  title: string;
  description: string;
  level: string;
  lessons: number;
  duration: string;
  href: string;
  available?: boolean;
}

export function CourseCard({
  title,
  description,
  level,
  lessons,
  duration,
  href,
  available = true,
}: CourseCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#101B15] p-8 shadow-xl">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold text-white">
          {title}
        </h2>

        <span className="rounded-full bg-green-700/30 px-3 py-1 text-xs font-semibold text-green-300">
          {level}
        </span>

      </div>

      <p className="mt-6 leading-7 text-gray-300">
        {description}
      </p>

      <div className="mt-8 space-y-2 text-sm text-gray-400">

        <p>📚 Lessons: {lessons}</p>

        <p>⏱ Estimated Time: {duration}</p>

      </div>

      <div className="mt-10">

        {available ? (
          <Link
            href={href}
            className="inline-flex rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500"
          >
            Start Course
          </Link>
        ) : (
          <button
            disabled
            className="rounded-xl bg-gray-700 px-6 py-3 text-gray-400"
          >
            Coming Soon
          </button>
        )}

      </div>

    </div>
  );
}
import Link from "next/link";

interface LessonCardProps {
  lesson: number;
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  href: string;
  completed?: boolean;
}

export function LessonCard({
  lesson,
  title,
  description,
  duration,
  difficulty,
  href,
  completed = false,
}: LessonCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#101B15] p-6 transition hover:border-green-500">

      <div className="flex items-center justify-between">

        <span className="text-sm font-semibold uppercase tracking-wide text-green-400">
          Lesson {lesson}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            completed
              ? "bg-green-700/30 text-green-300"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          {completed ? "Completed" : "Ready"}
        </span>

      </div>

      <h3 className="mt-4 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-300">
        {description}
      </p>

      <div className="mt-6 flex gap-6 text-sm text-gray-400">
        <span>⏱ {duration}</span>
        <span>📚 {difficulty}</span>
      </div>

      <Link
        href={href}
        className="mt-8 inline-flex rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500"
      >
        Open Lesson
      </Link>

    </div>
  );
}
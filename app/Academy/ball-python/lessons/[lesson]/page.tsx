import Link from "next/link";
import { notFound } from "next/navigation";

import { ballPythonCourse } from "@/app/academy/data/ball-python/course";

type LessonPageProps = {
  params: Promise<{
    lesson: string;
  }>;
};

export default async function LessonPage({
  params,
}: LessonPageProps) {
  const { lesson } = await params;

  const currentLesson = ballPythonCourse.lessons.find(
    (l) => l.number === Number(lesson)
  );

  if (!currentLesson) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#08120D] text-white p-10">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-widest text-green-400">
          Ball Python Academy
        </p>

        <h1 className="mt-2 text-5xl font-bold">
          {currentLesson.title}
        </h1>

        <div className="mt-6 flex gap-6 text-gray-300">
          <span>⏱ {currentLesson.duration}</span>
          <span>📈 {currentLesson.difficulty}</span>
        </div>

        <div className="mt-10">
          <Link
            href={currentLesson.guideHref}
            className="rounded-lg bg-green-600 px-6 py-3 font-medium hover:bg-green-700"
          >
            Read this section of the Guide →
          </Link>
        </div>
      </div>
    </main>
  );
}
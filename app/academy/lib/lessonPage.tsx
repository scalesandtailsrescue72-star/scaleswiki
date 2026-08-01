import Link from "next/link";
import LessonComplete from "../components/LessonComplete";
import { MarkdownLesson } from "../components/MarkdownLesson";
import { CourseProgress } from "../components/CourseProgress";
import type { Course, LessonExtended } from "../types/course";

type LessonPageProps = {
  course: Course;
  currentLesson: LessonExtended;
  lessonContent: string;
  previousLesson?: LessonExtended;
  nextLesson?: LessonExtended;
};

export function LessonPage({
  course,
  currentLesson,
  lessonContent,
  previousLesson,
  nextLesson,
}: LessonPageProps) {
  const objectives =
    currentLesson.objectives && currentLesson.objectives.length > 0
      ? currentLesson.objectives
      : null;

  const takeaways =
    currentLesson.keyTakeaways && currentLesson.keyTakeaways.length > 0
      ? currentLesson.keyTakeaways
      : null;

  return (
    <main className="min-h-screen bg-[#08120D] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm uppercase tracking-widest text-green-400">
          ScalesWiki Academy
        </p>

        <div className="mt-2 flex items-start justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold">
              Lesson {currentLesson.number}: {currentLesson.title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-6 text-gray-300">
              <span>⏱ {currentLesson.duration}</span>
              <span>📈 {currentLesson.difficulty}</span>
            </div>
          </div>

          <div className="w-48">
            <CourseProgress
              courseId={course.slug}
              total={course.lessons.length}
            />
          </div>
        </div>

        {currentLesson.plate?.src ? (
          <section className="mt-8">
            <div className="rounded-xl overflow-hidden border border-white/5">
              <img
                src={currentLesson.plate.src}
                alt={currentLesson.plate.alt ?? `${course.title} plate`}
                className="w-full h-auto block"
              />
            </div>
          </section>
        ) : null}

        {objectives && objectives.length > 0 ? (
          <section className="mt-12 rounded-xl bg-[#102017] p-8">
            <h2 className="text-2xl font-bold text-green-300">
              Learning Objectives
            </h2>

            <ul className="mt-5 list-disc space-y-3 pl-6 text-gray-200">
              {objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mt-12">
          <MarkdownLesson content={lessonContent} />
        </section>

        {takeaways && takeaways.length > 0 ? (
          <section className="mt-12 rounded-xl bg-[#102017] p-8">
            <h2 className="text-2xl font-bold text-green-300">Key Takeaways</h2>

            <ul className="mt-5 space-y-4 text-lg">
              {takeaways.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {currentLesson.worksheet ? (
          <section className="mt-12">
            <a
              href={currentLesson.worksheet}
              className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700"
              download
            >
              Download Worksheet
            </a>
          </section>
        ) : null}

        {currentLesson.downloads && currentLesson.downloads.length > 0 ? (
          <section className="mt-8 rounded-xl bg-[#0F1713] p-6">
            <h3 className="text-lg font-semibold text-gray-200">Downloads</h3>
            <ul className="mt-3 space-y-2 text-gray-300">
              {currentLesson.downloads.map((d) => (
                <li key={d.href}>
                  <a
                    href={d.href}
                    className="text-green-300 underline"
                  >
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {currentLesson.references && currentLesson.references.length > 0 ? (
          <section className="mt-8 rounded-xl bg-[#08120D] p-6 border border-white/5">
            <h3 className="text-lg font-semibold text-gray-200">References</h3>
            <ul className="mt-3 space-y-2 text-gray-300">
              {currentLesson.references.map((r, i) => (
                <li key={r.href ?? i}>
                  {r.href ? (
                    <a href={r.href} className="text-green-300 underline">
                      {r.label ?? r.href}
                    </a>
                  ) : (
                    <span>{r.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <LessonComplete
          courseId={course.slug}
          lessonNumber={currentLesson.number}
        />

        <section className="mt-12 rounded-xl bg-[#102017] p-8">
          <h2 className="text-2xl font-bold text-green-300">
            Continue Reading
          </h2>

          <p className="mt-4 text-gray-300">
            Ready to dive deeper? Continue reading the complete guide for
            additional husbandry information.
          </p>

          <Link
            href={currentLesson.guideHref}
            className="mt-6 inline-block rounded-lg bg-green-600 px-6 py-3 font-medium hover:bg-green-700"
          >
            Open Guide →
          </Link>
        </section>

        <div className="mt-16 flex justify-between">
          {previousLesson ? (
            <Link
              href={`/academy/${course.slug}/lessons/${previousLesson.number}`}
              className="rounded-lg border border-gray-700 px-6 py-3 hover:border-green-500"
            >
              ← Previous Lesson
            </Link>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <Link
              href={`/academy/${course.slug}/lessons/${nextLesson.number}`}
              className="rounded-lg bg-green-600 px-6 py-3 hover:bg-green-700"
            >
              Next Lesson →
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </main>
  );
}

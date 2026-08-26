import Link from "next/link";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { CourseProgress } from "../components/CourseProgress";
import { LessonCard } from "../components/LessonCard";
import { ObjectiveList } from "../components/ObjectiveList";
import type { Course } from "../types/course";

type CoursePageProps = {
  course: Course;
};

export function CoursePage({ course }: CoursePageProps) {
  const isBallPython = course.slug === "ball-python";

  return (
    <main className="min-h-screen bg-[#08120D] text-white">
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <SectionHeading eyebrow="ScalesWiki Academy" title={course.title} description={course.description} />

        {isBallPython && (
          <nav aria-label="Ball Python learning resources" className="mt-10 grid gap-3 sm:grid-cols-3">
            <Link href="/species/ball-python" className="rounded-xl border border-white/10 bg-[#101B15] px-5 py-4 text-sm font-semibold text-gray-200 transition hover:border-green-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400">Care guide →</Link>
            <Link href="/shop/ball-python-supplies" className="rounded-xl border border-white/10 bg-[#101B15] px-5 py-4 text-sm font-semibold text-gray-200 transition hover:border-green-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400">Setup checklist →</Link>
            <Link href="/articles/quarantine-for-new-reptiles" className="rounded-xl border border-white/10 bg-[#101B15] px-5 py-4 text-sm font-semibold text-gray-200 transition hover:border-green-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400">Quarantine article →</Link>
          </nav>
        )}

        <div className="mt-12 space-y-10 sm:mt-16">
          <CourseProgress courseId={course.slug} total={course.lessons.length} />
          <ObjectiveList objectives={course.objectives} />

          <section aria-labelledby="course-lessons-heading">
            <h2 id="course-lessons-heading" className="mb-6 text-3xl font-bold">Course Lessons</h2>
            <div className="grid gap-6">
              {course.lessons.map((lesson) => (
                <LessonCard key={lesson.number} lesson={lesson.number} title={lesson.title} description={course.lessonCardDescription} duration={lesson.duration} difficulty={lesson.difficulty} href={`/academy/${course.slug}/lessons/${lesson.number}`} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { CourseProgress } from "../components/CourseProgress";
import { LessonCard } from "../components/LessonCard";
import { ObjectiveList } from "../components/ObjectiveList";
import type { Course } from "../types/course";

type CoursePageProps = {
  course: Course;
};

export function CoursePage({ course }: CoursePageProps) {
  return (
    <main className="min-h-screen bg-[#08120D] text-white">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          eyebrow="ScalesWiki Academy"
          title={course.title}
          description={course.description}
        />

        <div className="mt-16 space-y-10">
          <CourseProgress
            courseId={course.slug}
            total={course.lessons.length}
          />

          <ObjectiveList objectives={course.objectives} />

          <section>
            <h2 className="mb-6 text-3xl font-bold">Course Lessons</h2>

            <div className="grid gap-6">
              {course.lessons.map((lesson) => (
                <LessonCard
                  key={lesson.number}
                  lesson={lesson.number}
                  title={lesson.title}
                  description={course.lessonCardDescription}
                  duration={lesson.duration}
                  difficulty={lesson.difficulty}
                  href={`/academy/${course.slug}/lessons/${lesson.number}`}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

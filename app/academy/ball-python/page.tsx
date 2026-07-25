import { SectionHeading } from "@/app/components/ui/SectionHeading";

import { CourseProgress } from "../components/CourseProgress";
import { LessonCard } from "../components/LessonCard";
import { ObjectiveList } from "../components/ObjectiveList";

import { ballPythonCourse } from "../data/ball-python/course";

export default function BallPythonAcademyPage() {
  return (
    <main className="min-h-screen bg-[#08120D] text-white">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <SectionHeading
          eyebrow="ScalesWiki Academy"
          title={ballPythonCourse.title}
          description="Learn Ball Python husbandry through structured lessons based on the ScalesWiki care guide."
        />

        <div className="mt-16 space-y-10">

          <CourseProgress
            courseId="ball-python"
            total={ballPythonCourse.lessons.length}
          />

          <ObjectiveList
            objectives={ballPythonCourse.objectives}
          />

          <section>

            <h2 className="mb-6 text-3xl font-bold">
              Course Lessons
            </h2>

            <div className="grid gap-6">

              {ballPythonCourse.lessons.map((lesson) => (
                <LessonCard
                  key={lesson.number}
                  lesson={lesson.number}
                  title={lesson.title}
                  description="Learn this topic through the Ball Python Keeper's Academy."
                  duration={lesson.duration}
                  difficulty={
                    lesson.difficulty as
                      | "Beginner"
                      | "Intermediate"
                      | "Advanced"
                  }
                  href={`/academy/ball-python/lessons/${lesson.number}`}
                />
              ))}

            </div>

          </section>

        </div>

      </section>
    </main>
  );
}
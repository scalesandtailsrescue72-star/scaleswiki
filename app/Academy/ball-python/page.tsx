import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { LessonCard } from "../components/LessonCard";
import { ObjectiveList } from "../components/ObjectiveList";
import { ProgressBar } from "../components/ProgressBar";
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

        <div className="mt-16 space-y-8">

          <ProgressBar
            completed={0}
            total={ballPythonCourse.lessons.length}
          />

          <ObjectiveList
            objectives={ballPythonCourse.objectives}
          />

          <div className="grid gap-6">

            {ballPythonCourse.lessons.map((lesson) => (

              <LessonCard
                key={lesson.number}
                lesson={lesson.number}
                title={lesson.title}
                description="Open this lesson in the Ball Python Guide."
                duration={lesson.duration}
                difficulty={lesson.difficulty as
                  | "Beginner"
                  | "Intermediate"
                  | "Advanced"}
                href={lesson.href}
              />

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
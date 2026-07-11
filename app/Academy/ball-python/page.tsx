import Link from "next/link";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

const lessons = [
  "Introduction",
  "Natural History",
  "Is a Ball Python Right for You?",
  "Enclosure",
  "Heating",
  "Humidity",
  "Lighting",
  "Substrate",
  "Water",
  "Feeding",
  "Handling",
  "Health",
  "Common Mistakes",
  "FAQ",
];

export default function BallPythonAcademyPage() {
  return (
    <main className="min-h-screen bg-[#08120D] text-white">

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <SectionHeading
          eyebrow="ScalesWiki Academy"
          title="Ball Python 101"
          description="A structured learning course designed to teach evidence-based Ball Python husbandry. Complete each lesson in order to build a solid foundation before moving on to the quiz and certificate."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[2fr_1fr]">

          <div className="rounded-3xl border border-white/10 bg-[#101B15] p-8">

            <h2 className="text-3xl font-bold">
              Course Overview
            </h2>

            <p className="mt-6 text-gray-300 leading-8">
              Ball Python 101 follows the same structure as the ScalesWiki
              guide but presents it as a guided course. Each lesson builds on
              the previous one so new keepers can learn husbandry in a logical,
              step-by-step format.
            </p>

            <div className="mt-10 space-y-4">

              {lessons.map((lesson, index) => (

                <div
                  key={lesson}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-[#15211A] px-5 py-4"
                >

                  <div>
                    <p className="text-sm text-green-400">
                      Lesson {index + 1}
                    </p>

                    <h3 className="font-semibold text-lg">
                      {lesson}
                    </h3>
                  </div>

                  <span className="rounded-full bg-green-700/20 px-3 py-1 text-sm text-green-300">
                    Ready
                  </span>

                </div>

              ))}

            </div>

          </div>

          <aside className="space-y-6">

            <div className="rounded-3xl border border-white/10 bg-[#101B15] p-6">

              <h3 className="text-xl font-bold">
                Course Details
              </h3>

              <div className="mt-6 space-y-3 text-gray-300">

                <p>📚 14 Lessons</p>
                <p>⏱ 2–3 Hours</p>
                <p>🎯 Beginner Level</p>
                <p>📝 Quiz Included</p>
                <p>🏆 Certificate Available</p>

              </div>

            </div>

            <div className="rounded-3xl border border-white/10 bg-[#101B15] p-6">

              <h3 className="text-xl font-bold">
                Start Learning
              </h3>

              <p className="mt-4 text-gray-300">
                Begin with the Introduction lesson and work through the course
                at your own pace.
              </p>

              <Link
                href="/species/ball-python"
                className="mt-6 inline-flex rounded-xl bg-green-600 px-6 py-3 font-semibold transition hover:bg-green-500"
              >
                Open Ball Python Guide
              </Link>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}
import Link from "next/link";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { getAllCourses } from "./data";

export default function AcademyPage() {
  const courses = getAllCourses();

  return (
    <main className="min-h-screen bg-[#08120D] text-white">

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <SectionHeading
          eyebrow="ScalesWiki Academy"
          title="Structured Reptile Education"
          description="Go beyond reading care guides. Learn through structured lessons, practical examples, quizzes, printable resources, and certificates designed to build confident reptile keepers."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {courses.map((course) => {
            const status =
              course.status ??
              (course.stats.lessons > 0 ? "Available" : "Coming Soon");

            return (
              <div
                key={course.slug}
                className="rounded-3xl border border-white/10 bg-[#101B15] p-8 shadow-xl"
              >

              <div className="flex items-center justify-between">

                <h2 className="text-2xl font-bold">
                  {course.title}
                </h2>

                <span className="rounded-full bg-green-700/30 px-3 py-1 text-xs font-semibold text-green-300">
                  {course.level}
                </span>

              </div>

              <p className="mt-6 text-gray-300 leading-7">
                {course.description}
              </p>

              <div className="mt-8 space-y-2 text-sm text-gray-400">

                <p>
                  📚 Lessons: {course.stats.lessons}
                </p>

                <p>
                  ⏱ Estimated Time: {course.stats.estimatedTime}
                </p>

                <p>
                  Status: {status}
                </p>

              </div>

              <div className="mt-10">

                {status === "Available" ? (
                  <Link
                    href={`/academy/${course.slug}`}
                    className="inline-flex rounded-xl bg-green-600 px-6 py-3 font-semibold transition hover:bg-green-500"
                  >
                    Start Course
                  </Link>
                ) : (
                  <button
                    disabled
                    className="rounded-xl bg-gray-700 px-6 py-3 text-gray-400 cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}

              </div>

            </div>

          })}

        </div>

      </section>

    </main>
  );
}
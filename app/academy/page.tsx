import Link from "next/link";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

const courses = [
  {
    slug: "ball-python",
    title: "Ball Python 101",
    level: "Beginner",
    lessons: 16,
    duration: "2–3 Hours",
    description:
      "Master Ball Python husbandry with structured lessons covering enclosure design, heating, humidity, feeding, handling, health, and more.",
    status: "Available",
  },
  {
    slug: "leopard-gecko",
    title: "Leopard Gecko 101",
    level: "Coming Soon",
    lessons: 0,
    duration: "--",
    description:
      "Our complete Leopard Gecko course is currently in development.",
    status: "Coming Soon",
  },
  {
    slug: "bearded-dragon",
    title: "Bearded Dragon 101",
    level: "Coming Soon",
    lessons: 0,
    duration: "--",
    description:
      "A complete evidence-based Bearded Dragon Academy course.",
    status: "Coming Soon",
  },
];

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-[#08120D] text-white">

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <SectionHeading
          eyebrow="ScalesWiki Academy"
          title="Structured Reptile Education"
          description="Go beyond reading care guides. Learn through structured lessons, practical examples, quizzes, printable resources, and certificates designed to build confident reptile keepers."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {courses.map((course) => (

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
                  📚 Lessons: {course.lessons}
                </p>

                <p>
                  ⏱ Estimated Time: {course.duration}
                </p>

                <p>
                  Status: {course.status}
                </p>

              </div>

              <div className="mt-10">

                {course.status === "Available" ? (
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

          ))}

        </div>

      </section>

    </main>
  );
}
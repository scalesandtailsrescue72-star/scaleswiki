import Link from "next/link";

import LessonProgress from "../components/LessonProgress";
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
    Array.isArray(currentLesson.objectives) &&
    currentLesson.objectives.length
      ? currentLesson.objectives
      : null;


  const takeaways =
    Array.isArray(currentLesson.keyTakeaways) &&
    currentLesson.keyTakeaways.length
      ? currentLesson.keyTakeaways
      : null;


  const references =
    Array.isArray(currentLesson.references)
      ? currentLesson.references
      : [];



  return (

    <main className="min-h-screen bg-[#08120D] px-6 py-12 text-white">

      <div className="mx-auto max-w-5xl">


        <p className="text-sm uppercase tracking-widest text-green-400">
          ScalesWiki Academy
        </p>


        <div className="mt-2 flex items-start justify-between gap-6">


          <div>

            <h1 className="text-4xl font-bold">
              Lesson {currentLesson.number}: {currentLesson.title}
            </h1>


            <div className="mt-4 flex flex-wrap gap-6 text-gray-300">

              <span>
                ⏱ {currentLesson.duration}
              </span>

              <span>
                📈 {currentLesson.difficulty}
              </span>

            </div>

          </div>


          <div className="w-48">

            <CourseProgress
              courseId={course.slug}
              total={course.lessons.length}
            />

          </div>


        </div>



        {currentLesson.plate?.src && (

          <section className="mt-8">

            <div className="overflow-hidden rounded-xl border border-white/5">

              <img
                src={currentLesson.plate.src}
                alt={
                  currentLesson.plate.alt ??
                  `${course.title} Plate`
                }
                className="block h-auto w-full"
              />

            </div>

          </section>

        )}



        {objectives && (

          <section className="mt-12 rounded-xl bg-[#102017] p-8">

            <h2 className="text-2xl font-bold text-green-300">
              Learning Objectives
            </h2>


            <ul className="mt-5 list-disc space-y-3 pl-6 text-gray-200">

              {objectives.map((objective) => (

                <li key={objective}>
                  {objective}
                </li>

              ))}

            </ul>

          </section>

        )}



        <section className="mt-12">

          <MarkdownLesson content={lessonContent} />

        </section>



        {takeaways && (

          <section className="mt-12 rounded-xl bg-[#102017] p-8">


            <h2 className="text-2xl font-bold text-green-300">
              Key Takeaways
            </h2>


            <ul className="mt-5 space-y-4 text-lg">

              {takeaways.map((takeaway) => (

                <li key={takeaway}>
                  {takeaway}
                </li>

              ))}

            </ul>


          </section>

        )}



        <LessonProgress
          course={course}
          lesson={currentLesson}
        />



        {currentLesson.worksheet && (

          <section className="mt-12">

            <a
              href={currentLesson.worksheet}
              download
              className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700"
            >
              Download Worksheet
            </a>

          </section>

        )}



        {currentLesson.downloads &&
        Array.isArray(currentLesson.downloads) &&
        currentLesson.downloads.length ? (

          <section className="mt-8 rounded-xl bg-[#0F1713] p-6">


            <h3 className="text-lg font-semibold text-gray-200">
              Downloads
            </h3>


            <ul className="mt-3 space-y-2 text-gray-300">

              {currentLesson.downloads.map((download) => (

                <li key={download.href}>

                  <a
                    href={download.href}
                    className="text-green-300 underline"
                  >
                    {download.label}
                  </a>

                </li>

              ))}

            </ul>


          </section>

        ) : null}




        {references.length > 0 && (

          <section className="mt-8 rounded-xl border border-white/5 bg-[#08120D] p-6">


            <h3 className="text-lg font-semibold text-gray-200">
              References
            </h3>


            <ul className="mt-3 space-y-2 text-gray-300">


              {references.map((reference, index) => (

                <li
                  key={
                    reference.href ??
                    index
                  }
                >

                  {reference.href ? (

                    <a
                      href={reference.href}
                      className="text-green-300 underline"
                    >
                      {reference.label ?? reference.href}
                    </a>

                  ) : (

                    <span>
                      {reference.label}
                    </span>

                  )}

                </li>

              ))}


            </ul>


          </section>

        )}




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
import Link from "next/link";
import { notFound } from "next/navigation";

import Quiz from "../../../components/Quiz";
import LessonComplete from "../../../components/LessonComplete";
import { MarkdownLesson } from "../../../components/MarkdownLesson";
import { loadLesson } from "../../../lib/loadLesson";

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

  const lessonNumber = Number(lesson);

  const currentLesson = ballPythonCourse.lessons.find(
    (l) => l.number === lessonNumber
  );

  if (!currentLesson) {
    notFound();
  }

  const lessonContent = await loadLesson(lessonNumber);

  const previousLesson = ballPythonCourse.lessons.find(
    (l) => l.number === lessonNumber - 1
  );

  const nextLesson = ballPythonCourse.lessons.find(
    (l) => l.number === lessonNumber + 1
  );

  return (
    <main className="min-h-screen bg-[#08120D] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">

        {/* Header */}

        <p className="text-sm uppercase tracking-widest text-green-400">
          ScalesWiki Academy
        </p>

        <h1 className="mt-2 text-5xl font-bold">
          Lesson {currentLesson.number}: {currentLesson.title}
        </h1>

        <div className="mt-5 flex flex-wrap gap-6 text-gray-300">
          <span>⏱ {currentLesson.duration}</span>
          <span>📈 {currentLesson.difficulty}</span>
        </div>

        {/* Objectives */}

        <section className="mt-12 rounded-xl bg-[#102017] p-8">

          <h2 className="text-2xl font-bold text-green-300">
            Learning Objectives
          </h2>

          <ul className="mt-5 list-disc space-y-3 pl-6 text-gray-200">
            <li>Understand what Ball Pythons are.</li>
            <li>Learn why they are one of the world's most popular pet snakes.</li>
            <li>Understand why proper husbandry is essential for long-term health.</li>
          </ul>

        </section>

        {/* Lesson Content */}

        <section className="mt-12">
          <MarkdownLesson content={lessonContent} />
        </section>

        {/* Did You Know */}

        <section className="mt-12 rounded-xl border border-green-800 bg-[#0B1710] p-8">

          <h2 className="text-2xl font-bold text-green-300">
            💡 Did You Know?
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-200">
            Ball Pythons earned their common name because they frequently curl
            themselves into a tight defensive ball when frightened instead of
            striking.
          </p>

        </section>

        {/* Keeper Tip */}

        <section className="mt-12 rounded-xl border border-yellow-700 bg-[#231A06] p-8">

          <h2 className="text-2xl font-bold text-yellow-300">
            🐍 Keeper Tip
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-200">
            Never purchase a Ball Python simply because it looks beautiful.
            Always learn the care requirements first and prepare the enclosure
            before bringing the snake home.
          </p>

        </section>

        {/* Key Takeaways */}

        <section className="mt-12 rounded-xl bg-[#102017] p-8">

          <h2 className="text-2xl font-bold text-green-300">
            Key Takeaways
          </h2>

          <ul className="mt-5 space-y-4 text-lg">
            <li>✅ Ball Pythons are generally calm snakes.</li>
            <li>✅ Proper husbandry is essential for long-term health.</li>
            <li>✅ Preparation before purchase prevents many common problems.</li>
          </ul>

        </section>

        {/* Quiz */}

        <Quiz
          questions={[
            {
              question:
                "Ball Pythons are generally known for being...",
              options: [
                "Aggressive",
                "Highly venomous",
                "Calm and manageable",
                "Fast-moving",
              ],
              answer: 2,
              explanation:
                "Ball Pythons are widely known for their calm temperament when properly cared for.",
            },
            {
              question:
                "Which of the following is part of proper husbandry?",
              options: [
                "Ignoring humidity",
                "Correct heating and enclosure setup",
                "Keeping multiple adults together",
                "Feeding once every few months",
              ],
              answer: 1,
              explanation:
                "Correct heating, humidity, enclosure design, and nutrition are the foundation of proper husbandry.",
            },
            {
              question:
                "Why are they called Ball Pythons?",
              options: [
                "They roll downhill.",
                "They curl into a defensive ball.",
                "They change colors.",
                "They live underground.",
              ],
              answer: 1,
              explanation:
                "When frightened, Ball Pythons commonly curl into a tight ball to protect themselves.",
            },
          ]}
        />

        {/* Lesson Complete */}

        <LessonComplete
          courseId="ball-python"
          lessonNumber={currentLesson.number}
        />

        {/* Guide */}

        <section className="mt-12 rounded-xl bg-[#102017] p-8">

          <h2 className="text-2xl font-bold text-green-300">
            Continue Reading
          </h2>

          <p className="mt-4 text-gray-300">
            Ready to dive deeper? Continue reading the complete Ball Python
            Guide for additional husbandry information.
          </p>

          <Link
            href={currentLesson.guideHref}
            className="mt-6 inline-block rounded-lg bg-green-600 px-6 py-3 font-medium hover:bg-green-700"
          >
            Open Guide →
          </Link>

        </section>

        {/* Navigation */}

        <div className="mt-16 flex justify-between">

          {previousLesson ? (
            <Link
              href={`/academy/ball-python/lessons/${previousLesson.number}`}
              className="rounded-lg border border-gray-700 px-6 py-3 hover:border-green-500"
            >
              ← Previous Lesson
            </Link>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <Link
              href={`/academy/ball-python/lessons/${nextLesson.number}`}
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
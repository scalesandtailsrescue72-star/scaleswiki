"use client";

import { useEffect, useState } from "react";

type LessonCompleteProps = {
  courseId: string;
  lessonNumber: number;
  onComplete?: () => void;
};

export default function LessonComplete({
  courseId,
  lessonNumber,
  onComplete,
}: LessonCompleteProps) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("academy-progress");

    if (!saved) return;

    try {
      const progress = JSON.parse(saved);
      const completedLessons: number[] = progress[courseId] ?? [];

      if (completedLessons.includes(lessonNumber)) {
        setCompleted(true);
      }
    } catch {
      console.error("Unable to read saved progress.");
    }
  }, [courseId, lessonNumber]);

  function markComplete() {
    const saved = localStorage.getItem("academy-progress");

    let progress: Record<string, number[]> = {};

    if (saved) {
      try {
        progress = JSON.parse(saved);
      } catch {
        progress = {};
      }
    }

    const completedLessons = progress[courseId] ?? [];

    if (!completedLessons.includes(lessonNumber)) {
      completedLessons.push(lessonNumber);
      completedLessons.sort((a, b) => a - b);

      progress[courseId] = completedLessons;

      localStorage.setItem(
        "academy-progress",
        JSON.stringify(progress)
      );
    }

    setCompleted(true);

    if (onComplete) {
      onComplete();
    }
  }

  return (
    <section className="mt-12 rounded-xl border border-white/10 bg-[#101B15] p-8">
      <h2 className="text-2xl font-bold text-green-300">
        Lesson Progress
      </h2>

      <p className="mt-3 text-gray-300">
        Mark this lesson as complete when you've finished studying it.
      </p>

      {completed ? (
        <div className="mt-6 rounded-lg border border-green-600 bg-green-900/40 p-4">
          <p className="font-semibold text-green-300">
            ✅ Lesson Completed!
          </p>

          <p className="mt-2 text-sm text-green-200">
            Your progress has been saved.
          </p>
        </div>
      ) : (
        <button
          onClick={markComplete}
          className="mt-6 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Mark Lesson Complete
        </button>
      )}
    </section>
  );
}
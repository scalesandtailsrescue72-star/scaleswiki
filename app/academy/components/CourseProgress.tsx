"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { ProgressBar } from "./ProgressBar";
import { getCompletedLessonCount } from "../lib/progressStore";

type CourseProgressProps = {
  courseId: string;
  total: number;
};

export function CourseProgress({
  courseId,
  total,
}: CourseProgressProps) {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    function refresh() {
      setCompleted(getCompletedLessonCount(courseId));
    }

    refresh();

    window.addEventListener("storage", refresh);

    return () => {
      window.removeEventListener("storage", refresh);
    };
  }, [courseId]);

  const finished = completed === total;

  return (
    <>
      <ProgressBar
        completed={completed}
        total={total}
      />

      {finished && (
        <section className="mt-8 rounded-xl border border-green-700 bg-green-950/30 p-6">
          <h2 className="text-2xl font-bold text-green-300">
            🎉 Course Lessons Complete
          </h2>

          <p className="mt-3 text-gray-200">
            Congratulations! You have completed every lesson in this course.
          </p>

          <p className="mt-2 text-gray-300">
            Your next step is to take the Final Certification Exam.
          </p>

          <Link
            href={`/academy/${courseId}/final-exam`}
            className="mt-6 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-500"
          >
            Begin Final Certification Exam
          </Link>
        </section>
      )}
    </>
  );
}
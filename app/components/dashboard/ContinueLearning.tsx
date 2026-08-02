"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  getCompletedLessonCount,
  getNextLesson,
  hasPassedFinalExam,
  hasCertificate,
} from "@/app/academy/lib/progressStore";

import { ballPythonCourse } from "@/app/academy/data/ball-python/course";

export default function ContinueLearning() {
  const totalLessons = ballPythonCourse.lessons.length;

  const [loaded, setLoaded] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [nextLesson, setNextLesson] = useState<number | null>(1);
  const [passedExam, setPassedExam] = useState(false);
  const [earnedCertificate, setEarnedCertificate] = useState(false);

  useEffect(() => {
    function refresh() {
      setCompleted(getCompletedLessonCount(ballPythonCourse.slug));

      setNextLesson(
        getNextLesson(ballPythonCourse.slug, totalLessons)
      );

      setPassedExam(
        hasPassedFinalExam(ballPythonCourse.slug)
      );

      setEarnedCertificate(
        hasCertificate(ballPythonCourse.slug)
      );

      setLoaded(true);
    }

    refresh();

    window.addEventListener("storage", refresh);

    return () => {
      window.removeEventListener("storage", refresh);
    };
  }, [totalLessons]);

  if (!loaded) {
    return (
      <section className="rounded-2xl border border-green-900 bg-[#102017] p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-green-300">
          Loading...
        </h2>

        <p className="mt-3 text-gray-400">
          Loading your Academy progress...
        </p>
      </section>
    );
  }

  const percent = Math.round(
    (completed / totalLessons) * 100
  );

  let title = "Continue Learning";
  let description = `${completed} of ${totalLessons} lessons completed`;
  let href =
    nextLesson !== null
      ? `/academy/${ballPythonCourse.slug}/lessons/${nextLesson}`
      : `/academy/${ballPythonCourse.slug}`;

  let buttonText =
    nextLesson !== null
      ? `Resume Lesson ${nextLesson}`
      : "View Course";

  if (completed === totalLessons && !passedExam) {
    title = "Ready for Certification";

    description =
      "You've completed every lesson. Take the Final Certification Exam.";

    href = `/academy/${ballPythonCourse.slug}/final-exam`;

    buttonText = "Take Final Certification Exam";
  }

  if (earnedCertificate) {
    title = "Course Complete";

    description =
      "Congratulations! You've earned your Ball Python Certificate.";

    href = `/academy/${ballPythonCourse.slug}/certificate`;

    buttonText = "View Certificate";
  }

  return (
    <section className="rounded-2xl border border-green-900 bg-[#102017] p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-green-300">
        {title}
      </h2>

      <p className="mt-2 text-lg text-white">
        {ballPythonCourse.title}
      </p>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-gray-800">
        <div
          className="h-full rounded-full bg-green-500 transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="mt-4 text-gray-300">
        {description}
      </p>

      <Link
        href={href}
        className="mt-8 inline-flex rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500"
      >
        {buttonText}
      </Link>
    </section>
  );
}
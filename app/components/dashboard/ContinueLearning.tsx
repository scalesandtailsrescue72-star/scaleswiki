"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { ballPythonCourse } from "@/app/academy/data/ball-python/course";
import { supabase } from "@/app/lib/database/supabase";
import { getCourseProgress } from "@/app/lib/repositories/progressRepository";

export default function ContinueLearning() {
  const [loading, setLoading] = useState(true);

  const [completed, setCompleted] = useState(0);
  const [percent, setPercent] = useState(0);
  const [nextLesson, setNextLesson] = useState<number | null>(1);
  const [passedExam, setPassedExam] = useState(false);
  const [earnedCertificate, setEarnedCertificate] = useState(false);

  useEffect(() => {
    async function loadProgress() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const progress = await getCourseProgress(
          user.id,
          ballPythonCourse.slug,
          ballPythonCourse.lessons.length
        );

        setCompleted(progress.completedLessons);
        setPercent(progress.percent);
        setNextLesson(progress.nextLesson);
        setPassedExam(progress.passedExam);
        setEarnedCertificate(progress.earnedCertificate);
      } catch (error) {
        console.error("Failed to load Continue Learning:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProgress();
  }, []);

  if (loading) {
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

  let title = "Continue Learning";

  let description = `${completed} of ${ballPythonCourse.lessons.length} lessons completed`;

  let href =
    nextLesson !== null
      ? `/academy/${ballPythonCourse.slug}/lessons/${nextLesson}`
      : `/academy/${ballPythonCourse.slug}`;

  let buttonText =
    nextLesson !== null
      ? `Resume Lesson ${nextLesson}`
      : "View Course";

  if (
    completed === ballPythonCourse.lessons.length &&
    !passedExam
  ) {
    title = "Ready for Certification";

    description =
      "You've completed every lesson. Take your Final Certification Exam.";

    href = `/academy/${ballPythonCourse.slug}/final-exam`;

    buttonText = "Take Final Exam";
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
          style={{
            width: `${percent}%`,
          }}
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
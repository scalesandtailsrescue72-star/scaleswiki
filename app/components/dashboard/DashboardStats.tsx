"use client";

import { useEffect, useState } from "react";

import DashboardCard from "./DashboardCard";

import {
  getCompletedLessonCount,
  hasCertificate,
} from "@/app/academy/lib/progressStore";

import { ballPythonCourse } from "@/app/academy/data/ball-python/course";

export default function DashboardStats() {
  const totalLessons = ballPythonCourse.lessons.length;

  const [lessonsCompleted, setLessonsCompleted] = useState(0);
  const [certificateCount, setCertificateCount] = useState(0);

  useEffect(() => {
    function refresh() {
      setLessonsCompleted(
        getCompletedLessonCount(ballPythonCourse.slug)
      );

      setCertificateCount(
        hasCertificate(ballPythonCourse.slug) ? 1 : 0
      );
    }

    refresh();

    window.addEventListener("storage", refresh);

    return () => {
      window.removeEventListener("storage", refresh);
    };
  }, []);

  const progress =
    totalLessons === 0
      ? 0
      : Math.round((lessonsCompleted / totalLessons) * 100);

  return (
    <section className="grid gap-6 md:grid-cols-4">
      <DashboardCard
        title="Courses"
        value={1}
        description="Academy courses enrolled"
      />

      <DashboardCard
        title="Lessons"
        value={`${lessonsCompleted}/${totalLessons}`}
        description={`${progress}% complete`}
      />

      <DashboardCard
        title="Certificates"
        value={certificateCount}
        description="Certificates earned"
      />

      <DashboardCard
        title="Overall Progress"
        value={`${progress}%`}
        description="Academy completion"
      />
    </section>
  );
}
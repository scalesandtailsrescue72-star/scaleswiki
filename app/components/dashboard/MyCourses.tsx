"use client";

import { useEffect, useState } from "react";

import CourseProgressCard from "./CourseProgressCard";

import { ballPythonCourse } from "@/app/academy/data/ball-python/course";

import { getCompletedLessonCount } from "@/app/academy/lib/progressStore";

export default function MyCourses() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    function refresh() {
      setCompleted(
        getCompletedLessonCount(ballPythonCourse.slug)
      );
    }

    refresh();

    window.addEventListener("storage", refresh);

    return () =>
      window.removeEventListener("storage", refresh);
  }, []);

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-green-300">
        My Courses
      </h2>

      <div className="mt-8">
        <CourseProgressCard
          title={ballPythonCourse.title}
          slug={ballPythonCourse.slug}
          completed={completed}
          total={ballPythonCourse.lessons.length}
        />
      </div>
    </section>
  );
}
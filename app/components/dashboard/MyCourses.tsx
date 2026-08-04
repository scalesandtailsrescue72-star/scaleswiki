"use client";

import { useEffect, useState } from "react";

import CourseProgressCard from "./CourseProgressCard";

import { ballPythonCourse } from "@/app/academy/data/ball-python/course";
import { getCompletedLessonCount } from "@/app/lib/services/progressService";
import { supabase } from "@/app/lib/database/supabase";

export default function MyCourses() {
  const [completed, setCompleted] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProgress() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setCompleted(0);
        setLoading(false);
        return;
      }

      try {
        const count = await getCompletedLessonCount(
          user.id,
          ballPythonCourse.slug
        );

        setCompleted(count);
      } catch (error) {
        console.error("Failed to load course progress:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProgress();
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
          completed={loading ? 0 : completed}
          total={ballPythonCourse.lessons.length}
        />
      </div>
    </section>
  );
}
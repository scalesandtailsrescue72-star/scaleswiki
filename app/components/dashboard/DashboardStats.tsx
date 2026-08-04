"use client";

import { useEffect, useState } from "react";

import DashboardCard from "./DashboardCard";

import { ballPythonCourse } from "@/app/academy/data/ball-python/course";
import { supabase } from "@/app/lib/database/supabase";
import { getCourseProgress } from "@/app/lib/repositories/progressRepository";

export default function DashboardStats() {
  const [loading, setLoading] = useState(true);

  const [lessonsCompleted, setLessonsCompleted] = useState(0);
  const [certificateCount, setCertificateCount] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    async function loadStats() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const courseProgress = await getCourseProgress(
          user.id,
          ballPythonCourse.slug,
          ballPythonCourse.lessons.length
        );

        setLessonsCompleted(courseProgress.completedLessons);
        setProgress(courseProgress.percent);

        // Temporary until certificates are migrated
        setCertificateCount(courseProgress.earnedCertificate ? 1 : 0);
      } catch (error) {
        console.error("Failed to load dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  return (
    <section className="grid gap-6 md:grid-cols-4">
      <DashboardCard
        title="Courses"
        value={1}
        description="Academy courses enrolled"
      />

      <DashboardCard
        title="Lessons"
        value={
          loading
            ? "..."
            : `${lessonsCompleted}/${ballPythonCourse.lessons.length}`
        }
        description={
          loading
            ? "Loading..."
            : `${progress}% complete`
        }
      />

      <DashboardCard
        title="Certificates"
        value={loading ? "..." : certificateCount}
        description="Certificates earned"
      />

      <DashboardCard
        title="Overall Progress"
        value={loading ? "..." : `${progress}%`}
        description="Academy completion"
      />
    </section>
  );
}
"use client";

import { useEffect, useState } from "react";
import { ProgressBar } from "./ProgressBar";

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
    function loadProgress() {
      const saved = localStorage.getItem("academy-progress");

      if (!saved) {
        setCompleted(0);
        return;
      }

      try {
        const progress = JSON.parse(saved);
        const completedLessons: number[] =
          progress[courseId] ?? [];

        setCompleted(completedLessons.length);
      } catch {
        setCompleted(0);
      }
    }

    loadProgress();

    window.addEventListener("storage", loadProgress);

    return () => {
      window.removeEventListener("storage", loadProgress);
    };
  }, [courseId]);

  return (
    <ProgressBar
      completed={completed}
      total={total}
    />
  );
}
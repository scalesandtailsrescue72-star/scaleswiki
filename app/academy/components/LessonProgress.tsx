"use client";

import { useEffect, useState } from "react";

import Quiz, { QuizResult } from "./Quiz";
import LessonComplete from "./LessonComplete";

import {
  completeLesson,
  isLessonComplete,
} from "../lib/progressStore";

import { saveLessonProgress } from "@/app/lib/services/progressService";
import { supabase } from "@/app/lib/database/supabase";

import type { Course, LessonExtended } from "../types/course";

type LessonProgressProps = {
  course: Course;
  lesson: LessonExtended;
};

export default function LessonProgress({
  course,
  lesson,
}: LessonProgressProps) {
  const [completed, setCompleted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setCompleted(
      isLessonComplete(course.slug, lesson.number)
    );
    setMounted(true);
  }, [course.slug, lesson.number]);

  async function handleQuizComplete(result: QuizResult) {
    console.log("Quiz completed:", result);

    if (!result.passed) {
      console.log("Quiz not passed.");
      return;
    }

    // Keep local progress temporarily
    completeLesson(
      course.slug,
      lesson.number,
      result.score,
      result.percentage
    );

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    console.log("Supabase user:", user);
    console.log("User error:", userError);

    if (!user) {
      console.log("No authenticated user found.");
      setCompleted(true);
      return;
    }

    try {
      console.log("Saving lesson progress...");

      await saveLessonProgress({
        userId: user.id,
        courseSlug: course.slug,
        lessonNumber: lesson.number,
        score: result.score,
        percentage: result.percentage,
      });

      console.log("✅ Lesson progress saved successfully.");
    } catch (error) {
      console.error("❌ Save failed:", error);
    }

    setCompleted(true);
  }

  if (!mounted) {
    return null;
  }

  return (
    <>
      {lesson.quizQuestions &&
        lesson.quizQuestions.length > 0 && (
          <Quiz
            questions={lesson.quizQuestions}
            onComplete={handleQuizComplete}
          />
        )}

      <LessonComplete completed={completed} />
    </>
  );
}
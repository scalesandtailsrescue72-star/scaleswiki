"use client";

import { useEffect, useState } from "react";

import Quiz, { QuizResult } from "./Quiz";
import LessonComplete from "./LessonComplete";

import {
  completeLesson,
  isLessonComplete,
} from "../lib/progressStore";

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
    if (!result.passed) return;

    // Temporary local progress
    completeLesson(
      course.slug,
      lesson.number,
      result.score,
      result.percentage
    );

    /*
      NEXT STEP:

      Replace the line above with:

      await saveLessonProgress(...)

      after authentication is connected.
    */

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
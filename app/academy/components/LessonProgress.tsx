"use client";

import { useState } from "react";

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

  const [completed, setCompleted] = useState(
    isLessonComplete(course.slug, lesson.number)
  );

  function handleQuizComplete(result: QuizResult) {

    if (!result.passed) return;

    completeLesson(
      course.slug,
      lesson.number,
      result.score,
      result.percentage
    );

    setCompleted(true);
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
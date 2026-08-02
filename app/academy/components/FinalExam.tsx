"use client";

import { useRouter } from "next/navigation";

import Quiz, { QuizResult } from "./Quiz";

import { completeFinalExam } from "../lib/progressStore";

import type { Course } from "../types/course";

type FinalExamProps = {
  course: Course;
};

export default function FinalExam({
  course,
}: FinalExamProps) {
  const router = useRouter();

  function handleComplete(result: QuizResult) {
    completeFinalExam(
      course.slug,
      result.score,
      result.percentage,
      result.passed
    );
  }

  function handlePass() {
    router.push(`/academy/${course.slug}/certificate`);
  }

  return (
    <Quiz
      title="Final Certification Exam"
      questions={course.quizQuestions}
      passingScore={80}
      onComplete={handleComplete}
      onPass={handlePass}
    />
  );
}
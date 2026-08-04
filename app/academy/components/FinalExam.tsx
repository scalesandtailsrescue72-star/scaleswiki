"use client";

import { useRouter } from "next/navigation";

import Quiz, { QuizResult } from "./Quiz";

import { completeFinalExam } from "../lib/progressStore";

import { supabase } from "@/app/lib/database/supabase";
import { saveFinalExam } from "@/app/lib/services/finalExamService";

import type { Course } from "../types/course";

type FinalExamProps = {
  course: Course;
};

export default function FinalExam({
  course,
}: FinalExamProps) {
  const router = useRouter();

  async function handleComplete(result: QuizResult) {
    // Keep localStorage temporarily until the full migration is finished.
    completeFinalExam(
      course.slug,
      result.score,
      result.percentage,
      result.passed
    );

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      console.warn("No authenticated user.");
      return;
    }

    try {
      await saveFinalExam({
        userId: user.id,
        courseSlug: course.slug,
        score: result.score,
        percentage: result.percentage,
        passed: result.passed,
      });

      console.log("✅ Final exam saved.");
    } catch (error) {
      console.error("❌ Failed to save final exam:", error);
    }
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
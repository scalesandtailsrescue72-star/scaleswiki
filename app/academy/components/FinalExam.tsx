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
    console.log("========== FINAL EXAM ==========");
    console.log(result);

    completeFinalExam(
      course.slug,
      result.score,
      result.percentage,
      result.passed
    );

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    console.log("Authenticated user:", user);
    console.log("User error:", userError);

    if (!user) {
      console.error("No authenticated user.");
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

      console.log("✅ Final exam saved successfully.");
    } catch (error: any) {
      console.error("========== SAVE FAILED ==========");
      console.error(error);

      if (error) {
        console.error("Code:", error.code);
        console.error("Message:", error.message);
        console.error("Details:", error.details);
        console.error("Hint:", error.hint);
      }

      return;
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
"use client";

import { useRouter } from "next/navigation";

import Quiz, { QuizResult } from "./Quiz";

import { completeFinalExam } from "../lib/progressStore";
import { generateFinalExam } from "../lib/generateFinalExam";

import { supabase } from "@/app/lib/database/supabase";
import { saveFinalExam } from "@/app/lib/services/finalExamService";

import type { Course } from "../types/course";

import {
  ballPythonFinalExamBank,
} from "../data/ball-python/exam/finalExamBank";


type FinalExamProps = {
  course: Course;
};


export default function FinalExam({
  course,
}: FinalExamProps) {

  const router = useRouter();


  const examQuestions = generateFinalExam(
    ballPythonFinalExamBank,
    50
  );


  async function handleComplete(result: QuizResult) {

    console.log(
      "========== BALL PYTHON FINAL EXAM =========="
    );

    console.table({
      Course: course.slug,
      Score: result.score,
      Percentage: result.percentage,
      Passed: result.passed,
    });


    // Always save local progress
    completeFinalExam(
      course.slug,
      result.score,
      result.percentage,
      result.passed
    );


    // Try to save to Supabase if a user exists
    try {

      const {
        data: { user },
      } = await supabase.auth.getUser();


      if (user) {

        await saveFinalExam({
          userId: user.id,
          courseSlug: course.slug,
          score: result.score,
          percentage: result.percentage,
          passed: result.passed,
        });


        console.log(
          "✅ Final exam saved successfully."
        );

      } else {

        console.log(
          "Guest completion. Saved locally only."
        );

      }


    } catch (error) {

      console.warn(
        "Unable to save exam online. Continuing with local progress."
      );

      console.error(error);

    }


    // Unlock certificate
    if (result.passed) {

      router.push(
        `/academy/${course.slug}/certificate`
      );

    }

  }


  return (
    <Quiz
      title={`${course.title} Certification Exam`}
      questions={examQuestions}
      passingScore={85}
      onComplete={handleComplete}
    />
  );

}
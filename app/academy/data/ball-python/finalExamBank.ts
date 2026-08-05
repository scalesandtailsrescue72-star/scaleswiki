import type { QuizQuestion } from "@/app/academy/types/course";

export type ExamQuestion = QuizQuestion & {
  id: string;
  lesson: number;
  category: string;
  difficulty: "easy" | "medium" | "hard";
};

export const ballPythonFinalExamBank: ExamQuestion[] = [];
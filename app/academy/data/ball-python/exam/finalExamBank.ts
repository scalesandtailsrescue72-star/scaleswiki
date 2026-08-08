import type { QuizQuestion } from "@/app/academy/types/course";

import { lesson01Questions } from "./lesson01Questions";
import { lesson02Questions } from "./lesson02Questions";
import { lesson03Questions } from "./lesson03Questions";
import { lesson04Questions } from "./lesson04Questions";
import { lesson05Questions } from "./lesson05Questions";
import { lesson06Questions } from "./lesson06Questions";
import { lesson07Questions } from "./lesson07Questions";
import { lesson08Questions } from "./lesson08Questions";
import { lesson09Questions } from "./lesson09Questions";
import { lesson10Questions } from "./lesson10Questions";
import { lesson11Questions } from "./lesson11Questions";
import { lesson12Questions } from "./lesson12Questions";


export type ExamQuestion = QuizQuestion & {
  id: string;
  lesson: number;
  category: string;
  difficulty: "easy" | "medium" | "hard";
};


export const ballPythonFinalExamBank: ExamQuestion[] = [
  ...lesson01Questions,
  ...lesson02Questions,
  ...lesson03Questions,
  ...lesson04Questions,
  ...lesson05Questions,
  ...lesson06Questions,
  ...lesson07Questions,
  ...lesson08Questions,
  ...lesson09Questions,
  ...lesson10Questions,
  ...lesson11Questions,
  ...lesson12Questions,
];
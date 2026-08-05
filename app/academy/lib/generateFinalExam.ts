import type { QuizQuestion } from "../types/course";

export function shuffleQuestions<T>(questions: T[]): T[] {
  const shuffled = [...questions];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
}

export function generateFinalExam<T extends QuizQuestion>(
  questionBank: T[],
  questionCount = 50
): T[] {
  if (questionBank.length <= questionCount) {
    return shuffleQuestions(questionBank);
  }

  return shuffleQuestions(questionBank).slice(0, questionCount);
}
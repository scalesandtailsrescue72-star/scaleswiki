"use client";

import { useMemo, useState } from "react";
import type { QuizQuestion } from "../types/course";

export interface QuizResult {
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
}

type QuizProps = {
  title?: string;
  questions: QuizQuestion[];
  passingScore?: number;
  onComplete?: (result: QuizResult) => void;
  onPass?: () => void;
};

export default function Quiz({
  title = "Knowledge Check",
  questions,
  passingScore = 80,
  onComplete,
  onPass,
}: QuizProps) {
  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(-1)
  );

  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(
    () =>
      answers.reduce(
        (total, answer, index) =>
          total + (answer === questions[index].answer ? 1 : 0),
        0
      ),
    [answers, questions]
  );

  const percentage = Math.round((score / questions.length) * 100);

  const passed = percentage >= passingScore;

  const allAnswered = answers.every((answer) => answer !== -1);

  function selectAnswer(questionIndex: number, optionIndex: number) {
    if (submitted) return;

    const updated = [...answers];
    updated[questionIndex] = optionIndex;
    setAnswers(updated);
  }

  function submitQuiz() {
    if (!allAnswered) return;

    setSubmitted(true);

    const result: QuizResult = {
      score,
      total: questions.length,
      percentage,
      passed,
    };

    onComplete?.(result);

    if (passed) {
      onPass?.();
    }
  }

  function resetQuiz() {
    setAnswers(Array(questions.length).fill(-1));
    setSubmitted(false);
  }

  return (
    <section className="mt-12 rounded-2xl border border-green-900 bg-[#102017] p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-green-300">
        {title}
      </h2>

      <p className="mt-2 text-sm text-gray-400">
        Answer every question before submitting.
      </p>

      <div className="mt-10 space-y-10">
        {questions.map((question, qIndex) => (
          <div
            key={qIndex}
            className="rounded-xl border border-green-900/40 bg-[#0c1812] p-6"
          >
            <h3 className="text-lg font-semibold">
              Question {qIndex + 1}
            </h3>

            <p className="mt-2 text-gray-200">
              {question.question}
            </p>

            <div className="mt-5 space-y-3">
              {question.options.map((option, oIndex) => {
                const selected = answers[qIndex] === oIndex;

                let styles =
                  "w-full rounded-lg border p-3 text-left transition ";

                if (!submitted) {
                  styles += selected
                    ? "border-green-500 bg-green-900"
                    : "border-gray-700 hover:border-green-500";
                } else {
                  if (oIndex === question.answer) {
                    styles += "border-green-500 bg-green-900";
                  } else if (selected) {
                    styles += "border-red-500 bg-red-900";
                  } else {
                    styles += "border-gray-700";
                  }
                }

                return (
                  <button
                    key={oIndex}
                    type="button"
                    className={styles}
                    disabled={submitted}
                    onClick={() =>
                      selectAnswer(qIndex, oIndex)
                    }
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {submitted && question.explanation && (
              <div className="mt-5 rounded-lg border border-green-800 bg-green-950/30 p-4">
                <p className="text-sm text-green-200">
                  {question.explanation}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted ? (
        <button
          type="button"
          disabled={!allAnswered}
          onClick={submitQuiz}
          className={`mt-10 rounded-xl px-6 py-3 font-semibold transition ${
            allAnswered
              ? "bg-green-600 hover:bg-green-500"
              : "cursor-not-allowed bg-gray-700 text-gray-400"
          }`}
        >
          Submit Quiz
        </button>
      ) : (
        <div className="mt-12 rounded-xl border border-green-900 bg-[#0c1812] p-6">
          <h3 className="text-3xl font-bold">
            {passed ? "🎉 Passed!" : "📖 Try Again"}
          </h3>

          <p className="mt-4 text-xl">
            Score{" "}
            <span className="font-bold">
              {score} / {questions.length}
            </span>
          </p>

          <p className="text-lg">
            Percentage{" "}
            <span className="font-bold">
              {percentage}%
            </span>
          </p>

          <p
            className={`mt-4 text-lg font-semibold ${
              passed
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {passed
              ? "Congratulations! You passed."
              : `A score of ${passingScore}% is required to pass.`}
          </p>

          <button
            type="button"
            onClick={resetQuiz}
            className="mt-8 rounded-xl border border-green-700 px-6 py-3 hover:bg-green-900"
          >
            Try Again
          </button>
        </div>
      )}
    </section>
  );
}
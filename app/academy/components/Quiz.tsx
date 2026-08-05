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
  passingScore = 85,
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

  const progress =
    (answers.filter((a) => a !== -1).length / questions.length) * 100;

  return (
    <section className="mt-12 rounded-2xl border border-green-900 bg-[#102017] p-8 shadow-lg">

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-green-300">
          {title}
        </h2>

        <p className="mt-2 text-gray-400">
          Complete every question before submitting.
        </p>

        <div className="mt-6">

          <div className="mb-2 flex justify-between text-sm text-gray-400">
            <span>
              Progress
            </span>

            <span>
              {answers.filter((a) => a !== -1).length} / {questions.length}
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-gray-800">

            <div
              className="h-full bg-green-500 transition-all"
              style={{ width: `${progress}%` }}
            />

          </div>

        </div>

      </div>

      <div className="space-y-10">

        {questions.map((question, qIndex) => (

          <div
            key={qIndex}
            className="rounded-xl border border-green-900/30 bg-[#0C1812] p-6"
          >

            <h3 className="font-semibold text-green-300">
              Question {qIndex + 1}
            </h3>

            <p className="mt-3 text-lg text-gray-100">
              {question.question}
            </p>

            <div className="mt-5 space-y-3">

              {question.options.map((option, oIndex) => {

                const selected = answers[qIndex] === oIndex;

                let classes =
                  "w-full rounded-lg border p-4 text-left transition ";

                if (!submitted) {

                  classes += selected
                    ? "border-green-500 bg-green-900"
                    : "border-gray-700 hover:border-green-500";

                } else {

                  if (oIndex === question.answer) {

                    classes +=
                      "border-green-500 bg-green-900";

                  } else if (selected) {

                    classes +=
                      "border-red-500 bg-red-900";

                  } else {

                    classes +=
                      "border-gray-700";

                  }

                }

                return (
                  <button
                    key={oIndex}
                    type="button"
                    disabled={submitted}
                    onClick={() =>
                      selectAnswer(qIndex, oIndex)
                    }
                    className={classes}
                  >
                    {option}
                  </button>
                );

              })}

            </div>

            {submitted && question.explanation && (

              <div className="mt-5 rounded-lg border border-green-700 bg-green-950/40 p-4">

                <p className="font-semibold text-green-300">
                  Explanation
                </p>

                <p className="mt-2 text-gray-200">
                  {question.explanation}
                </p>

              </div>

            )}

          </div>

        ))}

      </div>

      {!submitted ? (

        <button
          onClick={submitQuiz}
          disabled={!allAnswered}
          className={`mt-10 rounded-xl px-8 py-4 font-semibold transition ${
            allAnswered
              ? "bg-green-600 hover:bg-green-500"
              : "cursor-not-allowed bg-gray-700 text-gray-400"
          }`}
        >
          Submit Certification
        </button>

      ) : (

        <div className="mt-12 rounded-xl border border-green-900 bg-[#0C1812] p-8">

          <h3 className="text-4xl font-bold">

            {passed
              ? "🎉 Congratulations!"
              : "📚 Keep Learning"}

          </h3>

          <p className="mt-6 text-2xl">
            Score
          </p>

          <p className="text-5xl font-bold text-green-400">
            {percentage}%
          </p>

          <p className="mt-3 text-lg text-gray-300">
            {score} correct out of {questions.length}
          </p>

          {passed ? (

            <div className="mt-8 rounded-lg border border-green-700 bg-green-950/30 p-6">

              <p className="text-xl font-semibold text-green-300">
                You passed the certification exam!
              </p>

              <p className="mt-3 text-gray-300">
                Your certificate is now being prepared.
              </p>

            </div>

          ) : (

            <div className="mt-8 rounded-lg border border-yellow-700 bg-yellow-950/20 p-6">

              <p className="text-xl font-semibold text-yellow-300">
                You're getting close.
              </p>

              <p className="mt-3 text-gray-300">
                An overall score of {passingScore}% is required.
              </p>

              <p className="mt-4 text-gray-300">
                Review the lessons, then come back and try again.
                There is no limit to the number of attempts.
              </p>

            </div>

          )}

          <button
            onClick={resetQuiz}
            className="mt-8 rounded-xl border border-green-700 px-8 py-3 hover:bg-green-900"
          >
            Retake Exam
          </button>

        </div>

      )}

    </section>
  );
}
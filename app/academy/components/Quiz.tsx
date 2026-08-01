"use client";

import { useState } from "react";
import type { QuizQuestion } from "../types/course";

type QuizProps = {
  questions: QuizQuestion[];
};

export default function Quiz({ questions }: QuizProps) {
  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(-1)
  );

  const [submitted, setSubmitted] = useState(false);

  const score = answers.reduce(
    (total, answer, index) =>
      total + (answer === questions[index].answer ? 1 : 0),
    0
  );

  function selectAnswer(questionIndex: number, optionIndex: number) {
    if (submitted) return;

    const updated = [...answers];
    updated[questionIndex] = optionIndex;
    setAnswers(updated);
  }

  function resetQuiz() {
    setAnswers(Array(questions.length).fill(-1));
    setSubmitted(false);
  }

  return (
    <section className="mt-12 rounded-xl bg-[#102017] p-8">
      <h2 className="text-2xl font-bold text-green-300">
        Knowledge Check
      </h2>

      <div className="mt-8 space-y-10">
        {questions.map((question, qIndex) => (
          <div key={qIndex}>
            <h3 className="font-semibold text-lg">
              {qIndex + 1}. {question.question}
            </h3>

            <div className="mt-4 space-y-3">
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
                    className={styles}
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
              <p className="mt-4 text-green-200">
                {question.explanation}
              </p>
            )}
          </div>
        ))}
      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          className="mt-10 rounded-lg bg-green-600 px-6 py-3 font-medium hover:bg-green-700"
        >
          Submit Quiz
        </button>
      ) : (
        <div className="mt-10">
          <h3 className="text-2xl font-bold">
            Score: {score} / {questions.length}
          </h3>

          <button
            onClick={resetQuiz}
            className="mt-6 rounded-lg border border-green-600 px-6 py-3 hover:bg-green-900"
          >
            Try Again
          </button>
        </div>
      )}
    </section>
  );
}
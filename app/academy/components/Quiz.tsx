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


function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {

    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [
      shuffled[i],
      shuffled[j],
    ] = [
      shuffled[j],
      shuffled[i],
    ];

  }

  return shuffled;
}



function randomizeQuestion(
  question: QuizQuestion
): QuizQuestion {

  const answers = question.options.map(
    (option, index) => ({
      option,
      correct:
        index === question.answer,
    })
  );


  const shuffledAnswers =
    shuffleArray(answers);


  return {

    ...question,

    options: shuffledAnswers.map(
      (item) => item.option
    ),

    answer:
      shuffledAnswers.findIndex(
        (item) => item.correct
      ),

  };

}



export default function Quiz({
  title = "Knowledge Check",
  questions,
  passingScore = 85,
  onComplete,
  onPass,
}: QuizProps) {


  const randomizedQuestions =
    useMemo(
      () =>
        questions
          .map(randomizeQuestion)
          .sort(
            () =>
              Math.random() - 0.5
          ),

      [questions]
    );



  const [answers, setAnswers] =
    useState<number[]>(
      Array(
        randomizedQuestions.length
      ).fill(-1)
    );


  const [submitted, setSubmitted] =
    useState(false);



  const score = useMemo(

    () =>

      answers.reduce(

        (total, answer, index) =>

          total +
          (
            answer ===
            randomizedQuestions[index].answer
              ? 1
              : 0
          ),

        0

      ),

    [
      answers,
      randomizedQuestions,
    ]

  );



  const percentage =
    Math.round(
      (
        score /
        randomizedQuestions.length
      ) *
      100
    );


  const passed =
    percentage >= passingScore;



  const allAnswered =
    answers.every(
      (answer) =>
        answer !== -1
    );



  function selectAnswer(
    questionIndex: number,
    optionIndex: number
  ) {

    if (submitted) return;


    const updated =
      [
        ...answers,
      ];


    updated[questionIndex] =
      optionIndex;


    setAnswers(updated);

  }



  function submitQuiz() {

    if (!allAnswered)
      return;


    setSubmitted(true);


    const result: QuizResult = {

      score,

      total:
        randomizedQuestions.length,

      percentage,

      passed,

    };


    onComplete?.(result);


    if (passed) {

      onPass?.();

    }

  }



  function resetQuiz() {

    window.location.reload();

  }



  const progress =
    (
      answers.filter(
        (a) =>
          a !== -1
      ).length /
      randomizedQuestions.length
    ) *
    100;



  return (

    <section>

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
              {
                answers.filter(
                  (a) =>
                    a !== -1
                ).length
              }
              {" / "}
              {
                randomizedQuestions.length
              }
            </span>


          </div>


          <div className="h-3 overflow-hidden rounded-full bg-gray-800">

            <div

              className="h-full bg-green-500 transition-all"

              style={{
                width:
                  `${progress}%`,
              }}

            />

          </div>


        </div>


      </div>



      <div className="space-y-10">


        {
          randomizedQuestions.map(
            (question, qIndex) => (

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


                  {
                    question.options.map(
                      (
                        option,
                        oIndex
                      ) => {


                        const selected =
                          answers[qIndex] === oIndex;


                        let classes =
                          "w-full rounded-lg border p-4 text-left transition ";



                        if (!submitted) {


                          classes += selected

                            ? "border-green-500 bg-green-900"

                            : "border-gray-700 hover:border-green-500";


                        } else {


                          if (
                            oIndex ===
                            question.answer
                          ) {

                            classes +=
                              "border-green-500 bg-green-900";

                          }

                          else if (selected) {

                            classes +=
                              "border-red-500 bg-red-900";

                          }

                          else {

                            classes +=
                              "border-gray-700";

                          }

                        }



                        return (

                          <button

                            key={oIndex}

                            type="button"

                            disabled={
                              submitted
                            }

                            onClick={() =>
                              selectAnswer(
                                qIndex,
                                oIndex
                              )
                            }

                            className={classes}

                          >

                            {option}

                          </button>

                        );

                      }
                    )
                  }


                </div>



                {
                  submitted &&
                  question.explanation && (

                    <div className="mt-5 rounded-lg border border-green-700 bg-green-950/40 p-4">

                      <p className="font-semibold text-green-300">

                        Explanation

                      </p>


                      <p className="mt-2 text-gray-200">

                        {question.explanation}

                      </p>


                    </div>

                  )
                }



              </div>

            )
          )
        }


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

            {
              passed
              ? "🎉 Congratulations!"
              : "📚 Keep Learning"
            }

          </h3>


          <p className="mt-6 text-2xl">
            Score
          </p>


          <p className="text-5xl font-bold text-green-400">

            {percentage}%

          </p>


          <p className="mt-3 text-lg text-gray-300">

            {score} correct out of {randomizedQuestions.length}

          </p>


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
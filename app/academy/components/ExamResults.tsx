"use client";

import Link from "next/link";

type ExamResultsProps = {
  score: number;
  total: number;
  percentage: number;
  passingScore: number;
  passed: boolean;
  courseSlug: string;
};

export default function ExamResults({
  score,
  total,
  percentage,
  passingScore,
  passed,
  courseSlug,
}: ExamResultsProps) {
  return (
    <section className="mt-12 rounded-2xl border border-green-900 bg-[#101B15] p-8 shadow-lg">

      <h2 className="text-4xl font-bold text-green-300">
        Certification Results
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div className="rounded-xl bg-[#0C1812] p-6">
          <p className="text-sm uppercase text-gray-400">
            Score
          </p>

          <p className="mt-3 text-5xl font-bold text-green-400">
            {percentage}%
          </p>

          <p className="mt-2 text-gray-300">
            {score} / {total} Correct
          </p>
        </div>

        <div className="rounded-xl bg-[#0C1812] p-6">

          <p className="text-sm uppercase text-gray-400">
            Passing Score
          </p>

          <p className="mt-3 text-5xl font-bold text-white">
            {passingScore}%
          </p>

        </div>

        <div className="rounded-xl bg-[#0C1812] p-6">

          <p className="text-sm uppercase text-gray-400">
            Status
          </p>

          <p
            className={`mt-3 text-3xl font-bold ${
              passed
                ? "text-green-400"
                : "text-yellow-400"
            }`}
          >
            {passed ? "Certified" : "Almost There"}
          </p>

        </div>

      </div>

      {passed ? (

        <div className="mt-10 rounded-xl border border-green-700 bg-green-950/30 p-6">

          <h3 className="text-2xl font-bold text-green-300">
            🎉 Congratulations!
          </h3>

          <p className="mt-4 text-gray-300">
            You successfully completed this certification.
          </p>

          <p className="mt-3 text-gray-300">
            Your certificate is now available.
          </p>

          <Link
            href={`/academy/${courseSlug}/certificate`}
            className="mt-8 inline-flex rounded-lg bg-green-600 px-6 py-3 font-semibold hover:bg-green-500"
          >
            View Certificate
          </Link>

        </div>

      ) : (

        <div className="mt-10 rounded-xl border border-yellow-700 bg-yellow-950/20 p-6">

          <h3 className="text-2xl font-bold text-yellow-300">
            You're Very Close!
          </h3>

          <p className="mt-4 text-gray-300">
            You did not reach the required {passingScore}% this time,
            but you're making excellent progress.
          </p>

          <div className="mt-8">

            <h4 className="font-semibold text-green-300">
              Recommended Review
            </h4>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-300">
              <li>Review the lessons connected to the questions you missed.</li>
              <li>Read the explanations for every question.</li>
              <li>Take the certification again when you're ready.</li>
            </ul>

          </div>

          <p className="mt-8 text-lg font-semibold text-green-300">
            Unlimited attempts. Keep learning.
          </p>

        </div>

      )}

    </section>
  );
}
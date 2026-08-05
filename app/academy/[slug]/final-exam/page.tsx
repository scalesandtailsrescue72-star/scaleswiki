import Link from "next/link";
import { notFound } from "next/navigation";

import { getCourseBySlug } from "@/app/academy/data";
import FinalExam from "@/app/academy/components/FinalExam";

type FinalExamPageProps = {
  params:
    | { slug: string }
    | Promise<{ slug: string }>;
};

export default async function FinalExamPage({
  params,
}: FinalExamPageProps) {
  const resolvedParams = await params;

  const course = getCourseBySlug(resolvedParams.slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#08110D] py-12 text-white">
      <div className="mx-auto max-w-5xl px-6">

        <Link
          href={`/academy/${course.slug}`}
          className="text-green-400 transition hover:text-green-300"
        >
          ← Back to Course
        </Link>

        <header className="mt-8">

          <h1 className="text-5xl font-bold">
            {course.title}
          </h1>

          <p className="mt-3 text-xl text-gray-300">
            Final Certification Examination
          </p>

        </header>

        <section className="mt-8 rounded-2xl border border-green-900 bg-[#101B15] p-8">

          <h2 className="text-2xl font-bold text-green-300">
            Before You Begin
          </h2>

          <div className="mt-6 space-y-4 text-gray-300">

            <p>
              This certification exam measures your understanding of the
              material presented throughout the Academy.
            </p>

            <ul className="list-disc space-y-2 pl-6">

              <li>
                Questions are randomly selected from the certification
                question bank.
              </li>

              <li>
                Every exam is different.
              </li>

              <li>
                A minimum score of <strong>85%</strong> is required to earn certification.
              </li>

              <li>
                Every question includes an explanation after submission.
              </li>

              <li>
                If you do not pass, we'll recommend lessons to review before
                your next attempt.
              </li>

              <li>
                You may retake the certification exam as many times as you'd
                like.
              </li>

            </ul>

          </div>

        </section>

        <FinalExam course={course} />

      </div>
    </main>
  );
}
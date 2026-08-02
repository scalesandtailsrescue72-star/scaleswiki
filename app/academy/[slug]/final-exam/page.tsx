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
    <main className="min-h-screen bg-[#08110d] py-12 text-white">
      <div className="mx-auto max-w-5xl px-6">

        <Link
          href={`/academy/${course.slug}`}
          className="text-green-400 hover:text-green-300"
        >
          ← Back to Course
        </Link>

        <h1 className="mt-6 text-5xl font-bold">
          {course.title}
        </h1>

        <p className="mt-4 text-xl text-gray-300">
          Final Certification Exam
        </p>

        <div className="mt-8 rounded-xl border border-green-900 bg-[#101B15] p-6">
          <h2 className="text-2xl font-semibold text-green-300">
            Exam Instructions
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-300">
            <li>Answer every question.</li>
            <li>A passing score of 80% is required.</li>
            <li>You may retake the exam if necessary.</li>
            <li>Your certificate will be awarded automatically upon passing.</li>
          </ul>
        </div>

        <FinalExam course={course} />

      </div>
    </main>
  );
}
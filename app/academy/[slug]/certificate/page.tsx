import Link from "next/link";
import { notFound } from "next/navigation";

import { getCourseBySlug } from "@/app/academy/data";

type CertificatePageProps = {
  params:
    | { slug: string }
    | Promise<{ slug: string }>;
};

export default async function CertificatePage({
  params,
}: CertificatePageProps) {
  const resolvedParams = await params;

  const course = getCourseBySlug(resolvedParams.slug);

  if (!course) {
    notFound();
  }

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-[#08120D] py-16 text-white">
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-3xl border-4 border-yellow-600 bg-[#101B15] p-12 shadow-2xl">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
              ScalesWiki Academy
            </p>

            <h1 className="mt-6 text-5xl font-extrabold text-yellow-300">
              Certificate of Completion
            </h1>

            <p className="mt-12 text-xl text-gray-300">
              This certifies that
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Academy Student
            </h2>

            <p className="mt-10 text-xl text-gray-300">
              has successfully completed
            </p>

            <h3 className="mt-4 text-4xl font-bold text-green-300">
              {course.title}
            </h3>

            <p className="mt-10 text-lg text-gray-300">
              by successfully passing the Final Certification Examination.
            </p>

            <div className="mt-16 grid gap-8 md:grid-cols-2">

              <div className="rounded-xl border border-green-900 bg-[#0c1812] p-6">
                <p className="text-sm uppercase text-gray-400">
                  Date Earned
                </p>

                <p className="mt-3 text-2xl font-semibold">
                  {today}
                </p>
              </div>

              <div className="rounded-xl border border-green-900 bg-[#0c1812] p-6">
                <p className="text-sm uppercase text-gray-400">
                  Certificate ID
                </p>

                <p className="mt-3 text-2xl font-semibold">
                  BP-2026-000001
                </p>
              </div>

            </div>

            <div className="mt-16 flex justify-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-yellow-500 bg-yellow-950 text-6xl shadow-lg">
                🏆
              </div>
            </div>

          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            href={`/academy/${course.slug}`}
            className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500"
          >
            ← Back to Course
          </Link>

          <div className="rounded-xl border border-green-700 px-6 py-3 text-gray-300">
            🖨️ Print Certificate (Coming Soon)
          </div>

        </div>
      </div>
    </main>
  );
}
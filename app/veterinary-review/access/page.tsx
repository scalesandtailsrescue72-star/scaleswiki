export default function VeterinaryReviewAccessPage() {
  return (
    <main className="min-h-screen bg-[#07110C] px-6 py-16 text-gray-200">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm uppercase tracking-[0.3em] text-green-400">
          ScalesWiki
        </p>

        <h1 className="mt-6 text-5xl font-bold text-green-300">
          Veterinary Reviewer Access
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Welcome to the ScalesWiki Founding Veterinary Reviewer Program.
          This area provides access to the Ball Python 101 Certification
          Course review materials.
        </p>


        <section className="mt-12 rounded-2xl bg-[#102017] p-8">

          <h2 className="text-3xl font-bold text-green-300">
            Current Review Project
          </h2>

          <h3 className="mt-6 text-2xl font-semibold text-white">
            Ball Python 101 Certification Course
          </h3>

          <p className="mt-4 text-gray-300">
            Veterinary Review Draft — Version 1.0
          </p>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-300">
            <li>12 structured educational lessons</li>
            <li>Knowledge checks</li>
            <li>Final assessment</li>
            <li>Printable keeper resources</li>
          </ul>

        </section>


        <section className="mt-10 rounded-2xl border border-green-900 bg-[#0C1812] p-8">

          <h2 className="text-3xl font-bold text-green-300">
            Reviewer Instructions
          </h2>

          <p className="mt-4 text-gray-300">
            Please review the educational materials with attention to
            accuracy, clarity, safety, and responsible reptile husbandry
            recommendations.
          </p>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-300">
            <li>Identify inaccurate or unclear information</li>
            <li>Recommend improvements where appropriate</li>
            <li>Review medical wording and terminology</li>
            <li>Consider animal welfare implications</li>
          </ul>

        </section>


        <section className="mt-10 rounded-2xl bg-[#102017] p-8">

          <h2 className="text-3xl font-bold text-green-300">
            Ball Python 101 Review Materials
          </h2>

          <p className="mt-4 text-gray-300">
            Access the current Ball Python 101 Certification Course draft
            for veterinary review.
          </p>

          <div className="mt-6 rounded-xl border border-green-800 p-6">

            <p className="text-lg font-semibold text-white">
              Ball Python 101 Certification Course
            </p>

            <p className="mt-3 text-gray-400">
              Review the lessons, educational structure, and supporting
              materials.
            </p>

            <a
              href="/academy/ball-python"
              className="mt-6 inline-flex rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              Open Ball Python 101 Review Course
            </a>

          </div>

        </section>


        <section className="mt-10 rounded-2xl border border-green-700 p-8">

          <h2 className="text-3xl font-bold text-green-300">
            Feedback Process
          </h2>

          <p className="mt-4 text-gray-300">
            After reviewing the materials, veterinary reviewers will provide
            feedback regarding educational accuracy, safety considerations,
            terminology, and opportunities for improvement.
          </p>

        </section>


        <section className="mt-10 rounded-2xl bg-[#102017] p-8">

          <h2 className="text-3xl font-bold text-green-300">
            Thank You
          </h2>

          <p className="mt-4 text-gray-300">
            Your professional feedback helps ScalesWiki create responsible
            reptile education resources for keepers, adopters, and rescue
            organizations.
          </p>

        </section>

      </div>
    </main>
  );
}
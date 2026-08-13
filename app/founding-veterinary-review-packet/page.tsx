import Link from "next/link";

export default function FoundingVeterinaryReviewPacketPage() {
  return (
    <main className="min-h-screen bg-[#07110C] px-6 py-16 text-gray-200">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm uppercase tracking-[0.3em] text-green-400">
          ScalesWiki
        </p>

        <h1 className="mt-6 text-5xl font-bold text-green-300">
          Founding Veterinary Review Packet
        </h1>

        <p className="mt-4 text-gray-400">
          Version 1.0
        </p>


        <section className="mt-10 rounded-2xl bg-[#102017] p-8">
          <h2 className="text-3xl font-bold text-green-300">
            Welcome
          </h2>

          <p className="mt-4 text-gray-300">
            Thank you for considering participation in the ScalesWiki
            Veterinary Review Program.
          </p>

          <p className="mt-4 text-gray-300">
            ScalesWiki was created to provide responsible reptile education
            resources backed by rescue experience and reviewed by qualified
            professionals.
          </p>

          <p className="mt-4 text-gray-300">
            Our goal is to create accurate, accessible learning materials for
            reptile keepers, adopters, and rescue organizations.
          </p>
        </section>


        <section className="mt-8 rounded-2xl bg-[#102017] p-8">
          <h2 className="text-3xl font-bold text-green-300">
            Current Review Project
          </h2>

          <h3 className="mt-6 text-2xl font-semibold text-white">
            Ball Python 101 Certification Course
          </h3>

          <p className="mt-3 text-gray-300">
            Review Version: 1.0
          </p>

          <p className="mt-3 text-gray-300">
            Resource Type: Educational certification course
          </p>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-300">
            <li>Structured lessons</li>
            <li>Knowledge checks</li>
            <li>Final assessment</li>
            <li>Printable keeper resources</li>
          </ul>
        </section>


        <section className="mt-8 rounded-2xl border border-green-900 bg-[#0C1812] p-8">
          <h2 className="text-3xl font-bold text-green-300">
            Purpose of Veterinary Review
          </h2>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-300">
            <li>Accuracy of husbandry recommendations</li>
            <li>Animal welfare considerations</li>
            <li>Medical terminology</li>
            <li>Safety guidance</li>
            <li>Missing information or improvement suggestions</li>
          </ul>
        </section>


        <section className="mt-8 rounded-2xl bg-[#102017] p-8">
          <h2 className="text-3xl font-bold text-green-300">
            Review Process
          </h2>

          <ol className="mt-6 list-decimal space-y-3 pl-6 text-gray-300">
            <li>Review provided educational materials</li>
            <li>Identify corrections or recommendations</li>
            <li>Provide professional feedback</li>
            <li>Suggest improvements where appropriate</li>
          </ol>
        </section>


        <section className="mt-8 rounded-2xl border border-green-700 p-8">
          <h2 className="text-3xl font-bold text-green-300">
            Reviewer Recognition
          </h2>

          <p className="mt-4 text-gray-300">
            With permission, founding veterinary reviewers may be recognized
            as contributors to the ScalesWiki Professional Field Guide Series.
          </p>

          <ul className="mt-5 list-disc space-y-3 pl-6 text-gray-300">
            <li>Reviewer name</li>
            <li>Credentials</li>
            <li>Specialty</li>
            <li>Contribution acknowledgment</li>
          </ul>
        </section>


        <section className="mt-8 rounded-2xl bg-[#102017] p-8">
          <h2 className="text-3xl font-bold text-green-300">
            Important Note
          </h2>

          <p className="mt-4 text-gray-300">
            Veterinary review does not represent medical endorsement of all
            future ScalesWiki content unless specifically agreed upon.
          </p>

          <p className="mt-4 text-gray-300">
            The purpose of review is improving educational accuracy and
            responsible reptile husbandry information.
          </p>
        </section>


        <section className="mt-8 rounded-2xl border border-green-700 p-8">
          <h2 className="text-3xl font-bold text-green-300">
            Contact
          </h2>

          <p className="mt-4 text-gray-300">
            William Pierce
          </p>

          <p className="text-gray-300">
            Founder, ScalesWiki
          </p>

          <p className="mt-4 text-gray-300">
            Website:
            <br />

            <a
              href="https://scaleswiki.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300"
            >
              https://scaleswiki.org
            </a>
          </p>
        </section>


        <section className="mt-8 rounded-2xl bg-[#102017] p-8 text-center">

          <h2 className="text-3xl font-bold text-green-300">
            Ready to Begin Review?
          </h2>

          <p className="mt-4 text-gray-300">
            Access the review materials and begin your evaluation of the
            ScalesWiki Ball Python 101 Certification Course.
          </p>

          <Link
            href="/veterinary-review/access"
            className="mt-6 inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            Access Review Materials
          </Link>

        </section>


      </div>
    </main>
  );
}
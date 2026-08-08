export default function VeterinaryReviewPage() {
  return (
    <main className="min-h-screen bg-[#07110C] px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm uppercase tracking-[0.3em] text-green-400">
          ScalesWiki
        </p>

        <h1 className="mt-6 text-5xl font-bold text-green-300">
          Veterinary Review Program
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          ScalesWiki is seeking veterinary professionals to review our reptile
          education materials for accuracy, clarity, and responsible husbandry
          guidance.
        </p>


        <section className="mt-12 rounded-2xl bg-[#102017] p-8">

          <h2 className="text-3xl font-bold text-green-300">
            Current Review Project
          </h2>

          <h3 className="mt-6 text-2xl font-semibold">
            Ball Python 101 Certification Course
          </h3>

          <p className="mt-4 text-gray-300">
            Veterinary Review Draft — Version 1.0
          </p>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-300">
            <li>
              12 structured educational lessons
            </li>

            <li>
              Interactive knowledge checks
            </li>

            <li>
              Final certification examination
            </li>

            <li>
              Printable educational resources
            </li>
          </ul>

        </section>


        <section className="mt-10 rounded-2xl border border-green-900 bg-[#0C1812] p-8">

          <h2 className="text-3xl font-bold text-green-300">
            Requested Review Areas
          </h2>

          <ul className="mt-6 space-y-3 text-gray-300">

            <li>
              ✓ Accuracy of husbandry recommendations
            </li>

            <li>
              ✓ Safety and welfare considerations
            </li>

            <li>
              ✓ Medical wording and terminology
            </li>

            <li>
              ✓ Missing information or improvement suggestions
            </li>

          </ul>

        </section>


        <section className="mt-10 rounded-2xl bg-[#102017] p-8">

          <h2 className="text-3xl font-bold text-green-300">
            Founding Veterinary Reviewer Program
          </h2>

          <p className="mt-4 text-gray-300">
            ScalesWiki is establishing a small group of veterinary
            professionals who can provide feedback during the development of
            our educational resources.
          </p>

          <p className="mt-4 text-gray-300">
            Founding reviewers may be recognized on our website with
            permission for their contribution to improving reptile education.
          </p>

        </section>


        <section className="mt-10 rounded-2xl bg-[#102017] p-8">

          <h2 className="text-3xl font-bold text-green-300">
            Our Goal
          </h2>

          <p className="mt-4 text-gray-300">
            Our goal is to create responsible reptile education resources that
            support keepers, adopters, and rescue organizations while being
            reviewed by knowledgeable professionals.
          </p>

        </section>


        <section className="mt-10 rounded-2xl border border-green-700 p-8">

          <h2 className="text-3xl font-bold text-green-300">
            Interested in Reviewing?
          </h2>

          <p className="mt-4 text-gray-300">
            Veterinary professionals interested in contributing feedback can
            contact ScalesWiki for review access.
          </p>

          <p className="mt-6 text-gray-300">
            Email:
          </p>

          <a
            href="mailto:contact@scaleswiki.org"
            className="text-green-300 underline"
          >
            contact@scaleswiki.org
          </a>

        </section>


      </div>
    </main>
  );
}

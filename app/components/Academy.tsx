import Image from "next/image";
import Link from "next/link";

export function Academy() {
  return (
    <section
      id="academy"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
    >
      <div className="rounded-3xl border border-white/10 bg-[#101B15] p-10">

        <div className="flex flex-col items-center text-center">

          <Image
            src="/branding/academy-logo.svg"
            alt="ScalesWiki Academy"
            width={140}
            height={140}
          />

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            ScalesWiki Academy
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Learn Through Structured Courses
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Learn reptile husbandry through structured lessons,
            quizzes, printable resources, and completion
            certificates.
          </p>

          <Link
            href="/academy"
            className="mt-10 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-500"
          >
            Enter Academy
          </Link>

        </div>

      </div>
    </section>
  );
}
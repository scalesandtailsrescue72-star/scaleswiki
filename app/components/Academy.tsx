import Image from "next/image";

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
            className="mb-6"
          />

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            Academy
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white">
            Learn Reptile Husbandry
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Build your reptile knowledge through structured lessons,
            printable resources, quizzes, certificates, and
            evidence-based husbandry education.
          </p>

          <button className="mt-10 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-500">
            Enter Academy
          </button>

        </div>
      </div>
    </section>
  );
}
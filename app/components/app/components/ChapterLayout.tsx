import Link from "next/link";
import { ReactNode } from "react";

interface ChapterLayoutProps {
  chapter: string;
  title: string;
  readingTime: string;
  guideHref: string;
  nextHref?: string;
  previousHref?: string;
  children: ReactNode;
}

export default function ChapterLayout({
  chapter,
  title,
 readingTime,
  guideHref,
  nextHref,
  previousHref,
  children,
}: ChapterLayoutProps) {
  return (
    <main className="min-h-screen bg-[#08120D] text-[#F5F5F5]">
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">

        <div className="mb-6 text-sm text-gray-400">
          <Link href="/">Home</Link>
          {" / "}
          <Link href={guideHref}>Ball Python Guide</Link>
          {" / "}
          {title}
        </div>

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2ECC71]">
          {chapter}
        </p>

        <h1 className="mt-3 text-5xl font-bold">
          {title}
        </h1>

        <p className="mt-3 text-gray-400">
          📖 Estimated Reading Time: {readingTime}
        </p>

        <article className="mt-12 rounded-3xl border border-white/10 bg-[#122018] p-10 leading-8">
          {children}
        </article>

        <div className="mt-14 flex flex-wrap justify-between">

          {previousHref ? (
            <Link
              href={previousHref}
              className="rounded-xl border border-white/10 px-6 py-3"
            >
              ← Previous
            </Link>
          ) : (
            <div />
          )}

          {nextHref ? (
            <Link
              href={nextHref}
              className="rounded-xl bg-[#2ECC71] px-6 py-3 font-semibold text-black"
            >
              Next →
            </Link>
          ) : null}

        </div>

      </section>
    </main>
  );
}
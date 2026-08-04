import ReactMarkdown from "react-markdown";

type MarkdownLessonProps = {
  content: string;
};

export function MarkdownLesson({
  content,
}: MarkdownLessonProps) {
  const estimatedMinutes = Math.max(
    3,
    Math.ceil(content.split(/\s+/).length / 200)
  );

  return (
    <article className="mx-auto max-w-4xl">

      {/* Lesson Header */}

      <div className="mb-10 rounded-2xl border border-green-900 bg-[#102017] p-8 shadow-lg">

        <p className="text-sm uppercase tracking-widest text-green-400">
          ScalesWiki Academy
        </p>

        <h1 className="mt-3 text-4xl font-bold text-green-300">
          Lesson
        </h1>

        <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-300">

          <div>
            📖 Estimated Reading Time:
            <span className="ml-2 font-semibold text-white">
              {estimatedMinutes} minutes
            </span>
          </div>

          <div>
            🎓 Certification Lesson
          </div>

        </div>

      </div>

      {/* Markdown Content */}

      <div className="prose prose-invert max-w-none prose-headings:text-green-300 prose-a:text-green-400 prose-strong:text-white">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>

      {/* Lesson Checklist */}

      <div className="mt-16 rounded-2xl border border-green-900 bg-[#102017] p-8 shadow-lg">

        <h2 className="text-2xl font-bold text-green-300">
          Lesson Checklist
        </h2>

        <ul className="mt-6 space-y-3 text-gray-300">

          <li>✅ I have read this lesson completely.</li>

          <li>✅ I understand the major concepts discussed.</li>

          <li>✅ I am ready to complete the lesson quiz.</li>

          <li>✅ I can apply what I learned to responsible ball python care.</li>

        </ul>

      </div>

      {/* Educational Reminder */}

      <div className="mt-10 rounded-xl border border-yellow-700 bg-yellow-950/40 p-6">

        <h3 className="text-xl font-semibold text-yellow-300">
          Remember
        </h3>

        <p className="mt-3 text-gray-300">
          Responsible reptile keeping is based on continual learning.
          Completing the lesson is only the first step—understanding
          and applying the material is what prepares you for successful,
          long-term animal care.
        </p>

      </div>

    </article>
  );
}
import ReactMarkdown from "react-markdown";

type MarkdownLessonProps = {
  content: string;
};

export function MarkdownLesson({
  content,
}: MarkdownLessonProps) {
  return (
    <article className="prose prose-invert max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
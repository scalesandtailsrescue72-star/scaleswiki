import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export async function loadLesson(courseSlug: string, lesson: number) {
  const fileName = `lesson-${lesson.toString().padStart(2, "0")}.md`;

  const filePath = path.join(
    process.cwd(),
    "app",
    "academy",
    courseSlug,
    "content",
    fileName
  );

  const raw = await fs.readFile(filePath, "utf8");
  const parsed = matter(raw);

  return {
    content: parsed.content,
    data: parsed.data,
  };
}
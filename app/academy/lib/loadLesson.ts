import fs from "fs/promises";
import path from "path";

export async function loadLesson(lesson: number) {
  const fileName = `lesson-${lesson
    .toString()
    .padStart(2, "0")}.md`;

  const filePath = path.join(
    process.cwd(),
    "app",
    "academy",
    "ball-python",
    "content",
    fileName
  );

  return fs.readFile(filePath, "utf8");
}
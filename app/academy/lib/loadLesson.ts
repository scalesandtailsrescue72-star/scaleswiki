import { generatedLessonContent } from "@/app/academy/data/_generatedLessonContent";

export async function loadLesson(courseSlug: string, lesson: number) {
  const key = `${courseSlug}:${lesson}`;
  const lessonContent = generatedLessonContent[key];

  if (!lessonContent) {
    throw new Error(`Lesson content not found for ${key}`);
  }

  return lessonContent;
}

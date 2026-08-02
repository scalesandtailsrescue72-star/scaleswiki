import { notFound } from "next/navigation";

import { LessonPage } from "@/app/academy/lib/lessonPage";
import { loadLesson } from "@/app/academy/lib/loadLesson";
import { getCourseBySlug } from "@/app/academy/data";

type LessonPageProps = {
  params: { slug: string; lesson: string } | Promise<{ slug: string; lesson: string }>;
};

export default async function Page({ params }: LessonPageProps) {
  const resolvedParams = (await params) as { slug: string; lesson: string };
  const courseSlug = resolvedParams.slug;
  const lessonNumber = Number(resolvedParams.lesson);

  const course = getCourseBySlug(courseSlug);
  console.log("Course slug:", courseSlug);
console.log("Lessons:", course?.lessons.map(l => l.number));

  if (!course) {
    notFound();
  }

  const currentLesson = course.lessons.find((l) => l.number === lessonNumber);

  if (!currentLesson) {
    notFound();
  }

  const lessonContent = await loadLesson(course.slug, lessonNumber);
  const lessonContentText = (lessonContent as any).content ?? String(lessonContent);
  const fm = (lessonContent as any).data ?? {};

  const mergedLesson = {
    ...currentLesson,
    ...(fm.title ? { title: fm.title } : {}),
    ...(fm.estimatedTime ? { duration: fm.estimatedTime } : {}),
    ...(fm.plate ? { plate: fm.plate } : {}),
    ...(fm.objectives ? { objectives: fm.objectives } : {}),
    ...(fm.keyTakeaways ? { keyTakeaways: fm.keyTakeaways } : {}),
    ...(fm.worksheet ? { worksheet: fm.worksheet } : {}),
    ...(fm.downloads ? { downloads: fm.downloads } : {}),
    ...(fm.references ? { references: fm.references } : {}),
  };

  const previousLesson = course.lessons.find((lesson) => lesson.number === lessonNumber - 1);
  const nextLesson = course.lessons.find((lesson) => lesson.number === lessonNumber + 1);

  return (
    <LessonPage
      course={course}
      currentLesson={mergedLesson}
      lessonContent={lessonContentText}
      previousLesson={previousLesson}
      nextLesson={nextLesson}
    />
  );
}

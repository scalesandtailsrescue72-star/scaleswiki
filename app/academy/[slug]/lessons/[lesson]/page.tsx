import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LessonPage } from "@/app/academy/lib/lessonPage";
import { loadLesson } from "@/app/academy/lib/loadLesson";
import { getCourseBySlug } from "@/app/academy/data";

type LessonPageProps = {
  params: { slug: string; lesson: string } | Promise<{ slug: string; lesson: string }>;
};

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const { slug, lesson } = await params;
  const course = getCourseBySlug(slug);
  const currentLesson = course?.lessons.find((item) => item.number === Number(lesson));

  if (!course || !currentLesson) {
    return { title: "Academy Lesson Not Found", robots: { index: false, follow: false } };
  }

  const canonical = `/academy/${slug}/lessons/${lesson}`;
  const description = `Study lesson ${currentLesson.number}, ${currentLesson.title}, in the ${course.title} course.`;

  return {
    title: `${currentLesson.title} | ${course.title}`,
    description,
    alternates: { canonical },
    openGraph: { title: `${currentLesson.title} | ${course.title}`, description, url: canonical },
  };
}

export default async function Page({ params }: LessonPageProps) {
  const resolvedParams = (await params) as { slug: string; lesson: string };
  const courseSlug = resolvedParams.slug;
  const lessonNumber = Number(resolvedParams.lesson);

  const course = getCourseBySlug(courseSlug);
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

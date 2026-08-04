import { supabase } from "@/app/lib/database/supabase";

export interface CourseProgress {
  completedLessons: number;
  totalLessons: number;
  percent: number;
  nextLesson: number | null;
  passedExam: boolean;
  earnedCertificate: boolean;
}

export async function getCourseProgress(
  userId: string,
  courseSlug: string,
  totalLessons: number
): Promise<CourseProgress> {
  const { data, error } = await supabase
    .from("lesson_progress")
    .select("lesson_number")
    .eq("user_id", userId)
    .eq("course_slug", courseSlug)
    .eq("completed", true);

  if (error) {
    throw error;
  }

  const completedLessons = data?.length ?? 0;

  const completedNumbers = new Set(
    (data ?? []).map((lesson) => lesson.lesson_number)
  );

  let nextLesson: number | null = null;

  for (let lesson = 1; lesson <= totalLessons; lesson++) {
    if (!completedNumbers.has(lesson)) {
      nextLesson = lesson;
      break;
    }
  }

  const percent =
    totalLessons === 0
      ? 0
      : Math.round((completedLessons / totalLessons) * 100);

  // Temporary values until final exam & certificate
  // are migrated to Supabase.
  const passedExam = false;
  const earnedCertificate = false;

  return {
    completedLessons,
    totalLessons,
    percent,
    nextLesson,
    passedExam,
    earnedCertificate,
  };
}
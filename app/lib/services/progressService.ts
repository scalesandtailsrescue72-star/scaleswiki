import { supabase } from "@/app/lib/database/supabase";

export interface SaveLessonProgressInput {
  userId: string;
  courseSlug: string;
  lessonNumber: number;
  score: number;
  percentage: number;
}

export async function saveLessonProgress({
  userId,
  courseSlug,
  lessonNumber,
  score,
  percentage,
}: SaveLessonProgressInput) {
  const { error } = await supabase
    .from("lesson_progress")
    .upsert(
      {
        user_id: userId,
        course_slug: courseSlug,
        lesson_number: lessonNumber,
        completed: true,
        score,
        percentage,
      },
      {
        onConflict: "user_id,course_slug,lesson_number",
      }
    );

  if (error) {
    throw error;
  }
}

export async function getCompletedLessonCount(
  userId: string,
  courseSlug: string
): Promise<number> {
  const { count, error } = await supabase
    .from("lesson_progress")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("user_id", userId)
    .eq("course_slug", courseSlug)
    .eq("completed", true);

  if (error) {
    throw error;
  }

  return count ?? 0;
}

export async function getLessonProgress(
  userId: string,
  courseSlug: string
) {
  const { data, error } = await supabase
    .from("lesson_progress")
    .select("*")
    .eq("user_id", userId)
    .eq("course_slug", courseSlug)
    .order("lesson_number");

  if (error) {
    throw error;
  }

  return data ?? [];
}
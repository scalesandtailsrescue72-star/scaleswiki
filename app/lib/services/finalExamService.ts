import { supabase } from "@/app/lib/database/supabase";

export async function saveFinalExam({
  userId,
  courseSlug,
  score,
  percentage,
  passed,
}: {
  userId: string;
  courseSlug: string;
  score: number;
  percentage: number;
  passed: boolean;
}) {
  const { error } = await supabase
    .from("final_exam_results")
    .upsert(
      {
        user_id: userId,
        course_slug: courseSlug,
        score,
        percentage,
        passed,
      },
      {
        onConflict: "user_id,course_slug",
      }
    );

  if (error) {
    throw error;
  }

  // Only create a certificate if the student passed.
  if (!passed) {
    return;
  }

  // Check if a certificate already exists.
  const { data: existingCertificate } = await supabase
    .from("certificates")
    .select("id")
    .eq("user_id", userId)
    .eq("course_slug", courseSlug)
    .maybeSingle();

  if (existingCertificate) {
    return;
  }

  const certificateNumber =
    `${courseSlug.toUpperCase()}-${Date.now()}`;

  const { error: certificateError } = await supabase
    .from("certificates")
    .insert({
      user_id: userId,
      course_slug: courseSlug,
      certificate_number: certificateNumber,
    });

  if (certificateError) {
    throw certificateError;
  }
}
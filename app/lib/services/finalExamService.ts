import { supabase } from "@/app/lib/database/supabase";

type SaveFinalExamInput = {
  userId: string;
  courseSlug: string;
  score: number;
  percentage: number;
  passed: boolean;
};

export async function saveFinalExam({
  userId,
  courseSlug,
  score,
  percentage,
  passed,
}: SaveFinalExamInput) {
  console.log("========== SAVING FINAL EXAM ==========");
  console.log({
    userId,
    courseSlug,
    score,
    percentage,
    passed,
  });

  const { error: examError } = await supabase
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

  if (examError) {
    console.error("FINAL EXAM SAVE ERROR");
    console.error(examError);
    throw examError;
  }

  console.log("Final exam saved.");

  if (!passed) {
    console.log("Student did not pass. Certificate will not be created.");
    return;
  }

  console.log("Checking for existing certificate...");

  const {
    data: existingCertificate,
    error: lookupError,
  } = await supabase
    .from("certificates")
    .select("id")
    .eq("user_id", userId)
    .eq("course_slug", courseSlug)
    .maybeSingle();

  if (lookupError) {
    console.error("CERTIFICATE LOOKUP ERROR");
    console.error(lookupError);
    throw lookupError;
  }

  if (existingCertificate) {
    console.log("Certificate already exists.");
    return;
  }

  const certificateNumber =
    `${courseSlug.toUpperCase()}-${Date.now()}`;

  console.log("Creating certificate:", certificateNumber);

  const { data, error: certificateError } = await supabase
    .from("certificates")
    .insert({
      user_id: userId,
      course_slug: courseSlug,
      certificate_number: certificateNumber,
    })
    .select();

  if (certificateError) {
    console.error("CERTIFICATE INSERT ERROR");
    console.error(certificateError);
    throw certificateError;
  }

  console.log("Certificate created successfully.");
  console.log(data);
}
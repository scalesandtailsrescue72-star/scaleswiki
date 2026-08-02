const STORAGE_KEY = "scaleswiki-progress";

export interface LessonProgress {
  completed: boolean;
  score: number;
  percentage: number;
  completedAt: string;
}

export interface FinalExamProgress {
  completed: boolean;
  passed: boolean;
  score: number;
  percentage: number;
  completedAt: string;
}

export interface CertificateProgress {
  earned: boolean;
  certificateId: string;
  earnedAt: string;
}

export interface CourseProgress {
  lessons: Record<number, LessonProgress>;

  finalExam?: FinalExamProgress;

  certificate?: CertificateProgress;
}

export interface AcademyProgress {
  courses: Record<string, CourseProgress>;
}

function loadProgress(): AcademyProgress {
  if (typeof window === "undefined") {
    return { courses: {} };
  }

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return { courses: {} };
  }

  try {
    return JSON.parse(data);
  } catch {
    return { courses: {} };
  }
}

function saveProgress(progress: AcademyProgress) {
  if (typeof window === "undefined") return;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));

  // Notify the application that progress changed.
  window.dispatchEvent(new Event("storage"));
}

function ensureCourse(progress: AcademyProgress, slug: string) {
  if (!progress.courses[slug]) {
    progress.courses[slug] = {
      lessons: {},
    };
  }

  return progress.courses[slug];
}

export function completeLesson(
  courseSlug: string,
  lessonNumber: number,
  score: number,
  percentage: number
) {
  const progress = loadProgress();

  const course = ensureCourse(progress, courseSlug);

  course.lessons[lessonNumber] = {
    completed: true,
    score,
    percentage,
    completedAt: new Date().toISOString(),
  };

  saveProgress(progress);
}

export function completeFinalExam(
  courseSlug: string,
  score: number,
  percentage: number,
  passed: boolean
) {
  const progress = loadProgress();

  const course = ensureCourse(progress, courseSlug);

  course.finalExam = {
    completed: true,
    passed,
    score,
    percentage,
    completedAt: new Date().toISOString(),
  };

  if (passed) {
    course.certificate = {
      earned: true,
      certificateId: `${courseSlug.toUpperCase()}-${Date.now()}`,
      earnedAt: new Date().toISOString(),
    };
  }

  saveProgress(progress);
}

export function getCourseProgress(courseSlug: string): CourseProgress {
  const progress = loadProgress();

  return (
    progress.courses[courseSlug] ?? {
      lessons: {},
    }
  );
}

export function isLessonComplete(
  courseSlug: string,
  lessonNumber: number
): boolean {
  return !!getCourseProgress(courseSlug).lessons[lessonNumber]?.completed;
}

export function getCompletedLessonCount(courseSlug: string): number {
  return Object.values(getCourseProgress(courseSlug).lessons).filter(
    (lesson) => lesson.completed
  ).length;
}

export function getNextLesson(
  courseSlug: string,
  totalLessons: number
): number | null {
  const course = getCourseProgress(courseSlug);

  for (let lesson = 1; lesson <= totalLessons; lesson++) {
    if (!course.lessons[lesson]?.completed) {
      return lesson;
    }
  }

  return null;
}

export function hasPassedFinalExam(courseSlug: string): boolean {
  return !!getCourseProgress(courseSlug).finalExam?.passed;
}

export function hasCertificate(courseSlug: string): boolean {
  return !!getCourseProgress(courseSlug).certificate?.earned;
}

export function getCertificate(courseSlug: string) {
  return getCourseProgress(courseSlug).certificate;
}

export function clearCourseProgress(courseSlug: string) {
  const progress = loadProgress();

  delete progress.courses[courseSlug];

  saveProgress(progress);
}

export function clearAllProgress() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(STORAGE_KEY);

  window.dispatchEvent(new Event("storage"));
}
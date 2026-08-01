const STORAGE_KEY = "scaleswiki-progress";

export interface LessonProgress {
  completed: boolean;
  score: number;
  percentage: number;
  completedAt: string;
}

export interface CourseProgress {
  lessons: Record<number, LessonProgress>;
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
}

export function completeLesson(
  courseSlug: string,
  lessonNumber: number,
  score: number,
  percentage: number
) {
  const progress = loadProgress();

  if (!progress.courses[courseSlug]) {
    progress.courses[courseSlug] = {
      lessons: {},
    };
  }

  progress.courses[courseSlug].lessons[lessonNumber] = {
    completed: true,
    score,
    percentage,
    completedAt: new Date().toISOString(),
  };

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

export function clearCourseProgress(courseSlug: string) {
  const progress = loadProgress();

  delete progress.courses[courseSlug];

  saveProgress(progress);
}

export function clearAllProgress() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(STORAGE_KEY);
}
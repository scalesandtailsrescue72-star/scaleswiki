import type { Course } from "../types/course";
import { modules } from "./_generatedCourses";

function isCourse(value: unknown): value is Course {
  return (
    typeof value === "object" &&
    value !== null &&
    "slug" in (value as any) &&
    "lessons" in (value as any)
  );
}

const academyCourses: Course[] = modules
  .flatMap((m) => Object.values(m as Record<string, unknown>))
  .filter(isCourse) as Course[];

export function getAllCourses(): Course[] {
  return [...academyCourses].sort((a, b) => a.title.localeCompare(b.title));
}

export function getCourseBySlug(slug: string): Course | undefined {
  return academyCourses.find((course) => course.slug === slug);
}

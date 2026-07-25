export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Lesson {
  number: number;
  title: string;
  description: string;
  duration: string;
  difficulty: Difficulty;
  href: string;
}

export interface CourseStats {
  lessons: number;
  estimatedTime: string;
  certificate: boolean;
  quiz: boolean;
}

export interface Course {
  title: string;
  slug: string;
  level: Difficulty;

  description: string;

  objectives: string[];

  stats: CourseStats;

  lessons: Lesson[];
}
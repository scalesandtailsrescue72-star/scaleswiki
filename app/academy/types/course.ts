export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface QuizQuestion {
  /** Optional unique identifier for certification questions */
  id?: string;

  /** Lesson number the question belongs to */
  lesson?: number;

  /** Topic/category for study reports */
  category?: string;

  /** Difficulty used by the certification engine */
  difficulty?: "easy" | "medium" | "hard";

  /** The question shown to the student */
  question: string;

  /** Available answer choices */
  options: string[];

  /** Index of the correct answer */
  answer: number;

  /** Explanation displayed after submission */
  explanation?: string;

  /** Future support for images */
  image?: string;

  /** Future searchable tags */
  tags?: string[];

  /** Future references */
  references?: string[];
}

export interface Lesson {
  number: number;
  title: string;
  description: string;
  duration: string;
  difficulty: Difficulty;
  guideHref: string;
}

export interface LessonPlate {
  src: string;
  alt?: string;
}

export interface DownloadItem {
  label: string;
  href: string;
}

export interface ReferenceItem {
  label?: string;
  href: string;
}

export interface LessonExtended extends Lesson {
  contentFile?: string;
  plate?: LessonPlate;
  objectives?: string[];
  keyTakeaways?: string[];
  quizQuestions?: QuizQuestion[];
  worksheet?: string;
  downloads?: DownloadItem[];
  references?: ReferenceItem[];
}

export interface CourseStats {
  lessons: number;
  estimatedTime: string;
  certificate: boolean;
  quiz: boolean;
}

export interface Course {
  slug: string;
  title: string;
  level: Difficulty;
  status?: "Available" | "Coming Soon";
  description: string;
  lessonCardDescription: string;
  objectives: string[];
  stats: CourseStats;
  didYouKnow: string;
  keeperTip: string;
  keyTakeaways: string[];
  quizQuestions: QuizQuestion[];
  lessons: LessonExtended[];
}
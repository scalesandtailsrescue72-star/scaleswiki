export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation?: string;
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
  /** Path to a technical plate image (preferably in public/) */
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
  /** Optional override for the markdown content file (defaults to loader convention) */
  contentFile?: string;

  /** Technical plate image to show with the lesson */
  plate?: LessonPlate;

  /** Per-lesson learning objectives (falls back to course-level objectives) */
  objectives?: string[];

  /** Per-lesson key takeaways (falls back to course-level keyTakeaways) */
  keyTakeaways?: string[];

  /** Per-lesson quiz questions (optional; quiz UI will consume when implemented) */
  quizQuestions?: QuizQuestion[];

  /** Link to a worksheet file or resource */
  worksheet?: string;

  /** Downloadable attachments for the lesson */
  downloads?: DownloadItem[];

  /** References or external resources */
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
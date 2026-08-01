import type { Course } from "@/app/academy/types/course";
import { ballPythonLessons } from "./lessons";
import { ballPythonFinalExam } from "./finalExam";

export const ballPythonCourse: Course = {
  slug: "ball-python",

  title: "Ball Python 101",

  level: "Beginner",

  status: "Available",

  description:
    "Master Ball Python husbandry with structured lessons covering enclosure design, heating, humidity, feeding, handling, health, and more.",

  lessonCardDescription:
    "Learn this topic through the Ball Python Keeper's Academy.",

  objectives: [
    "Understand Ball Python natural history",
    "Build a proper enclosure",
    "Maintain correct temperatures",
    "Maintain proper humidity",
    "Choose safe lighting",
    "Select appropriate substrate",
    "Provide fresh water",
    "Feed safely",
    "Handle responsibly",
    "Recognize common health concerns",
  ],

  stats: {
    lessons: ballPythonLessons.length,
    estimatedTime: "2–3 Hours",
    certificate: true,
    quiz: true,
  },

  didYouKnow:
    "Ball Pythons earned their common name because they curl themselves into a tight defensive ball when frightened instead of striking.",

  keeperTip:
    "Always have the enclosure completely built, heated, and tested before bringing your Ball Python home.",

  keyTakeaways: [
    "Preparation prevents most husbandry mistakes.",
    "Correct heating and humidity are critical for health.",
    "Education creates confident reptile keepers.",
  ],

  // This will become the certification exam.
  quizQuestions: ballPythonFinalExam,

  // Imported from lessons.ts
  lessons: ballPythonLessons,
};
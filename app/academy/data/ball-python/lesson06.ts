import type { LessonExtended } from "@/app/academy/types/course";

export const lesson06: LessonExtended = {
  number: 6,

  title: "Humidity",

  description:
    "Learn why humidity is essential for healthy shedding, hydration, and long-term Ball Python health.",

  duration: "10 min",

  difficulty: "Beginner",

  guideHref: "/species/ball-python#humidity",

  objectives: [
    "Understand why humidity is important.",
    "Learn the recommended humidity range for Ball Pythons.",
    "Recognize signs of humidity problems.",
  ],

  keyTakeaways: [
    "Most Ball Pythons thrive around 60–70% humidity.",
    "A humid hide can support healthy shedding.",
    "Digital hygrometers provide the most reliable humidity readings.",
  ],

  quizQuestions: [
    {
      question: "What humidity range is generally recommended for Ball Pythons?",
      options: [
        "20–30%",
        "40–50%",
        "60–70%",
        "90–100%",
      ],
      answer: 2,
      explanation:
        "Most healthy Ball Pythons do well with humidity around 60–70%, with slightly higher humidity often being helpful during shedding.",
    },

    {
      question: "Which tool is best for measuring enclosure humidity?",
      options: [
        "Thermostat",
        "Digital hygrometer",
        "Heat gun",
        "UV meter",
      ],
      answer: 1,
      explanation:
        "A digital hygrometer provides accurate humidity measurements.",
    },

    {
      question: "Low humidity may contribute to...",
      options: [
        "Improved shedding",
        "Retained shed",
        "Faster growth",
        "Better appetite",
      ],
      answer: 1,
      explanation:
        "Humidity that is too low commonly contributes to shedding problems and dehydration.",
    },

    {
      question: "What is the purpose of a humid hide?",
      options: [
        "Increase enclosure temperature",
        "Provide higher humidity when the snake needs it",
        "Store food",
        "Replace the water bowl",
      ],
      answer: 1,
      explanation:
        "A humid hide allows the Ball Python to choose a higher humidity area, especially during shedding.",
    },
  ],

  references: [
    {
      label: "ScalesWiki Ball Python Care Guide",
      href: "/species/ball-python",
    },
  ],
};
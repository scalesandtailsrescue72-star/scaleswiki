import type { LessonExtended } from "@/app/academy/types/course";

export const lesson09: LessonExtended = {
  number: 9,

  title: "Humidity",

  description:
    "Learn how proper humidity supports healthy shedding, hydration, respiratory health, and long-term Ball Python husbandry.",

  duration: "15 min",

  difficulty: "Beginner",

  guideHref: "/species/ball-python#humidity",

  objectives: [
    "Understand why humidity is important for Ball Pythons.",
    "Identify the recommended humidity range.",
    "Learn how to measure and maintain stable humidity.",
    "Recognize signs that humidity may be too low or too high.",
    "Understand how enclosure design affects humidity.",
  ],

  keyTakeaways: [
    "Most Ball Pythons thrive at approximately 60–70% humidity.",
    "Stable humidity is more important than frequent fluctuations.",
    "Digital hygrometers provide the most reliable humidity measurements.",
    "A humid hide can assist with healthy shedding.",
    "Proper ventilation and humidity must work together.",
  ],

  quizQuestions: [
    {
      question: "What humidity range is generally recommended for most Ball Pythons?",
      options: [
        "20–30%",
        "40–50%",
        "60–70%",
        "90–100%",
      ],
      answer: 2,
      explanation:
        "Most healthy Ball Pythons do well with humidity around 60–70%.",
    },

    {
      question: "During shedding, humidity is often increased to approximately:",
      options: [
        "20–30%",
        "40–50%",
        "70–80%",
        "100%",
      ],
      answer: 2,
      explanation:
        "Slightly higher humidity may support complete, healthy sheds.",
    },

    {
      question: "Which device is best for measuring humidity?",
      options: [
        "Digital hygrometer",
        "Thermostat",
        "Infrared thermometer",
        "UV meter",
      ],
      answer: 0,
      explanation:
        "Digital hygrometers provide the most reliable humidity measurements.",
    },

    {
      question: "Which of the following can affect enclosure humidity?",
      options: [
        "Substrate",
        "Ventilation",
        "Water bowl size",
        "All of the above",
      ],
      answer: 3,
      explanation:
        "Several enclosure variables work together to influence humidity.",
    },

    {
      question: "What is the purpose of a humid hide?",
      options: [
        "Provide a localized area of higher humidity",
        "Increase enclosure temperature",
        "Store food",
        "Replace the water bowl",
      ],
      answer: 0,
      explanation:
        "Humid hides allow the snake to access increased humidity when needed.",
    },

    {
      question: "Humidity that is too low may contribute to:",
      options: [
        "Retained shed",
        "Improved shedding",
        "Brighter coloration",
        "Faster digestion",
      ],
      answer: 0,
      explanation:
        "Low humidity commonly contributes to shedding problems and dehydration.",
    },

    {
      question: "Excessive humidity combined with poor ventilation may contribute to:",
      options: [
        "Mold growth",
        "Improved air quality",
        "Lower temperatures",
        "Better feeding response",
      ],
      answer: 0,
      explanation:
        "Overly damp environments may encourage mold and bacterial growth.",
    },

    {
      question: "Why should humidity be monitored regularly?",
      options: [
        "To identify changes before they become problems",
        "To improve lighting",
        "To reduce feeding frequency",
        "To eliminate veterinary care",
      ],
      answer: 0,
      explanation:
        "Routine monitoring allows small husbandry adjustments before health issues develop.",
    },

    {
      question: "Which statement best describes good humidity management?",
      options: [
        "Stable humidity with proper ventilation",
        "Constant heavy misting",
        "Keeping substrate soaking wet",
        "Ignoring humidity readings",
      ],
      answer: 0,
      explanation:
        "Healthy humidity is stable, balanced, and supported by good airflow.",
    },

    {
      question: "The overall goal of humidity management is to:",
      options: [
        "Support healthy shedding, hydration, and long-term health",
        "Keep the enclosure wet",
        "Increase enclosure temperature",
        "Reduce cleaning",
      ],
      answer: 0,
      explanation:
        "Proper humidity supports multiple aspects of Ball Python health without creating an overly damp environment.",
    },
  ],

  references: [
    {
      label: "ScalesWiki Ball Python Handbook",
      href: "/species/ball-python",
    },
  ],
};
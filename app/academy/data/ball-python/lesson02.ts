import type { LessonExtended } from "@/app/academy/types/course";

export const lesson02: LessonExtended = {
  number: 2,

  title: "Natural History",

  description:
    "Explore where Ball Pythons live in the wild and discover how their natural environment shapes proper captive care.",

  duration: "10 min",

  difficulty: "Beginner",

  guideHref: "/species/ball-python#natural-history",

  objectives: [
    "Identify the native range of Ball Pythons.",
    "Describe the habitats where they naturally occur.",
    "Understand how natural history influences captive husbandry.",
  ],

  keyTakeaways: [
    "Ball Pythons are native to western and central Africa.",
    "Their natural habitat explains their captive care requirements.",
    "Successful husbandry begins with understanding the species in the wild.",
  ],

  quizQuestions: [
    {
      question: "Ball Pythons are native to which continent?",
      options: [
        "South America",
        "Africa",
        "Asia",
        "Australia",
      ],
      answer: 1,
      explanation:
        "Ball Pythons naturally occur throughout western and central Africa.",
    },

    {
      question: "Why is learning natural history important?",
      options: [
        "It helps recreate natural living conditions.",
        "It predicts snake coloration.",
        "It replaces veterinary care.",
        "It determines the snake's personality.",
      ],
      answer: 0,
      explanation:
        "Understanding natural habitats helps us provide appropriate captive care.",
    },

    {
      question: "Ball Pythons are generally most active...",
      options: [
        "During the hottest part of the day.",
        "Mostly at night and around dawn or dusk.",
        "Only during winter.",
        "Only after rain.",
      ],
      answer: 1,
      explanation:
        "Ball Pythons are primarily nocturnal and crepuscular animals.",
    },

    {
      question: "Which habitat best describes wild Ball Pythons?",
      options: [
        "Dry desert",
        "Dense rainforest canopy",
        "Grasslands, savannas, and forest edges",
        "Mountain peaks",
      ],
      answer: 2,
      explanation:
        "Ball Pythons naturally inhabit grasslands, savannas, agricultural areas, and forest edges.",
    },
  ],

  references: [
    {
      label: "ScalesWiki Ball Python Care Guide",
      href: "/species/ball-python",
    },
  ],
};
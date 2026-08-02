import type { LessonExtended } from "@/app/academy/types/course";

export const lesson12: LessonExtended = {
  number: 12,

  title: "Substrate",

  description:
    "Learn how to choose safe substrate, maintain cleanliness, and create a natural environment that supports healthy Ball Python husbandry.",

  duration: "10 min",

  difficulty: "Beginner",

  guideHref: "/species/ball-python#substrate",

  objectives: [
    "Understand the purpose of substrate.",
    "Identify safe substrate options.",
    "Learn proper cleaning and replacement practices.",
  ],

  keyTakeaways: [
    "Substrate supports humidity, comfort, and natural behavior.",
    "Spot cleaning should be performed regularly.",
    "Choose safe, dust-free substrate designed for reptiles.",
  ],

  quizQuestions: [
    {
      question: "What is one important purpose of substrate?",
      options: [
        "Increase enclosure lighting",
        "Support humidity and natural behaviors",
        "Replace heating equipment",
        "Prevent shedding",
      ],
      answer: 1,
      explanation:
        "Substrate helps maintain humidity while allowing natural behaviors such as burrowing and exploring.",
    },

    {
      question: "How often should soiled substrate be removed?",
      options: [
        "Only once per year",
        "Whenever waste is found",
        "Only during shedding",
        "Never",
      ],
      answer: 1,
      explanation:
        "Spot cleaning should be performed whenever waste is present to maintain a healthy enclosure.",
    },

    {
      question: "Which type of substrate is generally recommended?",
      options: [
        "Safe reptile substrate appropriate for Ball Pythons",
        "Cat litter",
        "Scented wood shavings",
        "Construction sand",
      ],
      answer: 0,
      explanation:
        "Choose reptile-safe substrates that help maintain humidity and are appropriate for Ball Python husbandry.",
    },

    {
      question: "Why is enclosure cleanliness important?",
      options: [
        "It reduces the risk of bacterial growth.",
        "It increases enclosure temperature.",
        "It replaces veterinary care.",
        "It improves feeding response.",
      ],
      answer: 0,
      explanation:
        "Routine cleaning helps maintain a healthier environment for your Ball Python.",
    },
  ],

  references: [
    {
      label: "ScalesWiki Ball Python Care Guide",
      href: "/species/ball-python",
    },
  ],
};
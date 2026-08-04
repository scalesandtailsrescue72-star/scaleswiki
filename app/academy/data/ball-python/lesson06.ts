import type { LessonExtended } from "@/app/academy/types/course";

export const lesson06: LessonExtended = {
  number: 6,

  title: "Quarantine & Biosecurity",

  description:
    "Learn why every new Ball Python should be quarantined, how to prevent disease transmission, and the daily practices that protect both new and existing reptiles.",

  duration: "15 min",

  difficulty: "Beginner",

  guideHref: "/species/ball-python#quarantine-and-biosecurity",

  objectives: [
    "Understand the purpose of quarantine.",
    "Learn how to properly set up a quarantine enclosure.",
    "Recognize the importance of biosecurity.",
    "Identify warning signs that require veterinary evaluation.",
    "Understand when quarantine can safely end.",
  ],

  keyTakeaways: [
    "Every newly acquired Ball Python should complete a quarantine period.",
    "Separate equipment helps prevent disease transmission.",
    "Daily observation allows health problems to be detected early.",
    "Good biosecurity protects every reptile in your collection.",
    "Quarantine is an investment in long-term animal health.",
  ],

  quizQuestions: [
    {
      question: "Why should every new Ball Python be quarantined?",
      options: [
        "To reduce the risk of spreading disease to other reptiles",
        "To improve coloration",
        "To make feeding easier",
        "To increase enclosure humidity",
      ],
      answer: 0,
      explanation:
        "Quarantine helps protect both the new snake and any reptiles already in your collection.",
    },

    {
      question: "What is the primary purpose of quarantine?",
      options: [
        "Observation for signs of illness before introduction",
        "Teaching the snake to eat larger prey",
        "Making cleaning easier",
        "Reducing enclosure size",
      ],
      answer: 0,
      explanation:
        "Quarantine provides time to observe feeding, shedding, behavior, and overall health.",
    },

    {
      question: "Which substrate is commonly recommended during quarantine?",
      options: [
        "Paper towels",
        "Deep bioactive soil",
        "Play sand",
        "Gravel",
      ],
      answer: 0,
      explanation:
        "Paper towels make it easier to monitor waste, cleanliness, and parasites.",
    },

    {
      question: "Which practice helps reduce cross-contamination?",
      options: [
        "Using separate feeding and cleaning equipment",
        "Sharing water bowls",
        "Housing all snakes together",
        "Using the same hides for every enclosure",
      ],
      answer: 0,
      explanation:
        "Separate equipment is one of the simplest and most effective biosecurity practices.",
    },

    {
      question: "What should you monitor during quarantine?",
      options: [
        "Feeding",
        "Breathing",
        "Shedding",
        "All of the above",
      ],
      answer: 3,
      explanation:
        "Daily observation of multiple health indicators helps identify problems early.",
    },

    {
      question: "Which symptom deserves prompt veterinary evaluation?",
      options: [
        "Persistent wheezing",
        "Normal tongue flicking",
        "Exploring the enclosure",
        "Resting inside a hide",
      ],
      answer: 0,
      explanation:
        "Respiratory signs such as wheezing should always be taken seriously.",
    },

    {
      question: "When should quarantine end?",
      options: [
        "After the snake has remained healthy throughout the observation period",
        "After one feeding",
        "After one shed",
        "Immediately after purchase",
      ],
      answer: 0,
      explanation:
        "Quarantine should only end after the animal has remained healthy during the observation period.",
    },

    {
      question: "Biosecurity refers to:",
      options: [
        "Practices that reduce disease transmission",
        "Breeding techniques",
        "Feeding schedules",
        "Humidity control",
      ],
      answer: 0,
      explanation:
        "Biosecurity includes procedures that help prevent diseases from spreading between animals.",
    },

    {
      question: "Why should you keep written quarantine records?",
      options: [
        "To identify changes over time",
        "To decorate the enclosure",
        "To reduce humidity",
        "To eliminate veterinary visits",
      ],
      answer: 0,
      explanation:
        "Daily records make it easier to recognize subtle changes in health or behavior.",
    },

    {
      question: "The overall goal of quarantine is to:",
      options: [
        "Protect the health of every reptile in your care",
        "Increase feeding frequency",
        "Reduce enclosure costs",
        "Speed up shedding",
      ],
      answer: 0,
      explanation:
        "Quarantine and biosecurity are preventive measures that help keep an entire collection healthy.",
    },
  ],

  references: [
    {
      label: "ScalesWiki Ball Python Handbook",
      href: "/species/ball-python",
    },
  ],
};
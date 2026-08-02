import type { LessonExtended } from "@/app/academy/types/course";

export const lesson10: LessonExtended = {
  number: 10,

  title: "Health",

  description:
    "Learn how to recognize signs of a healthy Ball Python, identify common warning signs, and understand when veterinary care is needed.",

  duration: "15 min",

  difficulty: "Beginner",

  guideHref: "/species/ball-python#health",

  objectives: [
    "Recognize the characteristics of a healthy Ball Python.",
    "Identify common signs of illness or injury.",
    "Understand when to seek veterinary care.",
  ],

  keyTakeaways: [
    "Early detection is one of the most important parts of reptile healthcare.",
    "Proper husbandry helps prevent many common health problems.",
    "A qualified reptile veterinarian should evaluate any persistent health concern.",
  ],

  quizQuestions: [
    {
      question: "Which of the following is a sign of a healthy Ball Python?",
      options: [
        "Clear eyes, healthy skin, and normal behavior",
        "Open-mouth breathing",
        "Persistent wheezing",
        "Visible wounds",
      ],
      answer: 0,
      explanation:
        "Healthy Ball Pythons typically have clear eyes, healthy skin, good body condition, and behave normally for the species.",
    },

    {
      question: "Which symptom should prompt closer observation or veterinary attention?",
      options: [
        "Repeated wheezing or open-mouth breathing",
        "Normal tongue flicking",
        "Exploring the enclosure",
        "Using a hide",
      ],
      answer: 0,
      explanation:
        "Respiratory symptoms such as wheezing or open-mouth breathing should never be ignored.",
    },

    {
      question: "What is one of the best ways to prevent many health problems?",
      options: [
        "Proper husbandry",
        "Frequent handling",
        "Keeping multiple snakes together",
        "Skipping enclosure cleaning",
      ],
      answer: 0,
      explanation:
        "Correct temperatures, humidity, nutrition, hygiene, and enclosure design are the foundation of good health.",
    },

    {
      question: "If you suspect your Ball Python is seriously ill, what should you do?",
      options: [
        "Wait several weeks",
        "Seek a qualified reptile veterinarian",
        "Increase handling",
        "Feed more often",
      ],
      answer: 1,
      explanation:
        "A qualified reptile veterinarian is the best source of diagnosis and treatment for health concerns.",
    },
  ],

  references: [
    {
      label: "ScalesWiki Ball Python Care Guide",
      href: "/species/ball-python",
    },
  ],
};
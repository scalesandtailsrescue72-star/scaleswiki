import type { LessonExtended } from "@/app/academy/types/course";

export const lesson03: LessonExtended = {
  number: 3,

  title: "Is a Ball Python Right for You?",

  description:
    "Learn whether a Ball Python is the right reptile for your lifestyle, experience level, and long-term commitment.",

  duration: "10 min",

  difficulty: "Beginner",

  guideHref: "/species/ball-python#is-it-right-for-you",

  objectives: [
    "Understand the long-term commitment of owning a Ball Python.",
    "Recognize the financial and time responsibilities of ownership.",
    "Decide whether a Ball Python is the right reptile for your lifestyle.",
  ],

  keyTakeaways: [
    "Ball Pythons can live 20–30 years or longer.",
    "Proper husbandry requires planning, patience, and ongoing commitment.",
    "Responsible reptile ownership begins before bringing the animal home.",
  ],

  quizQuestions: [
    {
      question: "How long can a Ball Python commonly live with proper care?",
      options: [
        "5–10 years",
        "10–15 years",
        "20–30 years or longer",
        "Over 100 years",
      ],
      answer: 2,
      explanation:
        "With proper husbandry, Ball Pythons commonly live 20–30 years, and some individuals have exceeded 40 years in captivity.",
    },

    {
      question: "What is generally recommended for feeding captive Ball Pythons?",
      options: [
        "Live insects",
        "Fresh vegetables",
        "Frozen/thawed rodents",
        "Commercial reptile pellets",
      ],
      answer: 2,
      explanation:
        "Frozen/thawed rodents are generally the safest and most humane feeding option for captive Ball Pythons.",
    },

    {
      question: "Before bringing a Ball Python home, you should...",
      options: [
        "Prepare the enclosure completely",
        "Buy the snake first",
        "Wait until after the first feeding",
        "Choose decorations before heating equipment",
      ],
      answer: 0,
      explanation:
        "The enclosure should be fully assembled, heated, and tested before introducing your Ball Python.",
    },

    {
      question: "Which statement best describes responsible ownership?",
      options: [
        "Buying the snake first and learning later",
        "Researching and preparing before making the commitment",
        "Purchasing the rarest morph available",
        "Only focusing on the purchase price",
      ],
      answer: 1,
      explanation:
        "Responsible ownership starts with education and preparation before acquiring any reptile.",
    },
  ],

  references: [
    {
      label: "ScalesWiki Ball Python Care Guide",
      href: "/species/ball-python",
    },
  ],
};
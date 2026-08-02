import type { LessonExtended } from "@/app/academy/types/course";

export const lesson01: LessonExtended = {
  number: 1,

  title: "Introduction",

  description:
    "Welcome to Ball Python 101 and learn what you'll master throughout this Academy course.",

  duration: "8 min",

  difficulty: "Beginner",

  guideHref: "/species/ball-python#introduction",

  objectives: [
    "Understand the purpose of the Academy.",
    "Learn what responsible Ball Python ownership involves.",
    "Know what you'll learn throughout this course.",
  ],

  keyTakeaways: [
    "Education should always come before ownership.",
    "Proper preparation prevents many common husbandry mistakes.",
    "This Academy teaches responsible, evidence-based reptile care.",
  ],

  quizQuestions: [
    {
      question: "What is the primary purpose of Ball Python 101?",
      options: [
        "Teach responsible Ball Python husbandry",
        "Teach reptile breeding",
        "Sell reptile equipment",
        "Identify venomous snakes",
      ],
      answer: 0,
      explanation:
        "The Academy is designed to teach responsible Ball Python care through structured lessons.",
    },

    {
      question:
        "Before bringing home a Ball Python, what should you do first?",
      options: [
        "Buy decorations",
        "Prepare the enclosure",
        "Handle several snakes",
        "Purchase frozen rodents",
      ],
      answer: 1,
      explanation:
        "Your enclosure should be completely built, heated, and tested before bringing your Ball Python home.",
    },

    {
      question: "Successful reptile keeping begins with...",
      options: [
        "Buying expensive equipment",
        "Education and preparation",
        "Owning multiple reptiles",
        "Daily handling",
      ],
      answer: 1,
      explanation:
        "Education and preparation are the foundation of responsible reptile keeping.",
    },
  ],

  references: [
    {
      label: "ScalesWiki Ball Python Care Guide",
      href: "/species/ball-python",
    },
  ],
};
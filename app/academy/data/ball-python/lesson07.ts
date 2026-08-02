import type { LessonExtended } from "@/app/academy/types/course";

export const lesson07: LessonExtended = {
  number: 7,

  title: "Water",

  description:
    "Learn why clean, fresh water is essential for hydration, healthy shedding, and the overall well-being of your Ball Python.",

  duration: "8 min",

  difficulty: "Beginner",

  guideHref: "/species/ball-python#water",

  objectives: [
    "Understand the importance of providing fresh water every day.",
    "Choose an appropriate water bowl for your Ball Python.",
    "Recognize how hydration supports overall health.",
  ],

  keyTakeaways: [
    "Fresh, clean water should always be available.",
    "Water bowls should be cleaned and refilled regularly.",
    "Proper hydration supports healthy shedding and normal body functions.",
  ],

  quizQuestions: [
    {
      question: "How often should fresh water be available to your Ball Python?",
      options: [
        "Only after feeding",
        "Only during shedding",
        "At all times",
        "Once each week",
      ],
      answer: 2,
      explanation:
        "Ball Pythons should always have access to clean, fresh drinking water.",
    },

    {
      question: "Why should the water bowl be cleaned regularly?",
      options: [
        "To improve enclosure decorations",
        "To reduce bacterial growth and keep water clean",
        "To increase enclosure temperature",
        "To improve lighting",
      ],
      answer: 1,
      explanation:
        "Regular cleaning helps prevent bacteria and keeps drinking water safe.",
    },

    {
      question: "Proper hydration helps support...",
      options: [
        "Healthy shedding",
        "Changing color",
        "Faster growth than normal",
        "Brighter enclosure lighting",
      ],
      answer: 0,
      explanation:
        "Adequate hydration is an important part of healthy shedding and overall health.",
    },

    {
      question: "Which type of water bowl is generally recommended?",
      options: [
        "A shallow disposable plate",
        "A sturdy bowl that cannot easily tip over",
        "A paper towel",
        "A bowl filled with substrate",
      ],
      answer: 1,
      explanation:
        "A stable, easy-to-clean water bowl helps provide reliable access to fresh water.",
    },
  ],

  references: [
    {
      label: "ScalesWiki Ball Python Care Guide",
      href: "/species/ball-python",
    },
  ],
};
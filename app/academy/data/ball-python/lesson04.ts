import type { LessonExtended } from "@/app/academy/types/course";

export const lesson04: LessonExtended = {
  number: 4,

  title: "Preparing Before You Buy",

  description:
    "Learn how to prepare your home, enclosure, equipment, and budget before bringing your Ball Python home.",

  duration: "12 min",

  difficulty: "Beginner",

  guideHref: "/species/ball-python#preparing-before-you-buy",

  objectives: [
    "Prepare a complete enclosure before purchasing a Ball Python.",
    "Understand the equipment needed for long-term success.",
    "Develop a realistic budget and care plan before bringing your snake home.",
  ],

  keyTakeaways: [
    "Never buy a Ball Python before its enclosure is fully prepared.",
    "Quality equipment saves money and improves your snake's health.",
    "Preparation is one of the most important parts of responsible reptile ownership.",
  ],

  quizQuestions: [
    {
      question:
        "When should your Ball Python's enclosure be completely set up?",
      options: [
        "After bringing the snake home",
        "The day after purchase",
        "Before purchasing the snake",
        "After the first feeding",
      ],
      answer: 2,
      explanation:
        "Your enclosure should be fully assembled, heated, and tested before your Ball Python arrives.",
    },

    {
      question:
        "Which piece of equipment is essential for safely controlling heat?",
      options: [
        "A thermostat",
        "A larger water bowl",
        "A climbing branch",
        "A spray bottle",
      ],
      answer: 0,
      explanation:
        "A thermostat regulates heating equipment and helps prevent dangerous overheating.",
    },

    {
      question: "Before bringing home a Ball Python, you should...",
      options: [
        "Research a qualified reptile veterinarian",
        "Wait until the snake becomes sick",
        "Only buy food",
        "Purchase decorations first",
      ],
      answer: 0,
      explanation:
        "Finding an experienced reptile veterinarian before you need one is part of responsible reptile ownership.",
    },

    {
      question:
        "Why is it important to test the enclosure before your snake arrives?",
      options: [
        "To make sure temperatures and humidity remain stable",
        "To make the enclosure look nicer",
        "To encourage shedding",
        "To reduce feeding costs",
      ],
      answer: 0,
      explanation:
        "Testing allows you to identify and correct husbandry problems before introducing your Ball Python.",
    },
  ],

  references: [
    {
      label: "ScalesWiki Ball Python Care Guide",
      href: "/species/ball-python",
    },
  ],
};
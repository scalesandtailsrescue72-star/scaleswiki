import type { LessonExtended } from "@/app/academy/types/course";

export const lesson05: LessonExtended = {
  number: 5,

  title: "Heating",

  description:
    "Learn how to create a safe thermal gradient, choose appropriate heating equipment, and maintain healthy temperatures for your Ball Python.",

  duration: "12 min",

  difficulty: "Beginner",

  guideHref: "/species/ball-python#heating",

  objectives: [
    "Understand why Ball Pythons require external heat.",
    "Create a proper thermal gradient within the enclosure.",
    "Learn how thermostats and thermometers work together to keep your snake safe.",
  ],

  keyTakeaways: [
    "Ball Pythons regulate their body temperature by moving between warm and cool areas.",
    "Every heat source should be controlled by a quality thermostat.",
    "Accurate temperature monitoring is essential for long-term health.",
  ],

  quizQuestions: [
    {
      question: "Why do Ball Pythons require an external heat source?",
      options: [
        "They produce their own body heat.",
        "They are ectothermic and rely on environmental heat.",
        "Heat is only needed during shedding.",
        "Only baby Ball Pythons need heat.",
      ],
      answer: 1,
      explanation:
        "Ball Pythons are ectothermic reptiles that depend on external heat to regulate their body temperature.",
    },

    {
      question: "What is the purpose of a thermal gradient?",
      options: [
        "To make the enclosure look more natural.",
        "To allow the snake to choose the temperature it needs.",
        "To increase humidity.",
        "To reduce cleaning.",
      ],
      answer: 1,
      explanation:
        "A thermal gradient allows a Ball Python to move between warmer and cooler areas to regulate its body temperature.",
    },

    {
      question: "Which piece of equipment should control every heat source?",
      options: [
        "A hygrometer",
        "A thermostat",
        "A timer",
        "A UVB bulb",
      ],
      answer: 1,
      explanation:
        "Every heating device should be connected to a thermostat to help maintain safe, consistent temperatures.",
    },

    {
      question: "What is one reliable way to monitor enclosure temperatures?",
      options: [
        "Stick-on dial thermometer",
        "Guess by touching the enclosure",
        "Digital thermometer",
        "Watching the snake's behavior only",
      ],
      answer: 2,
      explanation:
        "Digital thermometers provide much more accurate temperature readings than stick-on dial thermometers.",
    },
  ],

  references: [
    {
      label: "ScalesWiki Ball Python Care Guide",
      href: "/species/ball-python",
    },
  ],
};
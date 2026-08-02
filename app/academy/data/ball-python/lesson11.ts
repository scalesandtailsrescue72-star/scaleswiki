import type { LessonExtended } from "@/app/academy/types/course";

export const lesson11: LessonExtended = {
  number: 11,

  title: "Common Mistakes",

  description:
    "Learn the most common husbandry mistakes made by new Ball Python keepers and how to avoid them.",

  duration: "10 min",

  difficulty: "Beginner",

  guideHref: "/species/ball-python#common-mistakes",

  objectives: [
    "Recognize common husbandry mistakes.",
    "Understand how proper preparation prevents problems.",
    "Apply best practices to improve long-term reptile care.",
  ],

  keyTakeaways: [
    "Most health problems begin with husbandry mistakes.",
    "Preparation and observation prevent many common issues.",
    "Learning from others' mistakes makes you a better keeper.",
  ],

  quizQuestions: [
    {
      question: "What is one of the most common mistakes new keepers make?",
      options: [
        "Buying the snake before preparing the enclosure",
        "Using a thermostat",
        "Providing fresh water",
        "Monitoring temperatures",
      ],
      answer: 0,
      explanation:
        "Your enclosure should always be completely prepared before bringing a Ball Python home.",
    },

    {
      question: "Which practice helps prevent many husbandry problems?",
      options: [
        "Ignoring humidity",
        "Regularly monitoring temperatures and humidity",
        "Feeding oversized prey",
        "Handling immediately after feeding",
      ],
      answer: 1,
      explanation:
        "Routine monitoring helps identify problems before they affect your Ball Python.",
    },

    {
      question: "Why should you avoid handling immediately after feeding?",
      options: [
        "It increases shedding.",
        "It may increase stress and the risk of regurgitation.",
        "It improves digestion.",
        "It makes the snake friendlier.",
      ],
      answer: 1,
      explanation:
        "Allowing time for digestion helps reduce stress and lowers the chance of regurgitation.",
    },

    {
      question: "The best way to avoid common mistakes is to...",
      options: [
        "Research and prepare before problems occur.",
        "Wait until something goes wrong.",
        "Only ask for advice online.",
        "Change husbandry frequently.",
      ],
      answer: 0,
      explanation:
        "Education, planning, and consistent husbandry are the best ways to prevent common mistakes.",
    },
  ],

  references: [
    {
      label: "ScalesWiki Ball Python Care Guide",
      href: "/species/ball-python",
    },
  ],
};
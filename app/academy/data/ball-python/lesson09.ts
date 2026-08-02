import type { LessonExtended } from "@/app/academy/types/course";

export const lesson09: LessonExtended = {
  number: 9,

  title: "Handling",

  description:
    "Learn how to safely handle your Ball Python while minimizing stress and building trust over time.",

  duration: "10 min",

  difficulty: "Beginner",

  guideHref: "/species/ball-python#handling",

  objectives: [
    "Understand when handling is appropriate.",
    "Learn safe handling techniques.",
    "Recognize signs that your Ball Python is stressed.",
  ],

  keyTakeaways: [
    "Handle your Ball Python calmly and confidently.",
    "Avoid handling immediately after feeding or during shedding.",
    "Always support the snake's body and allow it to move naturally.",
  ],

  quizQuestions: [
    {
      question: "When should you generally avoid handling your Ball Python?",
      options: [
        "Immediately after feeding",
        "During routine enclosure cleaning",
        "When the snake is calmly exploring",
        "Before changing the water",
      ],
      answer: 0,
      explanation:
        "Handling immediately after feeding can increase stress and the risk of regurgitation.",
    },

    {
      question: "How should you support a Ball Python while handling it?",
      options: [
        "Hold only the tail",
        "Support the body with both hands",
        "Grip tightly behind the head",
        "Allow it to hang freely",
      ],
      answer: 1,
      explanation:
        "Supporting the snake's body helps it feel secure and reduces stress.",
    },

    {
      question: "Which behavior may indicate that a Ball Python is stressed?",
      options: [
        "Calm exploration",
        "Rapid defensive movements and repeated attempts to escape",
        "Tongue flicking while exploring",
        "Resting quietly in a hide",
      ],
      answer: 1,
      explanation:
        "Repeated defensive behavior or frantic escape attempts may indicate the snake is stressed.",
    },

    {
      question: "What is the best approach when handling a Ball Python?",
      options: [
        "Move slowly and confidently",
        "Make quick movements",
        "Handle for several hours every day",
        "Wake the snake suddenly",
      ],
      answer: 0,
      explanation:
        "Slow, calm movements help your Ball Python remain relaxed during handling.",
    },
  ],

  references: [
    {
      label: "ScalesWiki Ball Python Care Guide",
      href: "/species/ball-python",
    },
  ],
};
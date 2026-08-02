import type { LessonExtended } from "@/app/academy/types/course";

export const lesson08: LessonExtended = {
  number: 8,

  title: "Feeding",

  description:
    "Learn how to safely feed your Ball Python, choose appropriate prey items, and establish a healthy feeding routine.",

  duration: "12 min",

  difficulty: "Beginner",

  guideHref: "/species/ball-python#feeding",

  objectives: [
    "Understand appropriate prey selection.",
    "Learn safe feeding practices.",
    "Recognize normal feeding behavior in Ball Pythons.",
  ],

  keyTakeaways: [
    "Frozen/thawed rodents are the recommended prey for captive Ball Pythons.",
    "Feed prey that is appropriately sized for the snake.",
    "Allow your Ball Python time to digest after feeding before handling.",
  ],

  quizQuestions: [
    {
      question: "What is generally the safest prey option for captive Ball Pythons?",
      options: [
        "Live rodents",
        "Frozen/thawed rodents",
        "Insects",
        "Raw chicken",
      ],
      answer: 1,
      explanation:
        "Frozen/thawed rodents reduce the risk of injury to the snake while providing complete nutrition.",
    },

    {
      question: "How should prey size generally compare to the snake?",
      options: [
        "Much larger than the snake",
        "Approximately the same width as the snake's widest body section",
        "As small as possible",
        "The snake's full body length",
      ],
      answer: 1,
      explanation:
        "Appropriately sized prey supports healthy feeding and digestion.",
    },

    {
      question: "What should you generally avoid immediately after feeding?",
      options: [
        "Providing fresh water",
        "Handling the snake",
        "Turning enclosure lights off",
        "Monitoring temperatures",
      ],
      answer: 1,
      explanation:
        "Handling too soon after feeding may increase stress and the risk of regurgitation.",
    },

    {
      question: "Why do some Ball Pythons occasionally refuse food?",
      options: [
        "They always have a serious illness",
        "Seasonal behavior, husbandry, or other normal factors can influence feeding",
        "They no longer need to eat",
        "They only eat during shedding",
      ],
      answer: 1,
      explanation:
        "Temporary food refusals can occur for several reasons. Husbandry should always be reviewed before assuming illness.",
    },
  ],

  references: [
    {
      label: "ScalesWiki Ball Python Care Guide",
      href: "/species/ball-python",
    },
  ],
};
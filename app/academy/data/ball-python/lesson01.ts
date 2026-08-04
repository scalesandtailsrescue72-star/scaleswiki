import type { LessonExtended } from "@/app/academy/types/course";

export const lesson01: LessonExtended = {
  number: 1,

  title: "Introduction",

  description:
    "Welcome to Ball Python 101 and discover how this Academy prepares you for responsible, evidence-informed ball python husbandry.",

  duration: "10 min",

  difficulty: "Beginner",

  guideHref: "/species/ball-python#introduction",

  objectives: [
    "Understand the purpose of Ball Python 101.",
    "Recognize who this course is designed for.",
    "Explain the importance of responsible reptile ownership.",
    "Understand the philosophy behind ScalesWiki Academy.",
    "Know how the certification program works.",
  ],

  keyTakeaways: [
    "Education should always come before ownership.",
    "Responsible husbandry begins with preparation and continual learning.",
    "Animal welfare is the foundation of every lesson in this Academy.",
    "Veterinary care should always be sought when medical concerns arise.",
    "Certification demonstrates successful completion of the course, not professional licensing.",
  ],

  quizQuestions: [
    {
      question: "What is the primary goal of Ball Python 101?",
      options: [
        "Teach responsible Ball Python husbandry",
        "Teach breeding techniques",
        "Sell reptile equipment",
        "Identify venomous snakes",
      ],
      answer: 0,
      explanation:
        "Ball Python 101 is designed to provide a structured education in responsible Ball Python husbandry.",
    },

    {
      question: "Who is this course designed for?",
      options: [
        "Only veterinarians",
        "Only experienced breeders",
        "New keepers, experienced keepers, educators, and rescue volunteers",
        "Only reptile rescue organizations",
      ],
      answer: 2,
      explanation:
        "The course welcomes beginners while also providing a structured review for experienced keepers and educators.",
    },

    {
      question: "According to this course, successful reptile keeping begins with:",
      options: [
        "Buying expensive equipment",
        "Education and preparation",
        "Daily handling",
        "Keeping multiple reptiles",
      ],
      answer: 1,
      explanation:
        "Responsible reptile keeping starts with education and preparation before acquiring an animal.",
    },

    {
      question: "Before bringing home a Ball Python, what should be completed first?",
      options: [
        "Purchase decorations",
        "Prepare, heat, and test the enclosure",
        "Buy frozen rodents",
        "Introduce the snake to other reptiles",
      ],
      answer: 1,
      explanation:
        "The enclosure should already be functioning correctly before the animal arrives.",
    },

    {
      question: "What is the purpose of the lesson quizzes?",
      options: [
        "Replace the Final Certification Exam",
        "Help reinforce learning and prepare students for certification",
        "Determine breeding eligibility",
        "Measure enclosure costs",
      ],
      answer: 1,
      explanation:
        "Lesson quizzes reinforce important concepts and help prepare students for the final certification exam.",
    },

    {
      question: "If your Ball Python becomes ill, what does the course recommend?",
      options: [
        "Ask on social media",
        "Wait several weeks",
        "Consult a qualified reptile veterinarian",
        "Use home remedies first",
      ],
      answer: 2,
      explanation:
        "Veterinary care should always take priority when medical attention is needed.",
    },

    {
      question: "The recommendations in this Academy are based on:",
      options: [
        "Internet opinions",
        "Evidence-informed husbandry and responsible animal welfare",
        "Breeding advertisements",
        "Competition standards",
      ],
      answer: 1,
      explanation:
        "The Academy emphasizes evidence-informed husbandry and animal welfare.",
    },

    {
      question: "What does earning a ScalesWiki Certificate represent?",
      options: [
        "Professional veterinary certification",
        "A breeding license",
        "Successful completion of the educational program",
        "Government licensing",
      ],
      answer: 2,
      explanation:
        "The certificate recognizes successful completion of the course and final exam. It is not a professional credential.",
    },

    {
      question: "What should students focus on while completing this course?",
      options: [
        "Memorizing answers only",
        "Understanding and applying the concepts",
        "Finishing as quickly as possible",
        "Skipping familiar topics",
      ],
      answer: 1,
      explanation:
        "Understanding the concepts is more valuable than simply memorizing facts.",
    },

    {
      question: "What is the overall philosophy of ScalesWiki Academy?",
      options: [
        "Collect as many reptiles as possible",
        "Responsible reptile keeping through education, preparation, and lifelong learning",
        "Focus only on enclosure appearance",
        "Teach advanced breeding first",
      ],
      answer: 1,
      explanation:
        "The Academy promotes responsible reptile keeping built on education, preparation, and continual learning.",
    },
  ],

  references: [
    {
      label: "ScalesWiki Ball Python Handbook",
      href: "/species/ball-python",
    },
  ],
};
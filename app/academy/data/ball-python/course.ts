import type { Course } from "@/app/academy/types/course";

export const ballPythonCourse: Course = {
  slug: "ball-python",
  title: "Ball Python 101",
  level: "Beginner",
  status: "Available",
  description:
    "Master Ball Python husbandry with structured lessons covering enclosure design, heating, humidity, feeding, handling, health, and more.",
  lessonCardDescription:
    "Learn this topic through the Ball Python Keeper's Academy.",
  objectives: [
    "Understand Ball Python natural history",
    "Build a proper enclosure",
    "Maintain correct temperatures",
    "Maintain proper humidity",
    "Choose safe lighting",
    "Select appropriate substrate",
    "Provide fresh water",
    "Feed safely",
    "Handle responsibly",
    "Recognize common health concerns",
  ],
  stats: {
    lessons: 14,
    estimatedTime: "2–3 Hours",
    certificate: true,
    quiz: false,
  },
  didYouKnow:
    "Ball Pythons earned their common name because they frequently curl themselves into a tight defensive ball when frightened instead of striking.",
  keeperTip:
    "Never purchase a Ball Python simply because it looks beautiful. Always learn the care requirements first and prepare the enclosure before bringing the snake home.",
  keyTakeaways: [
    "Ball Pythons are generally calm snakes.",
    "Proper husbandry is essential for long-term health.",
    "Preparation before purchase prevents many common problems.",
  ],
  quizQuestions: [
    {
      question: "Ball Pythons are generally known for being...",
      options: ["Aggressive", "Highly venomous", "Calm and manageable", "Fast-moving"],
      answer: 2,
      explanation:
        "Ball Pythons are widely known for their calm temperament when properly cared for.",
    },
    {
      question: "Which of the following is part of proper husbandry?",
      options: [
        "Ignoring humidity",
        "Correct heating and enclosure setup",
        "Keeping multiple adults together",
        "Feeding once every few months",
      ],
      answer: 1,
      explanation:
        "Correct heating, humidity, enclosure design, and nutrition are the foundation of proper husbandry.",
    },
    {
      question: "Why are they called Ball Pythons?",
      options: [
        "They roll downhill.",
        "They curl into a defensive ball.",
        "They change colors.",
        "They live underground.",
      ],
      answer: 1,
      explanation: "When frightened, Ball Pythons commonly curl into a tight ball to protect themselves.",
    },
  ],

  lessons: [
    {
      number: 1,
      title: "Introduction",
      description:
        "Get an overview of the course and learn what Ball Python keeping involves.",
      duration: "8 min",
      difficulty: "Beginner",
      guideHref: "/species/ball-python#introduction",
    },
    {
      number: 2,
      title: "Natural History",
      description:
        "Understand Ball Python biology, native habitat, and behavior before building their environment.",
      duration: "10 min",
      difficulty: "Beginner",
      guideHref: "/species/ball-python#natural-history",
    },
    {
      number: 3,
      title: "Is a Ball Python Right for You?",
      description:
        "Learn what to consider before adopting a Ball Python, including commitment and lifestyle.",
      duration: "10 min",
      difficulty: "Beginner",
      guideHref: "/species/ball-python#is-it-right-for-you",
    },
    {
      number: 4,
      title: "Enclosure",
      description:
        "Discover how to design a safe, comfortable enclosure for a healthy Ball Python.",
      duration: "15 min",
      difficulty: "Beginner",
      guideHref: "/species/ball-python#enclosure",
    },
    {
      number: 5,
      title: "Heating",
      description:
        "Learn the correct temperature gradients and heating elements Ball Pythons need.",
      duration: "12 min",
      difficulty: "Beginner",
      guideHref: "/species/ball-python#heating",
    },
    {
      number: 6,
      title: "Humidity",
      description:
        "Understand how to maintain humidity levels to support shedding and respiratory health.",
      duration: "10 min",
      difficulty: "Beginner",
      guideHref: "/species/ball-python#humidity",
    },
    {
      number: 7,
      title: "Lighting",
      description:
        "Explore lighting requirements and how to create a proper day/night cycle.",
      duration: "10 min",
      difficulty: "Beginner",
      guideHref: "/species/ball-python#lighting",
    },
    {
      number: 8,
      title: "Substrate",
      description:
        "Choose safe bedding options and learn how substrate affects humidity and comfort.",
      duration: "10 min",
      difficulty: "Beginner",
      guideHref: "/species/ball-python#substrate",
    },
    {
      number: 9,
      title: "Water",
      description:
        "Learn how to provide clean water and maintain proper hydration for your snake.",
      duration: "6 min",
      difficulty: "Beginner",
      guideHref: "/species/ball-python#water",
    },
    {
      number: 10,
      title: "Feeding",
      description:
        "Master safe feeding practices and how to keep your Ball Python on a healthy schedule.",
      duration: "15 min",
      difficulty: "Beginner",
      guideHref: "/species/ball-python#feeding",
    },
    {
      number: 11,
      title: "Handling",
      description:
        "Learn how to handle your Ball Python safely and build trust over time.",
      duration: "8 min",
      difficulty: "Beginner",
      guideHref: "/species/ball-python#handling",
    },
    {
      number: 12,
      title: "Health",
      description:
        "Recognize common health concerns and know when to seek veterinary care.",
      duration: "15 min",
      difficulty: "Intermediate",
      guideHref: "/species/ball-python#health",
    },
    {
      number: 13,
      title: "Common Mistakes",
      description:
        "Avoid frequent beginner errors that can stress Ball Pythons and harm their health.",
      duration: "10 min",
      difficulty: "Beginner",
      guideHref: "/species/ball-python#common-mistakes",
    },
    {
      number: 14,
      title: "FAQ",
      description:
        "Review frequently asked questions about Ball Python care and common owner concerns.",
      duration: "8 min",
      difficulty: "Beginner",
      guideHref: "/species/ball-python#faq",
    },
  ],
};
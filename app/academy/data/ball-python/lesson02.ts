import type { LessonExtended } from "@/app/academy/types/course";

export const lesson02: LessonExtended = {
  number: 2,

  title: "Natural History",

  description:
    "Discover how the natural history of Ball Pythons explains their behavior, environmental needs, and the husbandry practices used in captivity.",

  duration: "12 min",

  difficulty: "Beginner",

  guideHref: "/species/ball-python#natural-history",

  objectives: [
    "Identify the native geographic range of Ball Pythons.",
    "Describe the habitats where Ball Pythons naturally occur.",
    "Explain how natural history influences captive husbandry.",
    "Recognize common natural behaviors of Ball Pythons.",
    "Understand why responsible care begins with understanding the species in the wild.",
  ],

  keyTakeaways: [
    "Ball Pythons evolved in western and central Africa.",
    "Natural history explains many captive care recommendations.",
    "Ball Pythons spend much of their time hidden in secure shelters.",
    "Understanding natural behavior leads to better husbandry decisions.",
    "Successful keepers understand both what to do and why they are doing it.",
  ],

  quizQuestions: [
    {
      question: "Ball Pythons are native to which continent?",
      options: [
        "South America",
        "Africa",
        "Asia",
        "Australia",
      ],
      answer: 1,
      explanation:
        "Ball Pythons naturally occur throughout western and central Africa.",
    },

    {
      question: "Why is studying natural history important for reptile keepers?",
      options: [
        "It helps recreate conditions that support natural behavior.",
        "It predicts future color mutations.",
        "It replaces veterinary care.",
        "It guarantees perfect husbandry.",
      ],
      answer: 0,
      explanation:
        "Natural history helps us understand why Ball Pythons require specific temperatures, humidity, hides, and husbandry practices.",
    },

    {
      question: "Which habitat best describes where Ball Pythons naturally live?",
      options: [
        "Dry deserts",
        "High mountain forests",
        "Grasslands, savannas, woodland edges, and agricultural areas",
        "Dense rainforest canopy",
      ],
      answer: 2,
      explanation:
        "Ball Pythons are commonly found in savannas, grasslands, woodland edges, and agricultural areas where shelter is readily available.",
    },

    {
      question: "Where do Ball Pythons spend much of their time in the wild?",
      options: [
        "High in trees",
        "Underground in burrows and secure hiding places",
        "Swimming in rivers",
        "Open grasslands without cover",
      ],
      answer: 1,
      explanation:
        "Ball Pythons commonly shelter in abandoned rodent burrows, termite mounds, and other protected hiding places.",
    },

    {
      question: "Ball Pythons are primarily active:",
      options: [
        "During the hottest part of the day",
        "Only during the rainy season",
        "At dawn, dusk, and during the night",
        "Only in the morning",
      ],
      answer: 2,
      explanation:
        "Ball Pythons are primarily crepuscular and nocturnal animals.",
    },

    {
      question: "What type of predator is a Ball Python?",
      options: [
        "Pursuit predator",
        "Ambush predator",
        "Scavenger",
        "Herbivore",
      ],
      answer: 1,
      explanation:
        "Ball Pythons typically wait patiently for prey to come within striking distance rather than actively chasing it.",
    },

    {
      question: "Why do Ball Pythons curl into a tight ball when frightened?",
      options: [
        "To stay warm",
        "As a defensive behavior",
        "To prepare for shedding",
        "To attract prey",
      ],
      answer: 1,
      explanation:
        "Curling into a defensive ball protects the head and is the behavior that gave the species its common name.",
    },

    {
      question: "Why are secure hides important in captivity?",
      options: [
        "They imitate natural shelter and help reduce stress.",
        "They increase feeding frequency.",
        "They eliminate the need for temperature control.",
        "They improve coloration.",
      ],
      answer: 0,
      explanation:
        "Providing secure hides reflects the Ball Python's natural tendency to spend much of its time sheltered.",
    },

    {
      question: "Which statement best reflects responsible husbandry?",
      options: [
        "Copy enclosure photos from the internet.",
        "Understand how the species lives in nature before making husbandry decisions.",
        "Only focus on enclosure decoration.",
        "Ignore natural behaviors because captive snakes are different.",
      ],
      answer: 1,
      explanation:
        "Understanding the natural biology of Ball Pythons helps keepers make informed husbandry decisions.",
    },

    {
      question: "The most successful Ball Python keepers understand:",
      options: [
        "Only temperature requirements",
        "Only feeding schedules",
        "Both what to do and why those practices benefit the animal",
        "Only the scientific name",
      ],
      answer: 2,
      explanation:
        "Responsible husbandry comes from understanding the biological reasons behind recommended care practices.",
    },
  ],

  references: [
    {
      label: "ScalesWiki Ball Python Handbook",
      href: "/species/ball-python",
    },
  ],
};
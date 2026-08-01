import type { LessonExtended } from "@/app/academy/types/course";

export const ballPythonLessons: LessonExtended[] = [
  {
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
  },

  {
    number: 2,
    title: "Natural History",
    description:
      "Explore where Ball Pythons live in the wild and discover how their natural environment shapes proper captive care.",
    duration: "10 min",
    difficulty: "Beginner",
    guideHref: "/species/ball-python#natural-history",

    objectives: [
      "Identify the native range of Ball Pythons.",
      "Describe the habitats where they naturally occur.",
      "Understand how natural history influences captive husbandry.",
    ],

    keyTakeaways: [
      "Ball Pythons are native to western and central Africa.",
      "Their natural habitat explains their captive care requirements.",
      "Successful husbandry begins with understanding the species in the wild.",
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
        question: "Why is learning natural history important?",
        options: [
          "It helps recreate natural living conditions.",
          "It predicts snake coloration.",
          "It replaces veterinary care.",
          "It determines the snake's personality.",
        ],
        answer: 0,
        explanation:
          "Understanding natural habitats helps us provide appropriate captive care.",
      },
      {
        question: "Ball Pythons are generally most active...",
        options: [
          "During the hottest part of the day.",
          "Mostly at night and around dawn or dusk.",
          "Only during winter.",
          "Only after rain.",
        ],
        answer: 1,
        explanation:
          "Ball Pythons are primarily nocturnal and crepuscular animals.",
      },
      {
        question: "Which habitat best describes wild Ball Pythons?",
        options: [
          "Dry desert",
          "Dense rainforest canopy",
          "Grasslands, savannas, and forest edges",
          "Mountain peaks",
        ],
        answer: 2,
        explanation:
          "Ball Pythons naturally inhabit grasslands, savannas, agricultural areas, and forest edges.",
      },
    ],

    references: [
      {
        label: "ScalesWiki Ball Python Care Guide",
        href: "/species/ball-python",
      },
    ],
  },
  {
    number: 3,
    title: "Is a Ball Python Right for You?",
    description:
      "Learn whether a Ball Python is the right reptile for your lifestyle, experience level, and long-term commitment.",

    duration: "10 min",

    difficulty: "Beginner",

    guideHref: "/species/ball-python#is-it-right-for-you",

    objectives: [
      "Understand the long-term commitment of owning a Ball Python.",
      "Recognize the financial and time responsibilities of ownership.",
      "Decide whether a Ball Python is the right reptile for your lifestyle.",
    ],

    keyTakeaways: [
      "Ball Pythons can live 20–30 years or longer.",
      "Proper husbandry requires planning, patience, and ongoing commitment.",
      "Responsible reptile ownership begins before bringing the animal home.",
    ],

    quizQuestions: [
      {
        question: "How long can a Ball Python commonly live with proper care?",
        options: [
          "5–10 years",
          "10–15 years",
          "20–30 years or longer",
          "Over 100 years",
        ],
        answer: 2,
        explanation:
          "With proper husbandry, Ball Pythons commonly live 20–30 years, and some have exceeded 40 years in captivity.",
      },

      {
        question: "What is generally recommended for feeding captive Ball Pythons?",
        options: [
          "Live insects",
          "Fresh vegetables",
          "Frozen/thawed rodents",
          "Commercial reptile pellets",
        ],
        answer: 2,
        explanation:
          "Frozen/thawed rodents are generally the safest and most humane feeding option for captive Ball Pythons.",
      },

      {
        question: "Before bringing a Ball Python home, you should...",
        options: [
          "Prepare the enclosure completely",
          "Buy the snake first",
          "Wait until after the first feeding",
          "Choose decorations before heating equipment",
        ],
        answer: 0,
        explanation:
          "The enclosure should be fully assembled, heated, and tested before introducing your Ball Python.",
      },

      {
        question: "Which statement best describes responsible ownership?",
        options: [
          "Buying the snake first and learning later",
          "Researching and preparing before making the commitment",
          "Purchasing the rarest morph available",
          "Only focusing on the purchase price",
        ],
        answer: 1,
        explanation:
          "Responsible ownership starts with education and preparation before acquiring any reptile.",
      },
    ],

    references: [
      {
        label: "ScalesWiki Ball Python Care Guide",
        href: "/species/ball-python",
      },
    ],
  },  {
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
      "Develop a realistic budget and care plan before bringing a snake home.",
    ],

    keyTakeaways: [
      "Never buy a Ball Python before its enclosure is fully prepared.",
      "Quality equipment saves money and improves your snake's health.",
      "Preparation is one of the most important parts of responsible reptile ownership.",
    ],

    quizQuestions: [
      {
        question: "When should your Ball Python's enclosure be completely set up?",
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
        question: "Which piece of equipment is essential for safely controlling heat?",
        options: [
          "A thermostat",
          "A larger water bowl",
          "A climbing branch",
          "A spray bottle",
        ],
        answer: 0,
        explanation:
          "A thermostat helps regulate heat sources and prevents dangerous overheating.",
      },

      {
        question: "Before bringing home a Ball Python, you should...",
        options: [
          "Research a qualified reptile veterinarian.",
          "Wait until the snake becomes sick.",
          "Only buy food.",
          "Purchase decorations first.",
        ],
        answer: 0,
        explanation:
          "Finding an experienced reptile veterinarian before you need one is part of responsible ownership.",
      },

      {
        question: "Why is it important to test the enclosure before your snake arrives?",
        options: [
          "To make sure temperatures and humidity remain stable.",
          "To make the enclosure look nicer.",
          "To encourage shedding.",
          "To reduce feeding costs.",
        ],
        answer: 0,
        explanation:
          "Testing allows you to correct heating and humidity issues before your Ball Python is introduced to the enclosure.",
      },
    ],

    references: [
      {
        label: "ScalesWiki Ball Python Care Guide",
        href: "/species/ball-python",
      },
    ],
  },];
import type { LessonExtended } from "@/app/academy/types/course";

export const lesson08: LessonExtended = {
  number: 8,

  title: "Heating & Temperature",

  description:
    "Learn how to create a safe thermal gradient, choose appropriate heating equipment, and maintain temperatures that support healthy Ball Python husbandry.",

  duration: "15 min",

  difficulty: "Beginner",

  guideHref: "/species/ball-python#heating-and-temperature",

  objectives: [
    "Understand why Ball Pythons require external heat.",
    "Create an effective thermal gradient.",
    "Learn how thermostats prevent overheating.",
    "Identify safe heating equipment.",
    "Recognize common heating mistakes.",
  ],

  keyTakeaways: [
    "Ball Pythons depend on environmental heat to regulate their body temperature.",
    "A warm side and cool side allow natural thermoregulation.",
    "Every heat source should be controlled by a quality thermostat.",
    "Digital thermometers provide more reliable measurements than dial gauges.",
    "Consistent temperatures support digestion, immune function, and overall health.",
  ],

  quizQuestions: [
    {
      question: "Why do Ball Pythons require external heat?",
      options: [
        "They are ectothermic and depend on environmental temperatures.",
        "They produce too much body heat.",
        "They only need heat during shedding.",
        "Only juvenile Ball Pythons require heat.",
      ],
      answer: 0,
      explanation:
        "Ball Pythons rely on external heat sources to regulate their body temperature.",
    },

    {
      question: "What is a thermal gradient?",
      options: [
        "An enclosure with warm and cool areas.",
        "A humid hide.",
        "A feeding schedule.",
        "A lighting cycle.",
      ],
      answer: 0,
      explanation:
        "A thermal gradient allows the snake to choose the temperature it needs.",
    },

    {
      question: "Which device should control every heat source?",
      options: [
        "A thermostat",
        "A hygrometer",
        "A timer",
        "A UV meter",
      ],
      answer: 0,
      explanation:
        "Thermostats regulate heating equipment and help prevent dangerous overheating.",
    },

    {
      question: "Which tool provides accurate enclosure temperature readings?",
      options: [
        "Digital thermometer",
        "Stick-on dial thermometer",
        "Guessing by touch",
        "Room thermostat",
      ],
      answer: 0,
      explanation:
        "Digital thermometers provide much more reliable readings than stick-on gauges.",
    },

    {
      question: "Why do Ball Pythons move between warm and cool areas?",
      options: [
        "To regulate their body temperature.",
        "To increase humidity.",
        "To improve coloration.",
        "To avoid eating.",
      ],
      answer: 0,
      explanation:
        "Moving between warm and cool zones is how ectothermic reptiles thermoregulate.",
    },

    {
      question: "Which heating device is commonly used in reptile enclosures?",
      options: [
        "Radiant Heat Panel",
        "Household space heater",
        "Electric blanket",
        "Heating pad without a thermostat",
      ],
      answer: 0,
      explanation:
        "Radiant Heat Panels are commonly used in properly designed reptile enclosures.",
    },

    {
      question: "Why is testing temperatures before bringing home your snake important?",
      options: [
        "To ensure stable environmental conditions.",
        "To improve feeding.",
        "To reduce shedding.",
        "To increase humidity.",
      ],
      answer: 0,
      explanation:
        "Testing allows you to correct problems before the animal arrives.",
    },

    {
      question: "Which is a common heating mistake?",
      options: [
        "Using heating equipment without a thermostat.",
        "Monitoring temperatures.",
        "Providing a warm hide.",
        "Using digital thermometers.",
      ],
      answer: 0,
      explanation:
        "Heating equipment without a thermostat can become dangerously hot.",
    },

    {
      question: "What body functions depend on proper temperatures?",
      options: [
        "Digestion and immune function.",
        "Only shedding.",
        "Only movement.",
        "Only feeding.",
      ],
      answer: 0,
      explanation:
        "Proper temperatures support digestion, metabolism, immunity, and overall health.",
    },

    {
      question: "The primary goal of heating is to:",
      options: [
        "Provide a safe environment that allows natural thermoregulation.",
        "Make the enclosure warmer than the room.",
        "Increase humidity.",
        "Keep the snake active all day.",
      ],
      answer: 0,
      explanation:
        "Heating should allow the snake to regulate its own body temperature naturally.",
    },
  ],

  references: [
    {
      label: "ScalesWiki Ball Python Handbook",
      href: "/species/ball-python",
    },
  ],
};
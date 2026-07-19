export const GUIDE = {
  // Publication Information
  title: "Ball Python Care Guide",
  subtitle: "Trusted reptile husbandry reference",

  // Species Information
  species: "Ball Python",
  scientificName: "Python regius",
  commonNames: ["Royal Python"],

  // Publication Metadata
  edition: "First Edition",
  version: "1.0",
  publisher: "ScalesWiki",
  copyright: "© 2026 ScalesWiki. All rights reserved.",
  lastUpdated: "July 2026",

  // Editorial Information
  reviewStatus: "pending" as const,
  reviewer: "",
  reviewDate: "",

  // Intended Audience
  audience: "Beginner Keepers",

  // Quick Facts
  difficulty: "Beginner",
  lifespan: "20–30 Years",
  adultLength: "3–5 ft (0.9–1.5 m)",
  adultWeight: "2–5 lb (0.9–2.3 kg)",
  activity: "Crepuscular / Nocturnal",
  habitat: "Terrestrial",
  climate: "Tropical",
  conservationStatus: "Least Concern",

  // Taxonomy
  taxonomy: {
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Reptilia",
    order: "Squamata",
    family: "Pythonidae",
    genus: "Python",
    species: "Python regius",
  },

  // Publication Links
  citation:
    "ScalesWiki. Ball Python Care Guide. First Edition. Version 1.0. 2026.",

  disclaimer:
    "This guide is intended for educational purposes only and is not a substitute for professional veterinary advice. Always consult a qualified reptile veterinarian regarding medical concerns.",

  mission:
    "ScalesWiki publishes evidence-informed reptile husbandry resources developed to support responsible keepers, educators, rescue organizations, and veterinary professionals.",

  license:
    "All rights reserved. No portion of this publication may be reproduced without written permission except where otherwise permitted.",

  website: "https://scaleswiki.org",
} as const;

export type Guide = typeof GUIDE;
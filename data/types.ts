export interface Species {
  slug: string;
  name: string;
  scientific: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  image: string;
}

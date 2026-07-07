import { ReactNode } from "react";

interface VetPerspectiveProps {
  children: ReactNode;
}

export default function VetPerspective({
  children,
}: VetPerspectiveProps) {
  return (
    <section className="mt-10 rounded-2xl border border-blue-400/40 bg-blue-950/20 p-8">
      <h2 className="text-2xl font-bold text-blue-300">
        🩺 Veterinary Perspective
      </h2>

      <div className="mt-4 text-lg leading-8 text-gray-300">
        {children}
      </div>
    </section>
  );
}
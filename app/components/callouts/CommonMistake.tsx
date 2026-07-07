import { ReactNode } from "react";

interface CommonMistakeProps {
  children: ReactNode;
}

export default function CommonMistake({
  children,
}: CommonMistakeProps) {
  return (
    <section className="mt-10 rounded-2xl border border-red-400/40 bg-red-950/20 p-8">
      <h2 className="text-2xl font-bold text-red-300">
        ⚠ Common Mistake
      </h2>

      <div className="mt-4 text-lg leading-8 text-gray-300">
        {children}
      </div>
    </section>
  );
}
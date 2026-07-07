import { ReactNode } from "react";

interface DecisionChecklistProps {
  title?: string;
  children: ReactNode;
}

export default function DecisionChecklist({
  title = "Decision Checklist",
  children,
}: DecisionChecklistProps) {
  return (
    <section className="mt-12 rounded-2xl border border-blue-400/40 bg-blue-950/20 p-8">
      <h2 className="text-2xl font-bold text-blue-300">
        ✅ {title}
      </h2>

      <div className="mt-6 text-lg leading-8 text-gray-300">
        {children}
      </div>
    </section>
  );
}
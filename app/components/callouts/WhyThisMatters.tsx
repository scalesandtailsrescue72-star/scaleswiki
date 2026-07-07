import { ReactNode } from "react";

interface WhyThisMattersProps {
  children: ReactNode;
}

export default function WhyThisMatters({
  children,
}: WhyThisMattersProps) {
  return (
    <section className="mt-10 rounded-2xl border border-yellow-500/40 bg-yellow-950/20 p-8">
      <h2 className="text-2xl font-bold text-yellow-300">
        Why This Matters
      </h2>

      <div className="mt-4 text-lg leading-8 text-gray-300">
        {children}
      </div>
    </section>
  );
}
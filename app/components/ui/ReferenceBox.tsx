import { ReactNode } from "react";

interface ReferenceBoxProps {
  title?: string;
  children: ReactNode;
}

export function ReferenceBox({
  title = "References",
  children,
}: ReferenceBoxProps) {
  return (
    <section className="mt-16 rounded-3xl border border-white/10 bg-[#101B15] p-8">

      <div className="flex items-center gap-3">

        <span className="text-3xl">
          📚
        </span>

        <h3 className="text-3xl font-bold text-white">
          {title}
        </h3>

      </div>

      <p className="mt-4 text-gray-400">
        The following sources support the information presented in this section.
      </p>

      <div className="mt-8 space-y-4 text-gray-300 leading-8">
        {children}
      </div>

    </section>
  );
}
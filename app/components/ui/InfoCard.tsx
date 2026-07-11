import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  children: ReactNode;
  icon?: string;
}

export function InfoCard({
  title,
  children,
  icon,
}: InfoCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#101B15] p-8 shadow-lg transition hover:border-green-500/40 hover:bg-[#14201a]">

      <div className="flex items-center gap-3">

        {icon && (
          <span className="text-3xl">
            {icon}
          </span>
        )}

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

      </div>

      <div className="mt-6 leading-8 text-gray-300">
        {children}
      </div>

    </div>
  );
}
import { ReactNode } from "react";

interface KeeperInsightProps {
  children: ReactNode;
}

export default function KeeperInsight({
  children,
}: KeeperInsightProps) {
  return (
    <section className="mt-10 rounded-2xl border border-[#2ECC71] bg-[#12361F] p-8">

      <h2 className="text-2xl font-bold text-[#2ECC71]">
        💡 Keeper Insight
      </h2>

      <div className="mt-4 text-lg leading-8 text-gray-300">
        {children}
      </div>

    </section>
  );
}
import { ReactNode } from "react";

type RecommendationType =
  | "evidence"
  | "consensus"
  | "rescue"
  | "expert"
  | "tip"
  | "warning";

interface RecommendationCardProps {
  type: RecommendationType;
  title: string;
  children: ReactNode;
  references?: number;
  vetReviewed?: boolean;
}

const styles = {
  evidence: {
    badge: "Evidence-Based",
    border: "border-green-500/30",
    background: "bg-green-950/30",
    badgeColor: "bg-green-600",
    icon: "🧪",
  },
  consensus: {
    badge: "Keeper Consensus",
    border: "border-blue-500/30",
    background: "bg-blue-950/30",
    badgeColor: "bg-blue-600",
    icon: "🐍",
  },
  rescue: {
    badge: "Rescue Experience",
    border: "border-orange-500/30",
    background: "bg-orange-950/30",
    badgeColor: "bg-orange-600",
    icon: "🏥",
  },
  expert: {
    badge: "Expert Opinion",
    border: "border-purple-500/30",
    background: "bg-purple-950/30",
    badgeColor: "bg-purple-600",
    icon: "🎓",
  },
  tip: {
    badge: "ScalesWiki Tip",
    border: "border-emerald-500/30",
    background: "bg-emerald-950/30",
    badgeColor: "bg-emerald-600",
    icon: "💡",
  },
  warning: {
    badge: "Important Warning",
    border: "border-red-500/30",
    background: "bg-red-950/30",
    badgeColor: "bg-red-600",
    icon: "⚠️",
  },
};

export function RecommendationCard({
  type,
  title,
  children,
  references,
  vetReviewed = false,
}: RecommendationCardProps) {
  const style = styles[type];

  return (
    <div
      className={`rounded-3xl border ${style.border} ${style.background} p-8 shadow-lg`}
    >
      <div className="flex flex-wrap items-center gap-3">

        <span
          className={`rounded-full ${style.badgeColor} px-3 py-1 text-xs font-bold uppercase tracking-wide text-white`}
        >
          {style.icon} {style.badge}
        </span>

        {vetReviewed && (
          <span className="rounded-full bg-green-700 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            ✔ Vet Reviewed
          </span>
        )}

        {references !== undefined && (
          <span className="rounded-full bg-gray-700 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            📚 {references} References
          </span>
        )}

      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <div className="mt-4 text-lg leading-8 text-gray-300">
        {children}
      </div>
    </div>
  );
}
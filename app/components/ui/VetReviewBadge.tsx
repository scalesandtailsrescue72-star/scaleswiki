interface VetReviewBadgeProps {
  status: "reviewed" | "pending" | "draft";
  reviewer?: string;
  reviewDate?: string;
  version?: string;
}

const styles = {
  reviewed: {
    badge: "Vet Reviewed",
    color: "bg-green-600",
    border: "border-green-500/30",
  },
  pending: {
    badge: "Vet Review Pending",
    color: "bg-yellow-600",
    border: "border-yellow-500/30",
  },
  draft: {
    badge: "Draft",
    color: "bg-gray-600",
    border: "border-gray-500/30",
  },
};

export function VetReviewBadge({
  status,
  reviewer,
  reviewDate,
  version,
}: VetReviewBadgeProps) {
  const style = styles[status];

  return (
    <section
      className={`rounded-3xl border ${style.border} bg-[#101B15] p-8`}
    >
      <div className="flex flex-wrap items-center gap-3">

        <span
          className={`${style.color} rounded-full px-4 py-1 text-sm font-bold uppercase tracking-wide text-white`}
        >
          {style.badge}
        </span>

        {version && (
          <span className="rounded-full bg-gray-700 px-4 py-1 text-sm text-white">
            Version {version}
          </span>
        )}

      </div>

      {reviewer && (
        <p className="mt-6 text-lg text-gray-300">
          <strong className="text-white">Reviewer:</strong> {reviewer}
        </p>
      )}

      {reviewDate && (
        <p className="mt-2 text-gray-400">
          Reviewed on {reviewDate}
        </p>
      )}

      {!reviewer && (
        <p className="mt-6 text-gray-400">
          This guide is currently awaiting veterinary review.
        </p>
      )}

    </section>
  );
}
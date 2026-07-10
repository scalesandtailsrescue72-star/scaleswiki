type EvidenceType =
  | "evidence"
  | "consensus"
  | "rescue"
  | "expert";

interface EvidenceTagProps {
  type: EvidenceType;
}

const styles = {
  evidence: {
    label: "Evidence-Based",
    color: "bg-green-600 text-white",
  },
  consensus: {
    label: "Keeper Consensus",
    color: "bg-blue-600 text-white",
  },
  rescue: {
    label: "Rescue Experience",
    color: "bg-orange-600 text-white",
  },
  expert: {
    label: "Expert Opinion",
    color: "bg-purple-600 text-white",
  },
};

export function EvidenceTag({ type }: EvidenceTagProps) {
  const style = styles[type];

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${style.color}`}
    >
      {style.label}
    </span>
  );
}
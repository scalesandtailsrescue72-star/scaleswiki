type CalloutType = "tip" | "warning" | "science" | "health";

interface CalloutProps {
  type: CalloutType;
  title: string;
  children: React.ReactNode;
}

const styles = {
  tip: {
    border: "border-green-500/30",
    background: "bg-green-950/30",
    text: "text-green-300",
  },
  warning: {
    border: "border-yellow-500/30",
    background: "bg-yellow-950/30",
    text: "text-yellow-300",
  },
  science: {
    border: "border-blue-500/30",
    background: "bg-blue-950/30",
    text: "text-blue-300",
  },
  health: {
    border: "border-red-500/30",
    background: "bg-red-950/30",
    text: "text-red-300",
  },
};

export function Callout({
  type,
  title,
  children,
}: CalloutProps) {
  const style = styles[type];

  return (
    <div
      className={`mt-12 rounded-3xl border ${style.border} ${style.background} p-8`}
    >
      <p
        className={`text-sm font-semibold uppercase tracking-[0.3em] ${style.text}`}
      >
        {title}
      </p>

      <div className="mt-5 text-lg leading-8 text-gray-300">
        {children}
      </div>
    </div>
  );
}
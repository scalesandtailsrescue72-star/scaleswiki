interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-5xl font-bold text-white">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-lg leading-8 text-gray-300 ${
            centered ? "mx-auto max-w-3xl" : "max-w-4xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
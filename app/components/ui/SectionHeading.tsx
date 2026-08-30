interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  as = "h2",
}: SectionHeadingProps) {
  const Heading = as;
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
        {eyebrow}
      </p>

      <Heading className="mt-4 text-5xl font-bold text-white">
        {title}
      </Heading>

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
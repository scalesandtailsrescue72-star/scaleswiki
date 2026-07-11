interface GuideSection {
  id: string;
  title: string;
}

interface GuideContentsProps {
  title?: string;
  sections: GuideSection[];
}

export function GuideContents({
  title = "Guide Contents",
  sections,
}: GuideContentsProps) {
  return (
    <nav className="mx-auto mt-12 max-w-5xl rounded-3xl border border-white/10 bg-[#101B15] p-8">

      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-3 text-gray-400">
        Jump directly to any section of this guide.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="rounded-xl border border-white/10 bg-[#15211A] px-5 py-4 text-gray-200 transition hover:border-green-500 hover:text-white"
          >
            {section.title}
          </a>
        ))}

      </div>

    </nav>
  );
}
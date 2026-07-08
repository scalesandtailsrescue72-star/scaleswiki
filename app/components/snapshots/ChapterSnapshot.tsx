interface ChapterSnapshotProps {
  number: string;
  chapter: string;
  title: string;
  children: React.ReactNode;
}

export default function ChapterSnapshot({
  number,
  chapter,
  title,
  children,
}: ChapterSnapshotProps) {
  return (
    <section className="mt-20 overflow-hidden rounded-3xl border-2 border-[#2ECC71] bg-gradient-to-br from-[#10351E] to-[#08120D] shadow-2xl">

      {/* Header */}
      <div className="border-b border-[#2ECC71]/30 bg-[#0D1712] px-8 py-6 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2ECC71]">
          📸 ScalesWiki Snapshot
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          #{number}
        </h2>

        <p className="mt-2 text-gray-400">
          {chapter}
        </p>

        <h3 className="mt-1 text-2xl font-bold text-[#2ECC71]">
          {title}
        </h3>

      </div>

      {/* Body */}

      <div className="px-10 py-10">

        <div className="mb-8 rounded-2xl border border-[#2ECC71]/30 bg-[#122018] p-6">

          <h4 className="mb-4 text-lg font-semibold text-[#2ECC71]">
            Key Takeaways
          </h4>

          <div className="space-y-4 text-lg text-gray-200">
            {children}
          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-[#2ECC71]/20 bg-[#0D1712] px-8 py-6 text-center">

        <p className="text-lg font-semibold text-[#2ECC71]">
          Evidence • Education • Better Care
        </p>

        <p className="mt-2 text-sm text-gray-500">
          ScalesWiki.org
        </p>

      </div>

    </section>
  );
}
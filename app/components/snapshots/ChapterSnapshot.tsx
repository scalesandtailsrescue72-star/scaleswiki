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
    <section className="mt-16 rounded-3xl border-2 border-[#2ECC71] bg-[#0D1712] p-10 shadow-xl">

      <div className="text-center">

        <p className="text-sm uppercase tracking-[0.3em] text-[#2ECC71]">
          ScalesWiki Snapshot
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          #{number}
        </h2>

        <p className="mt-2 text-gray-400">
          {chapter}
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-[#2ECC71]">
          {title}
        </h3>

      </div>

      <div className="mt-10 space-y-6 text-gray-300">
        {children}
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-center">

        <p className="font-semibold text-[#2ECC71]">
          Evidence. Education. Better Care.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          ScalesWiki • Version 1.0
        </p>

      </div>

    </section>
  );
}
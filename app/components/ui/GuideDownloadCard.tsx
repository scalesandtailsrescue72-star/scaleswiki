export function GuideDownloadCard() {
  return (
    <section className="mx-auto my-12 max-w-5xl rounded-2xl border border-green-900 bg-[#102017] p-8">

      <p className="text-sm uppercase tracking-[0.3em] text-green-400">
        ScalesWiki Resource
      </p>

      <h2 className="mt-4 text-3xl font-bold text-green-300">
        Ball Python 101: Complete Care Guide
      </h2>

      <p className="mt-4 text-gray-300">
        Download the printable ScalesWiki Ball Python educational guide.
        This resource covers responsible husbandry, enclosure preparation,
        feeding, handling, health monitoring, and keeper resources.
      </p>

      <p className="mt-4 text-sm text-gray-400">
        Veterinary Review Draft — Version 1.2
      </p>

      <a
        href="/resources/guides/ball-python-101-care-guide.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        Download PDF Guide
      </a>

    </section>
  );
}
export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  const hasSession = Boolean(sessionId && /^cs_[A-Za-z0-9_]+$/.test(sessionId));

  return (
    <main className="min-h-screen bg-[#0B1411] px-6 py-20 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6 text-6xl">✓</div>
        <h1 className="text-4xl font-bold text-green-300">Purchase Successful!</h1>
        <p className="mt-6 text-lg text-gray-300">
          Thank you for supporting ScalesWiki. Your Ball Python 101 guide
          purchase was completed successfully.
        </p>
        {hasSession ? (
          <div className="mt-8 rounded-2xl border border-green-900 bg-[#102017] p-6">
            <h2 className="text-xl font-semibold text-green-300">Your guide is ready</h2>
            <p className="mt-2 text-sm text-gray-400">
              Your download is verified through Stripe and delivered securely
              from ScalesWiki storage.
            </p>
            <a
              href={`/api/download-guide?session_id=${encodeURIComponent(sessionId!)}`}
              className="mt-6 inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              Download Ball Python 101 PDF
            </a>
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-yellow-800 bg-yellow-950/30 p-6 text-left">
            <h2 className="font-semibold text-yellow-300">
              Your purchase was completed, but the download link is missing.
            </h2>
            <p className="mt-2 text-sm text-yellow-200/80">
              Please return to the Ball Python guide page or contact ScalesWiki
              support so we can help you retrieve your purchase.
            </p>
          </div>
        )}
        <a
          href="/guides/ball-python"
          className="mt-8 inline-block text-sm font-semibold text-green-400 hover:text-green-300"
        >
          Return to Ball Python Guide
        </a>
      </div>
    </main>
  );
}

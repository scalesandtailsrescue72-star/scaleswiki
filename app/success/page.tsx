export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#0B1411] px-6 py-20 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6 text-6xl">✓</div>

        <h1 className="text-4xl font-bold text-green-300">
          Purchase Successful!
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Thank you for supporting ScalesWiki. Your Ball Python 101 guide
          purchase was completed successfully.
        </p>

        <a
          href="/guides/ball-python"
          className="mt-8 inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
        >
          Return to Ball Python Guide
        </a>
      </div>
    </main>
  );
}

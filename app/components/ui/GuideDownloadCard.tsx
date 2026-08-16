"use client";

export function GuideDownloadCard() {

  async function handlePurchase() {
    const response = await fetch(
      "/api/create-checkout-session",
      {
        method: "POST",
      }
    );

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    }
  }


  return (
    <section className="mx-auto my-12 max-w-5xl rounded-2xl border border-green-900 bg-[#102017] p-8">

      <p className="text-sm uppercase tracking-[0.3em] text-green-400">
        ScalesWiki Resource
      </p>

      <h2 className="mt-4 text-3xl font-bold text-green-300">
        Ball Python 101: Complete Care Guide
      </h2>

      <p className="mt-4 text-gray-300">
        A complete educational guide for responsible ball python ownership,
        including husbandry guidance, checklists, and keeper resources.
      </p>


      <button
        onClick={handlePurchase}
        className="mt-6 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
      >
        Purchase Guide — $14.99
      </button>


    </section>
  );
}
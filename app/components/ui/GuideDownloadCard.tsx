"use client";

import { useState } from "react";

export function GuideDownloadCard() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handlePurchase() {
    if (loading) return;
    setLoading(true);
    setError("");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
      });
      clearTimeout(timeout);
      const data = (await response.json()) as { url?: string; error?: string };
      if (!response.ok) throw new Error(data.error || `Checkout could not be created. Server returned ${response.status}.`);
      if (!data.url) throw new Error("Stripe did not return a checkout URL.");
      window.location.assign(data.url);
    } catch (err) {
      clearTimeout(timeout);
      if (err instanceof DOMException && err.name === "AbortError") setError("Stripe checkout is taking too long to respond. Please try again.");
      else if (err instanceof Error) setError(err.message);
      else setError("Something went wrong starting checkout.");
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto my-12 max-w-5xl px-6 sm:px-0" aria-labelledby="guide-downloads-heading">
      <div className="rounded-2xl border border-green-900 bg-[#102017] p-6 sm:p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-green-400">ScalesWiki Resources</p>
        <h2 id="guide-downloads-heading" className="mt-4 text-3xl font-bold text-green-300">Choose your Ball Python guide</h2>
        <p className="mt-3 max-w-3xl text-gray-300">Start free with the practical quick-start edition, or get the complete Ball Python 101 reference with expanded husbandry, biosecurity, health-monitoring guidance, checklists, and keeper worksheets.</p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-white/10 bg-[#08120D] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">Free edition</p>
            <h3 className="mt-2 text-xl font-bold">Ball Python Quick-Start Guide</h3>
            <p className="mt-3 text-sm leading-6 text-gray-300">A useful pre-arrival and first-care PDF covering habitat basics, heating and monitoring, feeding, quarantine, veterinary warning signs, and a setup checklist.</p>
            <a href="/api/download-free-guide" className="mt-6 inline-flex min-h-11 items-center rounded-lg border border-green-500 px-5 py-3 font-semibold text-green-300 transition hover:bg-green-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400">Download free PDF</a>
          </article>

          <article className="rounded-xl border border-green-500/30 bg-green-500/5 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">Complete edition</p>
            <h3 className="mt-2 text-xl font-bold">Ball Python 101: Complete Care Guide</h3>
            <p className="mt-3 text-sm leading-6 text-gray-300">The expanded reference with enclosure design, biosecurity, thermal and humidity strategy, lighting, feeding, enrichment, health monitoring, common mistakes, setup checklist, and keeper worksheets.</p>
            <button type="button" onClick={handlePurchase} disabled={loading} className="mt-6 min-h-11 rounded-lg bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? "Connecting to Stripe..." : "Purchase complete guide - $14.99"}
            </button>
          </article>
        </div>

        <p className="mt-5 text-xs leading-5 text-gray-400">Both editions are educational resources and do not diagnose or treat illness. Health concerns should be evaluated by a qualified reptile veterinarian.</p>

        {error && <div role="alert" className="mt-5 rounded-lg border border-red-800 bg-red-950/40 p-4"><p className="font-semibold text-red-400">Checkout could not be started</p><p className="mt-1 text-sm text-red-300">{error}</p><button type="button" onClick={handlePurchase} className="mt-3 rounded-md bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600">Try Again</button></div>}
      </div>
    </section>
  );
}

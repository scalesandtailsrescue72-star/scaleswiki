"use client";

import { useState } from "react";

export function GuideDownloadCard() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handlePurchase() {
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.error || "Unable to start checkout.");
      }

      if (!data?.url || typeof data.url !== "string") {
        throw new Error("Stripe did not return a checkout URL.");
      }

      // Use a full browser navigation so Stripe Checkout opens reliably
      // from both local Next.js and the deployed Cloudflare Worker.
      window.location.assign(data.url);
    } catch (err) {
      console.error("Checkout error:", err);
      setError(err instanceof Error ? err.message : "Unable to start checkout.");
      setLoading(false);
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
        type="button"
        onClick={handlePurchase}
        disabled={loading}
        className="mt-6 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Opening Secure Checkout…" : "Purchase Guide — $14.99"}
      </button>

      {error && (
        <p className="mt-4 text-sm text-red-400" role="alert">
          Checkout error: {error}
        </p>
      )}
    </section>
  );
}

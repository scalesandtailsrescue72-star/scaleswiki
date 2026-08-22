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

    const timeout = setTimeout(() => {
      controller.abort();
    }, 30000);

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
      });

      clearTimeout(timeout);

      let data: {
        url?: string;
        error?: string;
      };

      try {
        data = await response.json();
      } catch {
        throw new Error("Stripe returned an invalid response.");
      }

      if (!response.ok) {
        throw new Error(
          data.error ||
            `Checkout could not be created. Server returned ${response.status}.`
        );
      }

      if (!data.url) {
        throw new Error("Stripe did not return a checkout URL.");
      }

      window.location.assign(data.url);
    } catch (err) {
      clearTimeout(timeout);

      if (err instanceof DOMException && err.name === "AbortError") {
        setError(
          "Stripe checkout is taking too long to respond. Please try again."
        );
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong starting checkout.");
      }

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

      <div className="mt-6">
        <button
          type="button"
          onClick={handlePurchase}
          disabled={loading}
          className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Connecting to Stripe..." : "Purchase Guide — $14.99"}
        </button>
      </div>

      {loading && (
        <p className="mt-4 text-sm text-gray-400">
          Please wait while we securely create your Stripe checkout...
        </p>
      )}

      {error && (
        <div className="mt-4 rounded-lg border border-red-800 bg-red-950/40 p-4">
          <p className="font-semibold text-red-400">
            Checkout could not be started
          </p>

          <p className="mt-1 text-sm text-red-300">{error}</p>

          <button
            type="button"
            onClick={handlePurchase}
            className="mt-3 rounded-md bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600"
          >
            Try Again
          </button>
        </div>
      )}
    </section>
  );
}
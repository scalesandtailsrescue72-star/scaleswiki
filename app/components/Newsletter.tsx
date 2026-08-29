"use client";

import { FormEvent, useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Newsletter signup failed.");
      }

      setStatus("success");
      setMessage(data?.alreadySubscribed ? "You're already on the list." : "You're on the list. Welcome to ScalesWiki.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We couldn't subscribe you right now. Please try again.");
    }
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="rounded-3xl border border-white/10 bg-[#101B15] p-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">Newsletter</p>

        <h2 className="mt-4 text-4xl font-bold text-white">One email when it matters.</h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          New guides, new Academy courses, printable resources, community updates, and rescue news. No spam; unsubscribe anytime.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            className="flex-1 rounded-xl border border-white/10 bg-[#15211A] px-5 py-4 text-white outline-none focus:border-green-500/60"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Joining..." : "Subscribe"}
          </button>
        </form>

        {message && (
          <p className={`mt-4 text-sm ${status === "error" ? "text-red-300" : "text-green-300"}`} role="status">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

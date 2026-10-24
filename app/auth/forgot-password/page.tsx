"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/app/lib/database/supabase";
import { getSafeNextPath } from "@/app/auth/safe-next";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleReset(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    const params = new URLSearchParams(window.location.search);
    const nextPath = getSafeNextPath(params.get("next"));
    const resetPath = `/auth/reset-password?next=${encodeURIComponent(nextPath)}`;
    const redirectTo = `${window.location.origin}/auth/callback?next=${encodeURIComponent(resetPath)}`;
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email.trim(), { redirectTo });

    setLoading(false);
    if (resetError) {
      setError(resetError.message);
      return;
    }

    setMessage("If an account exists for that address, a password-reset link is on its way. Check your inbox and spam folder.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#08120D] px-6 text-white">
      <section className="w-full max-w-md rounded-2xl border border-white/10 bg-[#102017] p-8 shadow-xl">
        <Link href="/auth/login" className="text-sm font-semibold text-green-400 hover:text-green-300">← Back to sign in</Link>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-green-400">Account recovery</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Reset your password</h1>
        <p className="mt-3 leading-7 text-gray-300">Enter the email address used for your ScalesWiki account. We’ll email you a secure link to choose a new password.</p>

        <form onSubmit={handleReset} className="mt-8 space-y-5">
          <label className="block text-sm font-medium text-gray-200">
            Email address
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-lg border border-gray-700 bg-[#08120D] p-3 text-white outline-none focus:border-green-500"
            />
          </label>

          {error && <p className="rounded-lg bg-red-950/40 p-3 text-sm text-red-300" role="alert">{error}</p>}
          {message && <p className="rounded-lg bg-green-950/40 p-3 text-sm leading-6 text-green-300" role="status">{message}</p>}

          <button type="submit" disabled={loading || Boolean(message)} className="w-full rounded-lg bg-green-600 p-3 font-semibold text-white transition hover:bg-green-500 disabled:opacity-50">
            {loading ? "Sending reset link..." : message ? "Reset link requested" : "Email Me a Reset Link"}
          </button>
        </form>
      </section>
    </main>
  );
}

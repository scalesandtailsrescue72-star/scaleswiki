"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/database/supabase";
import { getSafeNextPath } from "@/app/auth/safe-next";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [checking, setChecking] = useState(true);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    supabase.auth.getUser().then(({ data }) => {
      if (!active) return;
      setReady(Boolean(data.user));
      setChecking(false);
    });
    return () => { active = false; };
  }, []);

  async function handleUpdate(event: React.FormEvent) {
    event.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Use at least 8 characters for your new password.");
      return;
    }
    if (password !== confirmation) {
      setError("The two passwords do not match.");
      return;
    }

    setLoading(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    if (updateError) {
      setLoading(false);
      setError(updateError.message);
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const nextPath = getSafeNextPath(params.get("next"));
    await supabase.auth.signOut();
    router.replace(`/auth/login?reset=success&next=${encodeURIComponent(nextPath)}`);
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#08120D] px-6 text-white">
      <section className="w-full max-w-md rounded-2xl border border-white/10 bg-[#102017] p-8 shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green-400">Account recovery</p>
        <h1 className="mt-3 text-3xl font-bold">Choose a new password</h1>

        {checking ? (
          <p className="mt-6 text-gray-300">Checking your secure reset link...</p>
        ) : ready ? (
          <form onSubmit={handleUpdate} className="mt-8 space-y-5">
            <label className="block text-sm font-medium text-gray-200">
              New password
              <input type="password" required minLength={8} autoComplete="new-password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-lg border border-gray-700 bg-[#08120D] p-3 text-white outline-none focus:border-green-500" />
              <span className="mt-1 block text-xs text-gray-500">Use at least 8 characters.</span>
            </label>
            <label className="block text-sm font-medium text-gray-200">
              Confirm new password
              <input type="password" required minLength={8} autoComplete="new-password" value={confirmation} onChange={(event) => setConfirmation(event.target.value)} className="mt-2 w-full rounded-lg border border-gray-700 bg-[#08120D] p-3 text-white outline-none focus:border-green-500" />
            </label>

            {error && <p className="rounded-lg bg-red-950/40 p-3 text-sm text-red-300" role="alert">{error}</p>}

            <button type="submit" disabled={loading} className="w-full rounded-lg bg-green-600 p-3 font-semibold text-white transition hover:bg-green-500 disabled:opacity-50">
              {loading ? "Updating password..." : "Save New Password"}
            </button>
          </form>
        ) : (
          <div className="mt-6 rounded-xl bg-red-950/30 p-5">
            <p className="leading-7 text-red-200">This reset link is invalid or has expired. Request a fresh link to continue.</p>
            <Link href="/auth/forgot-password" className="mt-4 inline-flex font-semibold text-green-400 hover:text-green-300">Request another reset link →</Link>
          </div>
        )}
      </section>
    </main>
  );
}

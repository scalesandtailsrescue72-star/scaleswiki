"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { supabase } from "@/app/lib/database/supabase";
import { getSafeNextPath } from "@/app/auth/safe-next";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = getSafeNextPath(searchParams.get("next"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState(
    searchParams.get("reset") === "success"
      ? "Your password has been updated. Sign in with your new password."
      : "",
  );

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message === "Invalid login credentials" ? "That email and password do not match. You can reset your password below." : error.message);
      return;
    }

    router.push(nextPath);
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#08120D] flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl bg-[#102017] p-8 shadow-xl">

        <h1 className="text-3xl font-bold text-green-300">
          Sign In
        </h1>

        <p className="mt-2 text-gray-300">
          Continue your ScalesWiki Academy journey.
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border border-gray-700 bg-[#08120D] p-3 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-gray-700 bg-[#08120D] p-3 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="-mt-2 text-right">
            <Link href={`/auth/forgot-password?next=${encodeURIComponent(nextPath)}`} className="text-sm font-semibold text-green-400 hover:text-green-300">
              Forgot your password?
            </Link>
          </div>

          {error && (
            <p className="rounded-lg bg-red-950/40 p-3 text-sm text-red-300" role="alert">
              {error}
            </p>
          )}

          {message && (
            <p className="rounded-lg bg-green-950/40 p-3 text-sm text-green-300" role="status">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-green-600 p-3 font-semibold hover:bg-green-500 disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Need an account? <Link href="/auth/register" className="font-semibold text-green-400 hover:text-green-300">Join free</Link>
        </p>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[#08120D]" />}>
      <LoginForm />
    </Suspense>
  );
}

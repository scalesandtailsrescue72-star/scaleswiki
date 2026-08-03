"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "@/app/lib/database/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/dashboard");
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

          {error && (
            <p className="text-red-400">
              {error}
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
      </div>
    </main>
  );
}
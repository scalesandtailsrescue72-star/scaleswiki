"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/database/supabase";

const guideOptions = [
  ["", "No preference yet"],
  ["bearded-dragon", "Bearded Dragon"],
  ["leopard-gecko", "Leopard Gecko"],
  ["corn-snake", "Corn Snake"],
  ["crested-gecko", "Crested Gecko"],
  ["blue-tongued-skink", "Blue-Tongued Skink"],
];

const memberRoles = [
  ["keeper", "Reptile keeper"],
  ["rescue", "Rescue or adoption organization"],
  ["veterinary", "Veterinarian or veterinary professional"],
  ["store", "Reptile store or responsible business"],
  ["educator", "Educator or content creator"],
  ["breeder", "Breeder"],
  ["other", "Other community member"],
];

export default function RegisterPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [memberRole, setMemberRole] = useState("keeper");
  const [guideInterest, setGuideInterest] = useState("");
  const [spotlightInterest, setSpotlightInterest] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const requestedGuide = new URLSearchParams(window.location.search).get("guide");
    if (requestedGuide && guideOptions.some(([value]) => value === requestedGuide)) setGuideInterest(requestedGuide);
  }, []);

  async function handleRegister(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          community_role: memberRole,
          guide_interest: guideInterest || null,
          spotlight_interest: spotlightInterest,
          founding_community: true,
        },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    setLoading(false);

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    setMessage("Welcome to the ScalesWiki community! Check your email to verify your account.");
    setTimeout(() => router.push("/auth/login"), 3000);
  }

  return (
    <main className="min-h-screen bg-[#08120D] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_28rem] lg:items-start">
        <section className="pt-6 lg:pt-16">
          <Link href="/community" className="text-sm font-semibold text-green-400 hover:text-green-300">← Back to Community</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.28em] text-green-400">Founding Community</p>
          <h1 className="mt-4 max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">Join the people building ScalesWiki from the beginning.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Create a free account to track Academy learning, earn certificates, help shape future resources, and participate in upcoming community programs.
          </p>
          <ul className="mt-8 space-y-3 text-gray-300">
            <li>✓ Free membership</li>
            <li>✓ Academy progress and certificates</li>
            <li>✓ Founding community updates</li>
            <li>✓ Optional consideration for future Community Spotlights</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-[#102017] p-7 shadow-xl sm:p-8">
          <h2 className="text-2xl font-bold text-green-300">Create Your Account</h2>
          <p className="mt-2 text-sm leading-6 text-gray-400">Your role and Spotlight preference remain private unless you later choose to participate publicly.</p>

          <form onSubmit={handleRegister} className="mt-7 space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-gray-200">
                First name
                <input type="text" required autoComplete="given-name" className="mt-2 w-full rounded-lg border border-gray-700 bg-[#08120D] p-3 text-white" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
              </label>
              <label className="text-sm font-medium text-gray-200">
                Last name
                <input type="text" required autoComplete="family-name" className="mt-2 w-full rounded-lg border border-gray-700 bg-[#08120D] p-3 text-white" value={lastName} onChange={(event) => setLastName(event.target.value)} />
              </label>
            </div>

            <label className="block text-sm font-medium text-gray-200">
              How are you part of the reptile community?
              <select required className="mt-2 w-full rounded-lg border border-gray-700 bg-[#08120D] p-3 text-white" value={memberRole} onChange={(event) => setMemberRole(event.target.value)}>
                {memberRoles.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
              </select>
            </label>

            <label className="block text-sm font-medium text-gray-200">
              Which guide should ScalesWiki build next?
              <select className="mt-2 w-full rounded-lg border border-gray-700 bg-[#08120D] p-3 text-white" value={guideInterest} onChange={(event) => setGuideInterest(event.target.value)}>
                {guideOptions.map(([value, label]) => <option key={value || "none"} value={value}>{label}</option>)}
              </select>
              <span className="mt-1 block text-xs text-gray-500">Your private preference helps prioritize the species pipeline.</span>
            </label>

            <label className="block text-sm font-medium text-gray-200">
              Email address
              <input type="email" required autoComplete="email" className="mt-2 w-full rounded-lg border border-gray-700 bg-[#08120D] p-3 text-white" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>

            <label className="block text-sm font-medium text-gray-200">
              Password
              <input type="password" required minLength={6} autoComplete="new-password" className="mt-2 w-full rounded-lg border border-gray-700 bg-[#08120D] p-3 text-white" value={password} onChange={(event) => setPassword(event.target.value)} />
              <span className="mt-1 block text-xs text-gray-500">At least 6 characters.</span>
            </label>

            <label className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-gray-300">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-green-600" checked={spotlightInterest} onChange={(event) => setSpotlightInterest(event.target.checked)} />
              <span>I may be interested in being contacted about a future Community Spotlight. This does not publish my profile or guarantee selection.</span>
            </label>

            {error && <p className="rounded-lg bg-red-950/40 p-3 text-sm text-red-300" role="alert">{error}</p>}
            {message && <p className="rounded-lg bg-green-950/40 p-3 text-sm text-green-300" role="status">{message}</p>}

            <button disabled={loading} type="submit" className="w-full rounded-lg bg-green-600 p-3 font-semibold text-white transition hover:bg-green-500 disabled:opacity-50">
              {loading ? "Creating Account..." : "Join the Community Free"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            Already a member? <Link href="/auth/login" className="font-semibold text-green-400 hover:text-green-300">Sign in</Link>
          </p>
        </section>
      </div>
    </main>
  );
}

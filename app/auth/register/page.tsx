"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "@/app/lib/database/supabase";

export default function RegisterPage() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");


  async function handleRegister(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");


    const {
      error,
    } = await supabase.auth.signUp({

      email,

      password,

      options: {

        data: {
          first_name: firstName,
          last_name: lastName,
        },

        emailRedirectTo:
          `${window.location.origin}/auth/callback`,
      },

    });


    setLoading(false);


    if (error) {

      setError(error.message);

      return;

    }


    setMessage(
      "Account created! Please check your email to verify your account."
    );


    setTimeout(() => {

      router.push("/auth/login");

    }, 2500);

  }


  return (

    <main className="min-h-screen flex items-center justify-center bg-[#08120D] px-6">

      <div className="w-full max-w-md rounded-2xl bg-[#102017] p-8 shadow-xl">


        <h1 className="text-3xl font-bold text-green-300">
          Create Account
        </h1>


        <p className="mt-2 text-gray-300">
          Join ScalesWiki Academy.
        </p>



        <form
          onSubmit={handleRegister}
          className="mt-8 space-y-5"
        >


          <input
            type="text"
            required
            placeholder="First Name"
            className="w-full rounded-lg border border-gray-700 bg-[#08120D] p-3 text-white"
            value={firstName}
            onChange={(e) =>
              setFirstName(e.target.value)
            }
          />


          <input
            type="text"
            required
            placeholder="Last Name"
            className="w-full rounded-lg border border-gray-700 bg-[#08120D] p-3 text-white"
            value={lastName}
            onChange={(e) =>
              setLastName(e.target.value)
            }
          />



          <input
            type="email"
            required
            placeholder="Email Address"
            className="w-full rounded-lg border border-gray-700 bg-[#08120D] p-3 text-white"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />



          <input
            type="password"
            required
            minLength={6}
            placeholder="Password"
            className="w-full rounded-lg border border-gray-700 bg-[#08120D] p-3 text-white"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />



          {error && (

            <p className="text-red-400">
              {error}
            </p>

          )}



          {message && (

            <p className="text-green-400">
              {message}
            </p>

          )}




          <button
            disabled={loading}
            type="submit"
            className="w-full rounded-lg bg-green-600 p-3 font-semibold text-white hover:bg-green-500 disabled:opacity-50"
          >

            {loading
              ? "Creating Account..."
              : "Create Account"}

          </button>


        </form>


      </div>


    </main>

  );

}
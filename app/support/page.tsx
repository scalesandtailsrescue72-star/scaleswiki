"use client";

import { useState } from "react";

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const data = {
      name: form.get("name"),
      email: form.get("email"),
      type: form.get("type"),
      subject: form.get("subject"),
      message: form.get("message"),
    };

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      }

    } catch (error) {
      console.error("Support form error:", error);
    }
  }

  return (
    <main className="min-h-screen bg-[#07110C] px-6 py-16 text-gray-200">
      <div className="mx-auto max-w-4xl">

        <p className="text-sm uppercase tracking-[0.3em] text-green-400">
          ScalesWiki
        </p>

        <h1 className="mt-6 text-5xl font-bold text-green-300">
          ScalesWiki Support Center
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          Have a question, need help with a resource, found an issue, or want
          to partner with ScalesWiki? Send us a message and our team will
          review it.
        </p>


        <section className="mt-10 rounded-2xl bg-[#102017] p-8">

          {submitted ? (

            <div>
              <h2 className="text-3xl font-bold text-green-300">
                Thank You
              </h2>

              <p className="mt-4 text-gray-300">
                Your request has been received. The ScalesWiki team will review
                your message and respond as soon as possible.
              </p>
            </div>

          ) : (

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <h2 className="text-3xl font-bold text-green-300">
                Contact Support
              </h2>


              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                className="w-full rounded-lg bg-[#07110C] p-3 text-white border border-green-900"
              />


              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full rounded-lg bg-[#07110C] p-3 text-white border border-green-900"
              />


              <select
                name="type"
                required
                className="w-full rounded-lg bg-[#07110C] p-3 text-white border border-green-900"
              >
                <option value="">
                  Select Contact Type
                </option>

                <option>
                  Reptile Keeper
                </option>

                <option>
                  Rescue Organization
                </option>

                <option>
                  Veterinary Professional
                </option>

                <option>
                  Educator
                </option>

                <option>
                  Partnership
                </option>

                <option>
                  Website Feedback
                </option>

                <option>
                  Other
                </option>

              </select>


              <input
                name="subject"
                type="text"
                placeholder="Subject"
                required
                className="w-full rounded-lg bg-[#07110C] p-3 text-white border border-green-900"
              />


              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                required
                className="w-full rounded-lg bg-[#07110C] p-3 text-white border border-green-900"
              />


              <button
                type="submit"
                className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
              >
                Submit Request
              </button>


            </form>

          )}

        </section>


      </div>
    </main>
  );
}
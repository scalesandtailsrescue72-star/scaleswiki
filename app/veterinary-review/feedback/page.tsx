"use client";

import { useState } from "react";

export default function VeterinaryReviewFeedbackPage() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    credentials: "",
    lesson: "",
    category: "",
    feedback: "",
  });

  function updateField(
    field: string,
    value: string
  ) {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  async function handleSubmit(
    event: React.FormEvent
  ) {
    event.preventDefault();

    const response = await fetch(
      "/api/veterinary-feedback",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      setSubmitted(true);
    }
  }

  return (
    <main className="min-h-screen bg-[#07110C] px-6 py-16 text-gray-200">
      <div className="mx-auto max-w-4xl">

        <p className="text-sm uppercase tracking-[0.3em] text-green-400">
          ScalesWiki
        </p>

        <h1 className="mt-6 text-5xl font-bold text-green-300">
          Veterinary Review Feedback
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          Thank you for reviewing ScalesWiki educational materials.
          Your feedback helps improve accuracy, safety, and responsible
          reptile education.
        </p>


        {submitted && (
          <section className="mt-8 rounded-2xl border border-green-700 bg-[#102017] p-6">
            <h2 className="text-2xl font-bold text-green-300">
              Thank You
            </h2>

            <p className="mt-3 text-gray-300">
              Your feedback has been received by the ScalesWiki team.
            </p>
          </section>
        )}


        <form onSubmit={handleSubmit}>


          <section className="mt-10 rounded-2xl bg-[#102017] p-8">

            <h2 className="text-3xl font-bold text-green-300">
              Reviewer Information
            </h2>

            <div className="mt-6 space-y-4">

              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  updateField("name", e.target.value)
                }
                className="w-full rounded-lg bg-[#07110C] p-3 text-white border border-green-900"
              />

              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  updateField("email", e.target.value)
                }
                className="w-full rounded-lg bg-[#07110C] p-3 text-white border border-green-900"
              />

              <input
                type="text"
                placeholder="Credentials / Specialty"
                value={formData.credentials}
                onChange={(e) =>
                  updateField("credentials", e.target.value)
                }
                className="w-full rounded-lg bg-[#07110C] p-3 text-white border border-green-900"
              />

            </div>

          </section>


          <section className="mt-10 rounded-2xl bg-[#102017] p-8">

            <h2 className="text-3xl font-bold text-green-300">
              Review Details
            </h2>


            <select
              value={formData.lesson}
              onChange={(e) =>
                updateField("lesson", e.target.value)
              }
              className="mt-6 w-full rounded-lg bg-[#07110C] p-3 text-white border border-green-900"
            >
              <option value="">
                Select lesson reviewed
              </option>
              <option>
                Lesson 1 - Introduction
              </option>
              <option>
                Lesson 2 - Natural History
              </option>
              <option>
                Lesson 3 - Husbandry Foundations
              </option>
              <option>
                Lesson 4 - Enclosure Design
              </option>
              <option>
                Other
              </option>
            </select>


            <select
              value={formData.category}
              onChange={(e) =>
                updateField("category", e.target.value)
              }
              className="mt-4 w-full rounded-lg bg-[#07110C] p-3 text-white border border-green-900"
            >
              <option value="">
                Feedback category
              </option>
              <option>
                Husbandry accuracy
              </option>
              <option>
                Animal welfare
              </option>
              <option>
                Medical terminology
              </option>
              <option>
                Safety guidance
              </option>
              <option>
                Additional suggestions
              </option>
            </select>


            <textarea
              placeholder="Please provide your feedback..."
              rows={8}
              value={formData.feedback}
              onChange={(e) =>
                updateField("feedback", e.target.value)
              }
              className="mt-4 w-full rounded-lg bg-[#07110C] p-3 text-white border border-green-900"
            />

          </section>


          <section className="mt-10 rounded-2xl border border-green-700 p-8">

            <h2 className="text-3xl font-bold text-green-300">
              Submit Review
            </h2>

            <p className="mt-4 text-gray-300">
              Feedback submissions will be reviewed by the ScalesWiki team
              and used to improve educational resources.
            </p>


            <button
              type="submit"
              className="mt-6 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              Submit Feedback
            </button>

          </section>

        </form>


      </div>
    </main>
  );
}
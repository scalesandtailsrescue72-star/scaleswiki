"use client";

import { FormEvent, useState } from "react";

export function RescuePartnerInputForm() {
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("saving");
    setMessage("");

    try {
      const response = await fetch("/api/partner-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          speciesHandled: form.get("speciesHandled"),
          adopterChallenges: form.get("adopterChallenges"),
          requestedResources: form.get("requestedResources"),
          collaborationNotes: form.get("collaborationNotes"),
          spotlightInterest: form.get("spotlightInterest") === "on",
          followUpOkay: form.get("followUpOkay") === "on",
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Submission failed.");
      setStatus("success");
      setMessage("Thank you—your rescue perspective has been saved and sent to ScalesWiki.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not save your input. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6 rounded-3xl border border-white/10 bg-[#102017] p-7 sm:p-9" aria-busy={status === "saving"}>
      <label className="block text-sm font-semibold text-gray-200">
        Species your rescue commonly handles
        <input name="speciesHandled" type="text" placeholder="Ball pythons, bearded dragons, leopard geckos" className="mt-2 w-full rounded-xl border border-white/10 bg-[#08120D] p-4 text-white outline-none focus:border-green-500" />
        <span className="mt-1 block text-xs font-normal text-gray-500">Separate species with commas.</span>
      </label>

      <label className="block text-sm font-semibold text-gray-200">
        What education problems do you see most often with adopters? <span className="text-green-400">*</span>
        <textarea name="adopterChallenges" required rows={5} maxLength={3000} className="mt-2 w-full rounded-xl border border-white/10 bg-[#08120D] p-4 text-white outline-none focus:border-green-500" placeholder="Examples: enclosure setup, heating, feeding expectations, quarantine..." />
      </label>

      <label className="block text-sm font-semibold text-gray-200">
        What guides, checklists, or lessons would help your adopters most? <span className="text-green-400">*</span>
        <textarea name="requestedResources" required rows={5} maxLength={3000} className="mt-2 w-full rounded-xl border border-white/10 bg-[#08120D] p-4 text-white outline-none focus:border-green-500" placeholder="Tell us what would make adoption education easier or more consistent." />
      </label>

      <label className="block text-sm font-semibold text-gray-200">
        Anything else ScalesWiki should understand?
        <textarea name="collaborationNotes" rows={4} maxLength={3000} className="mt-2 w-full rounded-xl border border-white/10 bg-[#08120D] p-4 text-white outline-none focus:border-green-500" placeholder="Optional ideas, boundaries, or collaboration notes." />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-gray-300">
          <input name="spotlightInterest" type="checkbox" className="mt-1 h-4 w-4 accent-green-600" />
          <span>We may be interested in a future Rescue Spotlight.</span>
        </label>
        <label className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-gray-300">
          <input name="followUpOkay" type="checkbox" defaultChecked className="mt-1 h-4 w-4 accent-green-600" />
          <span>ScalesWiki may follow up about this submission.</span>
        </label>
      </div>

      {message && <p role="status" className={`rounded-xl p-4 text-sm ${status === "error" ? "bg-red-950/40 text-red-300" : "bg-green-950/40 text-green-300"}`}>{message}</p>}

      <button type="submit" disabled={status === "saving" || status === "success"} className="w-full rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-60">
        {status === "saving" ? "Saving your input..." : status === "success" ? "Input received" : "Share Rescue Partner Input"}
      </button>
      <p className="text-center text-xs leading-5 text-gray-500">Submitting input does not create a recurring obligation, endorsement, or permission to publish your organization&apos;s name.</p>
    </form>
  );
}

"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function AdminFeedbackActions({ feedbackId, organizationName, recipientEmail }: { feedbackId: string; organizationName: string; recipientEmail: string | null }) {
  const router = useRouter();
  const [replyOpen, setReplyOpen] = useState(false);
  const [pending, setPending] = useState<"reply" | "delete" | null>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function sendReply(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setPending("reply");
    setMessage("");
    setError("");
    try {
      const response = await fetch("/api/admin/partner-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedbackId, subject: form.get("subject"), message: form.get("message") }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Reply could not be sent.");
      setMessage(`Reply sent to ${data.recipient}.`);
      setReplyOpen(false);
    } catch (replyError) {
      setError(replyError instanceof Error ? replyError.message : "Reply could not be sent.");
    } finally {
      setPending(null);
    }
  }

  async function deleteSubmission() {
    if (!window.confirm("Permanently delete this Rescue Partner submission? This cannot be undone.")) return;
    setPending("delete");
    setMessage("");
    setError("");
    try {
      const response = await fetch(`/api/admin/partner-feedback?id=${encodeURIComponent(feedbackId)}`, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Submission could not be deleted.");
      router.refresh();
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : "Submission could not be deleted.");
    } finally {
      setPending(null);
    }
  }

  return (
    <div className="mt-5 border-t border-white/10 pt-5">
      <div className="flex flex-wrap gap-3">
        <button type="button" disabled={!recipientEmail || pending !== null} onClick={() => setReplyOpen((open) => !open)} className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-50">{replyOpen ? "Cancel Reply" : "Reply through Resend"}</button>
        <button type="button" disabled={pending !== null} onClick={deleteSubmission} className="rounded-lg border border-red-500/60 px-4 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-950/40 disabled:cursor-not-allowed disabled:opacity-50">{pending === "delete" ? "Deleting..." : "Delete Submission"}</button>
      </div>

      {replyOpen && (
        <form onSubmit={sendReply} className="mt-5 space-y-4 rounded-xl border border-green-500/20 bg-black/20 p-5">
          <p className="text-sm text-gray-400">To: <strong className="text-gray-200">{recipientEmail}</strong></p>
          <label className="block text-sm font-semibold text-gray-200">Subject<input name="subject" required maxLength={180} defaultValue={`Re: Your ScalesWiki Rescue Partner input — ${organizationName}`} className="mt-2 w-full rounded-lg border border-white/10 bg-[#08120D] p-3 text-white outline-none focus:border-green-500" /></label>
          <label className="block text-sm font-semibold text-gray-200">Message<textarea name="message" required rows={7} maxLength={5000} placeholder="Write your reply..." className="mt-2 w-full rounded-lg border border-white/10 bg-[#08120D] p-3 text-white outline-none focus:border-green-500" /></label>
          <button type="submit" disabled={pending !== null} className="rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-50">{pending === "reply" ? "Sending..." : "Send Reply"}</button>
        </form>
      )}

      {message && <p role="status" className="mt-3 text-sm text-green-300">{message}</p>}
      {error && <p role="alert" className="mt-3 text-sm text-red-300">{error}</p>}
    </div>
  );
}

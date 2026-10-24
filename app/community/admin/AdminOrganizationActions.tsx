"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ModerationAction = "approve" | "decline" | "publish" | "unpublish" | "delete";

const confirmationText: Partial<Record<ModerationAction, string>> = {
  decline: "Decline this organization profile? It will remain private.",
  publish: "Publish this organization in the public Rescue Partner directory?",
  unpublish: "Remove this organization from the public directory?",
  delete: "Permanently delete this declined organization, its membership links, and its partner submissions? The ScalesWiki login account will remain. This cannot be undone.",
};

export function AdminOrganizationActions({ organizationId, status }: { organizationId: string; status: string }) {
  const router = useRouter();
  const [pending, setPending] = useState<ModerationAction | null>(null);
  const [message, setMessage] = useState("");

  async function moderate(action: ModerationAction) {
    const prompt = confirmationText[action];
    if (prompt && !window.confirm(prompt)) return;
    setPending(action);
    setMessage("");

    try {
      const response = await fetch("/api/admin/partner-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ organizationId, action }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Moderation action failed.");
      setMessage(data.deleted ? "Organization deleted." : `Profile ${data.profileStatus}.`);
      router.refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Moderation action failed.");
    } finally {
      setPending(null);
    }
  }

  const buttonClass = "rounded-lg px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <div className="mt-5 border-t border-white/10 pt-5">
      <div className="flex flex-wrap gap-3">
        {(status === "submitted" || status === "declined") && <button type="button" disabled={pending !== null} onClick={() => moderate("approve")} className={`${buttonClass} bg-green-600 text-white hover:bg-green-500`}>{pending === "approve" ? "Approving..." : "Approve"}</button>}
        {status === "approved" && <button type="button" disabled={pending !== null} onClick={() => moderate("publish")} className={`${buttonClass} bg-emerald-600 text-white hover:bg-emerald-500`}>{pending === "publish" ? "Publishing..." : "Publish to Directory"}</button>}
        {(status === "submitted" || status === "approved") && <button type="button" disabled={pending !== null} onClick={() => moderate("decline")} className={`${buttonClass} border border-red-500/60 text-red-300 hover:bg-red-950/40`}>{pending === "decline" ? "Declining..." : "Decline"}</button>}
        {status === "published" && <button type="button" disabled={pending !== null} onClick={() => moderate("unpublish")} className={`${buttonClass} border border-amber-400/60 text-amber-200 hover:bg-amber-950/40`}>{pending === "unpublish" ? "Unpublishing..." : "Unpublish"}</button>}
        {status === "declined" && <button type="button" disabled={pending !== null} onClick={() => moderate("delete")} className={`${buttonClass} border border-red-500/60 text-red-300 hover:bg-red-950/40`}>{pending === "delete" ? "Deleting..." : "Delete Organization"}</button>}
        {status === "draft" && <span className="text-sm text-gray-500">Waiting for the organization to submit its profile.</span>}
      </div>
      {message && <p className="mt-3 text-sm text-gray-300" role="status">{message}</p>}
    </div>
  );
}

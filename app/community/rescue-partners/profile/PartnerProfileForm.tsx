"use client";

import { FormEvent, useState } from "react";

export type PartnerProfile = {
  name?: string | null;
  website_url?: string | null;
  city?: string | null;
  state_region?: string | null;
  service_area?: string | null;
  public_description?: string | null;
  species_handled?: string[] | null;
  services_offered?: string[] | null;
  facebook_url?: string | null;
  instagram_url?: string | null;
  preferred_contact_method?: string | null;
  profile_status?: string | null;
  representative_authorized?: boolean | null;
  directory_consent?: boolean | null;
  name_logo_consent?: boolean | null;
  spotlight_contact_consent?: boolean | null;
  public_links_consent?: boolean | null;
};

export function PartnerProfileForm({ initialProfile }: { initialProfile: PartnerProfile }) {
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    setStatus("saving");
    setMessage("");

    try {
      const response = await fetch("/api/partner-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          websiteUrl: form.get("websiteUrl"),
          city: form.get("city"),
          stateRegion: form.get("stateRegion"),
          serviceArea: form.get("serviceArea"),
          publicDescription: form.get("publicDescription"),
          speciesHandled: form.get("speciesHandled"),
          servicesOffered: form.get("servicesOffered"),
          facebookUrl: form.get("facebookUrl"),
          instagramUrl: form.get("instagramUrl"),
          preferredContactMethod: form.get("preferredContactMethod"),
          representativeAuthorized: form.get("representativeAuthorized") === "on",
          directoryConsent: form.get("directoryConsent") === "on",
          nameLogoConsent: form.get("nameLogoConsent") === "on",
          spotlightContactConsent: form.get("spotlightContactConsent") === "on",
          publicLinksConsent: form.get("publicLinksConsent") === "on",
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Profile submission failed.");
      setStatus("success");
      setMessage("Your private organization profile and consent choices were saved for review. Nothing has been published.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not save the profile. Please try again.");
    }
  }

  const inputClass = "mt-2 w-full rounded-xl border border-white/10 bg-[#08120D] p-4 text-white outline-none focus:border-green-500";
  const consentClass = "flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-gray-300";

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-8" aria-busy={status === "saving"}>
      <section className="rounded-3xl border border-amber-400/20 bg-amber-500/10 p-7 sm:p-9">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Permission comes first</p>
        <h2 className="mt-3 text-2xl font-bold text-amber-50">Choose exactly what ScalesWiki may do.</h2>
        <p className="mt-3 leading-7 text-amber-50/80">Your profile remains private and awaiting review after submission. Optional permissions are unchecked unless you choose them, and feedback you have submitted separately never becomes public through this form.</p>
        <div className="mt-6 space-y-4">
          <label className={consentClass}>
            <input name="representativeAuthorized" type="checkbox" required defaultChecked={Boolean(initialProfile.representative_authorized)} className="mt-1 h-4 w-4 accent-green-600" />
            <span><strong className="text-white">Required:</strong> I confirm that I am authorized to provide information and consent choices for this organization.</span>
          </label>
          <label className={consentClass}>
            <input name="directoryConsent" type="checkbox" defaultChecked={Boolean(initialProfile.directory_consent)} className="mt-1 h-4 w-4 accent-green-600" />
            <span>After separate ScalesWiki review and approval, this organization may be listed in a public Rescue Partner directory.</span>
          </label>
          <label className={consentClass}>
            <input name="nameLogoConsent" type="checkbox" defaultChecked={Boolean(initialProfile.name_logo_consent)} className="mt-1 h-4 w-4 accent-green-600" />
            <span>ScalesWiki may use our approved organization name and submitted logo in partnership announcements or approved partner materials outside the directory.</span>
          </label>
          <label className={consentClass}>
            <input name="spotlightContactConsent" type="checkbox" defaultChecked={Boolean(initialProfile.spotlight_contact_consent)} className="mt-1 h-4 w-4 accent-green-600" />
            <span>ScalesWiki may contact us about a possible Rescue Spotlight. This is not consent to publish a Spotlight.</span>
          </label>
          <label className={consentClass}>
            <input name="publicLinksConsent" type="checkbox" defaultChecked={Boolean(initialProfile.public_links_consent)} className="mt-1 h-4 w-4 accent-green-600" />
            <span>If a profile is later approved, its submitted website and social links may appear publicly. Account email addresses remain private.</span>
          </label>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-[#102017] p-7 sm:p-9">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-green-400">Organization information</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-gray-200 sm:col-span-2">Organization name <span className="text-green-400">*</span><input name="name" required defaultValue={initialProfile.name || ""} className={inputClass} /></label>
          <label className="block text-sm font-semibold text-gray-200">City<input name="city" defaultValue={initialProfile.city || ""} className={inputClass} /></label>
          <label className="block text-sm font-semibold text-gray-200">State or region<input name="stateRegion" defaultValue={initialProfile.state_region || ""} className={inputClass} /></label>
          <label className="block text-sm font-semibold text-gray-200 sm:col-span-2">Service area<input name="serviceArea" defaultValue={initialProfile.service_area || ""} placeholder="Example: Northeast Ohio and neighboring counties" className={inputClass} /></label>
          <label className="block text-sm font-semibold text-gray-200 sm:col-span-2">Species commonly handled<input name="speciesHandled" defaultValue={initialProfile.species_handled?.join(", ") || ""} placeholder="Ball pythons, bearded dragons, native turtles" className={inputClass} /><span className="mt-1 block text-xs font-normal text-gray-500">Separate entries with commas.</span></label>
          <label className="block text-sm font-semibold text-gray-200 sm:col-span-2">Services offered<input name="servicesOffered" defaultValue={initialProfile.services_offered?.join(", ") || ""} placeholder="Adoption, surrender intake, rehabilitation, education events" className={inputClass} /><span className="mt-1 block text-xs font-normal text-gray-500">Separate entries with commas.</span></label>
          <label className="block text-sm font-semibold text-gray-200 sm:col-span-2">Organization description<textarea name="publicDescription" rows={5} maxLength={2000} defaultValue={initialProfile.public_description || ""} placeholder="Describe the organization, its mission, and the communities it serves." className={inputClass} /><span className="mt-1 block text-xs font-normal text-gray-500">Stored privately now; used publicly only after review and directory consent.</span></label>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-[#102017] p-7 sm:p-9">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-green-400">Links and contact preference</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-gray-200 sm:col-span-2">Website<input name="websiteUrl" type="url" defaultValue={initialProfile.website_url || ""} placeholder="https://example.org" className={inputClass} /></label>
          <label className="block text-sm font-semibold text-gray-200">Facebook<input name="facebookUrl" type="url" defaultValue={initialProfile.facebook_url || ""} placeholder="https://facebook.com/..." className={inputClass} /></label>
          <label className="block text-sm font-semibold text-gray-200">Instagram<input name="instagramUrl" type="url" defaultValue={initialProfile.instagram_url || ""} placeholder="https://instagram.com/..." className={inputClass} /></label>
          <label className="block text-sm font-semibold text-gray-200 sm:col-span-2">Preferred private contact method<input name="preferredContactMethod" defaultValue={initialProfile.preferred_contact_method || ""} placeholder="Example: Email the organization account" className={inputClass} /><span className="mt-1 block text-xs font-normal text-gray-500">This preference is never published automatically.</span></label>
        </div>
      </section>

      {message && <p role="status" className={`rounded-xl p-4 text-sm ${status === "error" ? "bg-red-950/40 text-red-300" : "bg-green-950/40 text-green-300"}`}>{message}</p>}
      <button type="submit" disabled={status === "saving"} className="w-full rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-60">{status === "saving" ? "Saving private profile..." : initialProfile.profile_status === "submitted" ? "Update Private Profile and Consent" : "Submit Private Profile for Review"}</button>
      <p className="text-center text-xs leading-5 text-gray-500">Submitting does not publish the profile, create an endorsement, or authorize use beyond the boxes selected above.</p>
    </form>
  );
}

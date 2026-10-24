import type { Metadata } from "next";
import Link from "next/link";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { createClient as createAdminClient } from "@supabase/supabase-js";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Founding Rescue Partners",
  description: "Join ScalesWiki free as a Founding Rescue Partner and help shape practical reptile education for adopters, keepers, and rescue communities.",
  alternates: { canonical: "/community/rescue-partners" },
};

const benefits = [
  ["Shape adopter resources", "Tell us which care sheets, checklists, and lessons would make the greatest difference after adoption."],
  ["Vote on what comes next", "Help prioritize upcoming species guides and practical Academy resources."],
  ["Learn and test for free", "Explore ScalesWiki, track Academy progress, and give honest feedback from a rescue perspective."],
  ["Optional future Spotlight", "Interested partners may be considered for a future Rescue Spotlight, always with permission before anything is published."],
];

const expectations = [
  "Create one free ScalesWiki community account for your organization or representative.",
  "Explore the current resources when your schedule allows.",
  "Share practical feedback about what reptile adopters need most.",
  "Choose separately whether you want to participate in any future public Spotlight.",
];

function getRuntimeEnv() {
  try {
    return getCloudflareContext().env as unknown as Record<string, string | undefined>;
  } catch {
    return process.env;
  }
}

export default async function RescuePartnersPage() {
  const env = getRuntimeEnv();
  let publishedPartners: Array<{
    id: string;
    name: string;
    website_url: string | null;
    city: string | null;
    state_region: string | null;
    service_area: string | null;
    public_description: string | null;
    species_handled: string[];
    services_offered: string[];
    facebook_url: string | null;
    instagram_url: string | null;
    public_links_consent: boolean;
  }> = [];

  if (env.NEXT_PUBLIC_SUPABASE_URL && env.SUPABASE_SERVICE_ROLE_KEY) {
    const admin = createAdminClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
      auth: { autoRefreshToken: false, persistSession: false },
    });
    const { data, error } = await admin
      .from("partner_organizations")
      .select("id,name,website_url,city,state_region,service_area,public_description,species_handled,services_offered,facebook_url,instagram_url,public_links_consent")
      .eq("profile_status", "published")
      .eq("directory_consent", true)
      .eq("representative_authorized", true)
      .order("name");
    if (error) console.error("[Rescue Partner Directory] Load failed", error.message);
    else publishedPartners = data || [];
  }

  return (
    <main className="min-h-screen bg-[#08120D] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-green-400">Founding Rescue Partners</p>
          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">Help us build better education for reptile adopters.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
            ScalesWiki is inviting a small group of reptile rescues and sanctuaries to help shape practical, evidence-informed resources around the needs they see every day.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/auth/register?role=rescue" className="rounded-xl bg-green-600 px-8 py-4 text-center text-lg font-semibold transition hover:bg-green-500">
              Join Free as a Rescue Partner
            </Link>
            <a href="mailto:partners@scaleswiki.org" className="rounded-xl border border-green-600 px-8 py-4 text-center text-lg font-semibold text-green-300 transition hover:bg-green-950/50">
              Ask a Question
            </a>
          </div>
          <p className="mt-5 text-sm text-gray-400">No donation, endorsement, content contribution, or public profile is required.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map(([title, description]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-[#102017] p-7">
              <h2 className="text-2xl font-semibold text-green-300">{title}</h2>
              <p className="mt-3 leading-7 text-gray-300">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-green-500/20 bg-gradient-to-br from-[#13231B] to-[#0B1411] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">A lightweight collaboration</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What we ask from founding partners</h2>
          <ul className="mt-7 space-y-4 text-gray-300">
            {expectations.map((expectation) => (
              <li key={expectation} className="rounded-xl bg-black/20 p-4">✓ {expectation}</li>
            ))}
          </ul>
        </div>
      </section>

      {publishedPartners.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8" aria-labelledby="partner-directory-heading">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">Published with permission</p>
            <h2 id="partner-directory-heading" className="mt-3 text-3xl font-bold sm:text-4xl">Rescue Partner directory</h2>
            <p className="mt-4 leading-7 text-gray-300">These organizations authorized a public listing and were reviewed by ScalesWiki before publication.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {publishedPartners.map((partner) => {
              const location = [partner.city, partner.state_region].filter(Boolean).join(", ");
              const links = partner.public_links_consent
                ? [{ label: "Website", href: partner.website_url }, { label: "Facebook", href: partner.facebook_url }, { label: "Instagram", href: partner.instagram_url }].filter((entry): entry is { label: string; href: string } => Boolean(entry.href))
                : [];
              return (
                <article key={partner.id} className="rounded-2xl border border-green-500/20 bg-[#102017] p-7">
                  <h3 className="text-2xl font-semibold text-white">{partner.name}</h3>
                  {(location || partner.service_area) && <p className="mt-2 text-sm text-green-300">{location || partner.service_area}{location && partner.service_area ? ` · Serves ${partner.service_area}` : ""}</p>}
                  <p className="mt-4 leading-7 text-gray-300">{partner.public_description}</p>
                  {partner.species_handled?.length > 0 && <p className="mt-4 text-sm text-gray-400"><strong className="text-gray-200">Species:</strong> {partner.species_handled.join(", ")}</p>}
                  {partner.services_offered?.length > 0 && <p className="mt-2 text-sm text-gray-400"><strong className="text-gray-200">Services:</strong> {partner.services_offered.join(", ")}</p>}
                  {links.length > 0 && <div className="mt-5 flex flex-wrap gap-3">{links.map(({ label, href }) => <a key={label} href={href} target="_blank" rel="noreferrer" className="rounded-lg border border-green-600 px-4 py-2 text-sm font-semibold text-green-300 transition hover:bg-green-950/50">{label}</a>)}</div>}
                </article>
              );
            })}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-amber-400/20 bg-amber-500/10 p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-amber-100">Built on consent and transparency</h2>
          <p className="mt-5 leading-7 text-amber-50/80">
            Joining does not imply that your organization endorses ScalesWiki, has medically reviewed its content, or has entered a sponsorship. Your role and preferences remain private unless you explicitly approve a future public collaboration.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
        <h2 className="text-4xl font-bold">Bring the rescue perspective into ScalesWiki.</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
          Create a free account, choose “Rescue or adoption organization,” and tell us which resources would best support the animals and adopters you serve.
        </p>
        <Link href="/auth/register?role=rescue" className="mt-8 inline-flex rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold transition hover:bg-green-500">
          Become a Founding Rescue Partner
        </Link>
      </section>

      <Footer />
    </main>
  );
}

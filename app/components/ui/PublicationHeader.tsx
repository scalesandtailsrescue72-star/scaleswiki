import { GUIDE } from "@/lib/guide";
import { VetReviewBadge } from "@/app/components/ui/VetReviewBadge";

export function PublicationHeader() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">

        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">
            ScalesWiki Publication
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {GUIDE.title}
          </h1>

          <p className="mt-3 text-xl italic text-slate-600">
            {GUIDE.scientificName}
          </p>

          <div className="mt-6 h-px bg-slate-200" />

          <p className="mt-6 text-lg text-slate-700">
            {GUIDE.edition} • Version {GUIDE.version}
          </p>

          <p className="mt-2 text-slate-500">
            Trusted reptile husbandry reference
          </p>
        </header>

        <div className="mt-10 grid gap-6 border-y border-slate-200 py-8 md:grid-cols-2">

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Publisher
            </h3>
            <p className="mt-2 text-lg font-medium text-slate-900">
              {GUIDE.publisher}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Last Updated
            </h3>
            <p className="mt-2 text-lg font-medium text-slate-900">
              {GUIDE.lastUpdated}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Audience
            </h3>
            <p className="mt-2 text-lg font-medium text-slate-900">
              Beginner Keepers
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Publication Status
            </h3>

            <div className="mt-3">
              <VetReviewBadge />
            </div>
          </div>

        </div>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            Purpose
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            This guide has been developed by ScalesWiki to provide practical,
            evidence-informed husbandry recommendations for keepers, educators,
            rescue organizations, and veterinary professionals. Every effort is
            made to keep this publication current, accurate, and based on modern
            reptile care standards. Veterinary review status is displayed within
            each edition of the guide.
          </p>
        </section>

        <section className="mt-10 rounded-xl bg-slate-50 p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Recommended Citation
          </h2>

          <p className="mt-3 text-slate-700">
            ScalesWiki. <em>{GUIDE.title}</em>. {GUIDE.edition}. Version{" "}
            {GUIDE.version}. {GUIDE.lastUpdated}.
          </p>
        </section>

      </div>
    </section>
  );
}
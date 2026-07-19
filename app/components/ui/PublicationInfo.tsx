import { GUIDE } from "@/lib/guide";

export function PublicationInfo() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#101B15] p-8">
      <h2 className="text-3xl font-bold text-white">
        Publication Information
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div>
          <p className="font-semibold text-white">Edition</p>
          <p>{GUIDE.edition}</p>
        </div>

        <div>
          <p className="font-semibold text-white">Version</p>
          <p>{GUIDE.version}</p>
        </div>

        <div>
          <p className="font-semibold text-white">Publisher</p>
          <p>{GUIDE.publisher}</p>
        </div>

        <div>
          <p className="font-semibold text-white">
            Last Updated
          </p>
          <p>{GUIDE.lastUpdated}</p>
        </div>

        <div className="md:col-span-2">
          <p className="font-semibold text-white">
            Copyright
          </p>

          <p>{GUIDE.copyright}</p>
        </div>

      </div>
    </section>
  );
}
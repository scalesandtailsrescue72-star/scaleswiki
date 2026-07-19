import Image from "next/image";
import { GUIDE } from "@/lib/guide";

export function PublicationCover() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="relative h-[500px] w-full">
       <Image
  src="/images/species/ball-python/cover.jpeg"
  alt={`${GUIDE.species} Cover`}
  fill
  priority
  sizes="(max-width: 768px) 100vw, 1200px"
  className="object-cover"
/>
        </div>

        <div className="px-10 py-12 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">
            {GUIDE.publisher}
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
            {GUIDE.title}
          </h1>

          <p className="mt-4 text-2xl italic text-slate-600">
            {GUIDE.scientificName}
          </p>

          <p className="mt-6 text-lg text-slate-600">
            {GUIDE.subtitle}
          </p>

          <div className="mx-auto my-10 h-px w-32 bg-slate-300" />

          <p className="text-lg font-medium text-slate-800">
            {GUIDE.edition}
          </p>

          <p className="mt-2 text-lg text-slate-700">
            Version {GUIDE.version}
          </p>

          <p className="mt-2 text-slate-500">
            {GUIDE.lastUpdated}
          </p>

          <div className="mx-auto my-10 h-px w-32 bg-slate-300" />

          <p className="text-slate-700">
            Published by
          </p>

          <p className="mt-2 text-xl font-semibold text-slate-900">
            {GUIDE.publisher}
          </p>

          <p className="mt-8 text-sm text-slate-500">
            {GUIDE.copyright}
          </p>

        </div>

      </div>
    </section>
  );
}
import { GUIDE } from "@/lib/guide";

export function PublicationCover() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="relative h-[500px] w-full bg-gray-200">
        <img
          src="/images/species/ball-python/cover.jpg"
          alt={`${GUIDE.species} Cover`}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
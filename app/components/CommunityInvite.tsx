import Link from "next/link";

export function CommunityInvite() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="rounded-3xl border border-green-500/25 bg-gradient-to-br from-green-950/50 to-[#101B15] p-8 text-center sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-green-400">Founding Community</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Be one of the first 25 people inside ScalesWiki.</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          Join keepers, rescues, veterinary professionals, educators, and responsible reptile businesses helping shape the resources and community programs we build next.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/auth/register" className="rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-500">Join Free</Link>
          <Link href="/community" className="rounded-xl border border-green-600 px-8 py-4 text-lg font-semibold text-green-300 transition hover:bg-green-950/50">See the Community Vision</Link>
        </div>
      </div>
    </section>
  );
}

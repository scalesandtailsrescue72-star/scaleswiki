import Image from "next/image";
import Link from "next/link";

export function FoundersTreePreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-[#101B15] p-10 text-center">
        <Image
          src="/branding/founders-tree-logo.svg"
          alt="Founders Tree"
          width={140}
          height={140}
          className="mx-auto mb-6"
        />

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
          Community
        </p>

        <h2 className="mt-2 text-4xl font-bold text-white">The Founders Tree</h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          Every great tree begins with a single seed. Every supporter adds a new leaf.
          Every partnership grows another branch.
        </p>

        <div className="mt-12 rounded-2xl border border-green-500/20 bg-green-950/40 p-10">
          <h3 className="text-2xl font-semibold text-white">Become a Founding Supporter</h3>

          <p className="mt-5 text-gray-300">
            Help expand free reptile education, independent veterinary review, and the
            rescue mission behind ScalesWiki. Founding supporters are recognized as the
            people who helped the project grow from the beginning.
          </p>

          <Link
            href="/founders-tree"
            className="mt-8 inline-flex rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-500"
          >
            Join the Founders Tree
          </Link>
        </div>
      </div>
    </section>
  );
}

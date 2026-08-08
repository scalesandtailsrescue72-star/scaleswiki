import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07110C]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">

        <p>
          © 2026 ScalesWiki
        </p>

        <p>
          Trusted reptile care, built from rescue experience.
        </p>

        <Link
          href="/veterinary-review"
          className="text-green-400 transition hover:text-green-300"
        >
          Veterinary Review Program
        </Link>

      </div>
    </footer>
  );
}
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:px-8 lg:py-32">
      <span className="rounded-full border border-[#2ECC71]/30 bg-[#2ECC71]/10 px-4 py-1 text-sm font-medium text-[#2ECC71]">
        Trusted reptile care from rescue experience
      </span>

      <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
        Reptile knowledge that helps every keeper thrive.
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
        Explore evidence-based care guides, printable resources, and a growing learning library built for beginners and seasoned keepers alike.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link href="/species" className="rounded-xl bg-[#2ECC71] px-8 py-4 text-lg font-semibold text-[#08120D] transition hover:bg-[#27AE60]">
          Browse Species Guides
        </Link>
        <Link href="/shop" className="rounded-xl border border-[#2ECC71] px-8 py-4 text-lg font-semibold text-[#2ECC71] transition hover:bg-[#2ECC71]/10">
          Explore Shop
        </Link>
      </div>
    </section>
  );
}

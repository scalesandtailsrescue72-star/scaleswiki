export function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="rounded-3xl border border-[#2ECC71]/20 bg-gradient-to-br from-[#1A2D1F] to-[#08120D] p-8 sm:p-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2ECC71]">Stay in the loop</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Get new care guides and rescue-backed updates in your inbox.</h2>
          <p className="mt-4 text-lg text-gray-300">
            Join our list for practical advice, printable resources, and the latest from the ScalesWiki community.
          </p>
        </div>

        <form className="mt-8 flex flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-400"
          />
          <button className="rounded-xl bg-[#2ECC71] px-6 py-3 font-semibold text-[#08120D] transition hover:bg-[#27AE60]">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

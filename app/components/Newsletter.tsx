export function Newsletter() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">

      <div className="rounded-3xl border border-white/10 bg-[#101B15] p-10 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
          Newsletter
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Stay Updated
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          Receive new care guides, Academy courses,
          printable resources, and rescue updates.
        </p>

        <form className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-xl border border-white/10 bg-[#15211A] px-5 py-4 text-white outline-none"
          />

          <button
            type="submit"
            className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-500"
          >
            Subscribe
          </button>

        </form>

      </div>

    </section>
  );
}
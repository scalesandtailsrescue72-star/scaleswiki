import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import ContinueLearning from "@/app/components/dashboard/ContinueLearning";
import DashboardStats from "@/app/components/dashboard/DashboardStats";
import MyCourses from "@/app/components/dashboard/MyCourses";

const quickLinks = [
  {
    title: "Academy",
    description: "Browse lessons, courses, and structured reptile education.",
    href: "/academy",
  },
  {
    title: "Ball Python Guide",
    description: "Return to the full care guide and husbandry reference.",
    href: "/species/ball-python",
  },
  {
    title: "Articles",
    description: "Read evidence-informed husbandry and preventive-care articles.",
    href: "/articles",
  },
  {
    title: "Supplies Checklist",
    description: "Review the Ball Python setup checklist before you shop.",
    href: "/shop/ball-python-supplies",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#08120D] text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#102017] to-[#0C1711] p-7 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            My ScalesWiki
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Welcome back.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg">
            Pick up where you left off, track your Academy progress, revisit care resources,
            and keep your learning organized in one place.
          </p>
        </div>

        <div className="mt-10">
          <ContinueLearning />
        </div>

        <section className="mt-10" aria-labelledby="progress-heading">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                Progress
              </p>
              <h2 id="progress-heading" className="mt-2 text-2xl font-bold sm:text-3xl">
                Your Academy at a glance
              </h2>
            </div>
          </div>
          <DashboardStats />
        </section>

        <section className="mt-14" aria-labelledby="quick-links-heading">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
            Quick Links
          </p>
          <h2 id="quick-links-heading" className="mt-2 text-2xl font-bold sm:text-3xl">
            Keep exploring ScalesWiki
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-white/10 bg-[#102017] p-5 transition hover:border-green-500/40 hover:bg-[#13271C]"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <span className="text-green-400 transition group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-400">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <MyCourses />

        <section className="mt-14 rounded-2xl border border-white/10 bg-[#0D1912] p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <h2 className="text-xl font-semibold">Need a care reference instead of a lesson?</h2>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Your dashboard is for learning progress. Species guides and articles remain available anytime without changing your course progress.
            </p>
          </div>
          <Link
            href="/species"
            className="mt-5 inline-flex shrink-0 rounded-xl border border-green-600 px-5 py-3 text-sm font-semibold text-green-300 transition hover:bg-green-950 sm:mt-0"
          >
            Browse Species
          </Link>
        </section>
      </section>

      <Footer />
    </main>
  );
}

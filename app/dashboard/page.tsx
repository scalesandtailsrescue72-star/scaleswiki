import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import ContinueLearning from "@/app/components/dashboard/ContinueLearning";
import DashboardStats from "@/app/components/dashboard/DashboardStats";
import MyCourses from "@/app/components/dashboard/MyCourses";
import { createClient } from "@/app/lib/database/server";

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

const partnerDashboardContent = {
  rescue: {
    eyebrow: "Founding Rescue Partner",
    title: "Welcome to your Rescue Partner dashboard.",
    description:
      "Your rescue perspective can help ScalesWiki build clearer resources for adopters. Start with the partner overview, explore the current education, and share ideas whenever your schedule allows.",
    primaryHref: "/community/rescue-partners",
    primaryLabel: "View the Rescue Partner Program",
    secondaryHref: "mailto:partners@scaleswiki.org?subject=Founding%20Rescue%20Partner%20Question",
    secondaryLabel: "Contact ScalesWiki",
  },
  veterinary: {
    eyebrow: "Founding Veterinary Reviewer",
    title: "Welcome to your Veterinary Reviewer dashboard.",
    description:
      "Your account gives you one place to review the program boundaries, inspect current educational material, and respond only to clearly scoped requests that fit your expertise and availability.",
    primaryHref: "/veterinary-review/founding-reviewers",
    primaryLabel: "View the Reviewer Program",
    secondaryHref: "/veterinary-review",
    secondaryLabel: "Read the Review Standards",
  },
} as const;

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const communityRole = user?.user_metadata?.community_role as string | undefined;
  const spotlightInterest = Boolean(user?.user_metadata?.spotlight_interest);
  const guideInterest = user?.user_metadata?.guide_interest as string | undefined;
  const guideLabels: Record<string, string> = {
    "bearded-dragon": "Bearded Dragon",
    "leopard-gecko": "Leopard Gecko",
    "corn-snake": "Corn Snake",
    "crested-gecko": "Crested Gecko",
    "blue-tongued-skink": "Blue-Tongued Skink",
  };
  const roleLabels: Record<string, string> = {
    keeper: "Reptile keeper",
    rescue: "Rescue or adoption organization",
    veterinary: "Veterinarian or veterinary professional",
    store: "Reptile store or responsible business",
    educator: "Educator or content creator",
    breeder: "Breeder",
    other: "Community member",
  };
  const partnerContent =
    communityRole === "rescue" || communityRole === "veterinary"
      ? partnerDashboardContent[communityRole]
      : null;

  return (
    <main className="min-h-screen bg-[#08120D] text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#102017] to-[#0C1711] p-7 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            {user && partnerContent ? partnerContent.eyebrow : "My ScalesWiki"}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {user
              ? partnerContent?.title ?? "Welcome back."
              : "Save your learning progress."}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg">
            {user
              ? partnerContent?.description ??
                "Pick up where you left off, track your Academy progress, revisit care resources, and keep your learning organized in one place."
              : "Create a free ScalesWiki account to track completed lessons, continue where you left off, take final exams, and keep certificates tied to your profile."}
          </p>

          {!user && (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/auth/register" className="rounded-xl bg-green-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-green-500">
                Create Free Account
              </Link>
              <Link href="/auth/login" className="rounded-xl border border-green-600 px-6 py-3 text-center font-semibold text-green-300 transition hover:bg-green-950/50">
                Sign In
              </Link>
            </div>
          )}

          {user && partnerContent && (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href={partnerContent.primaryHref} className="rounded-xl bg-green-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-green-500">
                {partnerContent.primaryLabel}
              </Link>
              <Link href={partnerContent.secondaryHref} className="rounded-xl border border-green-600 px-6 py-3 text-center font-semibold text-green-300 transition hover:bg-green-950/50">
                {partnerContent.secondaryLabel}
              </Link>
            </div>
          )}
        </div>

        {user ? (
          <>
            <section className="mt-10 rounded-2xl border border-green-500/20 bg-green-950/20 p-7" aria-labelledby="community-heading">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">Founding Community</p>
              <h2 id="community-heading" className="mt-2 text-2xl font-bold">You are helping build ScalesWiki from the beginning.</h2>
              <div className="mt-5 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl bg-black/20 p-4"><span className="block text-gray-400">Membership</span><strong className="mt-1 block text-green-300">Founding community</strong></div>
                <div className="rounded-xl bg-black/20 p-4"><span className="block text-gray-400">Community role</span><strong className="mt-1 block text-white">{communityRole ? roleLabels[communityRole] ?? "Community member" : "Not selected yet"}</strong></div>
                <div className="rounded-xl bg-black/20 p-4"><span className="block text-gray-400">Guide vote</span><strong className="mt-1 block text-white">{guideInterest ? guideLabels[guideInterest] ?? "Submitted" : "No preference yet"}</strong></div>
                <div className="rounded-xl bg-black/20 p-4"><span className="block text-gray-400">Spotlight interest</span><strong className="mt-1 block text-white">{spotlightInterest ? "Interested" : "Not selected"}</strong></div>
              </div>
              <Link
                href={partnerContent?.primaryHref ?? "/community"}
                className="mt-5 inline-flex font-semibold text-green-300 hover:text-green-200"
              >
                {partnerContent?.primaryLabel ?? "Explore the community vision"} →
              </Link>
            </section>

            <div className="mt-10"><ContinueLearning /></div>

            <section className="mt-10" aria-labelledby="progress-heading">
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">Progress</p>
                  <h2 id="progress-heading" className="mt-2 text-2xl font-bold sm:text-3xl">Your Academy at a glance</h2>
                </div>
              </div>
              <DashboardStats />
            </section>

            <MyCourses />
          </>
        ) : (
          <section className="mt-10 rounded-2xl border border-green-500/20 bg-green-950/20 p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">Academy preview</p>
            <h2 className="mt-2 text-2xl font-bold">Ball Python 101 is ready when you are.</h2>
            <p className="mt-3 max-w-3xl leading-7 text-gray-300">Explore the Academy now, then create an account when you want progress tracking, exams, and certificates.</p>
            <Link href="/academy/ball-python" className="mt-5 inline-flex rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-500">Explore Ball Python 101</Link>
          </section>
        )}

        <section className="mt-14" aria-labelledby="quick-links-heading">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">Quick Links</p>
          <h2 id="quick-links-heading" className="mt-2 text-2xl font-bold sm:text-3xl">Keep exploring ScalesWiki</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item) => (
              <Link key={item.title} href={item.href} className="group rounded-2xl border border-white/10 bg-[#102017] p-5 transition hover:border-green-500/40 hover:bg-[#13271C]">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <span className="text-green-400 transition group-hover:translate-x-1" aria-hidden="true">→</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-400">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-[#0D1912] p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <h2 className="text-xl font-semibold">Need a care reference instead of a lesson?</h2>
            <p className="mt-2 text-sm leading-6 text-gray-400">Species guides and articles remain available anytime, whether or not you are signed in.</p>
          </div>
          <Link href="/species" className="mt-5 inline-flex shrink-0 rounded-xl border border-green-600 px-5 py-3 text-sm font-semibold text-green-300 transition hover:bg-green-950 sm:mt-0">Browse Species</Link>
        </section>
      </section>

      <Footer />
    </main>
  );
}

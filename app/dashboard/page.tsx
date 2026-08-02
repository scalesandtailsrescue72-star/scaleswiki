import ContinueLearning from "@/app/components/dashboard/ContinueLearning";
import DashboardStats from "@/app/components/dashboard/DashboardStats";
import MyCourses from "@/app/components/dashboard/MyCourses";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#08120D] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">

        <h1 className="text-5xl font-bold text-green-300">
          Welcome Back 👋
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-gray-300">
          Continue your ScalesWiki Academy journey,
          track your progress,
          and earn professional certifications.
        </p>

        <div className="mt-12">
          <ContinueLearning />
        </div>

        <div className="mt-12">
          <DashboardStats />
        </div>

        <MyCourses />

      </section>
    </main>
  );
}
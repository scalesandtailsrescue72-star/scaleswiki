import { notFound } from "next/navigation";

import { getCourseBySlug } from "@/app/academy/data";
import Certificate from "@/app/academy/components/Certificate";

type CertificatePageProps = {
  params:
    | { slug: string }
    | Promise<{ slug: string }>;
};

export default async function CertificatePage({
  params,
}: CertificatePageProps) {
  const resolvedParams = await params;

  const course = getCourseBySlug(resolvedParams.slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#08120D] py-16 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <Certificate
          courseTitle={course.title}
          courseSlug={course.slug}
        />
      </div>
    </main>
  );
}
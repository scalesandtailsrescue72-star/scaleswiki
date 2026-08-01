import { notFound } from "next/navigation";

import { CoursePage } from "@/app/academy/lib/coursePage";
import { getCourseBySlug } from "@/app/academy/data";

type PageProps = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const resolved = (await params) as { slug: string };
  const course = getCourseBySlug(resolved.slug);

  if (!course) {
    notFound();
  }

  return <CoursePage course={course} />;
}

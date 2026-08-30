import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the ScalesWiki Community",
  description: "Create a free ScalesWiki community account, track Academy progress, and vote for the reptile guide you want next.",
  robots: { index: false, follow: false },
};

export default function RegisterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

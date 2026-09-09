import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Center",
  description: "Contact ScalesWiki for account help, resource questions, corrections, technical issues, or partnership inquiries.",
  alternates: { canonical: "/support" },
};

export default function SupportLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://scaleswiki.org"),
  title: { default: "ScalesWiki | Evidence-Informed Reptile Care", template: "%s | ScalesWiki" },
  description: "Trusted reptile care guides, practical husbandry resources, rescue-backed education, and structured learning for responsible reptile keepers.",
  applicationName: "ScalesWiki",
  alternates: { canonical: "/" },
  icons: {
    icon: "/scaleswiki-favicon.svg",
    shortcut: "/scaleswiki-favicon.svg",
    apple: "/scaleswiki-favicon.svg",
  },
  openGraph: {
    type: "website",
    url: "https://scaleswiki.org",
    siteName: "ScalesWiki",
    title: "ScalesWiki | Evidence-Informed Reptile Care",
    description: "Trusted reptile care guides, practical husbandry resources, rescue-backed education, and structured learning for responsible reptile keepers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScalesWiki | Evidence-Informed Reptile Care",
    description: "Trusted reptile care guides, practical husbandry resources, rescue-backed education, and structured learning for responsible reptile keepers.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ScalesWiki" },
      { name: "description", content: "Trusted reptile care guides, printable resources, and rescue-backed learning." },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4" style={{ background: "var(--bg-main)" }}>
      <h1 className="text-4xl font-bold">Page not found</h1>
      <a href="/" className="underline transition" style={{ color: "var(--green)" }}>Back to home</a>
    </div>
  ),
  component: RootComponent,
});

function RootComponent() { return <RootDocument><Outlet /></RootDocument>; }

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body className="min-h-full flex flex-col" style={{ background: "var(--bg-main)" }}>
        <header className="sticky top-0 z-50 border-b" style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(8,18,13,0.95)", backdropFilter: "blur(8px)" }}>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="/" className="flex items-center gap-2 text-xl font-semibold tracking-wide" style={{ color: "var(--green)" }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="6" fill="#2ECC71"/>
                <path d="M7 14l4 4 10-10" stroke="#0B1411" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              ScalesWiki
            </a>
            <nav className="hidden items-center gap-8 md:flex">
              <a href="/species" className="text-sm transition hover:text-white" style={{ color: "var(--text-gray)" }}>Species</a>
              <a href="/guides" className="text-sm transition hover:text-white" style={{ color: "var(--text-gray)" }}>Shop</a>
              <a href="/#academy" className="text-sm transition hover:text-white" style={{ color: "var(--text-gray)" }}>Academy</a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)", background: "#07110C" }}>
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8" style={{ color: "var(--text-muted)" }}>
            <span>&copy; 2026 ScalesWiki</span>
            <span>Trusted reptile care, built from rescue experience.</span>
          </div>
        </footer>
        <Scripts />
      </body>
    </html>
  );
}

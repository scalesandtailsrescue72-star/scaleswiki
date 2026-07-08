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
    <div className="flex min-h-screen flex-col items-center justify-center gap-4" style={{ background: "var(--bg-dark)" }}>
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
      <body className="min-h-full flex flex-col" style={{ background: "var(--bg-dark)" }}>
        <header className="sticky top-0 z-50 border-b" style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(8,18,13,0.95)", backdropFilter: "blur(8px)" }}>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="/" className="text-xl font-semibold tracking-wide" style={{ color: "var(--green)" }}>ScalesWiki</a>
            <nav className="hidden items-center gap-6 text-sm md:flex" style={{ color: "var(--text-gray)" }}>
              <a href="/species" className="transition hover:text-white">Species</a>
              <a href="/guides" className="transition hover:text-white">Shop</a>
              <a href="/#academy" className="transition hover:text-white">Academy</a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t py-8 text-center text-sm" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p style={{ color: "var(--text-muted)" }}>&copy; 2026 ScalesWiki</p>
          <p className="mt-1" style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>Trusted reptile care, built from rescue experience.</p>
        </footer>
        <Scripts />
      </body>
    </html>
  );
}

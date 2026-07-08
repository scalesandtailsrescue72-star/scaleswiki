import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "~/styles/app.css?url";

const LOGO_URL =
  "https://pub-629428d185ca4960a0a73c850d32294b.r2.dev/generated-images/company_209816/edeb7ba2-05bf-4fb8-b281-3bf259c1b562.jpg";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "ScalesWiki — Trusted Reptile Care Guides Written by Experienced Rescuers and Reviewed by Veterinary Professionals",
      },
      {
        name: "description",
        content:
          "Trusted reptile care guides written by experienced rescuers and reviewed by veterinary professionals.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "icon",
        type: "image/jpeg",
        href: LOGO_URL,
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4" style={{ background: "var(--charcoal)", color: "var(--cream)" }}>
      <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Page not found</h1>
      <a href="/" style={{ color: "var(--amber)" }} className="underline hover:opacity-80 transition-opacity">
        Back to home
      </a>
    </div>
  ),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <nav
          className="fixed top-0 left-0 right-0 z-50"
          style={{
            background: "linear-gradient(to bottom, rgba(10,26,10,0.9) 0%, transparent 100%)",
            backdropFilter: "blur(8px)",
            padding: "1.25rem 2rem",
          }}
        >
          <div
            className="mx-auto flex items-center gap-4"
            style={{ maxWidth: "1200px" }}
          >
            <a href="/" className="flex items-center gap-2 no-underline">
              <img
                src={LOGO_URL}
                alt="ScalesWiki"
                className="rounded-md flex-shrink-0"
                style={{ width: 32, height: 32, objectFit: "cover", borderRadius: 6 }}
              />
              <span
                className="font-bold tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.25rem",
                  color: "var(--cream)",
                  letterSpacing: "-0.02em",
                }}
              >
                ScalesWiki
              </span>
            </a>
            <span
              className="hidden sm:inline"
              style={{
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Trusted reptile care guides, written by rescuers &amp; reviewed by vets
            </span>
            <span
              className="hidden lg:inline ml-4"
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--amber)",
                fontWeight: 500,
                opacity: 0.75,
              }}
            >
              Scales &amp; Tails Rescue
            </span>
            <div className="flex items-center gap-3 ml-auto">
              <a
                href="/guides"
                className="no-underline transition-colors"
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text-body)",
                  letterSpacing: "0.03em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-body)")}
              >
                Shop PDFs
              </a>
              <a
                href="/species"
                className="no-underline transition-colors"
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text-body)",
                  letterSpacing: "0.03em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-body)")}
              >
                Care Sheets
              </a>
              <span
                className="flex-shrink-0"
                style={{
                  width: 1,
                  height: 16,
                  background: "rgba(247,244,238,0.15)",
                  margin: "0 0.25rem",
                }}
              />
              <a
                href="#"
                className="no-underline font-medium transition-colors"
                style={{
                  fontSize: "0.82rem",
                  color: "var(--amber)",
                  letterSpacing: "0.03em",
                  opacity: 0.9,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--cream)"; e.currentTarget.style.opacity = "1"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--amber)"; e.currentTarget.style.opacity = "0.9"; }}
              >
                Rescue Discount
              </a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer
          className="border-t px-8 py-8"
          style={{
            background: "var(--green-deep)",
            borderTop: "1px solid rgba(247,244,238,0.05)",
          }}
        >
          <div
            className="mx-auto flex flex-col sm:flex-row justify-between items-start gap-6"
            style={{ maxWidth: 1200 }}
          >
            <div className="flex flex-col gap-1">
              <span
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1rem",
                  color: "var(--cream)",
                }}
              >
                <img
                  src={LOGO_URL}
                  alt=""
                  className="inline-block align-middle mr-1"
                  style={{ width: 24, height: 24, borderRadius: 4, objectFit: "cover" }}
                />
                ScalesWiki
              </span>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                Community-vetted reptile care, built for keepers.
              </span>
              <a
                href="#"
                className="no-underline transition-colors"
                style={{
                  fontSize: "0.72rem",
                  color: "var(--amber)",
                  letterSpacing: "0.05em",
                  marginTop: "0.5rem",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--amber)")}
              >
                Rescue &amp; Organization Discount
              </a>
              <div
                className="flex items-center gap-1 mt-2"
                style={{ fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.04em" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--amber)", flexShrink: 0 }}>
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                A project of Scales &amp; Tails Reptile Rescue — North East Ohio
              </div>
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
              <span>Built with care for reptiles</span>
            </div>
          </div>
        </footer>
        <Scripts />
      </body>
    </html>
  );
}
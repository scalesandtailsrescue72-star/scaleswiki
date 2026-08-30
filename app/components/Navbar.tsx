"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { supabase } from "@/app/lib/database/supabase";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Community", href: "/community" },
  { label: "Species", href: "/species" },
  { label: "Articles", href: "/articles" },
  { label: "Academy", href: "/academy" },
  { label: "Shop", href: "/shop" },
];

export function Navbar() {
  const pathname = usePathname();
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const { data: { session } } = await supabase.auth.getSession();
      setLoggedIn(!!session);
    }
    loadUser();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setLoggedIn(!!session);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  async function handleLogout() {
    setMenuOpen(false);
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  const navLinkClass = (href: string) => {
    const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `text-sm font-medium transition ${active ? "text-green-400" : "text-gray-300 hover:text-white"}`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07110C]/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4">
          <Link href="/" className="flex items-center" aria-label="ScalesWiki home">
            <Image src="/logo/scaleswiki-logo.svg" alt="ScalesWiki" width={220} height={220} priority className="h-14 w-auto transition-transform duration-300 hover:scale-105 md:h-16" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navItems.map((item) => <Link key={item.label} href={item.href} className={navLinkClass(item.href)}>{item.label}</Link>)}
            {!loggedIn ? (
              <>
                <Link href="/auth/login" className="rounded-lg border border-green-600 px-4 py-2 text-sm font-semibold text-green-300 transition hover:bg-green-900">Login</Link>
                <Link href="/auth/register" className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-500">Sign Up</Link>
              </>
            ) : (
              <>
                <Link href="/dashboard" className="rounded-lg border border-green-600 px-4 py-2 text-sm font-semibold text-green-300 transition hover:bg-green-900">Dashboard</Link>
                <button onClick={handleLogout} className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500">Logout</button>
              </>
            )}
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-gray-200 transition hover:border-green-500/50 hover:text-white md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <nav id="mobile-navigation" className="border-t border-white/10 pb-5 pt-3 md:hidden" aria-label="Mobile navigation">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className={`rounded-lg px-3 py-3 ${navLinkClass(item.href)}`}>{item.label}</Link>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
              {!loggedIn ? (
                <>
                  <Link href="/auth/login" className="rounded-lg border border-green-600 px-4 py-3 text-center text-sm font-semibold text-green-300">Login</Link>
                  <Link href="/auth/register" className="rounded-lg bg-green-600 px-4 py-3 text-center text-sm font-semibold text-white">Sign Up</Link>
                </>
              ) : (
                <>
                  <Link href="/dashboard" className="rounded-lg border border-green-600 px-4 py-3 text-center text-sm font-semibold text-green-300">Dashboard</Link>
                  <button onClick={handleLogout} className="rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white">Logout</button>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

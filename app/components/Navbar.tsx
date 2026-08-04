"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { supabase } from "@/app/lib/database/supabase";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Species", href: "/species" },
  { label: "Academy", href: "/academy" },
  { label: "Shop", href: "/shop" },
];

export function Navbar() {
  const pathname = usePathname();

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setLoggedIn(!!session);
    }

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setLoggedIn(!!session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();

    window.location.href = "/";
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07110C]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        <Link href="/" className="flex items-center">
          <Image
            src="/logo/scaleswiki-logo.svg"
            alt="ScalesWiki"
            width={220}
            height={220}
            priority
            className="h-16 w-auto transition-transform duration-300 hover:scale-105"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition ${
                  active
                    ? "text-green-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {!loggedIn ? (
            <>
              <Link
                href="/auth/login"
                className="rounded-lg border border-green-600 px-4 py-2 text-sm font-semibold text-green-300 transition hover:bg-green-900"
              >
                Login
              </Link>

              <Link
                href="/auth/register"
                className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-500"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/dashboard"
                className="rounded-lg border border-green-600 px-4 py-2 text-sm font-semibold text-green-300 transition hover:bg-green-900"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
              >
                Logout
              </button>
            </>
          )}
        </nav>

      </div>
    </header>
  );
}
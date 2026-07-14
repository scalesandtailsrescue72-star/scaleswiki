"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Species", href: "/species" },
  { label: "Academy", href: "/academy" },
  { label: "Shop", href: "/shop" },
];

export function Navbar() {
  const pathname = usePathname();

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
        </nav>

      </div>
    </header>
  );
}
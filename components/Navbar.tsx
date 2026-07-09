import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Care Guides", href: "#guides" },
  { label: "Academy", href: "#academy" },
  { label: "Rescue", href: "#rescue" },
];

export function Navbar() {
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

        <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}
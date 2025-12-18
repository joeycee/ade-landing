"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const nav = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all",
        scrolled
          ? "backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-black/5"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            {/* logo.png */}
            <div className="flex items-center gap-2 shrink-0 group bg-transparent">
              <Image
                src="/logo.png"
                alt={`Ade logo`}
                width={54}
                height={54}
                className="object-contain"
                priority
              />
            </div>

            <div className="leading-tight">
              <div className="text-xs text-black/60">Quoting that wins jobs</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-black/70 hover:text-black transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="mailto:hello@ade.co.nz"
              className="hidden sm:inline-flex rounded-xl px-3 py-2 text-sm font-medium text-black/70 hover:text-black hover:bg-black/5 transition"
            >
              Contact
            </a>

            {/* External link: use <a> */}
            <a
              href="https://app.ade.co.nz"
              className="inline-flex rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90 transition"
            >
              Open app
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}


"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#e9e2d9] bg-cream/95 px-5 py-3 shadow-lg shadow-black/5 backdrop-blur-xl sm:px-7">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="group flex items-center gap-2"
          aria-label="Caramel Web Studios home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-caramel text-sm font-bold text-white transition-transform group-hover:rotate-12">
            C
          </span>

          <span className="text-base font-semibold tracking-tight text-[#2b2621] sm:text-lg">
            Caramel
            <span className="ml-1 font-normal text-[#8b7968]">
              Web Studios
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#62574e] transition-colors hover:text-caramel"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="https://cal.com/caramelwebstudios/website-consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[#2b2621] px-5 py-3 text-sm font-medium text-white transition-all hover:bg-caramel md:inline-flex"
        >
          Book a consultation
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#2b2621] transition-colors hover:bg-[#eee7df] md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-[#e9e2d9] bg-cream p-5 shadow-xl shadow-black/10 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 text-base font-medium text-[#2b2621] transition-colors hover:bg-[#eee7df] hover:text-caramel"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 border-t border-[#e9e2d9] pt-4">
            <Link
              href="https://cal.com/caramelwebstudios/website-consultation"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2b2621] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-caramel"
            >
              Book a consultation
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

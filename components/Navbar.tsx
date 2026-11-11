
"use client";

import {  useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();



  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Who we help", href: "/#who-we-help" },
    { name: "Our approach", href: "/#approach" },
    { name: "Our work", href: "/our-work" },
    {
      name: "Accountant web design",
      href: "/web-design-for-accountants-london",
    },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-8 lg:px-10">
        <nav className="mx-auto flex max-w-360 items-center justify-between gap-4 rounded-full border border-caramel/20 bg-cream/95 px-5 py-3 shadow-lg shadow-charcoal/6 backdrop-blur-xl sm:px-7">
          {/* Logo */}
          <Link
            href="/"
            className="group flex shrink-0 flex-col leading-[.95]"
            aria-label="Caramel Web Studios home"
          >
            <span className="font-syne text-[12px] font-bold uppercase tracking-[.11em] text-charcoal sm:text-[13px]">
              Caramel <span className="text-caramel">Web</span>
            </span>
            <span className="mt-1 font-cormorant text-[11px] font-semibold tracking-[.16em] text-caramel">
              Studios
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="nav-link whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}

            <Link href="/book" className="nav-cta whitespace-nowrap">
              Book a call <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-charcoal/10 text-charcoal transition-colors hover:bg-caramel/10 xl:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!mobileOpen}
        className={`fixed inset-0 z-40 bg-cream px-8 pb-12 pt-28 transition-all duration-300 xl:hidden ${
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="mx-auto flex h-full max-w-xl flex-col">
          <p className="eyebrow mb-7">Navigate the studio</p>

          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-baseline gap-4 border-b border-charcoal/10 pb-4 font-serif-tech text-xl font-semibold tracking-tight text-charcoal transition-colors hover:text-caramel-dark"
              >
                <span className="font-mono-tech text-[10px] text-caramel">
                  0{index + 1}
                </span>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto">
            <p className="mb-4 font-mono-tech text-[10px] uppercase tracking-[.18em] text-charcoal-muted">
              London · Digital studio for accountants
            </p>

            <Link
              href="/book"
              onClick={() => setMobileOpen(false)}
              className="nav-cta w-full py-4"
            >
              Book a free review <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

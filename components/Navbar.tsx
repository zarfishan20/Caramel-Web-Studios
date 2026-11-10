"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Who we help", href: "/#who-we-help" },
    { name: "Our approach", href: "/#approach" },
    { name: "Selected work", href: "/portfolio" },
  ];

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 px-5 transition-all duration-500 sm:px-8 lg:px-12 ${scrolled || mobileOpen || pathname === "/book" ? "py-3" : "py-5"}`}>
        <nav className={`mx-auto flex max-w-[1440px] items-center justify-between rounded-full px-5 transition-all duration-500 sm:px-7 ${scrolled || mobileOpen || pathname === "/book" ? "border border-caramel/15 bg-cream/90 py-3 shadow-lg shadow-charcoal/[.06] backdrop-blur-xl" : "bg-transparent py-3"}`}>
          <Link href="/" className="group flex flex-col leading-[.95]" aria-label="Caramel Web Studios home">
            <span className="font-syne text-[12px] font-bold uppercase tracking-[.11em] text-charcoal sm:text-[13px]">
              Caramel <span className="text-caramel">Web</span>
            </span>
            <span className="mt-1 font-cormorant text-[11px] font-semibold tracking-[.16em] text-caramel">Studios</span>
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="nav-link">{link.name}</Link>
            ))}
            <Link href="/book" className="nav-cta">
              Book a call <ArrowUpRight size={14} />
            </Link>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-charcoal/10 text-charcoal transition-colors hover:bg-caramel/10 lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>
      </header>

      <div className={`fixed inset-0 z-40 bg-cream px-8 pb-12 pt-32 transition-all duration-500 lg:hidden ${mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-3 pointer-events-none opacity-0"}`}>
        <div className="mx-auto flex h-full max-w-xl flex-col">
          <p className="eyebrow mb-8">Navigate the studio</p>
          <div className="flex flex-col gap-5">
            {navLinks.map((link, index) => (
              <Link key={link.name} href={link.href} onClick={() => setMobileOpen(false)} className="flex items-baseline gap-4 border-b border-charcoal/10 pb-4 font-serif-tech text-2xl font-semibold tracking-tight text-charcoal">
                <span className="font-mono-tech text-[10px] text-caramel">0{index + 1}</span>
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto">
            <p className="mb-4 font-mono-tech text-[10px] uppercase tracking-[.18em] text-charcoal-muted">London · Digital studio for accountants</p>
            <Link href="/book" onClick={() => setMobileOpen(false)} className="nav-cta w-full py-4">
              Book a free review <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

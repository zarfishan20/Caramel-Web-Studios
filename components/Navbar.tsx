"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isBooking = pathname === "/book";

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Process", href: "/#how-it-works" },
    { name: "Integrations", href: "/#integrations" },
    { name: "Work", href: "/portfolio" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 lg:px-12 ${
          scrolled || isBooking || mobileOpen
            ? "py-4 bg-cream/85 backdrop-blur-xl border-b border-caramel/15 shadow-sm"
            : "py-7 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo Section */}
          <Link href="/" className="flex flex-col leading-tight group no-underline">
            <span className="font-syne font-extrabold text-[15px] md:text-[17px] tracking-[0.15em] text-charcoal uppercase">
              Caramel <span className="text-caramel">Web</span>
            </span>
            <span className="font-cormorant italic text-[12px] md:text-[14px] tracking-[0.08em] text-caramel">
              Studios
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            <ul className="flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="nav-link" /* Uses the CSS class we made in globals.css */
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/book"
              className="nav-cta" /* Uses the CSS class we made in globals.css */
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-charcoal"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-all duration-500 lg:hidden ${
          mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-10 pb-12">
          
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-4xl font-syne font-bold text-charcoal hover:text-caramel transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto space-y-8">
            <div className="h-px bg-caramel/20 w-full" />

            <div className="font-mono">
              <p className="text-[10px] uppercase tracking-[0.2em] text-caramel mb-2">
                Based in London
              </p>
              <p className="text-sm text-warm-gray leading-relaxed">
                Specialist Web Studio for <br />
                Forward-Thinking Accountants
              </p>
            </div>

            <Link
              href="/book"
              onClick={() => setMobileOpen(false)}
              className="nav-cta block w-full text-center py-5 text-base"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
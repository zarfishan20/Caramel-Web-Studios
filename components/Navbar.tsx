"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X,} from "lucide-react";

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
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "How it works", href: "/#how-it-works" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Our Work", href: "/portfolio" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 px-6 lg:px-12 ${
          scrolled || isBooking || mobileOpen
            ? "py-3 bg-caramel-lighter/90 backdrop-blur-xl shadow-sm border-b border-caramel/10" 
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Your Logo Structure */}
          <Link href="/" className="group flex items-center gap-2">
            <span className="font-serif text-xl font-black tracking-tight text-ink">
              Caramel <span className="text-caramel">Web</span> Studios
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-[13px] font-bold uppercase tracking-widest text-ink/60 hover:text-caramel transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link 
              href="/book" 
              className="px-6 py-2.5 bg-ink text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-caramel hover:shadow-lg hover:shadow-caramel/20 transition-all flex items-center gap-2"
            >
              Book Free Website Review
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-ink hover:text-caramel transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 z-90 bg-caramel-lighter transition-transform duration-500 ease-in-out lg:hidden ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-8 pb-12">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-4xl font-serif font-black text-ink hover:text-caramel transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto space-y-8">
            <div className="h-px bg-caramel/10 w-full" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-caramel mb-2">Based in London</p>
              <p className="text-sm text-ink-muted">Specialist Web Studio for Accountants</p>
            </div>
            <Link 
              href="/book" 
              onClick={() => setMobileOpen(false)}
              className="block w-full py-5 bg-ink text-white text-center rounded-2xl font-bold text-lg hover:bg-caramel transition-colors shadow-xl shadow-ink/10"
            >
              Book Website Review
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
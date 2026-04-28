"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-caramel-extra-light/90 backdrop-blur-md border-b border-caramel/10">
      {/* Brand Logo */}
      <Link href="/" className="font-display text-xl font-bold text-ink no-underline">
        Caramel <span className="text-caramel">Web</span> Studios
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="#services" className="text-sm font-medium text-muted no-underline hover:text-caramel transition-colors">Services</Link>
        <Link href="/portfolio" className="text-sm font-medium text-muted no-underline hover:text-caramel transition-colors">Our Work</Link>
        
        
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden border-none bg-transparent cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="text-ink" /> : <Menu className="text-ink" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-caramel-light p-6 flex flex-col gap-4 shadow-xl md:hidden">
          <Link href="#services" className="text-lg font-medium text-ink no-underline" onClick={() => setIsOpen(false)}>Services</Link>
         
        </div>
      )}
    </nav>
  );
}
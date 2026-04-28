"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LayoutDashboard } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Hosting", href: "/hosting" },
    { name: "Pricing", href: "/pricing" },
    { name: "AI Solutions", href: "/ai-chatbot" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-orange-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#af6d2d] rounded-lg rotate-3" />
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Caramel<span className="text-[#af6d2d]">Web</span>Studios
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-[#af6d2d] transition-colors"
            >
              {link.name}
            </Link>
          ))}
         <Link 
  href="https://caramelwebstudios.com/billing/dologin.php" // Your WHMCS / Portal link
  className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-lg hover:bg-[#af6d2d] transition-all"
>
  <LayoutDashboard size={16} />
  Client Area
</Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-orange-100 p-6 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="block text-lg font-medium text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
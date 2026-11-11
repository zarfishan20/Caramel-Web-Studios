"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  "Web Development",
  "AI Chatbot",
  "Booking Integration",
  "CRM Integration",
  "Web Care",
];

const company = ["About Us", "Blog", "FAQs", "Contact"];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-8 lg:px-16 pt-16 pb-8 bg-[#2A2421] border-t border-[#C5A880]/10 font-sans">
      
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1.5fr_1fr_1fr] gap-10 mb-12">
        
        {/* Column 1: Brand */}
        <div className="space-y-4 max-w-sm">
          <p className="text-xl font-bold font-syne text-[#FDFBF7] tracking-wide">
            Caramel <span className="text-[#C5A880]">Web</span> Studios
          </p>
          <p className="text-xs leading-relaxed text-[#C5A880]/80">
            Specialist web architecture and premium automation workflows built
            exclusively for London accounting firms and tax practices.
          </p>
        </div>

        {/* Column 2: Quote CTA */}
        <div className="space-y-3 max-w-sm">
          <h4 className="text-xs font-semibold tracking-wider uppercase text-[#C5A880]">
            Project Pricing
          </h4>
          <p className="text-xs text-[#FDFBF7]/70 leading-relaxed">
            Ready to scale your firm&apos;s onboarding workflows? Fill out our
            comprehensive brief to get an estimate.
          </p>
          <Link
            href="/quote"
            className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A880] hover:text-[#FDFBF7] transition-colors pt-1"
          >
            <span>Request a Custom Quote</span>
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="text-xs font-semibold tracking-wider uppercase mb-4 text-[#C5A880]">
            Services
          </h4>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s}>
                <Link
                  href="#services"
                  className="text-xs text-[#FDFBF7]/70 hover:text-[#C5A880] transition-colors"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Company */}
        <div>
          <h4 className="text-xs font-semibold tracking-wider uppercase mb-4 text-[#C5A880]">
            Company
          </h4>
          <ul className="space-y-2.5">
            {company.map((c) => (
              <li key={c}>
                <Link
                  href={`/${c.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-xs text-[#FDFBF7]/70 hover:text-[#C5A880] transition-colors"
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-[#C5A880]/10 text-[11px] text-[#C5A880]/60">
        
        <div className="flex flex-col gap-1 items-center sm:items-start">
          <span>
            © 2023–{currentYear} Caramel Web Studios. All rights reserved.
          </span>
          <span className="opacity-70">
            Trading under Bytesphere Digital Ltd · Company No. 16844459
          </span>
        </div>

        <div className="flex gap-4 tracking-wide">
          <Link href="/sitemap" className="hover:text-[#C5A880] hover:underline">
            Sitemap
          </Link>
          <span>·</span>
          <Link href="/privacy" className="hover:text-[#C5A880] hover:underline">
            Privacy Policy
          </Link>
          <span>·</span>
          <Link href="/terms" className="hover:text-[#C5A880] hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
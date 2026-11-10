"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = ["Website design & development", "Local SEO foundations", "AI chatbot integration", "Online booking", "CRM & website care"];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-charcoal px-6 pb-8 pt-16 text-cream sm:px-10 lg:px-16 lg:pt-20">
      <div aria-hidden className="absolute -right-28 -top-36 h-96 w-96 rounded-full border border-caramel/10" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.8fr]">
          <div>
            <Link href="/" className="inline-flex flex-col leading-[.95]">
              <span className="font-syne text-lg font-extrabold uppercase tracking-[.12em]">Caramel <span className="text-caramel">Web</span></span>
              <span className="mt-1 font-cormorant text-base italic tracking-[.12em] text-caramel">Studios</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-cream/55">
              Specialist websites and thoughtful digital systems for accounting
              firms across London. Built to make every client interaction feel effortless.
            </p>
            <Link href="/book" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-caramel transition-colors hover:text-cream">
              Start a conversation <ArrowUpRight size={14} />
            </Link>
          </div>

          <div>
            <h3 className="mb-5 font-mono-tech text-[10px] uppercase tracking-[.18em] text-caramel">What we do</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}><Link href="/web-design-for-accountants-london" className="text-xs text-cream/55 transition-colors hover:text-caramel">{service}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-mono-tech text-[10px] uppercase tracking-[.18em] text-caramel">Explore</h3>
            <Link href="/our-work" className="block text-xs text-cream/65 transition-colors hover:text-caramel">Our work & concept projects</Link>
            <Link href="/web-design-for-accountants-london" className="mt-3 block text-xs text-cream/65 transition-colors hover:text-caramel">Web design for London accountants</Link>
            <Link href="/book" className="mt-3 inline-block text-xs text-cream/65 transition-colors hover:text-caramel">Book a free website review</Link>
            <a href="mailto:info@caramelwebstudios.com" className="mt-3 block break-all text-xs text-cream/65 transition-colors hover:text-caramel">info@caramelwebstudios.com</a>
            <p className="mt-3 text-xs text-cream/40">Barking, London</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-[10px] text-cream/35 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1 text-center sm:text-left">
            <p>© 2023–{currentYear} Caramel Web Studios. All rights reserved.</p>
            <p>Caramel Web Studios is a trading name of Bytesphere Digital Ltd. Registered in England and Wales · Company No. 16844459</p>
          </div>
          <Link href="/" className="text-center transition-colors hover:text-caramel">Home</Link>
        </div>
      </div>
    </footer>
  );
}
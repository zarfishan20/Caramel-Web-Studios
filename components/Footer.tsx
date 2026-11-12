
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    label: "Website design & development",
    href: "/web-design-for-accountants-london",
  },
  {
    label: "Local SEO foundations",
    href: "/local-seo-foundations",
  },
  {
    label: "AI chatbot integration",
    href: "/ai-chatbot-integration",
  },
  {
    label: "Online booking",
    href: "/online-booking",
  },
  {
    label: "CRM & website care",
    href: "/crm-website-care",
  },
];

const companyLinks = [
  { label: "Our work", href: "/our-work" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-charcoal px-6 pb-8 pt-16 text-cream sm:px-10 lg:px-16 lg:pt-20">
      <div
        aria-hidden
        className="absolute -right-28 -top-36 h-96 w-96 rounded-full border border-caramel/10"
      />

      <div className="relative mx-auto max-w-360">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.8fr]">

          {/* Brand and CTA */}
          <div>
            <Link href="/" className="inline-flex flex-col leading-[.95]">
              <span className="font-syne text-lg font-extrabold uppercase tracking-[.12em]">
                Caramel <span className="text-caramel">Web</span>
              </span>
              <span className="mt-1 font-cormorant text-base italic tracking-[.12em] text-caramel">
                Studios
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-cream/55">
              Specialist websites and thoughtful digital systems for accounting
              firms across London. Built to make every client interaction feel effortless.
            </p>

            <Link
              href="/book"
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-caramel transition-colors hover:text-cream"
            >
              Start a conversation
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 font-mono-tech text-[10px] uppercase tracking-[.18em] text-caramel">
              What we do
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-xs text-cream/55 transition-colors hover:text-caramel"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company and contact */}
          <div>
            <h3 className="mb-5 font-mono-tech text-[10px] uppercase tracking-[.18em] text-caramel">
              Explore
            </h3>

            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-cream/65 transition-colors hover:text-caramel"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            
         
          </div>
        </div>

        {/* Legal and bottom links */}
        <div className="flex flex-col gap-5 pt-7 text-[10px] text-cream/35 sm:flex-row sm:items-end sm:justify-between">

          <div className="space-y-1 text-center sm:text-left">
            <p>
              © {currentYear} Bytesphere Digital Ltd. All rights reserved.
            </p>
            <p className="max-w-2xl leading-5">
              Caramel Web Studios is a trading name of Bytesphere Digital Ltd.
              Registered in England and Wales · Company No. 16844459.
            </p>

          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sitemap" className="transition-colors hover:text-caramel">
              Sitemap
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-caramel">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-caramel">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

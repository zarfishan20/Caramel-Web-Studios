
import Link from "next/link";
import type { Metadata } from "next";
import {
  Map,
  ArrowUpRight,
  Shield,
  HelpCircle,
  FileText,
  Layout,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sitemap | Caramel Web Studios",
  description:
    "Explore the Caramel Web Studios website, including our services, portfolio, blog, FAQs and contact information.",
  alternates: {
    canonical: "/sitemap",
  },
};

const sections = [
  {
    title: "Core Infrastructure",
    icon: Layout,
    links: [
      { name: "Homepage", href: "/" },
      { name: "Our Work", href: "/our-work" },
      { name: "Web Design for Accountants", href: "/web-design-for-accountants-london" },
      { name: "About Us", href: "/about-us" },
    ],
  },
  {
    title: "Specialist Services",
    icon: FileText,
    links: [
      { name: "Web Development", href: "/web-design-for-accountants-london" },
      { name: "AI Chatbot Integration", href: "/ai-chatbot-integration" },
      { name: "Online Booking", href: "/online-booking" },
      { name: "CRM & Website Care", href: "/crm-website-care" },
      { name: "Local SEO Foundations", href: "/local-seo-foundations" },
    ],
  },
  {
    title: "Resources & Support",
    icon: HelpCircle,
    links: [
      { name: "Blog & Insights", href: "/blog" },
      { name: "Frequently Asked Questions", href: "/faqs" },
      { name: "Contact Us", href: "/contact" },
      { name: "Book a Consultation", href: "/book" },
      { name: "Request a Quote", href: "/quote" },
    ],
  },
  {
    title: "Legal & Compliance",
    icon: Shield,
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function SitemapPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#FDFBF7] px-6 py-20 font-sans text-[#2A2421] lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3 border-b border-[#C5A880]/20 pb-6">
          <div className="rounded-xl border border-[#C5A880]/20 bg-[#2A2421] p-2.5 text-[#C5A880]">
            <Map className="h-6 w-6" />
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Website Directory
            </h1>
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[#C5A880]">
              Sitemap Index
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-7 text-[#2A2421]/65">
          Explore our website to discover our digital services, recent work,
          helpful resources and ways to get in touch with Caramel Web Studios.
        </p>

        {/* Directory */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <section
                key={section.title}
                className="rounded-2xl border border-[#C5A880]/10 bg-[#F9F5EF] p-6 shadow-sm transition-all duration-300 hover:border-[#C5A880]/30"
              >
                <div className="mb-4 flex items-center gap-2 border-b border-[#C5A880]/20 pb-3">
                  <Icon className="h-4 w-4 text-[#C5A880]" />

                  <h2 className="text-xs font-bold uppercase tracking-wider">
                    {section.title}
                  </h2>
                </div>

                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between gap-3 text-sm font-medium text-[#2A2421]/80 transition-colors hover:text-[#2A2421]"
                      >
                        <span className="group-hover:underline group-hover:decoration-[#C5A880]/60 group-hover:underline-offset-4">
                          {link.name}
                        </span>

                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 -translate-x-1 text-[#C5A880] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-[#C5A880]/10 pt-6 text-center text-xs text-[#2A2421]/50">
          <p>
            © {currentYear} Caramel Web Studios. Trading under Bytesphere
            Digital Ltd · Company No. 16844459.
          </p>
        </footer>
      </div>
    </main>
  );
}

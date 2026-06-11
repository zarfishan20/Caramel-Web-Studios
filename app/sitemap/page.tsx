import Link from "next/link";
import { Map, ArrowUpRight, Shield, HelpCircle, FileText, Layout } from "lucide-react";

export const metadata = {
  title: "Sitemap | Caramel Web Studios",
  description: "Complete structural directory of Caramel Web Studios' digital solutions and resources.",
};

export default function SitemapPage() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Core Infrastructure",
      icon: <Layout className="w-4 h-4 text-[#C5A880]" />,
      links: [
        { name: "Homepage", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "The Process", href: "/process" },
        { name: "Our Work (Masterpieces)", href: "/our-work" },
        { name: "Integrations & APIs", href: "/integrations" },
      ],
    },
    {
      title: "Specialist Services",
      icon: <FileText className="w-4 h-4 text-[#C5A880]" />,
      links: [
        { name: "Web Development", href: "/services" },
        { name: "AI Chatbot Systems", href: "/services" },
        { name: "Booking Integrations", href: "/services" },
        { name: "CRM Implementations", href: "/services" },
        { name: "Continuous Web Care", href: "/services" },
      ],
    },
    {
      title: "Inquiries & Actions",
      icon: <HelpCircle className="w-4 h-4 text-[#C5A880]" />,
      links: [
        { name: "Request a Custom Quote Form", href: "/book" },
        { name: "Book a Discovery Call", href: "/book" },
        { name: "Contact Gateway", href: "/contact" },
        { name: "Frequently Asked Questions", href: "/faqs" },
        { name: "Studio Blog", href: "/blog" },
      ],
    },
    {
      title: "Legal & Compliance",
      icon: <Shield className="w-4 h-4 text-[#C5A880]" />,
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#2A2421] px-6 py-20 lg:px-16 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-6 border-b border-[#C5A880]/20 pb-6">
          <div className="p-2.5 bg-[#2A2421] text-[#C5A880] rounded-xl border border-[#C5A880]/20">
            <Map className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">System Directory</h1>
            <p className="text-xs text-[#C5A880] uppercase tracking-widest font-semibold mt-1">Sitemap Index</p>
          </div>
        </div>

        {/* Directory Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {sections.map((section) => (
            <div 
              key={section.title} 
              className="p-6 rounded-2xl bg-[#F9F5EF] border border-[#C5A880]/10 hover:border-[#C5A880]/30 transition-all duration-300 shadow-xs"
            >
              <div className="flex items-center gap-2 border-b border-[#C5A880]/20 pb-3 mb-4">
                {section.icon}
                <h2 className="text-xs font-bold text-[#2A2421] uppercase tracking-wider">
                  {section.title}
                </h2>
              </div>
              
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="group flex items-center justify-between text-sm text-[#2A2421]/80 hover:text-[#2A2421] transition-all font-medium"
                    >
                      <span className="group-hover:underline decoration-[#C5A880]/60 decoration-1 underline-offset-4">
                        {link.name}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880] opacity-0 group-hover:opacity-100 transition-all transform translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Corporate Footer Context */}
        <footer className="text-center text-xs text-[#2A2421]/50 mt-16 border-t border-[#C5A880]/10 pt-6">
          <p>© {currentYear} Caramel Web Studios. Trading under Bytesphere Digital Ltd · Company No. 16844459.</p>
        </footer>

      </div>
    </main>
  );
}
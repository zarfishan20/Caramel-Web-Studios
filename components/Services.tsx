"use client";

import { 
  Palette, 
  MessageSquareCode, 
  CalendarCheck, 
  RefreshCw, 
  ShieldCheck, 
} from "lucide-react";


const services = [
  {
  icon: <Palette className="w-5 h-5" />,
    title: "Web Design & Development",
    desc: "Custom, conversion-focused websites built specifically for accounting firms. Professional, trustworthy, and fast.",
    features: ["Bespoke design — no templates","Fully mobile responsive","SEO-optimised from day one","GDPR compliant"],
    tags: ["Design","Dev","SEO"],
  },
  {
   icon: <MessageSquareCode className="w-5 h-5" />,
    title: "AI Chatbot & Hosting",
    desc: "An intelligent chatbot trained on your firm's services — answers client questions, qualifies leads, and books meetings 24/7.",
    features: ["Trained on your services & FAQs","Captures leads automatically","Hands off to your team seamlessly","Hosted and maintained by us"],
    tags: ["AI","Lead gen","24/7"],
  },
  {
   icon: <CalendarCheck className="w-5 h-5" />,
    title: "Booking Integration",
    desc: "Let clients book consultations directly from your website — synced with your calendar, zero back-and-forth emails.",
    features: ["Calendar sync (Google, Outlook)","Automated confirmations & reminders","Branded booking pages","Custom intake forms"],
    tags: ["Scheduling","Automation"],
  },
  {
   icon: <RefreshCw className="w-5 h-5" />,
    title: "CRM Integration",
    desc: "Connect your website, chatbot, and bookings to your CRM — every enquiry and new client captured automatically.",
    features: ["Works with popular accounting CRMs","Auto-create contacts from enquiries","Pipeline and deal tracking","Custom field mapping"],
    tags: ["CRM","Automation","Data"],
  },
  {
   icon: <ShieldCheck className="w-5 h-5" />,
    title: "Web Care",
    desc: "Ongoing maintenance and support so your website is always fast, secure, and up to date — hands-free for you.",
    features: ["Security monitoring","Daily backups","Plugin & software updates","Priority technical support"],
    tags: ["Maintenance","Security","Support"],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-8 lg:px-12 py-24">
      <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--color-caramel)" }}>Our services</p>
      <h2 className="text-4xl font-bold tracking-tight mb-12 max-w-lg leading-snug" style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink)" }}>
        Everything your firm needs online
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((svc) => (
          <div
            key={svc.title}
            className="rounded-2xl p-7 transition-all duration-200 cursor-default"
            style={{
              backgroundColor: "var(--color-caramel-off)",
              border: "1px solid color-mix(in srgb, var(--color-caramel) 15%, transparent)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLDivElement).style.borderColor = "color-mix(in srgb, var(--color-caramel) 40%, transparent)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.borderColor = "color-mix(in srgb, var(--color-caramel) 15%, transparent)";
            }}
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5" style={{ backgroundColor: "var(--color-caramel-light)" }}>
              {svc.icon}
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink)" }}>{svc.title}</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-ink-muted)" }}>{svc.desc}</p>
            <ul className="space-y-1.5 mb-4">
              {svc.features.map((f) => (
                <li key={f} className="text-xs pl-4 relative" style={{ color: "var(--color-ink-muted)" }}>
                  <span className="absolute left-0 font-bold" style={{ color: "var(--color-caramel)" }}>✓</span>{f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {svc.tags.map((t) => (
                <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ backgroundColor: "var(--color-caramel-light)", color: "var(--color-caramel-dark)" }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

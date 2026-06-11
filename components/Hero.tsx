"use client";

import Link from "next/link";
import DashboardMock from "./DashboardMock";

export default function Hero() {
  return (
    <section
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-16 px-8 lg:px-12 pt-28 pb-16 animate-fade-up"
    >
      {/* Left side Content Column */}
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 bg-caramel-light text-caramel-dark">
          <span className="w-1.5 h-1.5 rounded-full inline-block bg-caramel" />
          Specialist web studio · London accountants
        </div>

        <h1 className="text-5xl lg:text-6xl font-black leading-[1.06] tracking-tight mb-6 font-serif-tech text-charcoal">
          Automate Your Firm.
          <br />
          <em className="italic text-caramel">
            Boost Your Leads.
          </em>
          <br />
        </h1>

        <p className="text-base leading-relaxed max-w-md mb-6 text-charcoal-muted">
          We design, build, and maintain professional websites exclusively for
          accountants in London — complete with AI chatbots, online booking,
          and CRM integration.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {["London-based", "Sector-specialist", "All-inclusive support"].map((t) => (
            <span
              key={t}
              className="text-xs font-medium px-3 py-1.5 rounded-full border border-caramel/25 text-caramel-dark"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
<Link
  href="/book"
  className="group relative z-0 px-7 py-3 rounded-full font-medium text-sm overflow-hidden inline-block bg-charcoal-soft text-white"
>
  {/* Sliding background layer (now the lighter Caramel) */}
  <span 
    className="absolute inset-0 -z-10 h-full w-full -translate-x-full bg-linear-to-r from-caramel via-caramel to-caramel-dark/80 transition-transform duration-300 ease-out group-hover:translate-x-0"
    aria-hidden="true"
  />
  
  {/* Button Text */}
  <span className="relative z-0">
    Book a free review
  </span>
</Link>
          <a
            href="https://chatbot.caramelwebstudios.com/"
            className="font-medium text-sm flex items-center gap-1 group transition-all text-charcoal"
          >
            See the AI Chatbot in Action
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
        </div>
      </div>

      {/* Right side Visual Display Box */}
      <div className="relative flex items-center justify-center bg-charcoal px-6 py-24 lg:px-12 rounded-2xl overflow-hidden">
        
        {/* Floating leads pill */}
        <div className="absolute right-0 top-24 -translate-y-1/2 rounded-l-full bg-caramel px-5 py-3 font-mono-tech text-[10px] text-cream shadow-xl shadow-caramel/20">
          ✦ 47 New Leads This Month
        </div>

        {/* Floating booking pill matching exact preferred structure */}
        <div 
          style={{ backgroundColor: '#317061' }} 
          className="absolute bottom-24 left-6 rounded-full px-5 py-3 font-mono-tech text-[10px] text-white shadow-xl shadow-zinc-950/20"
        >
          ✓ Appointment Booked
        </div>

        {/* CWS background watermark text */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 right-2 select-none font-display text-[16rem] leading-none text-caramel/10"
        >
          CWS
        </div>

        <DashboardMock />
      </div>
    </section>
  );
}
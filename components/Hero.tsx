"use client";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-16 px-8 lg:px-12 pt-28 pb-16 overflow-hidden animate-fade-up">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.jpg" 
          alt="Modern London office"
          fill
          priority 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-caramel-lighter/90 backdrop-blur-[2px]" />
      </div>

      {/* Left Content */}
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 bg-caramel-light text-caramel-dark">
          <span className="w-1.5 h-1.5 rounded-full inline-block bg-caramel" />
          Specialist web studio · London accountants
        </div>

        <h1 className="text-5xl lg:text-6xl font-serif font-black leading-[1.06] tracking-tight mb-6 text-ink">
          Websites built
          <br />
          for <em className="italic text-caramel">accounting</em>
          <br />
          firms that grow.
        </h1>

        <p className="text-base leading-relaxed max-w-md mb-6 text-ink-muted">
          We design, build, and maintain professional websites exclusively for
          accountants in London — complete with AI chatbots, online booking,
          and CRM integration.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {["London-based", "Sector-specialist", "All-inclusive support"].map((t) => (
            <span
              key={t}
              className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-md border border-caramel/20 text-caramel-dark bg-white/50"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/book"
            className="px-7 py-3 rounded-full font-bold text-sm transition-all bg-caramel text-white hover:bg-caramel-dark hover:shadow-lg hover:-translate-y-0.5"
          >
            Get a free audit
          </Link>
          <a
            href="#services"
            className="font-bold text-sm flex items-center gap-2 group text-ink"
          >
            See our services
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
        </div>
      </div>

      {/* Right Content: The "Locked" Mockup Container */}
      <div className="relative z-10 flex items-center justify-center animate-fade-up-delay">
        
        {/* WRAPPER: This locks the two elements together */}
        <div className="relative inline-block">
          
          {/* 1. Lead Card (Locked to the Dashboard) */}
          <div className="absolute -top-6 -right-6 z-20 rounded-xl p-4 w-40 shadow-xl bg-white border border-caramel/10 animate-fade-up-delay-2">
            <p className="text-[10px] font-bold tracking-widest uppercase mb-1 text-caramel">New leads</p>
            <p className="text-3xl font-serif font-bold text-ink">+34%</p>
            <p className="text-[10px] text-ink-muted font-medium">Since launch</p>
            <div className="mt-2 w-full h-1 bg-caramel/10 rounded-full overflow-hidden">
               <div className="w-[70%] h-full bg-caramel rounded-full" />
            </div>
          </div>

          {/* 2. Dashboard Mockup (Browser frame) */}
          <div className="w-80 rounded-2xl overflow-hidden shadow-2xl bg-ink-dark-2 border border-white/5 relative z-10">
            {/* Chrome Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-ink-dark border-b border-white/5">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/80" />
                <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
                <span className="w-2 h-2 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] tracking-widest font-mono text-white/20 uppercase">cws-dashboard.io</span>
              <div className="w-8" />
            </div>

            {/* Browser Body */}
            <div className="p-5 space-y-4">
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-caramel/70 mb-1">Live Automation</p>
                <p className="text-lg font-serif font-bold text-caramel-lighter leading-none">Accountant CRM</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[{ val: "98", lbl: "SEO Score" }, { val: "0.8s", lbl: "Load speed" }].map(({ val, lbl }) => (
                  <div key={lbl} className="rounded-xl px-3 py-2.5 bg-white/5 border border-white/10">
                    <p className="text-xl font-serif font-bold text-caramel">{val}</p>
                    <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold">{lbl}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-bold tracking-widest uppercase text-caramel/70">AI Chatbot Status</p>
                <div className="text-[10px] leading-relaxed px-3 py-3 rounded-2xl rounded-bl-sm bg-caramel/15 text-caramel-light border border-caramel/20">
                  Confirmed: 10am Consultation pushed to <strong>HubSpot</strong>.
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-xl px-3 py-2 bg-green-500/5 border border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-green-500 animate-pulse" />
                <span className="text-[10px] text-green-400 font-bold uppercase tracking-wide">Sync: Active</span>
              </div>
            </div>
          </div>
        </div> {/* End of Locked Wrapper */}
      </div>
    </section>
  );
}
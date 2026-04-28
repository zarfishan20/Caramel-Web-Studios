import { Zap, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-caramel-extra-light">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content - Animated with animate-reveal */}
        <div className="z-10 animate-reveal">
          <span className="hero-pill">
            Specialist Web Studio · London Accountants
          </span>
          
          <h1 className="font-display text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-ink mb-8">
            Websites built<br />
            for <em className="italic font-bold text-caramel ">accounting</em><br />
            firms that grow.
          </h1>
          
          <p className="text-lg text-muted max-w-md leading-relaxed mb-10 transition-all delay-100">
            We design, build, and maintain professional digital systems exclusively for accountants in London.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="https://cal.com/caramelwebstudios/website-consultation"
              className="group px-8 py-4 bg-caramel text-white font-bold rounded-full hover:bg-caramel-dark transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-caramel/20 active:scale-95"
            >
              Book a free review 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#work"
              className="px-8 py-4 border border-caramel/20 text-ink font-bold rounded-full hover:bg-caramel/5 transition-all text-center active:scale-95"
            >
              View our work
            </Link>
          </div>
        </div>

        {/* Dash Frame Mockup - Animated with animate-float */}
        <div className="relative animate-float">
          {/* Subtle Background Glow */}
          <div className="absolute -inset-10 bg-caramel/10 blur-3xl rounded-full opacity-60" />
          
          <div className="dash-frame relative group hover:border-caramel/30 transition-colors duration-500">
            {/* Mockup Header */}
            <div className="bg-white/5 px-6 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20" />
              </div>
              <div className="text-[10px] text-white/30 font-mono tracking-widest uppercase">
                harris-accountants.co.uk
              </div>
              <div className="w-4 h-4" />
            </div>

            {/* Mockup Body */}
            <div className="p-8">
              <div className="mb-8">
                <div className="text-[10px] text-caramel font-bold uppercase tracking-[0.2em] mb-2">Live Performance</div>
                <div className="font-display text-2xl text-white">Harris & Co. Chartered Accountants</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Score Cards with Internal Hover Transitions */}
                <div className="bg-white/5 p-5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors group/card">
                  <div className="flex items-center gap-2 text-caramel mb-1">
                    <BarChart3 size={16} />
                    <span className="text-[10px] font-bold uppercase">SEO Score</span>
                  </div>
                  <div className="text-3xl font-bold text-white transition-transform group-hover/card:scale-105">
                    98<span className="text-sm text-white/30">/100</span>
                  </div>
                </div>

                <div className="bg-white/5 p-5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors group/card">
                  <div className="flex items-center gap-2 text-caramel mb-1">
                    <Zap size={16} />
                    <span className="text-[10px] font-bold uppercase">Load Time</span>
                  </div>
                  <div className="text-3xl font-bold text-white transition-transform group-hover/card:scale-105">
                    0.8<span className="text-sm text-white/30">s</span>
                  </div>
                </div>
              </div>

              {/* Mockup Bottom Activity */}
              <div className="mt-6 p-4 bg-caramel/5 rounded-lg border border-caramel/10 flex items-center justify-between transition-all hover:bg-caramel/10">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-2 w-2">
                    <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-caramel opacity-75"></div>
                    <div className="relative inline-flex rounded-full h-2 w-2 bg-caramel"></div>
                  </div>
                  <span className="text-xs text-white/70 italic">AI Chatbot: New lead captured...</span>
                </div>
                <span className="text-[10px] text-caramel font-bold animate-pulse">NOW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
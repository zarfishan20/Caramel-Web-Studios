"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Check } from "lucide-react";
import DashboardMock from "./DashboardMock";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-cream px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:pb-28 lg:pt-36">
      <div aria-hidden className="soft-grid absolute inset-x-0 top-0 h-[760px] opacity-60" />
      <div aria-hidden className="hero-orb -right-24 top-24" />
      <div aria-hidden className="hero-orb -bottom-36 left-[30%] opacity-50" />

      <div className="relative mx-auto grid max-w-[1320px] items-center gap-16 lg:grid-cols-[1.02fr_.98fr] lg:gap-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .75, ease: [.2,.8,.2,1] }}
          className="relative z-10"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-caramel/25 bg-white/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.15em] text-caramel-dark shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-studio-teal" />
            Websites for London accounting firms
          </div>

          <h1 className="max-w-[700px] text-balance font-serif-tech text-[clamp(2.8rem,5.1vw,5rem)] font-bold leading-[1.04] tracking-[-.05em] text-charcoal">
            A website that earns
            <span className="mt-1 block font-normal italic tracking-[-.045em] text-caramel">confidence before</span>
            the first conversation.
          </h1>

          <p className="mt-7 max-w-xl text-[1.05rem] leading-[1.85] text-charcoal-muted sm:text-lg">
            We design and build professional websites for accountants, tax advisers
            and bookkeeping firms across London — helping the right clients understand
            your services, trust your expertise and take the next step.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/book" className="group inline-flex items-center justify-center gap-4 rounded-full bg-charcoal px-7 py-4 text-sm font-semibold text-cream shadow-xl shadow-charcoal/10 transition-all duration-300 hover:-translate-y-1 hover:bg-caramel-dark">
              Get a free website review
              <span className="grid h-7 w-7 place-items-center rounded-full bg-caramel text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </Link>
            <a href="#approach" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-charcoal transition-colors hover:text-caramel-dark">
              How we work <ArrowDownRight size={16} />
            </a>
          </div>

          <div className="mt-9 grid gap-3 border-t border-charcoal/10 pt-6 text-sm text-charcoal-muted sm:grid-cols-2">
            {["Built around accounting services", "Clear scope and straightforward process", "Mobile-friendly, responsive design", "Support beyond launch available"].map((item) => (
              <span key={item} className="inline-flex items-start gap-2.5">
                <Check size={16} className="mt-0.5 shrink-0 text-studio-teal" /> {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28, scale: .98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: .85, delay: .12, ease: [.2,.8,.2,1] }}
          className="relative mx-auto w-full max-w-[620px] lg:ml-auto"
        >
          <div className="absolute -inset-5 rounded-[2.5rem] border border-caramel/20" />
          <div className="absolute -inset-10 rounded-[3rem] border border-caramel/10" />
          <div className="relative rounded-[1.8rem] bg-white p-3 shadow-[0_35px_100px_rgba(43,38,33,.16)] sm:p-5">
            <div className="mb-3 flex items-center justify-between px-2 py-1">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#e5a29a]" />
                <span className="h-2 w-2 rounded-full bg-[#e9c879]" />
                <span className="h-2 w-2 rounded-full bg-[#8bb7a5]" />
              </div>
              <span className="font-mono-tech text-[8px] uppercase tracking-[.16em] text-charcoal-muted">Illustrative website concept</span>
            </div>
            <DashboardMock />
          </div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-7 top-[16%] hidden rounded-2xl border border-caramel/20 bg-cream px-4 py-3 shadow-xl shadow-charcoal/10 sm:block"
          >
            <p className="font-mono-tech text-[9px] uppercase tracking-widest text-charcoal-muted">First impression</p>
            <p className="mt-1 text-sm font-semibold text-charcoal">Clear. Calm. Credible.</p>
          </motion.div>
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: .35 }}
            className="absolute -right-4 bottom-[12%] hidden rounded-2xl bg-caramel px-4 py-3 text-white shadow-xl shadow-caramel/25 sm:block"
          >
            <p className="font-mono-tech text-[9px] uppercase tracking-widest text-white/70">Make the next step easy</p>
            <p className="mt-1 text-sm font-semibold">Enquiries · Bookings · Support</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
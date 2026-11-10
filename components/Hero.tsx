"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import DashboardMock from "./DashboardMock";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-cream px-6 pb-20 pt-32 sm:px-10 lg:min-h-[850px] lg:px-16 lg:pb-28 lg:pt-36">
      <div aria-hidden className="soft-grid absolute inset-x-0 top-0 h-[760px] opacity-70" />
      <div aria-hidden className="hero-orb -right-24 top-24" />
      <div aria-hidden className="hero-orb -bottom-36 left-[30%] opacity-60" />

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-16 lg:grid-cols-[1.02fr_.98fr] lg:gap-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8, ease: [.2,.8,.2,1] }}
          className="relative z-10"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-caramel/25 bg-white/70 px-4 py-2 text-[10px] font-medium uppercase tracking-[.17em] text-caramel-dark shadow-sm shadow-caramel/5 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-studio-teal opacity-30" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-studio-teal" />
            </span>
            London digital studio · Built for accountants
          </div>

          <h1 className="max-w-[760px] text-balance font-serif-tech text-[clamp(3rem,5.8vw,5.5rem)] font-bold leading-[1.02] tracking-[-.055em] text-charcoal">
            Make your firm
            <span className="relative mt-1 block italic font-normal tracking-[-.055em] text-caramel">
              impossible
              <span className="ml-3 inline-block align-middle text-[.42em] not-italic text-studio-teal">↗</span>
            </span>
            to overlook.
          </h1>

          <p className="mt-7 max-w-xl text-[1.05rem] leading-[1.8] text-charcoal-muted sm:text-lg">
            A sharper website. Smarter client journeys. Less admin. We bring your
            accounting firm&apos;s website, bookings and enquiries together in one
            considered digital experience.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/book" className="group inline-flex items-center justify-center gap-4 rounded-full bg-charcoal px-7 py-4 text-sm font-semibold text-cream shadow-xl shadow-charcoal/10 transition-all duration-300 hover:-translate-y-1 hover:bg-studio-teal hover:shadow-studio-teal/20">
              Book a free review
              <span className="grid h-7 w-7 place-items-center rounded-full bg-caramel text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </Link>
            <a href="#services" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-charcoal transition-colors hover:text-caramel-dark">
              Explore what we do <ArrowDownRight size={16} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-charcoal/10 pt-6 text-[11px] font-medium tracking-wide text-charcoal-muted">
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-studio-teal" /> London-based</span>
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-caramel" /> Sector-specialist</span>
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-studio-teal" /> Ongoing support</span>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 36, scale: .96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: .9, delay: .15, ease: [.2,.8,.2,1] }}
          className="relative mx-auto w-full max-w-[650px] lg:ml-auto"
        >
          <div className="absolute -inset-5 rounded-[2.5rem] border border-caramel/20" />
          <div className="absolute -inset-10 rounded-[3rem] border border-caramel/10" />
          <div className="relative overflow-hidden rounded-[2rem] bg-charcoal p-5 shadow-[0_35px_100px_rgba(43,38,33,.22)] sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(197,141,89,.22),transparent_40%)]" />
            <div className="absolute inset-0 opacity-20 soft-grid" />
            <div className="relative mb-7 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="font-mono-tech text-[9px] uppercase tracking-[.2em] text-caramel">The connected firm</p>
                <p className="mt-1 text-sm font-semibold text-cream">Your digital front office</p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-studio-teal/40 bg-studio-teal/15 px-3 py-1.5 text-[9px] text-[#9dd0c2]">
                <Sparkles size={11} /> Live ecosystem
              </div>
            </div>
            <div className="relative">
              <DashboardMock />
            </div>
            <div className="relative mt-5 grid grid-cols-3 gap-2">
              {[
                ["01", "Website"],
                ["02", "Bookings"],
                ["03", "Enquiries"],
              ].map(([number, label]) => (
                <div key={number} className="rounded-xl border border-white/10 bg-white/[.04] p-3">
                  <p className="font-mono-tech text-[9px] text-caramel">{number}</p>
                  <p className="mt-1 text-[10px] font-medium text-cream/75">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 top-[18%] hidden rounded-2xl border border-caramel/20 bg-cream px-4 py-3 shadow-xl shadow-charcoal/10 sm:block"
          >
            <p className="font-mono-tech text-[9px] uppercase tracking-widest text-charcoal-muted">Less admin</p>
            <p className="mt-1 text-sm font-semibold text-charcoal">More time for clients</p>
          </motion.div>
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: .4 }}
            className="absolute -right-4 bottom-[14%] hidden rounded-2xl bg-caramel px-4 py-3 text-white shadow-xl shadow-caramel/25 sm:block"
          >
            <p className="font-mono-tech text-[9px] uppercase tracking-widest text-white/70">One connected setup</p>
            <p className="mt-1 text-sm font-semibold">Website + AI + CRM</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[.2em] text-charcoal-muted/70 lg:flex">
        <span className="h-px w-8 bg-caramel/50" /> Scroll to explore <span className="h-px w-8 bg-caramel/50" />
      </div>
    </section>
  );
}

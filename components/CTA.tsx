"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function CTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden bg-caramel px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
      <div aria-hidden className="absolute -right-28 -top-44 h-[38rem] w-[38rem] rounded-full border border-white/20" />
      <div aria-hidden className="absolute -right-8 -top-24 h-[28rem] w-[28rem] rounded-full border border-white/15" />
      <div aria-hidden className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-charcoal/10 blur-[100px]" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .65 }}
        className="relative mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1.1fr_.7fr] lg:items-end"
      >
        <div>
          <p className="mb-6 font-mono-tech text-[10px] font-semibold uppercase tracking-[.18em] text-white/75">A useful first step</p>
          <h2 className="max-w-4xl font-serif-tech text-4xl font-bold leading-[1.08] tracking-[-.045em] text-white sm:text-5xl lg:text-6xl">
            Let&apos;s make your website work harder for your practice.
          </h2>
        </div>
        <div className="max-w-lg lg:justify-self-end">
          <p className="text-[1.05rem] leading-[1.8] text-white/90">
            Book a free 30-minute website review. We&apos;ll look at how your firm
            comes across online, discuss what you want to improve and suggest
            practical next steps — with no obligation.
          </p>
          <Link href="/book" className="group mt-8 inline-flex items-center gap-5 rounded-full bg-charcoal px-6 py-4 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-1 hover:bg-studio-teal">
            Arrange your free review
            <span className="grid h-8 w-8 place-items-center rounded-full bg-caramel text-white transition-transform duration-300 group-hover:rotate-45"><ArrowUpRight size={16} /></span>
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-white/85">
            <a href="mailto:info@caramelwebstudios.com" className="inline-flex items-center gap-2 transition-colors hover:text-white"><Mail size={14} /> info@caramelwebstudios.com</a>
            <span className="inline-flex items-center gap-2"><MapPin size={14} /> Barking, London</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

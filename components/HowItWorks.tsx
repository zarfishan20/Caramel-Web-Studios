"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ClipboardList, Compass, PencilRuler, Rocket } from "lucide-react";
import Link from "next/link";

const steps = [
  { icon: Compass, title: "Understand your practice", desc: "We learn about your services, ideal clients, locations and what you need your website to achieve." },
  { icon: ClipboardList, title: "Agree the plan", desc: "You receive a clear scope covering the pages, functionality, content responsibilities and next steps." },
  { icon: PencilRuler, title: "Design and build", desc: "We create the site, share progress and refine it with your feedback before it goes live." },
  { icon: Rocket, title: "Launch with support", desc: "We help you get your new website live and can provide hosting and ongoing care after launch." },
];

export default function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="approach" className="relative overflow-hidden bg-charcoal px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
      <div aria-hidden className="absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full border border-caramel/10" />
      <div aria-hidden className="absolute -right-24 top-16 h-[26rem] w-[26rem] rounded-full border border-caramel/10" />
      <div className="relative mx-auto max-w-[1320px]">
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-5 !text-caramel">A straightforward process</p>
            <h2 className="max-w-2xl font-serif-tech text-3xl font-bold leading-[1.12] tracking-[-.04em] text-cream sm:text-4xl lg:text-5xl">
              A clear plan.
              <span className="block font-normal italic text-caramel">No unnecessary complexity.</span>
            </h2>
          </div>
          <p className="max-w-md text-[.95rem] leading-7 text-cream/65">
            You are busy looking after clients. We keep the website project organised,
            explain decisions in plain English and make sure you know what happens next.
          </p>
        </div>

        <div className="relative grid gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-7">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-caramel/50 via-caramel/20 to-transparent xl:block" />
          {steps.map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={title}
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .3 }}
              transition={{ duration: .55, delay: index * .1 }}
              className="relative"
            >
              <div className="relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-caramel/40 bg-charcoal text-caramel shadow-[0_0_0_8px_rgba(43,38,33,1)]">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <p className="mb-2 font-mono-tech text-[9px] uppercase tracking-[.16em] text-caramel">Step 0{index + 1}</p>
              <h3 className="font-serif-tech text-xl font-semibold text-cream">{title}</h3>
              <p className="mt-3 max-w-xs text-[.95rem] leading-7 text-cream/60">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-cream/55">You will know what is included, what we need from you and what the next milestone is before work begins.</p>
          <Link href="/book" className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-caramel transition-colors hover:text-cream">
            Talk through your project
            <span className="grid h-8 w-8 place-items-center rounded-full border border-caramel/40 transition-all group-hover:rotate-45 group-hover:bg-caramel group-hover:text-charcoal"><ArrowUpRight size={15} /></span>
          </Link>
        </div>
      </div>
    </section>
  );
}

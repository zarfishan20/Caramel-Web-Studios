"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const steps = [
  { title: "Discover", desc: "A relaxed conversation about your firm, the clients you want to reach and what needs to work better." },
  { title: "Design & build", desc: "We shape your website and connect the tools that make enquiries, bookings and follow-up simpler." },
  { title: "Review & refine", desc: "You see the work taking shape, share feedback and we refine the details together." },
  { title: "Launch & support", desc: "We take your new experience live and can look after the updates and support beyond launch." },
];

export default function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-charcoal px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div aria-hidden className="absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full border border-caramel/10" />
      <div aria-hidden className="absolute -right-24 top-16 h-[26rem] w-[26rem] rounded-full border border-caramel/10" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-5 !text-caramel">A clear, considered process</p>
            <h2 className="max-w-2xl font-serif-tech text-3xl font-bold leading-[1.12] tracking-[-.04em] text-cream sm:text-4xl lg:text-5xl">
              Good work.
              <span className="block font-normal italic text-caramel">Without the guesswork.</span>
            </h2>
          </div>
          <p className="max-w-md text-[.95rem] leading-7 text-cream/65">
            From the first conversation to launch day, you know what is happening,
            what comes next and who is looking after the details.
          </p>
        </div>

        <div className="relative grid gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-7">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-caramel/50 via-caramel/20 to-transparent xl:block" />
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .3 }}
              transition={{ duration: .55, delay: index * .1 }}
              className="relative"
            >
              <div className="relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-caramel/40 bg-charcoal font-mono-tech text-xs text-caramel shadow-[0_0_0_8px_rgba(43,38,33,1)]">
                0{index + 1}
              </div>
              <h3 className="font-serif-tech text-xl font-semibold text-cream">{step.title}</h3>
              <p className="mt-3 max-w-xs text-[.95rem] leading-7 text-cream/60">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <a href="/book" className="group inline-flex items-center gap-3 text-sm font-semibold text-caramel transition-colors hover:text-cream">
            Let&apos;s talk about your project
            <span className="grid h-8 w-8 place-items-center rounded-full border border-caramel/40 transition-all group-hover:rotate-45 group-hover:bg-caramel group-hover:text-charcoal"><ArrowUpRight size={15} /></span>
          </a>
        </div>
      </div>
    </section>
  );
}

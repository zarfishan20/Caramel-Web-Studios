"use client";

import { motion, useReducedMotion } from "framer-motion";

const audiences = ["Chartered accountancy practices", "Tax advisers", "Bookkeeping firms", "Payroll specialists"];

export default function NicheBand() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="who-we-help" className="relative overflow-hidden bg-caramel px-6 py-9 sm:px-10 lg:px-16">
      <div aria-hidden className="absolute inset-y-0 right-0 w-1/2 bg-linear-to-l from-white/10 to-transparent" />
      <div className="relative mx-auto flex max-w-330 flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .55 }}
        >
          <p className="mb-2 font-mono-tech text-[9px] uppercase tracking-[.18em] text-white/70">Who we work with</p>
          <h2 className="max-w-xl font-serif-tech text-xl font-semibold leading-snug text-white sm:text-2xl">
            Digital experiences shaped around professional accounting services.
          </h2>
        </motion.div>
        <div className="flex flex-wrap gap-2">
          {audiences.map((audience, index) => (
            <motion.span
              key={audience}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .4, delay: index * .07 }}
              className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] font-medium tracking-wide text-white backdrop-blur-sm"
            >
              {audience}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

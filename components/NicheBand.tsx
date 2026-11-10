"use client";

import { motion, useReducedMotion } from "framer-motion";

const badges = ["Chartered accountants", "Tax advisors", "Bookkeepers", "Payroll firms"];

export default function NicheBand() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="integrations" className="relative overflow-hidden bg-caramel px-6 py-8 sm:px-10 lg:px-16">
      <div aria-hidden className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white/10 to-transparent" />
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .55 }}
          className="max-w-xl font-serif-tech text-xl font-semibold leading-snug text-white sm:text-2xl"
        >
          Digital experiences made for the way accounting firms work.
        </motion.h2>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <motion.span
              key={badge}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .4, delay: index * .07 }}
              className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] font-medium tracking-wide text-white backdrop-blur-sm"
            >
              {badge}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

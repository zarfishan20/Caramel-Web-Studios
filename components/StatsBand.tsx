"use client";

import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { num: "100%", desc: "Accounting sector focus" },
  { num: "14 days", desc: "Typical launch timeline" },
  { num: "99.9%", desc: "Uptime target" },
  { num: "24/7", desc: "Digital support options" },
];

export default function StatsBand() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-charcoal px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(197,141,89,.18),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-2 gap-y-9 md:grid-cols-4 md:gap-6">
        {stats.map(({ num, desc }, index) => (
          <motion.div
            key={desc}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5, delay: index * .08 }}
            className="border-l border-caramel/25 pl-5 sm:pl-7"
          >
            <p className="font-serif-tech text-4xl font-semibold tracking-tight text-caramel sm:text-5xl">{num}</p>
            <p className="mt-2 font-mono-tech text-[9px] uppercase leading-5 tracking-[.13em] text-cream/55 sm:text-[10px]">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

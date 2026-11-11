"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileCheck2, Laptop, MessageCircle, ShieldCheck } from "lucide-react";

const principles = [
  { icon: FileCheck2, title: "Clear services", detail: "Help visitors understand exactly how you can help." },
  { icon: Laptop, title: "Made for every screen", detail: "A considered experience on mobile, tablet and desktop." },
  { icon: MessageCircle, title: "Enquiry-led journeys", detail: "Make it simple to ask a question or book a call." },
  { icon: ShieldCheck, title: "Ongoing care", detail: "Hosting and website support available after launch." },
];

export default function StatsBand() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-charcoal px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(197,141,89,.16),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-330 gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {principles.map(({ icon: Icon, title, detail }, index) => (
          <motion.div
            key={title}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5, delay: index * .08 }}
            className="border-l border-caramel/30 pl-5 sm:pl-6"
          >
            <Icon size={20} strokeWidth={1.6} className="mb-4 text-caramel" />
            <h3 className="font-serif-tech text-lg font-semibold text-cream">{title}</h3>
            <p className="mt-2 max-w-62.5 text-sm leading-6 text-cream/60">{detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

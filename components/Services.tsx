"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarCheck,
  Code2,
  MessageSquareText,
  RefreshCw,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Website design & development",
    description: "A polished, professional website that reflects the quality of your practice and gives prospective clients a clear reason to get in touch.",
    features: ["Bespoke design around your firm", "Service pages that answer client questions", "Responsive, search-friendly foundations"],
    tag: "Build confidence from the first click",
  },
  {
    number: "02",
    icon: SearchCheck,
    title: "Local SEO foundations",
    description: "Help people searching for accounting support in your area find and understand your firm, with clear page structure and useful content.",
    features: ["Location and service-led page structure", "Clear page titles and metadata", "Content organised around client needs"],
    tag: "Be easier to find",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Consultation booking",
    description: "Give potential clients a straightforward way to arrange an initial conversation without a long email exchange.",
    features: ["Calendar and booking integration", "Clear consultation calls to action", "Confirmation and follow-up options"],
    tag: "Turn interest into conversations",
  },
  {
    number: "04",
    icon: MessageSquareText,
    title: "AI chatbot & enquiry capture",
    description: "Answer common questions, guide visitors to relevant services and collect enquiry details for your team to follow up.",
    features: ["Answers based on approved firm information", "Enquiry capture and clear handover", "Designed with appropriate boundaries"],
    tag: "Help visitors take the next step",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "CRM & workflow integration",
    description: "Connect your website enquiries and bookings to the tools your practice uses, reducing manual copying and missed follow-ups.",
    features: ["Contact and enquiry capture", "Booking and CRM connections", "Workflow setup to agreed requirements"],
    tag: "Less repetitive admin",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Hosting & website care",
    description: "Keep your website maintained after launch with practical support for updates, backups and day-to-day changes.",
    features: ["Hosting options", "Updates and backup arrangements", "Ongoing support plans available"],
    tag: "Support that continues",
  },
];

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-cream px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <div>
            <p className="eyebrow mb-5">What your practice needs online</p>
            <h2 className="max-w-3xl font-serif-tech text-3xl font-bold leading-[1.12] tracking-[-.04em] text-charcoal sm:text-4xl lg:text-5xl">
              More than a good-looking website.
              <span className="block font-normal italic text-caramel">A better way to win trust.</span>
            </h2>
          </div>
          <p className="max-w-lg text-[.95rem] leading-7 text-charcoal-muted lg:justify-self-end lg:pb-2">
            Your website is often the first place a potential client meets your firm.
            We bring design, useful content and practical tools together so that
            first impression feels clear, capable and reassuring.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.number}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .15 }}
                transition={{ duration: .55, delay: index * .06, ease: [.2,.8,.2,1] }}
                className="service-card group relative flex min-h-[350px] flex-col overflow-hidden rounded-[1.4rem] border border-caramel/15 bg-white/75 p-7 sm:p-8"
              >
                <div className="absolute -right-12 -top-14 h-44 w-44 rounded-full bg-caramel/[.07] blur-2xl transition-transform duration-700 group-hover:scale-150" />
                <div className="relative flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-caramel-light text-caramel-dark transition-all duration-300 group-hover:bg-charcoal group-hover:text-caramel">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>
                  <span className="font-mono-tech text-[10px] tracking-widest text-caramel">{service.number}</span>
                </div>
                <div className="relative mt-8">
                  <p className="mb-3 font-mono-tech text-[9px] uppercase tracking-[.15em] text-studio-teal">{service.tag}</p>
                  <h3 className="max-w-md font-serif-tech text-xl font-semibold tracking-tight text-charcoal sm:text-[1.35rem]">{service.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-charcoal-muted">{service.description}</p>
                </div>
                <ul className="relative mt-auto space-y-2.5 pt-7">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs leading-5 text-charcoal/75">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-caramel" /> {feature}
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-caramel transition-all duration-700 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-caramel/20 bg-[#f5eee6] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="font-serif-tech text-xl font-semibold text-charcoal">Not sure what your firm needs?</h3>
            <p className="mt-1 text-sm leading-6 text-charcoal-muted">We can review your current website and talk through practical improvements.</p>
          </div>
          <Link href="/book" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-studio-teal">
            Arrange a free review <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

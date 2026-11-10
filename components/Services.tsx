"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarCheck,
  Code2,
  MessageSquareText,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web design & development",
    description: "A confident first impression, built around the way your firm works. Bespoke, responsive websites that turn visits into enquiries.",
    features: ["Bespoke design, never off-the-shelf", "Mobile-first and SEO-ready", "Clear, conversion-led journeys"],
    tag: "Your digital foundation",
  },
  {
    number: "02",
    icon: MessageSquareText,
    title: "AI chatbot",
    description: "Give prospective clients useful answers around the clock. Your chatbot handles common questions and helps qualify new enquiries.",
    features: ["Trained around your services", "Captures and qualifies leads", "A clear handover to your team"],
    tag: "Always-on assistance",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Booking integration",
    description: "Make it easy for the right clients to take the next step with online consultations that fit your team's calendar.",
    features: ["Calendar synchronisation", "Automatic confirmations", "Branded booking experience"],
    tag: "Fewer email exchanges",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "CRM integration",
    description: "Connect your website, chatbot and bookings so new enquiries reach the right place without repetitive admin.",
    features: ["Automatic contact capture", "Connected enquiry workflows", "Custom field mapping"],
    tag: "A joined-up workflow",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Web care & hosting",
    description: "Keep your online presence secure, supported and running smoothly, while you focus on looking after clients.",
    features: ["Updates and security checks", "Backups and monitoring", "Ongoing technical support"],
    tag: "Peace of mind",
  },
];

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-cream px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <div>
            <p className="eyebrow mb-5">What we bring together</p>
            <h2 className="max-w-3xl font-serif-tech text-4xl font-bold leading-[1.05] tracking-[-.045em] text-charcoal sm:text-5xl lg:text-7xl">
              Everything your firm needs.
              <span className="block font-normal italic text-caramel">Nothing it doesn&apos;t.</span>
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-charcoal-muted lg:justify-self-end lg:pb-2">
            Your website should do more than look professional. We connect the
            essential parts of your digital presence into one simple experience
            for you and your clients.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.number}
                initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .18 }}
                transition={{ duration: .6, delay: index * .07, ease: [.2,.8,.2,1] }}
                className={`service-card group relative flex min-h-[370px] flex-col overflow-hidden rounded-[1.6rem] border border-caramel/15 bg-white/65 p-7 sm:p-8 ${index === 0 ? "xl:col-span-2 xl:min-h-[410px] xl:p-10" : ""}`}
              >
                <div className="absolute -right-12 -top-14 h-44 w-44 rounded-full bg-caramel/[.07] blur-2xl transition-transform duration-700 group-hover:scale-150" />
                <div className="relative flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-caramel-light text-caramel-dark transition-all duration-300 group-hover:bg-charcoal group-hover:text-caramel">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>
                  <span className="font-mono-tech text-[10px] tracking-widest text-caramel">{service.number}</span>
                </div>
                <div className="relative mt-9">
                  <p className="mb-3 font-mono-tech text-[9px] uppercase tracking-[.17em] text-studio-teal">{service.tag}</p>
                  <h3 className="max-w-md font-serif-tech text-2xl font-semibold tracking-tight text-charcoal sm:text-[1.7rem]">{service.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-charcoal-muted">{service.description}</p>
                </div>
                <ul className="relative mt-auto space-y-2.5 pt-7">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-xs text-charcoal/75">
                      <span className="h-1.5 w-1.5 rounded-full bg-caramel" /> {feature}
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-caramel transition-all duration-700 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

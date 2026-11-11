"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Monitor, Smartphone } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "FlexiPay Systems",
    type: "Accounting website",
    url: "https://flexipaysystems-accounting-site.vercel.app/",
    domain: "flexipaysystems-accounting-site.vercel.app",
    summary:
      "A live website project created for FlexiPay Systems, bringing its accounting-focused online presence into a clear, professional format.",
    palette: "navy",
    initials: "FP",
  },
  {
    number: "02",
    name: "Alchemy Associates Ltd",
    type: "Chartered certified accountants",
    url: "https://www.alchemyassociates.co.uk/",
    domain: "alchemyassociates.co.uk",
    summary:
      "A professional website for an established accountancy practice in Chadwell Heath, presenting its accounting, bookkeeping, VAT, payroll and tax services.",
    palette: "sage",
    initials: "AA",
  },
  {
    number: "03",
    name: "M&M Accounts and Taxation",
    type: "Accounts and taxation",
    url: "https://www.mandmaccountsandtaxation.co.uk/",
    domain: "mandmaccountsandtaxation.co.uk",
    summary:
      "A live website project for an accounts and taxation practice, designed to give the firm a dedicated online presence for prospective clients.",
    palette: "clay",
    initials: "M&M",
  },
];

function ProjectVisual({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const themes = {
    navy: {
      frame: "bg-[#e8edf2]",
      panel: "bg-[#17283b]",
      accent: "text-[#c58d59]",
      mark: "bg-[#c58d59]",
      surface: "bg-[#f8f9fa]",
    },
    sage: {
      frame: "bg-[#e7eee5]",
      panel: "bg-[#29473d]",
      accent: "text-[#8b7656]",
      mark: "bg-[#8b7656]",
      surface: "bg-[#fbfaf6]",
    },
    clay: {
      frame: "bg-[#f0e8e1]",
      panel: "bg-[#49372f]",
      accent: "text-[#b86f4e]",
      mark: "bg-[#b86f4e]",
      surface: "bg-[#fbf8f4]",
    },
  }[project.palette];

  return (
    <div className={`overflow-hidden rounded-[1.2rem] p-3 shadow-[0_24px_60px_rgba(43,38,33,.10)] sm:p-4 ${themes.frame}`}>
      <div className="mb-3 flex items-center gap-1.5 px-1">
        <span className="h-2 w-2 rounded-full bg-[#df9d92]" />
        <span className="h-2 w-2 rounded-full bg-[#e7c47e]" />
        <span className="h-2 w-2 rounded-full bg-[#91b59b]" />
        <div className="ml-3 h-5 flex-1 rounded-full bg-white/70" />
      </div>
      <div className={`flex min-h-[255px] flex-col overflow-hidden rounded-lg ${themes.surface}`}>
        <div className={`flex items-center justify-between px-5 py-4 text-white sm:px-7 ${themes.panel}`}>
          <span className="font-serif-tech text-sm font-semibold tracking-wide">{project.name}</span>
          <span className="hidden text-[8px] uppercase tracking-[.16em] text-white/65 sm:inline">Professional services</span>
        </div>
        <div className="flex flex-1 flex-col justify-center px-6 py-8 sm:px-9">
          <span className={`mb-3 text-[9px] font-semibold uppercase tracking-[.2em] ${themes.accent}`}>Website design & development</span>
          <div className="max-w-[85%] font-serif-tech text-2xl font-semibold leading-tight text-[#2b2621] sm:text-3xl">
            A clearer online presence for your business.
          </div>
          <div className={`mt-5 h-1.5 w-16 rounded-full ${themes.mark}`} />
          <div className="mt-6 flex gap-2">
            <span className={`rounded-full px-4 py-2 text-[8px] font-semibold text-white ${themes.panel}`}>Explore services</span>
            <span className="rounded-full border border-[#2b2621]/15 px-4 py-2 text-[8px] font-semibold text-[#2b2621]">Get in touch</span>
          </div>
        </div>
      </div>
      <p className="mt-2 text-center text-[9px] text-[#2b2621]/55">Project showcase preview</p>
    </div>
  );
}

export default function OurWorkPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-cream text-charcoal">
      <section className="relative isolate overflow-hidden bg-charcoal px-6 pb-20 pt-36 text-cream sm:px-10 lg:px-16 lg:pb-28 lg:pt-44">
        <div aria-hidden className="soft-grid absolute inset-0 opacity-20" />
        <div aria-hidden className="hero-orb -right-24 -top-20" />
        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .65 }}
          >
            <p className="mb-6 inline-flex rounded-full border border-caramel/30 bg-caramel/10 px-4 py-2 font-mono-tech text-[10px] uppercase tracking-[.16em] text-caramel">
              Selected client work · Live websites
            </p>
            <h1 className="max-w-4xl font-serif-tech text-4xl font-bold leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-7xl">
              Real projects.
              <span className="block font-normal italic text-caramel">Built for professional services.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-cream/70 sm:text-lg">
              A selection of websites created for accounting and taxation
              businesses. Each project gives a firm its own professional online
              presence and a clear way for visitors to learn more.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 text-xs text-cream/65">
              <span className="inline-flex items-center gap-2"><Monitor size={14} className="text-caramel" /> Website design & development</span>
              <span className="inline-flex items-center gap-2"><Smartphone size={14} className="text-caramel" /> Responsive experiences</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-5 border-b border-charcoal/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow mb-4">Our portfolio</p>
              <h2 className="font-serif-tech text-3xl font-bold tracking-tight sm:text-4xl">Websites we&apos;ve built.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-charcoal-muted">
              Take a look at the live websites. Each business has its own
              services, audience and identity, so every project has its own direction.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.number}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .15 }}
                transition={{ duration: .6, delay: index * .08 }}
                className="grid gap-7 overflow-hidden rounded-[1.7rem] border border-caramel/15 bg-white p-5 shadow-[0_18px_55px_rgba(43,38,33,.045)] sm:p-7 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-10 lg:p-9"
              >
                <ProjectVisual project={project} />
                <div className="py-1 lg:py-4">
                  <div className="mb-5 flex flex-wrap items-center gap-2">
                    <span className="font-mono-tech text-[10px] tracking-[.15em] text-caramel">{project.number} / 03</span>
                    <span className="rounded-full border border-caramel/25 bg-caramel-light px-3 py-1 text-[9px] font-semibold uppercase tracking-[.1em] text-caramel-dark">
                      Live website
                    </span>
                  </div>
                  <p className="text-xs font-medium text-charcoal-muted">{project.type}</p>
                  <h3 className="mt-2 font-serif-tech text-2xl font-bold tracking-tight sm:text-3xl">{project.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-charcoal-muted">{project.summary}</p>
                  <p className="mt-4 break-all text-xs text-charcoal-muted/75">{project.domain}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-7 inline-flex items-center gap-2 rounded-full bg-charcoal px-5 py-3 text-xs font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-caramel-dark"
                  >
                    Visit live website <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-caramel px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="mb-3 font-mono-tech text-[10px] uppercase tracking-[.18em] text-white/75">Your practice, your direction</p>
            <h2 className="max-w-2xl font-serif-tech text-3xl font-bold tracking-tight sm:text-4xl">
              Ready for a website that works for your firm?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/85">
              Let&apos;s talk about the right structure and design for your business.
            </p>
          </div>
          <Link href="/book" className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-charcoal px-6 py-4 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-1 hover:bg-caramel-dark">
            Book a 15-minute review <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

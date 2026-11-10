"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Monitor, Smartphone } from "lucide-react";

const concepts = [
  {
    number: "01",
    name: "Northstar Accountancy",
    type: "Accountancy practice",
    direction: "Confident, contemporary and approachable",
    summary:
      "A considered website direction for a growing accountancy practice, with clear service pathways, a calm visual identity and a prominent consultation journey.",
    features: ["Service-led homepage", "Personal introduction and trust cues", "Consultation booking journey"],
    palette: "navy",
    label: "Concept direction · fictional brand",
  },
  {
    number: "02",
    name: "Ledger & Lane",
    type: "Bookkeeping and business support",
    direction: "Warm, editorial and people-first",
    summary:
      "A friendly digital presence for a bookkeeping business, designed to make ongoing support feel understandable and easy to enquire about.",
    features: ["Plain-English service sections", "Simple enquiry prompts", "Mobile-first page structure"],
    palette: "sage",
    label: "Concept direction · fictional brand",
  },
  {
    number: "03",
    name: "Oakwell Tax Advisory",
    type: "Tax advisory practice",
    direction: "Refined, assured and detail-led",
    summary:
      "A more editorial website concept for a specialist tax practice, balancing professional authority with straightforward explanations and clear next steps.",
    features: ["Focused tax service pages", "Expertise-led content layout", "Clear contact and booking options"],
    palette: "clay",
    label: "Concept direction · fictional brand",
  },
];

function BrowserPreview({ palette }: { palette: "navy" | "sage" | "clay" }) {
  const themes = {
    navy: {
      frame: "bg-[#e9edf1]",
      bar: "bg-[#17283b]",
      accent: "bg-[#c58d59]",
      ink: "bg-[#24364a]",
      soft: "bg-[#d6dee7]",
      pale: "bg-[#f7f8fa]",
    },
    sage: {
      frame: "bg-[#e9eee8]",
      bar: "bg-[#314b42]",
      accent: "bg-[#b88b62]",
      ink: "bg-[#314b42]",
      soft: "bg-[#d3dfd3]",
      pale: "bg-[#f8faf6]",
    },
    clay: {
      frame: "bg-[#f0e8e1]",
      bar: "bg-[#3c302b]",
      accent: "bg-[#b86f4e]",
      ink: "bg-[#3c302b]",
      soft: "bg-[#e2d1c4]",
      pale: "bg-[#fbf8f4]",
    },
  }[palette];

  return (
    <div className={`relative overflow-hidden rounded-[1.2rem] p-3 shadow-[0_24px_60px_rgba(43,38,33,.12)] sm:p-4 ${themes.frame}`}>
      <div className="mb-3 flex items-center gap-1.5 px-1">
        <span className="h-2 w-2 rounded-full bg-[#df9d92]" />
        <span className="h-2 w-2 rounded-full bg-[#e7c47e]" />
        <span className="h-2 w-2 rounded-full bg-[#91b59b]" />
        <div className="ml-3 h-5 flex-1 rounded-full bg-white/70" />
      </div>
      <div className={`min-h-[255px] overflow-hidden rounded-lg ${themes.pale}`}>
        <div className={`flex items-center justify-between px-4 py-3 sm:px-6 ${themes.bar}`}>
          <div className="h-2.5 w-24 rounded-full bg-white/90" />
          <div className="hidden gap-3 sm:flex">
            <span className="h-1.5 w-9 rounded-full bg-white/55" />
            <span className="h-1.5 w-10 rounded-full bg-white/55" />
            <span className="h-1.5 w-8 rounded-full bg-white/55" />
          </div>
          <span className={`rounded-full px-3 py-1 text-[7px] font-semibold text-white ${themes.accent}`}>GET IN TOUCH</span>
        </div>
        <div className="grid gap-4 px-5 py-7 sm:grid-cols-[1.1fr_.9fr] sm:items-center sm:px-8 sm:py-9">
          <div>
            <div className={`mb-3 h-1.5 w-16 rounded-full ${themes.accent}`} />
            <div className={`h-4 w-[90%] rounded-sm ${themes.ink}`} />
            <div className={`mt-2 h-4 w-[72%] rounded-sm ${themes.ink}`} />
            <div className={`mt-4 h-2 w-full rounded-full ${themes.soft}`} />
            <div className={`mt-2 h-2 w-[85%] rounded-full ${themes.soft}`} />
            <div className={`mt-5 h-7 w-24 rounded-full ${themes.accent}`} />
          </div>
          <div className={`relative hidden aspect-[4/3] overflow-hidden rounded-md sm:block ${themes.soft}`}>
            <div className={`absolute bottom-0 left-0 h-[72%] w-[72%] rounded-tr-[4rem] ${themes.bar} opacity-90`} />
            <div className={`absolute right-4 top-4 h-12 w-12 rounded-full ${themes.accent} opacity-90`} />
            <div className="absolute bottom-4 right-4 h-16 w-12 rounded-t-full bg-white/70" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 px-5 pb-5 sm:px-8">
          {[0, 1, 2].map((item) => (
            <div key={item} className={`rounded-md p-3 ${themes.soft}`}>
              <div className={`mb-2 h-2 w-6 rounded-full ${themes.accent}`} />
              <div className={`h-1.5 w-full rounded-full ${themes.ink} opacity-60`} />
              <div className={`mt-1.5 h-1.5 w-2/3 rounded-full ${themes.ink} opacity-30`} />
            </div>
          ))}
        </div>
      </div>
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
              Selected concepts · Digital experiences
            </p>
            <h1 className="max-w-4xl font-serif-tech text-4xl font-bold leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-7xl">
              Thoughtful websites.
              <span className="block font-normal italic text-caramel">Made for professional services.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-cream/70 sm:text-lg">
              Explore a few directions for how an accountancy or advisory website
              could look and work. These concept projects show our approach to
              layout, visual identity and the client journey.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 text-xs text-cream/65">
              <span className="inline-flex items-center gap-2"><Monitor size={14} className="text-caramel" /> Responsive website concepts</span>
              <span className="inline-flex items-center gap-2"><Smartphone size={14} className="text-caramel" /> Mobile-first thinking</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-5 border-b border-charcoal/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow mb-4">The concept collection</p>
              <h2 className="font-serif-tech text-3xl font-bold tracking-tight sm:text-4xl">Three possible directions.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-charcoal-muted">
              Each concept is a starting point, not a template. A real project is
              shaped around the firm, its services and the people it wants to reach.
            </p>
          </div>

          <div className="space-y-8">
            {concepts.map((project, index) => (
              <motion.article
                key={project.number}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .15 }}
                transition={{ duration: .6, delay: index * .08 }}
                className="grid gap-7 overflow-hidden rounded-[1.7rem] border border-caramel/15 bg-white p-5 shadow-[0_18px_55px_rgba(43,38,33,.045)] sm:p-7 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-10 lg:p-9"
              >
                <BrowserPreview palette={project.palette as "navy" | "sage" | "clay"} />
                <div className="py-1 lg:py-4">
                  <div className="mb-5 flex flex-wrap items-center gap-2">
                    <span className="font-mono-tech text-[10px] tracking-[.15em] text-caramel">{project.number} / 03</span>
                    <span className="rounded-full border border-caramel/25 bg-caramel-light px-3 py-1 text-[9px] font-semibold uppercase tracking-[.1em] text-caramel-dark">
                      {project.label}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-charcoal-muted">{project.type}</p>
                  <h3 className="mt-2 font-serif-tech text-2xl font-bold tracking-tight sm:text-3xl">{project.name}</h3>
                  <p className="mt-3 text-sm font-semibold text-caramel-dark">{project.direction}</p>
                  <p className="mt-4 text-sm leading-7 text-charcoal-muted">{project.summary}</p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs leading-5 text-charcoal/75">
                        <Check size={14} className="mt-0.5 shrink-0 text-caramel-dark" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4eee6] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <p className="eyebrow mb-4">A note about these examples</p>
            <h2 className="max-w-2xl font-serif-tech text-3xl font-bold tracking-tight sm:text-4xl">
              Concept work, shown honestly.
            </h2>
          </div>
          <p className="text-sm leading-7 text-charcoal-muted">
            The names and website previews on this page are fictional sample
            concepts created to demonstrate possible design directions. They are
            not real client websites, testimonials, partnerships or measured
            business results. This page can be updated as completed client work
            becomes available.
          </p>
        </div>
      </section>

      <section className="bg-caramel px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="mb-3 font-mono-tech text-[10px] uppercase tracking-[.18em] text-white/75">Your practice, your direction</p>
            <h2 className="max-w-2xl font-serif-tech text-3xl font-bold tracking-tight sm:text-4xl">
              Have a website project in mind?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/85">
              Let&apos;s talk about the right structure and design for your firm.
            </p>
          </div>
          <Link href="/book" className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-charcoal px-6 py-4 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-1 hover:bg-caramel-dark">
            Discuss your project <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

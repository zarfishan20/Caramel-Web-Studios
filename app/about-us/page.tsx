import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Caramel Web Studios",
  description:
    "Meet Caramel Web Studios, a London-based digital studio specialising in websites and practical enquiry systems for UK accounting practices.",
  alternates: { canonical: "/about-us" },
};

const principles = [
  {
    title: "A focused specialism",
    description:
      "We concentrate on websites and digital experiences for accountants, tax advisers and bookkeeping practices, rather than trying to serve every industry.",
  },
  {
    title: "Clear communication",
    description:
      "We explain the scope, content, integrations and responsibilities in plain English before a project begins.",
  },
  {
    title: "Useful functionality",
    description:
      "We bring together clear service information, enquiry forms, consultation booking and optional CRM or chatbot integrations where they genuinely help.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <section className="bg-charcoal px-6 pb-20 pt-36 text-cream sm:px-10 lg:px-16 lg:pb-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 inline-flex rounded-full border border-caramel/30 bg-caramel/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.16em] text-caramel">
            About the studio · London, UK
          </p>
          <h1 className="max-w-4xl font-serif-tech text-4xl font-bold leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-6xl">
            Digital experiences for
            <span className="block font-normal italic text-caramel">accounting practices.</span>
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-cream/70 sm:text-lg">
            Caramel Web Studios is a London-based digital studio focused on
            professional websites and practical enquiry systems for accountants,
            tax advisers and bookkeeping firms. Our work is centred on helping
            practices explain their services clearly and make it easier for
            prospective clients to take the next step.
          </p>
          <Link href="/book" className="mt-9 inline-flex items-center gap-3 rounded-full bg-caramel px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-caramel-dark">
            Arrange a free 15-minute review <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">How we think</p>
            <h2 className="font-serif-tech text-3xl font-bold tracking-tight sm:text-4xl">
              A good website should make the next step feel straightforward.
            </h2>
            <p className="mt-5 text-base leading-8 text-charcoal-muted">
              Choosing an accountant involves trust. A useful website should
              help visitors understand what a practice does, who it supports
              and how to make contact. Design matters, but so do clear content,
              a considered mobile experience and a working enquiry journey.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {principles.map((item) => (
              <article key={item.title} className="rounded-2xl border border-caramel/15 bg-white p-7">
                <CheckCircle2 className="mb-5 text-studio-teal" size={22} />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-charcoal-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-caramel-off px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="mb-3 font-mono-tech text-[10px] uppercase tracking-[.18em] text-caramel-dark">Caramel Web Studios</p>
            <h2 className="max-w-2xl font-serif-tech text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s talk about your practice&apos;s website.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-charcoal-muted">
              Start with a free, no-obligation review and leave with practical next steps.
            </p>
          </div>
          <Link href="/book" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-charcoal px-6 py-4 text-sm font-semibold text-cream transition-colors hover:bg-caramel-dark">
            Book a website review <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

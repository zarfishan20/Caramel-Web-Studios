import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export type ServicePageContent = {
  eyebrow: string;
  title: string;
  emphasis: string;
  intro: string;
  summaryTitle: string;
  summary: string[];
  benefitsTitle: string;
  benefits: { title: string; description: string }[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export default function ServiceLandingPage({ content }: { content: ServicePageContent }) {
  const siteUrl = "https://caramelwebstudios.com";
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.title.replace(/\.$/, ""),
    provider: {
      "@type": "Organization",
      name: "Caramel Web Studios",
      url: siteUrl,
    },
    areaServed: { "@type": "City", name: "London" },
    description: content.intro,
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, faqJsonLd]) }}
      />
      <section className="relative isolate overflow-hidden bg-charcoal px-6 pb-20 pt-36 text-cream sm:px-10 lg:px-16 lg:pb-24 lg:pt-40">
        <div aria-hidden className="soft-grid absolute inset-0 opacity-20" />
        <div aria-hidden className="hero-orb -right-24 -top-20" />
        <div className="relative mx-auto max-w-6xl">
          <p className="mb-6 inline-flex rounded-full border border-caramel/30 bg-caramel/10 px-4 py-2 font-mono-tech text-[10px] uppercase tracking-[.16em] text-caramel">{content.eyebrow}</p>
          <h1 className="max-w-4xl font-serif-tech text-4xl font-bold leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-6xl">
            {content.title}
            <span className="mt-2 block font-normal italic text-caramel">{content.emphasis}</span>
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-cream/70 sm:text-lg">{content.intro}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/book" className="inline-flex items-center justify-center gap-3 rounded-full bg-caramel px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-caramel-dark">
              Book a free 15-minute review <ArrowRight size={16} />
            </Link>
            <Link href="/our-work" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-cream transition-colors hover:border-caramel hover:text-caramel">
              Explore our work
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-5">Built around your practice</p>
            <h2 className="font-serif-tech text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{content.summaryTitle}</h2>
          </div>
          <div className="space-y-5 text-[.98rem] leading-8 text-charcoal-muted">
            {content.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f4eee6] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow mb-5">How we can help</p>
          <h2 className="max-w-3xl font-serif-tech text-3xl font-bold tracking-tight sm:text-4xl">{content.benefitsTitle}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {content.benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-2xl border border-caramel/15 bg-white p-6 sm:p-7">
                <CheckCircle2 className="mb-4 text-caramel-dark" size={21} />
                <h3 className="text-lg font-semibold text-charcoal">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-7 text-charcoal-muted">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-5">A clear process</p>
          <h2 className="font-serif-tech text-3xl font-bold tracking-tight sm:text-4xl">From first conversation to a considered solution.</h2>
          <ol className="mt-10 space-y-6">
            {content.process.map((step, index) => (
              <li key={step.title} className="grid gap-3 border-b border-charcoal/10 pb-6 sm:grid-cols-[4rem_1fr]">
                <span className="font-mono-tech text-sm text-caramel">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-charcoal-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-charcoal px-6 py-20 text-cream sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 font-mono-tech text-[10px] uppercase tracking-[.18em] text-caramel">Common questions</p>
          <h2 className="font-serif-tech text-3xl font-bold tracking-tight sm:text-4xl">A few things you may want to know.</h2>
          <div className="mt-10 space-y-7">
            {content.faqs.map(({ question, answer }) => (
              <article key={question} className="border-b border-white/10 pb-6 last:border-0">
                <h3 className="text-base font-semibold">{question}</h3>
                <p className="mt-2 text-sm leading-7 text-cream/65">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-caramel px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="mb-3 font-mono-tech text-[10px] uppercase tracking-[.18em] text-white/75">Let's talk about your practice</p>
            <h2 className="max-w-2xl font-serif-tech text-3xl font-bold tracking-tight sm:text-4xl">A digital experience that feels right for your firm.</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/85">Tell us what you need and we can talk through a practical next step.</p>
          </div>
          <Link href="/book" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-charcoal px-6 py-4 text-sm font-semibold text-cream transition-colors hover:bg-caramel-dark">
            Book your review <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

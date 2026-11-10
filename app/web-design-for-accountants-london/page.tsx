import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const siteUrl = "https://caramelwebstudios.com";

export const metadata: Metadata = {
  title: "Web Design for Accountants in London",
  description:
    "Bespoke website design and development for London accountants, tax advisers and bookkeeping practices. Local SEO foundations, booking integrations and ongoing support.",
  alternates: {
    canonical: "/web-design-for-accountants-london",
  },
  openGraph: {
    title: "Web Design for Accountants in London | Caramel Web Studios",
    description:
      "Professional websites for London accounting practices, designed to build confidence and turn relevant visits into enquiries.",
    url: `${siteUrl}/web-design-for-accountants-london`,
    type: "website",
  },
};

const faqs = [
  {
    question: "How much does an accountant website cost?",
    answer:
      "The cost depends on the size of the website, the number of service pages, the content required and any integrations. We discuss your requirements first and provide a clear proposal with the agreed scope before work begins.",
  },
  {
    question: "Can you redesign an existing accountancy website?",
    answer:
      "Yes. We can review an existing website and discuss its design, content, mobile experience, enquiry journey and technical foundations before recommending a redesign or focused improvements.",
  },
  {
    question: "Can you help our accounting firm appear in Google searches?",
    answer:
      "We build search-friendly website foundations, including clear page structure, relevant page titles, descriptive content, internal links and technical SEO essentials. Search visibility also depends on competition, your firm's reputation, useful ongoing content and other factors, so rankings cannot be guaranteed.",
  },
  {
    question: "Can you add online appointment booking?",
    answer:
      "Yes. We can integrate an online booking tool so prospective clients can request or arrange a consultation through a clear journey on your website.",
  },
  {
    question: "Do you build AI chatbots for accountants?",
    answer:
      "We can integrate a chatbot configured around information your practice approves, such as service descriptions and common general questions. It should not replace professional accounting advice or request sensitive financial information through an unsecured chat.",
  },
  {
    question: "Do you work with firms outside London?",
    answer:
      "Our primary focus is London accounting practices, but UK firms in other locations are welcome to enquire.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website design and development for accountants in London",
  serviceType: "Accountancy website design and digital development",
  provider: {
    "@type": "Organization",
    name: "Caramel Web Studios",
    url: siteUrl,
  },
  areaServed: {
    "@type": "City",
    name: "London",
    containedInPlace: {
      "@type": "Country",
      name: "United Kingdom",
    },
  },
  description:
    "Website design and development for accounting firms, tax advisers and bookkeeping practices, including local SEO foundations, online booking, chatbot and CRM integration, hosting and website care.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function AccountantWebDesignPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceJsonLd, faqJsonLd]),
        }}
      />

      <section className="relative overflow-hidden bg-charcoal px-6 pb-20 pt-36 text-cream sm:px-10 lg:px-16 lg:pb-24">
        <div aria-hidden className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-caramel/15" />
        <div aria-hidden className="absolute -right-8 top-0 h-72 w-72 rounded-full border border-caramel/10" />
        <div className="relative mx-auto max-w-5xl">
          <p className="mb-6 inline-flex rounded-full border border-caramel/30 bg-caramel/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.16em] text-caramel">
            Specialist website design · London
          </p>
          <h1 className="max-w-4xl font-serif-tech text-4xl font-bold leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-6xl">
            Web design for accountants in London.
            <span className="mt-2 block font-normal italic text-caramel">
              Professional online presence. Clear next steps.
            </span>
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-cream/70 sm:text-lg">
            Caramel Web Studios designs and develops websites for accountancy
            practices, tax advisers and bookkeeping firms. We bring your services,
            expertise and client journey together in a website that feels
            professional, works across devices and makes it straightforward for
            prospective clients to contact your firm.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/book" className="inline-flex items-center justify-center gap-3 rounded-full bg-caramel px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-caramel-dark">
              Book a free website review <ArrowRight size={16} />
            </Link>
            <Link href="/#services" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-cream transition-colors hover:border-caramel hover:text-caramel">
              Explore our services
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-5">Designed around your practice</p>
            <h2 className="font-serif-tech text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Your website should do more than list your services.
            </h2>
          </div>
          <div className="space-y-5 text-[.98rem] leading-8 text-charcoal-muted">
            <p>
              People choosing an accountant want to understand whether a firm
              handles their needs, who they will be dealing with and how to take
              the next step. A clear website helps answer those questions before
              the first call.
            </p>
            <p>
              We structure pages around the services your practice actually
              provides, explain them in plain English and make contact options
              easy to find. The result is a more useful experience for visitors
              and a clearer starting point for conversations with your team.
            </p>
            <p>
              We work with practices such as chartered accountancy firms, tax
              advisers, bookkeeping businesses and payroll specialists. Each
              website is planned around the firm's audience, service mix and
              preferred way of handling enquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f4eee6] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow mb-5">What we can build</p>
          <h2 className="max-w-3xl font-serif-tech text-3xl font-bold tracking-tight sm:text-4xl">
            The website and digital tools your firm needs.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              ["Accountancy website design", "A bespoke, responsive website that presents your practice clearly and professionally."],
              ["Accounting service pages", "Dedicated pages for services such as accounts preparation, tax returns, payroll and bookkeeping where these are part of your offering."],
              ["Local SEO foundations", "Search-friendly page structure, metadata, internal links and useful location-aware content."],
              ["Online appointment booking", "A simple way for prospective clients to arrange an introductory call or consultation."],
              ["AI chatbot integration", "A guided first point of contact using information approved by your firm, with a clear route to a person."],
              ["CRM and website care", "Enquiry integrations, hosting options, maintenance and ongoing support after launch."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-caramel/15 bg-white p-6 sm:p-7">
                <CheckCircle2 className="mb-4 text-studio-teal" size={21} />
                <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-charcoal-muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-5">How a project works</p>
          <h2 className="font-serif-tech text-3xl font-bold tracking-tight sm:text-4xl">
            A straightforward process, from first review to launch.
          </h2>
          <ol className="mt-10 space-y-6">
            {[
              ["01", "Understand your firm", "We discuss your services, ideal clients, current website and what you want to improve."],
              ["02", "Agree the scope", "You receive a clear outline of the proposed pages, features, responsibilities and project stages."],
              ["03", "Design and develop", "We create the website, review it with you and refine the content and experience before launch."],
              ["04", "Launch and support", "We help prepare the site for launch and can discuss hosting, maintenance and future improvements."],
            ].map(([number, title, description]) => (
              <li key={number} className="grid gap-3 border-b border-charcoal/10 pb-6 sm:grid-cols-[4rem_1fr]">
                <span className="font-mono-tech text-sm text-caramel">{number}</span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-charcoal-muted">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-charcoal px-6 py-20 text-cream sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 font-mono-tech text-[10px] uppercase tracking-[.18em] text-caramel">Questions from accounting firms</p>
          <h2 className="font-serif-tech text-3xl font-bold tracking-tight sm:text-4xl">
            Accountancy website design FAQs.
          </h2>
          <div className="mt-10 space-y-7">
            {faqs.map(({ question, answer }) => (
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
            <p className="mb-3 font-mono-tech text-[10px] uppercase tracking-[.18em] text-white/75">Start with a conversation</p>
            <h2 className="max-w-2xl font-serif-tech text-3xl font-bold tracking-tight sm:text-4xl">
              Looking for a website developer for your London accounting firm?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85">
              Arrange a free 15-minute review and talk through what your practice needs.
            </p>
          </div>
          <Link href="/book" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-charcoal px-6 py-4 text-sm font-semibold text-cream transition-colors hover:bg-caramel-dark">
            Book your free review <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

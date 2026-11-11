
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about Caramel Web Studios website design, pricing, SEO, hosting, AI chatbots, booking integrations and website support.",
  alternates: { canonical: "/faqs" },
};

const faqGroups = [
  {
    title: "Website design & development",
    description: "Planning, building and launching your website.",
    questions: [
      {
        question: "Who do you build websites for?",
        answer:
          "We specialise in websites for accountants, tax advisers, bookkeeping firms and other professional service businesses. Our approach is centred on clear information, professional presentation and straightforward enquiry journeys.",
      },
      {
        question: "Will my website work on mobile devices?",
        answer:
          "Yes. We design responsive websites that adapt to mobile phones, tablets and desktop screens. We also consider navigation, readability and contact options across different screen sizes.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes. We can review your current website and discuss improvements to its design, content, structure and functionality. The scope will depend on your existing site and what you want to achieve.",
      },
      {
        question: "How long does a website take to build?",
        answer:
          "Timescales depend on the number of pages, functionality, content and feedback process. We agree the project scope and expected milestones before work begins.",
      },
      {
        question: "Can I update my website after it launches?",
        answer:
          "Yes. The available editing arrangements depend on the website setup. We can discuss how you want to manage updates and whether ongoing website care would be useful.",
      },
    ],
  },
  {
    title: "Pricing & getting started",
    description: "Understanding the project and what happens next.",
    questions: [
      {
        question: "How much does a website cost?",
        answer:
          "Pricing depends on the size of the website, the design requirements and any integrations or additional functionality. We discuss your requirements and provide a clear scope and quote before work starts.",
      },
      {
        question: "Do you offer a free consultation?",
        answer:
          "Yes. You can arrange a free 15-minute website review to discuss your current website, your goals and possible next steps. There is no obligation to proceed.",
      },
      {
        question: "What do you need from me to get started?",
        answer:
          "It helps to have a description of your business, your services, your preferred contact details and any existing branding or website content. We will explain what else is needed once we understand the project.",
      },
    ],
  },
  {
    title: "SEO & online visibility",
    description: "Helping prospective clients discover your practice.",
    questions: [
      {
        question: "Do you provide SEO for accountants?",
        answer:
          "We provide local SEO foundations as part of our digital services. This can include page structure, metadata, service-led content organisation and location relevance. SEO results are not guaranteed and depend on many factors beyond the website itself.",
      },
      {
        question: "Will my website appear on Google?",
        answer:
          "We build search-friendly website foundations, but no agency can guarantee a particular Google ranking or a specific timeframe. Visibility depends on competition, content quality, relevance, authority and other search factors.",
      },
      {
        question: "Can you help with Google Business Profile?",
        answer:
          "We can discuss how your website and Google Business Profile work together, including consistent business information and local search foundations. Any profile management work should be agreed as part of the project scope.",
      },
    ],
  },
  {
    title: "Hosting, chatbots & integrations",
    description: "Tools and support beyond the website itself.",
    questions: [
      {
        question: "Do you provide website hosting?",
        answer:
          "Yes. Hosting options are available, and the appropriate arrangement depends on your website and requirements. We can explain the available plan, storage, backups and support arrangements before you decide.",
      },
      {
        question: "Can you add an AI chatbot to my website?",
        answer:
          "Yes. We can integrate an AI chatbot designed around approved business information. It can help visitors find relevant services, answer common questions and collect enquiry details, with appropriate limits and a route to human assistance.",
      },
      {
        question: "Can you integrate online booking?",
        answer:
          "Yes. We can connect suitable booking tools so visitors can arrange consultations or appointments. The exact setup depends on your preferred booking platform and scheduling requirements.",
      },
      {
        question: "Can my website connect to a CRM?",
        answer:
          "Yes. We can discuss integrations that send website enquiries into a CRM and help organise follow-ups. Available options depend on the CRM platform and the workflow you need.",
      },
    ],
  },
  {
    title: "Website care & ongoing support",
    description: "Keeping your website supported after launch.",
    questions: [
      {
        question: "Do you provide ongoing website maintenance?",
        answer:
          "Website care options are available for businesses that need ongoing support. The agreed service can cover items such as updates, backups and routine website changes, depending on the selected plan.",
      },
      {
        question: "Can you help if something goes wrong with my website?",
        answer:
          "Yes. Support arrangements depend on whether your website is covered by an ongoing care plan or a separate support agreement. We will explain the relevant scope and response arrangements.",
      },
    ],
  },
];

const allQuestions = faqGroups.flatMap((group) => group.questions);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allQuestions.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="relative isolate overflow-hidden bg-charcoal px-6 pb-20 pt-36 text-cream sm:px-10 lg:px-16 lg:pb-28 lg:pt-44">
        <div aria-hidden className="soft-grid absolute inset-0 opacity-20" />
        <div aria-hidden className="hero-orb -right-24 -top-20" />

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-6 inline-flex rounded-full border border-caramel/30 bg-caramel/10 px-4 py-2 font-mono-tech text-[10px] uppercase tracking-[.16em] text-caramel">
            Frequently asked questions
          </p>

          <h1 className="max-w-4xl font-serif-tech text-4xl font-bold leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-7xl">
            A few things you
            <span className="block font-normal italic text-caramel">
              might want to know.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-cream/70 sm:text-lg">
            Find answers about our website design, digital services, pricing
            and ongoing support for accounting practices.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 rounded-2xl border border-caramel/20 bg-caramel-light p-6 sm:p-8">
            <p className="text-sm leading-7 text-charcoal-muted">
              Can&apos;t find the answer you&apos;re looking for?{" "}
              <Link
                href="/contact"
                className="font-semibold text-caramel-dark underline underline-offset-4 hover:text-charcoal"
              >
                Get in touch with our team.
              </Link>
            </p>
          </div>

          <div className="space-y-16">
            {faqGroups.map((group, groupIndex) => (
              <section key={group.title}>
                <div className="mb-7">
                  <p className="mb-3 font-mono-tech text-[10px] uppercase tracking-[.16em] text-caramel-dark">
                    0{groupIndex + 1} / Common questions
                  </p>
                  <h2 className="font-serif-tech text-2xl font-bold tracking-tight sm:text-3xl">
                    {group.title}
                  </h2>
                  <p className="mt-2 text-sm text-charcoal-muted">
                    {group.description}
                  </p>
                </div>

                <div className="divide-y divide-charcoal/10 border-y border-charcoal/10">
                  {group.questions.map((item) => (
                    <details key={item.question} className="group py-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-semibold marker:hidden">
                        <span>{item.question}</span>
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-caramel/30 text-caramel transition-all group-open:rotate-45 group-open:bg-caramel group-open:text-white">
                          +
                        </span>
                      </summary>
                      <p className="max-w-3xl pt-4 pr-10 text-sm leading-8 text-charcoal-muted">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-caramel px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="mb-3 font-mono-tech text-[10px] uppercase tracking-[.18em] text-white/75">
              Still have questions?
            </p>
            <h2 className="max-w-2xl font-serif-tech text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s talk about what your practice needs.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/85">
              Tell us about your project and we&apos;ll help you explore the options.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-charcoal px-6 py-4 text-sm font-semibold text-cream transition-colors hover:bg-caramel-dark"
          >
            Contact us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

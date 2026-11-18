import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Caramel Web Studios collects, uses and protects personal information.",
  alternates: { canonical: "/privacy" },
};

type LegalSection = { title: string; paragraphs?: string[]; paragraphs2?: string[]; bullets?: string[] };

const sections: LegalSection[] = [
  {
    title: "1. Who we are",
    paragraphs: [
      "Caramel Web Studios is a trading name of Bytesphere Digital Ltd, a company registered in England and Wales under company number 16844459. We provide website design and development, local SEO foundations, AI chatbot integration, online booking, CRM integration and website care.",
      "In this policy, “we”, “us” and “our” mean Bytesphere Digital Ltd trading as Caramel Web Studios. We act as a data controller for personal information we use to run our own business. When we handle personal data on behalf of a client through a service we provide, we may act as that client's data processor.",
    ],
    bullets: ["Website: https://caramelwebstudios.com", "Email: enquire@caramelwebstudios.com", "Company number: 16844459"],
  },
  {
    title: "2. Personal information we collect",
    paragraphs: ["Depending on how you interact with us, we may collect:"],
    bullets: [
      "Contact details, such as your name, business name, email address, telephone number and business address.",
      "Enquiry and project information, including messages, project briefs, requirements, feedback and information you choose to provide.",
      "Booking information, such as the date and time of a consultation and details needed to manage the booking.",
      "Client, billing and transaction records needed to provide services, issue invoices and maintain our accounts. Payment card details are handled by the relevant payment provider where one is used.",
      "Technical information, such as IP address, device and browser information, security logs and information about how our website is used, where collected.",
    ],
  },
  {
    title: "3. How and why we use information",
    paragraphs: ["We use personal information to respond to enquiries, arrange consultations, prepare quotations, deliver and support projects, administer client accounts, process payments, maintain security, improve our website and services, and meet legal and accounting obligations."],
  },
  {
    title: "4. Our lawful bases",
    paragraphs: ["We rely on the lawful basis that is appropriate to the purpose:"],
    bullets: [
      "Contract or steps before entering a contract — to provide a service you have requested, prepare a proposal or manage a client relationship.",
      "Legitimate interests — to respond to business enquiries, operate and secure our services, maintain records and develop our business, where those interests are not overridden by your rights.",
      "Consent — where you have given it, including where consent is required for non-essential cookies or certain electronic marketing.",
      "Legal obligation — to comply with applicable legal, tax, accounting and regulatory requirements.",
    ],
  },
  {
    title: "5. Enquiries, bookings and marketing",
    paragraphs: ["If you contact us through a form, email, telephone or booking service, we use the details you provide to respond and manage your enquiry or appointment. Booking and communication tools may be provided by third parties and their own privacy information will also apply."],
    bullets: ["We will send electronic marketing only where permitted by applicable law. You can opt out at any time using an unsubscribe link where provided or by emailing enquire@caramelwebstudios.com.", "We do not sell personal information."],
  },
  {
    title: "6. AI chatbots and client websites",
    paragraphs: ["We may use or integrate AI-powered chatbots to answer general enquiries, guide visitors and capture contact details. Information entered into a chatbot may be processed by the AI and hosting providers involved in delivering that service. Please do not enter passwords, payment card details or sensitive or confidential information unless the relevant service expressly provides a suitable secure process."],
    bullets: ["AI-generated answers may be inaccurate or incomplete and should not be treated as professional, legal, financial or accounting advice.", "Where we operate or support a chatbot on a client's website, the client will generally determine why and how visitor data is collected. We may process that data on the client's documented instructions as a processor. The parties should put an appropriate data processing agreement in place where required."],
  },
  {
    title: "7. Who we share information with",
    paragraphs: ["We may share information with service providers who help us operate our business or deliver your project. Depending on the service used, these may include website hosting and infrastructure providers, email and communications services, booking platforms, CRM providers, AI technology providers, analytics and security services, payment providers, and professional advisers such as accountants or solicitors."],
    paragraphs2: ["Providers may act as our processors or as independent controllers, depending on their role. We share only what is reasonably necessary and require appropriate safeguards where applicable."],
  },
  {
    title: "8. International transfers",
    paragraphs: ["Some providers may store or access information outside the United Kingdom. Where UK data protection law requires safeguards for an international transfer, we will take appropriate steps, such as relying on UK adequacy regulations or an approved transfer mechanism and any required supplementary measures."],
  },
  {
    title: "9. How long we keep information",
    paragraphs: ["We keep personal information only for as long as reasonably necessary for the purpose for which it was collected, including to meet legal, accounting, reporting and dispute-resolution requirements. Retention periods vary by record type. For example, we may keep general enquiries for up to 12 months after the last contact unless a longer period is justified; client and project records for the relationship and an appropriate period afterwards; and financial records for the period required by law. We securely delete or anonymise information when it is no longer needed."],
  },
  {
    title: "10. Cookies and similar technologies",
    paragraphs: ["Our website may use strictly necessary cookies for core functionality and security. If we use analytics, advertising or other non-essential cookies, we will provide information about them and obtain consent before setting them where required by law. You can also manage cookies through your browser, although blocking some cookies may affect functionality. Where a cookie preference tool is provided, you can use it to change your choices."],
  },
  {
    title: "11. Your data protection rights",
    paragraphs: ["Subject to applicable law and any relevant exemptions, you may have the right to request access to your personal information, ask us to correct it, request erasure or restriction, object to certain processing, request data portability, and withdraw consent where processing is based on consent. You also have the right to complain to the Information Commissioner's Office (ICO)."],
    bullets: ["To exercise a right, email enquire@caramelwebstudios.com. We may need to verify your identity before responding.", "ICO: https://ico.org.uk/"],
  },
  {
    title: "12. Security",
    paragraphs: ["We use reasonable technical and organisational measures designed to protect personal information against unauthorised access, loss, misuse, alteration or disclosure. No internet transmission or storage system can be guaranteed to be completely secure."],
  },
  {
    title: "13. Third-party websites",
    paragraphs: ["Our website may link to websites or services operated by others. Their privacy practices are outside our control, so please read their privacy information before providing personal data."],
  },
  {
    title: "14. Children's information",
    paragraphs: ["Our services are designed for businesses and adults. We do not knowingly seek to collect children's personal information through our website. If you believe a child has provided information to us, please contact us so we can review it."],
  },
  {
    title: "15. Changes and contact",
    paragraphs: ["We may update this policy to reflect changes in our services, providers or legal obligations. The latest version will be published on this page with its revision date."],
    bullets: ["Caramel Web Studios (a trading name of Bytesphere Digital Ltd)", "Company number: 16844459", "Email: enquire@caramelwebstudios.com", "Website: https://caramelwebstudios.com", "Registered in England and Wales"],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream">
      <section className="border-b border-charcoal/10 bg-[#f4eee6] px-6 pb-14 pt-28 sm:px-10 lg:px-16 lg:pb-20 lg:pt-36">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow">Legal information</p>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">Privacy Policy</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-charcoal/65">How we collect, use and protect personal information when you visit our website or work with Caramel Web Studios.</p>
          <p className="mt-6 font-mono-tech text-xs uppercase tracking-wider text-charcoal/45">Last updated: 18 November 2026</p>
        </div>
      </section>
      <section className="px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[220px_1fr]">
          <aside className="h-fit rounded-2xl border border-charcoal/10 bg-white p-5 lg:sticky lg:top-28">
            <p className="mb-4 font-mono-tech text-[10px] uppercase tracking-[.16em] text-caramel-dark">On this page</p>
            <nav aria-label="Privacy policy sections" className="space-y-2">
              {sections.map((section, index) => <a key={section.title} href={`#privacy-${index + 1}`} className="block text-xs leading-5 text-charcoal/65 transition-colors hover:text-caramel-dark">{section.title}</a>)}
            </nav>
          </aside>
          <div className="min-w-0 space-y-10">
            {sections.map((section, index) => (
              <article id={`privacy-${index + 1}`} key={section.title} className="scroll-mt-28">
                <h2 className="font-display text-xl font-semibold tracking-tight text-charcoal">{section.title}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4 text-sm leading-7 text-charcoal/70">{paragraph}</p>)}
                {section.paragraphs2?.map((paragraph) => <p key={paragraph} className="mt-4 text-sm leading-7 text-charcoal/70">{paragraph}</p>)}
                {section.bullets && <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-charcoal/70">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
              </article>
            ))}
            <div className="rounded-2xl border border-caramel/25 bg-[#f9f3eb] p-6">
              <p className="text-sm leading-7 text-charcoal/75">For information about using our website and engaging our services, please also read our <Link href="/terms" className="font-semibold text-caramel-dark underline underline-offset-4">Terms of Service</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

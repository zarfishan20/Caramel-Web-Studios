import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms that apply when you use the Caramel Web Studios website or engage our services.",
  alternates: { canonical: "/terms" },
};

type LegalSection = { title: string; paragraphs?: string[]; paragraphs2?: string[]; bullets?: string[] };\n\nconst sections: LegalSection[] = [
  {
    title: "1. About these terms",
    paragraphs: ["These Terms of Service apply to your use of the Caramel Web Studios website and the services we provide. Caramel Web Studios is a trading name of Bytesphere Digital Ltd, a company registered in England and Wales under company number 16844459.", "In these terms, “we”, “us” and “our” mean Bytesphere Digital Ltd trading as Caramel Web Studios. “You” and “your” mean the person or organisation engaging our services. “Services” means the services described in section 2 and any additional work agreed in writing."],
  },
  {
    title: "2. Our services",
    paragraphs: ["We provide digital services which may include website design and development, local SEO foundations, AI chatbot integration, online booking, CRM and workflow integration, web hosting, and website maintenance and care. The exact services, deliverables, fees and timescales for your project will be set out in the accepted quotation, proposal, order or separate service agreement."],
  },
  {
    title: "3. Quotations and forming an agreement",
    paragraphs: ["A quotation is an invitation to proceed and is valid for the period stated in it or, if no period is stated, for 30 days. A contract is formed when you accept our quotation or proposal and we confirm acceptance, or when we otherwise agree in writing to start the work. We may require an initial payment before work begins. If these terms conflict with a signed service agreement or a project-specific written agreement, that agreement will take priority for the conflicting subject."],
  },
  {
    title: "4. Scope, changes and additional work",
    paragraphs: ["We will deliver the work described in the agreed scope. Requests for additional pages, features, integrations, revisions or other work outside that scope may require a revised quotation, additional fees or a revised timetable. We will explain the proposed change and obtain your agreement before carrying out chargeable additional work."],
  },
  {
    title: "5. Fees, invoices and payment",
    paragraphs: ["Fees, payment milestones, recurring charges and due dates will be set out in your quotation, invoice or service plan. Unless agreed otherwise, any required deposit or advance payment is due before work starts and invoices are payable by the stated due date. Prices will state whether VAT is applicable; VAT will be added where legally chargeable. You must tell us promptly if you believe an invoice is incorrect."],
    bullets: ["For business customers, statutory interest and recovery costs may be claimed on qualifying late payments under applicable late-payment legislation.", "We may suspend affected services for overdue undisputed invoices after giving reasonable notice, where suspension is lawful and proportionate."],
  },
  {
    title: "6. Cancellations, termination and refunds",
    paragraphs: ["If you ask us to cancel a project after work has started, you may be responsible for fees for work properly completed up to the cancellation date and non-cancellable third-party costs reasonably incurred for your project. We will provide an explanation of any amount due. Any refund will be assessed under the agreement and applicable law."],
    bullets: ["If you are a consumer and enter into a contract online or away from our business premises, you may have a statutory 14-day cancellation right for certain services. The applicable rules and exceptions depend on the contract.", "If you ask us to begin a service during a statutory cancellation period, we will obtain any express request and acknowledgement required by law. If you then cancel, you may have to pay a proportionate amount for services supplied up to cancellation. Where a service is fully performed during the period, the right to cancel may be lost only where the required consent and acknowledgement have been obtained.", "Nothing in these terms limits any cancellation, refund or other right that cannot lawfully be excluded."],
  },
  {
    title: "7. Your responsibilities",
    paragraphs: ["You agree to provide accurate information, content, images, branding, approvals and system access reasonably needed for the project; ensure you have permission to use materials supplied to us; review work and provide feedback within agreed timescales; keep your account credentials secure; and use our services lawfully. You are responsible for the accuracy and legality of the business information and content you ask us to publish. Delays in receiving content, decisions or access may affect delivery dates."],
  },
  {
    title: "8. Website development and acceptance",
    paragraphs: ["We will use reasonable skill and care to design and develop the agreed website. You are responsible for checking the accuracy of text, prices, contact details, legal disclosures and other content before launch. Unless included in the agreed scope, ongoing content updates, new functionality, major redesigns, copywriting, specialist SEO campaigns and third-party licences are not included. We will tell you when the agreed deliverables are ready for review and address any material failure to meet the agreed specification."],
  },
  {
    title: "9. Intellectual property",
    paragraphs: ["You retain ownership of materials you supply to us and grant us permission to use them only as needed to provide the services. Subject to full payment, we assign to you the intellectual property rights we own in the bespoke final deliverables created specifically for you under the project, excluding the items below. Until full payment is received, we may withhold delivery or transfer of those rights."],
    bullets: ["We retain ownership of our pre-existing code, tools, processes, reusable components, know-how and materials not created exclusively for you.", "Third-party software, fonts, plugins, themes, libraries and other components remain subject to their own licences and terms. You are responsible for ongoing third-party subscriptions or licence fees where these are not expressly included in our agreement.", "Unless you ask us in writing not to do so before publication, we may identify the completed project in our portfolio using publicly available material and your business name. We will not intentionally publish your confidential information."],
  },
  {
    title: "10. Hosting services",
    paragraphs: ["Where we provide hosting, the package description or service agreement will set out the relevant resources, charges, renewal terms and included support. Hosting depends on third-party infrastructure, networks and software, so we do not promise uninterrupted availability or 100% uptime. We will take reasonable steps to maintain the service and, where practicable, notify you of planned maintenance or significant disruption."],
    bullets: ["You must not use hosting for unlawful activity, spam, malware, unauthorised access, infringement or activity that threatens service security or stability.", "Domain registration, migrations, premium licences, backups, restoration and specialist technical work are included only where expressly stated.", "We may restrict or suspend hosting where reasonably necessary to address a security incident, serious misuse, legal requirement or overdue payment. Where practicable, we will give notice and an opportunity to remedy the issue."],
  },
  {
    title: "11. Website care and support",
    paragraphs: ["Maintenance and support are limited to the tasks, hours, response arrangements and service levels included in the package you purchase. Unless expressly included, support does not cover major development, new features, extensive content changes, third-party costs or emergency work. Any response or resolution target is binding only if set out in a separate written service level agreement."],
  },
  {
    title: "12. AI chatbots and integrations",
    paragraphs: ["AI chatbots, booking tools, CRM connections and other integrations rely on third-party services and APIs. We will use reasonable care to configure the agreed functionality, but cannot guarantee that an AI system will always produce accurate answers or that a third-party service will remain available, compatible or unchanged. Third-party providers may change their features, pricing, terms or technical requirements."],
    bullets: ["AI-generated content is provided as an assistance tool and is not a substitute for qualified professional judgement or advice.", "Where a chatbot is used for accounting, tax, legal, financial or other regulated or professional services, you are responsible for approving its content, disclosures, escalation routes and intended use.", "You are responsible for ensuring your use of the integrated service complies with applicable law and the provider's terms."],
  },
  {
    title: "13. Third-party services",
    paragraphs: ["Our work may incorporate hosting, payment, booking, CRM, analytics, email, AI and other third-party services. Those services may be subject to separate terms, privacy notices, licences, charges and availability conditions. We are not responsible for a third party's acts, omissions or service interruption, except to the extent that our own breach of contract, negligence or other liability has caused the loss and cannot lawfully be excluded."],
  },
  {
    title: "14. Security, backups and data protection",
    paragraphs: ["We take reasonable steps to protect systems and information under our control, but no online service can be guaranteed completely secure. Unless backup services are expressly included, you are responsible for maintaining independent copies of your website, files and business data. Where we provide backups, their frequency, retention and restoration scope will be as stated in your service plan."],
    bullets: ["Our Privacy Policy explains how we handle personal information as a controller for our own business. Read it at /privacy.", "Where we process personal data on your behalf as a processor, the parties will enter into a data processing agreement where required by data protection law. You remain responsible for your own lawful basis, privacy information and instructions."],
  },
  {
    title: "15. Acceptable use",
    paragraphs: ["You must not use our services to break the law, distribute malware, send unlawful spam, infringe another person's rights, attempt unauthorised access, host fraudulent or harmful material, or interfere with our systems or other customers. We may investigate suspected misuse and take proportionate action, including restricting or suspending services where necessary."],
  },
  {
    title: "16. Confidentiality",
    paragraphs: ["Each party will take reasonable steps to protect confidential information received from the other and use it only for the purposes of the relationship. This does not apply to information that is public through no breach, already lawfully known, independently developed, or required to be disclosed by law."],
  },
  {
    title: "17. Liability",
    paragraphs: ["Nothing in these terms excludes or limits liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot lawfully be excluded or limited. Nothing in these terms affects a consumer's statutory rights."],
    bullets: ["Subject to the paragraph above, we are not liable for indirect or consequential loss, or loss of profit, revenue, anticipated savings, business opportunity or goodwill, to the extent such loss can lawfully be excluded.", "We are not responsible for loss caused by inaccurate or incomplete information supplied by you, your misuse of the services, or a third-party failure outside our reasonable control, except where our own breach, negligence or other actionable conduct caused the loss.", "For business customers only, and subject to the exclusions above, our total aggregate liability arising out of or in connection with the relevant project or service is limited to the fees paid or payable for that project or service in the 12 months before the event giving rise to the claim. This limit does not apply where prohibited by law."],
  },
  {
    title: "18. Suspension and termination",
    paragraphs: ["Either party may end a service in accordance with the relevant project agreement or subscription terms. We may suspend or terminate a service for a serious breach, unlawful use, a significant security risk, non-payment after reasonable notice, or where a provider or legal requirement makes continued delivery impossible. Where practicable, we will give notice and a reasonable opportunity to resolve the issue. Fees for work already carried out and agreed non-cancellable costs remain payable."],
  },
  {
    title: "19. Events outside our control",
    paragraphs: ["We are not responsible for delay or failure caused by events beyond our reasonable control, such as major network or infrastructure outages, failures of third-party providers, natural disasters, government action or widespread cyber incidents. We will take reasonable steps to reduce disruption and resume affected services."],
  },
  {
    title: "20. Complaints and disputes",
    paragraphs: ["If you have a concern, please contact us first at enquire@caramelwebstudios.com and explain the issue. We will review it and try to resolve it fairly. If a dispute cannot be resolved informally, either party may use the legal remedies available to them."],
  },
  {
    title: "21. Changes to these terms",
    paragraphs: ["We may update these terms for future engagements to reflect changes in our services, technology or legal requirements. The latest version will be published on this page with a revision date. Changes will not retrospectively remove rights or vary an existing agreement without a lawful basis. Where a change materially affects an ongoing service, we will provide appropriate notice."],
  },
  {
    title: "22. Governing law and contact",
    paragraphs: ["These terms are governed by the law of England and Wales. The courts of England and Wales will have jurisdiction, subject to any mandatory consumer protections that allow a consumer to bring proceedings elsewhere."],
    bullets: ["Caramel Web Studios (a trading name of Bytesphere Digital Ltd)", "Company number: 16844459", "Email: enquire@caramelwebstudios.com", "Website: https://caramelwebstudios.com", "Registered in England and Wales"],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <section className="border-b border-charcoal/10 bg-[#f4eee6] px-6 pb-14 pt-28 sm:px-10 lg:px-16 lg:pb-20 lg:pt-36">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow">Legal information</p>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">Terms of Service</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-charcoal/65">The terms that apply when you use our website or engage Caramel Web Studios for digital services.</p>
          <p className="mt-6 font-mono-tech text-xs uppercase tracking-wider text-charcoal/45">Last updated: 18 November 2026</p>
        </div>
      </section>
      <section className="px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[220px_1fr]">
          <aside className="h-fit rounded-2xl border border-charcoal/10 bg-white p-5 lg:sticky lg:top-28">
            <p className="mb-4 font-mono-tech text-[10px] uppercase tracking-[.16em] text-caramel-dark">On this page</p>
            <nav aria-label="Terms of service sections" className="space-y-2">
              {sections.map((section, index) => <a key={section.title} href={`#terms-${index + 1}`} className="block text-xs leading-5 text-charcoal/65 transition-colors hover:text-caramel-dark">{section.title}</a>)}
            </nav>
          </aside>
          <div className="min-w-0 space-y-10">
            {sections.map((section, index) => (
              <article id={`terms-${index + 1}`} key={section.title} className="scroll-mt-28">
                <h2 className="font-display text-xl font-semibold tracking-tight text-charcoal">{section.title}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4 text-sm leading-7 text-charcoal/70">{paragraph}</p>)}
                {section.bullets && <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-charcoal/70">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
              </article>
            ))}
            <div className="rounded-2xl border border-caramel/25 bg-[#f9f3eb] p-6">
              <p className="text-sm leading-7 text-charcoal/75">For details about how we handle personal information, please read our <Link href="/privacy" className="font-semibold text-caramel-dark underline underline-offset-4">Privacy Policy</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

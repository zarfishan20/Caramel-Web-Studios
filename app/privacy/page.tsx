import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How Caramel Web Studios handles personal information submitted through its website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream px-6 pb-20 pt-36 text-charcoal sm:px-10 lg:px-16">
      <article className="mx-auto max-w-3xl">
        <p className="eyebrow mb-5">Legal information</p>
        <h1 className="font-serif-tech text-4xl font-bold tracking-tight sm:text-5xl">Privacy notice</h1>
        <p className="mt-4 text-sm text-charcoal-muted">Last updated: 17 November 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-charcoal-muted">
          <section>
            <h2 className="text-lg font-semibold text-charcoal">Who we are</h2>
            <p>Caramel Web Studios is a trading name of Bytesphere Digital Ltd, registered in England and Wales (company number 16844459). In this notice, “we”, “us” and “our” refer to Bytesphere Digital Ltd trading as Caramel Web Studios.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-charcoal">Information we may collect</h2>
            <p>Depending on how you use this website, we may receive your name, business name, email address, website address, project requirements and the information you choose to include in an enquiry or booking. If you use the website chat assistant, the messages you submit are sent to our AI service provider so that a response can be generated. Please do not enter passwords, bank details, tax identifiers or other sensitive financial information into the chat.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-charcoal">How we use information</h2>
            <p>We use enquiry and booking information to respond to requests, arrange consultations, prepare project proposals, provide services and maintain business records. We do not sell personal information.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-charcoal">Service providers</h2>
            <p>Some website features are provided by third parties. The contact form is embedded using HubSpot, appointment booking is provided through Cal.com, and the chat assistant uses an AI service accessed through the OpenAI API. When you use these features, relevant information may be processed by those providers under their own terms and privacy information. We only use information submitted through these features for the purposes described above.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-charcoal">How long we keep information</h2>
            <p>We keep enquiry and client information only for as long as reasonably necessary for the purpose for which it was collected, including responding to enquiries, delivering agreed work and meeting legal or accounting obligations. Retention periods can vary depending on the type of record.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-charcoal">Your choices and rights</h2>
            <p>Depending on the circumstances, you may have rights to request access to, correction or deletion of your personal information, to object to or restrict certain processing, or to request a copy of information you provided. To make a request, contact us using the email address below. You can also complain to the UK Information Commissioner’s Office.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-charcoal">Contact</h2>
            <p>For privacy questions or requests, email <a className="font-semibold text-caramel-dark underline underline-offset-4" href="mailto:enquire@caramelwebstudios.com">enquire@caramelwebstudios.com</a>.</p>
          </section>
        </div>
        <p className="mt-10 border-t border-charcoal/10 pt-6 text-xs leading-6 text-charcoal-muted">This notice describes the website features currently identified by Caramel Web Studios. It should be reviewed against the company’s actual data retention, cookie, analytics and supplier settings before being treated as a complete compliance document.</p>
      </article>
    </main>
  );
}

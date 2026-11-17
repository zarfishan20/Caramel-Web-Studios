import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Terms",
  description: "Terms for using the Caramel Web Studios website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-cream px-6 pb-20 pt-36 text-charcoal sm:px-10 lg:px-16">
      <article className="mx-auto max-w-3xl">
        <p className="eyebrow mb-5">Legal information</p>
        <h1 className="font-serif-tech text-4xl font-bold tracking-tight sm:text-5xl">Website terms</h1>
        <p className="mt-4 text-sm text-charcoal-muted">Last updated: 17 November 2026</p>
        <div className="mt-10 space-y-8 text-sm leading-7 text-charcoal-muted">
          <section>
            <h2 className="text-lg font-semibold text-charcoal">About these terms</h2>
            <p>This website is operated by Bytesphere Digital Ltd, trading as Caramel Web Studios, a company registered in England and Wales (company number 16844459). By using this website, you agree to use it lawfully and not to interfere with its operation or security.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-charcoal">Website information</h2>
            <p>We aim to keep the information on this website accurate and up to date. Website content is general information about our services and is not a binding project offer, professional accounting advice or a guarantee of any particular business result.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-charcoal">Project proposals and services</h2>
            <p>Any project scope, price, delivery date, payment schedule, support arrangement and other service terms will be set out separately in a written proposal or agreement. A project begins only after the scope and terms have been agreed by both parties.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-charcoal">Third-party services and links</h2>
            <p>This website may link to or embed services operated by other providers, including appointment booking, contact forms and AI tools. Those services are subject to their own terms and policies. We are not responsible for the content or availability of external websites that we do not control.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-charcoal">Intellectual property</h2>
            <p>Unless stated otherwise, the content and design elements on this website belong to Bytesphere Digital Ltd or are used with permission. You may not reproduce or commercially reuse website content without prior written permission.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-charcoal">Liability</h2>
            <p>Nothing in these terms excludes or limits liability where it would be unlawful to do so, including liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation. To the extent permitted by law, we exclude liability for losses arising from reliance on general website information or the unavailability of third-party services.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-charcoal">Governing law</h2>
            <p>These website terms are governed by the laws of England and Wales. The courts of England and Wales will have jurisdiction, subject to any mandatory rights you may have under applicable law.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-charcoal">Contact</h2>
            <p>Questions about these terms can be sent to <a className="font-semibold text-caramel-dark underline underline-offset-4" href="mailto:enquire@caramelwebstudios.com">enquire@caramelwebstudios.com</a>.</p>
          </section>
        </div>
        <p className="mt-10 border-t border-charcoal/10 pt-6 text-xs leading-6 text-charcoal-muted">These are general website terms and should be checked by a qualified UK adviser against the company’s actual services and contracting practices before publication as final legal terms.</p>
      </article>
    </main>
  );
}

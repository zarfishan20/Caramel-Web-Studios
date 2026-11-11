
import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Caramel Web Studios",
  description:
    "Get in touch with Caramel Web Studios for website design, hosting, AI chatbots, booking integrations and digital solutions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream px-5 pb-20 pt-36 text-[#2b2621] sm:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* Contact information */}
          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit rounded-full border border-[#e8d8c7] bg-[#f4ece3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#a87545]">
              Let&apos;s talk
            </span>

            <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s build something
              <span className="text-caramel"> great together.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#74685e]">
              Whether you need a new website, better online visibility,
              hosting or smarter business tools, we&apos;d love to hear about
              your project.
            </p>

            <div className="mt-10 space-y-7">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#a87545]">
                  Email us
                </p>
                <a
                  href="mailto:info@caramelwebstudios.com"
                  className="text-lg font-medium transition-colors hover:text-caramel"
                >
                  enquire@caramelwebstudios.com
                </a>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#a87545]">
                  Location
                </p>
                <p className="text-lg text-[#74685e]">
                  Barking, London, UK
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-full bg-[#2b2621] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-caramel"
              >
                Book a consultation
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          {/* HubSpot contact form */}
          <div className="rounded-3xl border border-[#eee5db] bg-white p-6 shadow-xl shadow-[#2b2621]/5 sm:p-9">
            <div className="mb-7">
              <h2 className="text-2xl font-semibold">
                Tell us about your project
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#83766b]">
                Complete the form below and we&apos;ll be in touch.
              </p>
            </div>

            <div
              className="hs-form-frame"
              data-region="eu1"
              data-form-id="687d61ee-16da-4c75-bd0c-fb466563e114"
              data-portal-id="149183960"
            />

            <Script
              src="https://js-eu1.hsforms.net/forms/embed/149183960.js"
              strategy="afterInteractive"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

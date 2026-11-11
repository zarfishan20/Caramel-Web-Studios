
"use client";

import {
  CheckCircle2,
  FileText,
  MessageSquareText,
  MousePointerClick,
} from "lucide-react";

const outcomes = [
  {
    icon: FileText,
    title: "Explain your services",
    detail:
      "Make accounts, tax, payroll and advisory services easy to understand.",
  },
  {
    icon: CheckCircle2,
    title: "Build confidence",
    detail:
      "Present your experience, approach and credentials clearly.",
  },
  {
    icon: MousePointerClick,
    title: "Guide the next step",
    detail:
      "Give visitors clear ways to enquire, call or book a consultation.",
  },
  {
    icon: MessageSquareText,
    title: "Stay connected",
    detail:
      "Bring enquiries and useful tools together around your workflow.",
  },
];

export default function Testimonial() {
  return (
    <>
      {/* Website outcomes section */}
      <section className="bg-caramel-off px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-330 gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow mb-5">
              Designed around your clients
            </p>

            <h2 className="font-serif-tech text-3xl font-bold leading-[1.12] tracking-[-.04em] text-charcoal sm:text-4xl">
              What should a good accounting website do?
            </h2>

            <p className="mt-5 max-w-lg text-[.95rem] leading-7 text-charcoal-muted">
              It should answer the questions a prospective client has before
              they contact you — and make the decision to get in touch feel
              straightforward.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {outcomes.map(({ icon: Icon, title, detail }) => (
              <div
                key={title}
                className="rounded-2xl border border-caramel/15 bg-white/75 p-6"
              >
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-caramel-light text-caramel-dark">
                  <Icon size={19} strokeWidth={1.6} />
                </div>

                <h3 className="font-serif-tech text-lg font-semibold text-charcoal">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-charcoal-muted">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer testimonial */}
      <section className="bg-caramel px-8 py-20 text-center lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 font-serif-tech text-7xl font-black leading-none text-white/20">
            &ldquo;
          </p>

          <blockquote className="mb-5 font-serif-tech text-2xl font-bold italic leading-snug text-white lg:text-3xl">
            Very professional and speedy service. Provided amazing support
            throughout.
          </blockquote>

          <p className="text-sm text-white/70">
            — Principal Accountant, Flexipay Systems
          </p>
        </div>
      </section>
    </>
  );
}

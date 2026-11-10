"use client";

import { useEffect } from "react";
import { Target, MessageCircle, ListChecks, Handshake, ArrowUpRight } from "lucide-react";
import { LucideIcon } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";

type Perk = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const perks: Perk[] = [
  { icon: Target, title: "An accountant-focused review", desc: "We look at how clearly your services, expertise and next steps come across." },
  { icon: MessageCircle, title: "Straightforward advice", desc: "Plain English, practical recommendations and no unnecessary technical jargon." },
  { icon: ListChecks, title: "Useful next steps", desc: "Understand what is working, what could improve and what to prioritise." },
  { icon: Handshake, title: "No obligation", desc: "You can take the recommendations away and decide what is right for your firm." },
];

const faqs = [
  { q: "Is the website review free?", a: "Yes. The 30-minute review is free and there is no obligation to work with us afterwards." },
  { q: "What should I prepare?", a: "Just bring your current website address, if you have one, and a sense of the clients or services you would like to focus on." },
  { q: "Do you only work with London firms?", a: "Our focus is accounting practices in London. If your firm is elsewhere in the UK, you are still welcome to get in touch." },
  { q: "What happens after the call?", a: "We will talk through the main opportunities and possible next steps. If you would like a website project proposal, we can discuss the scope and provide one for you to consider." },
];

export default function BookingClient() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "website-consultation" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#c58d59" },
          dark: { "cal-brand": "#c58d59" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <section className="relative overflow-hidden bg-charcoal px-6 pb-16 pt-36 text-cream sm:px-10 lg:px-16 lg:pb-20">
        <div aria-hidden className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-caramel/15" />
        <div aria-hidden className="absolute -right-8 top-0 h-72 w-72 rounded-full border border-caramel/10" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-caramel/30 bg-caramel/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.16em] text-caramel">
            <span className="h-2 w-2 rounded-full bg-studio-teal" />
            Free · No obligation · 30 minutes
          </p>
          <h1 className="font-serif-tech text-4xl font-bold leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-6xl">
            Let&apos;s take a closer look at
            <span className="mt-1 block font-normal italic text-caramel">your firm&apos;s website.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[.98rem] leading-8 text-cream/65 sm:text-lg">
            Book a relaxed, practical review of your accounting firm&apos;s online
            presence. We&apos;ll discuss how your website presents your services,
            builds confidence and helps prospective clients get in touch.
          </p>
        </div>
      </section>

      <section className="border-b border-caramel/15 bg-[#f4eee6] px-6 py-10 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-caramel-dark shadow-sm">
                <Icon size={19} strokeWidth={1.6} />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-charcoal">{title}</h2>
                <p className="mt-1 text-xs leading-6 text-charcoal-muted">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <p className="eyebrow mb-4">Choose a time that suits you</p>
            <h2 className="font-serif-tech text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">Book your website review</h2>
            <p className="mt-3 text-sm leading-6 text-charcoal-muted">A focused conversation about your firm, your website and where to improve.</p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-caramel/15 bg-white p-2 shadow-[0_24px_70px_rgba(43,38,33,.08)] sm:p-5">
            <Cal
              namespace="website-consultation"
              calLink="caramelwebstudios/website-consultation"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
            />
          </div>
          <p className="mt-6 text-center text-sm text-charcoal-muted">
            Prefer to open the booking page separately?{" "}
            <a
              href="https://cal.com/caramelwebstudios/website-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-caramel-dark underline underline-offset-4 transition-colors hover:text-studio-teal"
            >
              Book directly on Cal.com <ArrowUpRight className="inline" size={13} />
            </a>
          </p>
        </div>
      </section>

      <section className="bg-charcoal px-6 py-16 text-cream sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-4 !text-caramel">Before we speak</p>
          <h2 className="mb-9 font-serif-tech text-3xl font-bold tracking-tight sm:text-4xl">A few things you might be wondering.</h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-white/10 pb-6 last:border-0">
                <h3 className="text-base font-semibold text-cream">{q}</h3>
                <p className="mt-2 text-sm leading-7 text-cream/60">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

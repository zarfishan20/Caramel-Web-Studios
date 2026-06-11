"use client";

import { useState } from "react";
import Link from "next/link";

type Plan = {
  tier: string;
  name: string;
  price: string;
  priceSuffix?: string;
  desc: string;
  features: string[];
  featured?: boolean;
};

const tabs = [
  { label: "Web Development", key: "dev" },
  { label: "Web Care", key: "care" },
];

const plans: Record<string, Plan[]> = {
  dev: [
    { 
      tier: "Starter", 
      name: "Starter Package", 
      price: "POA", 
      desc: "A professional 5-page foundation with automated booking and lead capture.", 
      features: [
        "5-page professional website",
        "Contact form",
        "Cal.com booking integration",
        "Google Business setup",
        "Mobile responsive design",
        "1 month support included"
      ]
    },
    { 
      tier: "Most Popular", 
      name: "Growth Package", 
      price: "POA", 
    desc: "Our full digital system including HubSpot CRM and local SEO strategy.", 
      features: [
        "Everything in Starter",
        "AI Chatbot setup",
        "HubSpot CRM integration",
        "Local SEO setup",
        "Professional copywriting",
        "3 months support included"
      ],
      featured: true 
    },
    { 
      tier: "Premium", 
      name: "Premium Package", 
      price: "POA", 
      desc: "A larger-scale build with custom pages and extended technical support.", 
      features: [
        "Everything in Growth",
        "Up to 15 custom pages",
        "Client portal integration",
        "Advanced SEO strategy",
        "Monthly reporting dashboard",
        "6 months support included"
      ]
    },
  ],
  care: [
    { 
      tier: "Retainer", 
      name: "Monthly Care Plan", 
      price: "£150", 
      priceSuffix: "/mo", 
     desc: "Essential for AI Chatbot functionality, hosting, and CRM monitoring.", 
      features: [
        "AI Chatbot Subscription",
        "Premium Website Hosting",
        "Security & Plugin Updates",
        "HubSpot Data Monitoring",
        "Priority Technical Support",
        "Cancel Anytime"
      ],
      featured: true
    },
  ],
};

export default function Pricing() {
  const [active, setActive] = useState("dev");
  const currentPlans = plans[active];

  return (
    <section id="pricing" className="px-8 lg:px-12 py-24" style={{ backgroundColor: "var(--color-caramel-off)" }}>
      <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--color-caramel)" }}>Transparent pricing</p>
      <h2 className="text-4xl font-bold tracking-tight mb-8 max-w-lg leading-snug" style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink)" }}>
        Simple packages, no surprises
      </h2>

      <div className="flex gap-2 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className="px-5 py-2 rounded-full text-sm font-medium transition-all border cursor-pointer"
            style={{
              backgroundColor: active === tab.key ? "var(--color-caramel)" : "transparent",
              color: active === tab.key ? "white" : "var(--color-ink-muted)",
              borderColor: active === tab.key ? "var(--color-caramel)" : "color-mix(in srgb, var(--color-caramel) 25%, transparent)",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {currentPlans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-2xl p-7 border transition-transform hover:-translate-y-1"
            style={{
              backgroundColor: plan.featured ? "var(--color-ink)" : "white",
              borderColor: plan.featured ? "var(--color-ink)" : "color-mix(in srgb, var(--color-caramel) 15%, transparent)",
            }}
          >
            <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: plan.featured ? "rgba(201,118,58,0.6)" : "var(--color-ink-muted)" }}>{plan.tier}</p>
            <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-serif)", color: plan.featured ? "var(--color-caramel-lighter)" : "var(--color-ink)" }}>{plan.name}</h3>
            <div className="text-3xl font-black mb-1" style={{ fontFamily: "var(--font-serif)", color: "var(--color-caramel)" }}>
              {plan.price}
              {plan.priceSuffix && <small className="text-sm font-normal ml-1" style={{ color: "rgba(201,118,58,0.55)" }}>{plan.priceSuffix}</small>}
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: plan.featured ? "rgba(251,246,238,0.5)" : "var(--color-ink-muted)" }}>{plan.desc}</p>
            <ul className="space-y-2 mb-7">
              {plan.features.map((f) => (
                <li key={f} className="text-sm pl-4 relative" style={{ color: plan.featured ? "rgba(251,246,238,0.65)" : "var(--color-ink-muted)" }}>
                  <span className="absolute left-0 font-bold" style={{ color: "var(--color-caramel)" }}>✓</span>{f}
                </li>
              ))}
            </ul>
            <Link
              href="/book"
              className="block w-full text-center py-2.5 rounded-full text-sm font-medium border transition-all"
              style={{
                backgroundColor: plan.featured ? "var(--color-caramel)" : "transparent",
                color: plan.featured ? "white" : "var(--color-caramel)",
                borderColor: plan.featured ? "var(--color-caramel)" : "color-mix(in srgb, var(--color-caramel) 30%, transparent)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-caramel)";
                (e.currentTarget as HTMLAnchorElement).style.color = "white";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = plan.featured ? "var(--color-caramel)" : "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = plan.featured ? "white" : "var(--color-caramel)";
              }}
            >
              Get started
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

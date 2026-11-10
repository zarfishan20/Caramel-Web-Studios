"use client";

import { ArrowUpRight, CheckCircle2, Menu } from "lucide-react";

export default function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-charcoal/10 bg-[#fffdfa] shadow-xl shadow-charcoal/10">
      <div className="flex items-center justify-between border-b border-charcoal/10 px-5 py-4 sm:px-7">
        <div>
          <p className="font-serif-tech text-sm font-bold tracking-[.08em] text-charcoal">WILLOW & CO.</p>
          <p className="mt-0.5 text-[8px] uppercase tracking-[.2em] text-charcoal-muted">Chartered Accountants</p>
        </div>
        <div className="hidden items-center gap-5 text-[8px] font-medium text-charcoal/70 sm:flex">
          <span>Our services</span><span>About</span><span>Insights</span>
          <span className="rounded-full bg-charcoal px-3 py-2 text-white">Contact us</span>
        </div>
        <Menu size={17} className="text-charcoal sm:hidden" />
      </div>

      <div className="relative overflow-hidden bg-[#f3eee6] px-6 py-9 sm:px-9 sm:py-12">
        <div aria-hidden className="absolute -right-12 -top-10 h-56 w-56 rounded-full border border-caramel/20" />
        <div aria-hidden className="absolute -right-2 top-0 h-40 w-40 rounded-full border border-caramel/20" />
        <div className="relative max-w-[320px]">
          <p className="mb-3 font-mono-tech text-[8px] uppercase tracking-[.2em] text-studio-teal">Accountancy with clarity</p>
          <h3 className="font-serif-tech text-3xl font-semibold leading-[1.08] tracking-[-.04em] text-charcoal sm:text-4xl">
            Clear advice.<br /><span className="italic font-normal text-caramel-dark">Confident decisions.</span>
          </h3>
          <p className="mt-4 max-w-[260px] text-[10px] leading-5 text-charcoal-muted sm:text-xs">
            Practical accountancy and tax support for businesses and individuals.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-charcoal px-4 py-2.5 text-[9px] font-semibold text-white">
            Speak to our team <ArrowUpRight size={12} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-charcoal/10 bg-white px-3 py-4 sm:px-6">
        {["Accounts & tax", "Business support", "Personal tax"].map((item) => (
          <div key={item} className="flex items-center justify-center gap-1.5 px-1 text-center text-[8px] font-medium text-charcoal/70 sm:gap-2 sm:text-[9px]">
            <CheckCircle2 size={11} className="shrink-0 text-studio-teal" /> {item}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-charcoal/10 bg-white px-5 py-3 sm:px-7">
        <span className="font-mono-tech text-[7px] uppercase tracking-[.16em] text-charcoal-muted">Illustrative homepage concept</span>
        <span className="text-[8px] font-semibold text-caramel-dark">Designed for an accounting practice</span>
      </div>
    </div>
  );
}

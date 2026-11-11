"use client";

import { ArrowUpRight, CheckCircle2, Menu } from "lucide-react";

export default function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-[#d9e0d7] bg-[#fbfaf6] shadow-xl shadow-charcoal/10">
      <div className="flex items-center justify-between border-b border-[#d9e0d7] bg-[#fbfaf6] px-5 py-4 sm:px-7">
        <div>
          <p className="font-serif-tech text-sm font-bold tracking-[.08em] text-[#29473d]">Westbridge Accountants</p>
          <p className="mt-0.5 text-[8px] uppercase tracking-[.2em] text-[#7b897d]">Chartered Accountants</p>
        </div>
        <div className="hidden items-center gap-5 text-[8px] font-medium text-[#53685c] sm:flex">
          <span>Our services</span><span>Our people</span><span>Insights</span>
          <span className="rounded-full bg-[#29473d] px-3 py-2 text-[#fbfaf6]">Get in touch</span>
        </div>
        <Menu size={17} className="text-[#29473d] sm:hidden" />
      </div>

      <div className="relative isolate min-h-[250px] overflow-hidden bg-[#e7eee5] px-6 py-9 sm:px-9 sm:py-12">
        <div aria-hidden className="absolute -right-10 -top-12 h-64 w-64 rounded-full border border-[#9eae9e]/50" />
        <div aria-hidden className="absolute right-8 top-8 h-44 w-44 rounded-full border border-[#9eae9e]/45" />
        <div aria-hidden className="absolute -bottom-24 right-24 h-52 w-52 rounded-full bg-[#cbd9ca]/65 blur-2xl" />
        <div aria-hidden className="absolute right-16 top-12 hidden h-40 w-32 rotate-[18deg] rounded-[90%_0_90%_0] border border-[#829a87]/50 bg-[#b9cbb9]/35 sm:block" />
        <div className="relative max-w-[320px]">
          <p className="mb-3 font-mono-tech text-[8px] uppercase tracking-[.2em] text-[#657e6b]">A clearer view of your finances</p>
          <h3 className="font-serif-tech text-3xl font-semibold leading-[1.08] tracking-[-.04em] text-[#29473d] sm:text-4xl">
            Thoughtful advice.<br /><span className="font-normal italic text-[#8b7656]">Room to grow.</span>
          </h3>
          <p className="mt-4 max-w-[260px] text-[10px] leading-5 text-[#68796e] sm:text-xs">
            Personal accountancy and tax guidance for people building something meaningful.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#29473d] px-4 py-2.5 text-[9px] font-semibold text-[#fbfaf6]">
            Meet your accountant <ArrowUpRight size={12} />
          </div>
        </div>
        <div aria-hidden className="absolute bottom-0 right-5 hidden h-28 w-24 rounded-t-[48%] border-x border-t border-[#8ba18f]/50 sm:block" />
      </div>

      <div className="grid grid-cols-3 divide-x divide-[#e1e7df] bg-[#fbfaf6] px-3 py-4 sm:px-6">
        {["Accounts & tax", "Business advice", "Personal finance"].map((item) => (
          <div key={item} className="flex items-center justify-center gap-1.5 px-1 text-center text-[8px] font-medium text-[#53685c] sm:gap-2 sm:text-[9px]">
            <CheckCircle2 size={11} className="shrink-0 text-[#718b75]" /> {item}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-[#e1e7df] bg-[#fbfaf6] px-5 py-3 sm:px-7">
        <span className="font-mono-tech text-[7px] uppercase tracking-[.16em] text-[#89958a]">Illustrative homepage concept</span>
        <span className="text-[8px] font-semibold text-[#718b75]">A considered, people-first approach</span>
      </div>
    </div>
  );
}

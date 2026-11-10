"use client";

export default function DashboardMock() {
  return (
    <div className="w-full rounded-2xl border border-caramel/15 bg-charcoal-soft p-4 shadow-2xl shadow-black/30 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono-tech text-[8px] uppercase tracking-[.16em] text-cream/40">Client overview</span>
      </div>

      <div className="mt-5 flex items-end justify-between">
        <div>
          <p className="font-mono-tech text-[9px] text-cream/45">Welcome back</p>
          <p className="mt-1 font-serif-tech text-xl font-semibold text-cream">Smith & Co.</p>
        </div>
        <span className="rounded-full border border-studio-teal/40 bg-studio-teal/15 px-2.5 py-1 font-mono-tech text-[8px] text-[#a6d5c8]">All systems active</span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {[
          { value: "94", label: "Enquiries" },
          { value: "31", label: "Booked" },
          { value: "12k", label: "Pipeline" },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border border-caramel/10 bg-charcoal p-3">
            <p className="font-serif-tech text-xl font-semibold text-caramel sm:text-2xl">{item.value}</p>
            <p className="mt-1 font-mono-tech text-[8px] text-cream/45">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-caramel/10 bg-charcoal p-3">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono-tech text-[8px] uppercase tracking-wider text-cream/50">Enquiry activity</span>
          <span className="font-mono-tech text-[8px] text-studio-teal">+18.4%</span>
        </div>
        <div className="flex h-20 items-end gap-2">
          {[38, 52, 44, 70, 55, 84, 66, 92, 73, 100, 80, 94].map((height, index) => (
            <div key={index} className="flex-1 rounded-t-sm bg-gradient-to-t from-caramel-dark to-caramel" style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>

      <div className="mt-3 space-y-2">
        {[
          { initials: "JW", name: "James Whitfield", detail: "Tax planning consultation" },
          { initials: "SR", name: "Sarah Reeves", detail: "New client enquiry" },
        ].map((client) => (
          <div key={client.initials} className="flex items-center justify-between gap-2 rounded-xl border border-caramel/10 bg-charcoal px-3 py-2">
            <div className="flex min-w-0 items-center gap-2.5">
              <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-caramel/15 font-mono-tech text-[8px] text-caramel">{client.initials}</div>
              <div className="min-w-0">
                <p className="truncate text-[9px] font-medium text-cream">{client.name}</p>
                <p className="truncate font-mono-tech text-[7px] text-cream/40">{client.detail}</p>
              </div>
            </div>
            <span className="shrink-0 rounded-full bg-studio-teal/15 px-2 py-1 font-mono-tech text-[7px] text-[#a6d5c8]">New</span>
          </div>
        ))}
      </div>
    </div>
  );
}

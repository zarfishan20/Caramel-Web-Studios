

"use client";



export default function DashboardMock() {
  return (
    <div className="reveal w-full max-w-md rounded-3xl border border-caramel/15 bg-charcoal-soft p-6 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>

      <div className="mt-6 font-mono-ui text-[10px] text-cream/50">
        Client Dashboard — Smith & Co. CPA
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2.5">
        {[
          { v: "94", l: "Leads" },
          { v: "31", l: "Booked" },
          { v: "12k", l: "Revenue" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-caramel/15 bg-charcoal p-3">
            <div className="font-display text-2xl text-caramel">{s.v}</div>
            <div className="mt-1 font-mono-ui text-[9px] text-cream/45">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="mt-4 flex h-24 items-end gap-2 rounded-xl border border-caramel/15 bg-charcoal p-3">
        {[55, 70, 45, 85, 60, 92, 78].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-md bg-linear-to-t from-caramel-deep to-caramel"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      <div className="mt-4 space-y-2">
        {[
          { i: "JW", n: "James Whitfield", s: "Tax Planning · Consultation" },
          { i: "SR", n: "Sarah Reeves LLC", s: "Audit Prep · Follow-up" },
        ].map((c) => (
          <div
            key={c.i}
            className="flex items-center justify-between rounded-xl border border-caramel/15 bg-charcoal px-3 py-2.5"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-caramel/15 font-mono-ui text-[10px] text-caramel">
                {c.i}
              </div>
              <div>
                <div className="text-[12px] text-cream">{c.n}</div>
                <div className="font-mono-ui text-[9px] text-cream/45">{c.s}</div>
              </div>
            </div>
            <span className="rounded-full border border-teal/40 bg-teal/15 px-2.5 py-1 font-mono-ui text-[9px] text-teal">
              Confirmed
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
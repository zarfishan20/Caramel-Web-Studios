"use client";



const badges = ["Chartered accountants","Tax advisors","Bookkeepers","Payroll firms"];

export default function NicheBand() {
  return (
    <div
      className="px-8 lg:px-12 py-8 flex flex-wrap items-center justify-between gap-6"
      style={{ backgroundColor: "var(--color-caramel)" }}
    >
      <h2 className="text-xl font-bold text-white max-w-md leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
        Built for chartered accountants, tax advisors, and bookkeeping firms across London.
      </h2>
      <div className="flex flex-wrap gap-2">
        {badges.map((b) => (
          <span key={b} className="text-xs font-medium px-4 py-1.5 rounded-full text-white" style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

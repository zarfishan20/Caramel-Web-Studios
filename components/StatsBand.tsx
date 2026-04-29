"use client";



const stats = [
  { num: "100%", desc: "Accounting sector focus" },
  { num: "14 days", desc: "Average time to launch" },
  { num: "99.9%", desc: "Uptime guaranteed" },
  { num: "24/7", desc: "Support included" },
];

export default function StatsBand() {
  return (
    <div
      className="py-10 px-8 lg:px-12 flex flex-wrap justify-around gap-6"
      style={{ backgroundColor: "var(--color-ink)" }}
    >
      {stats.map(({ num, desc }) => (
        <div key={num} className="text-center">
          <p className="text-4xl font-bold leading-none" style={{ fontFamily: "var(--font-serif)", color: "var(--color-caramel)" }}>{num}</p>
          <p className="text-sm mt-2" style={{ color: "rgba(251,246,238,0.5)" }}>{desc}</p>
        </div>
      ))}
    </div>
  );
}

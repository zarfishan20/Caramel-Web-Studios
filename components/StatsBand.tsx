"use client";



const stats = [
  { num: "100%", desc: "Accounting sector focus" },
  { num: "14 days", desc: "Average time to launch" },
  { num: "99.9%", desc: "Uptime guaranteed" },
  { num: "24/7", desc: "Support included" },
];

export default function StatsBand() {
  return (
 <div className="py-10 px-8 lg:px-12 flex flex-wrap justify-around gap-6 bg-charcoal">
  {stats.map(({ num, desc }) => (
    <div key={num} className="text-center">
      {/* Number styled with Syne serif and Caramel gold */}
      <p className="text-4xl font-bold leading-none font-serif-tech text-caramel">
        {num}
      </p>
      
      {/* Description styled with 50% opacity Caramel Light */}
      <p className="text-sm mt-2 text-caramel-light/50 font-mono-tech">
        {desc}
      </p>
    </div>
  ))}
</div>
  );
}

"use client";



const steps = [
  { title: "Discovery call", desc: "We learn about your firm, your clients, and your goals. 30 minutes, no obligation." },
  { title: "Design & build", desc: "We design and develop your site, chatbot, booking system, and CRM connections." },
  { title: "Review & refine", desc: "You review, we refine. Two rounds of revisions included as standard." },
  { title: "Go live", desc: "We launch your site and handle everything ongoing through Web Care." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-8 lg:px-12 py-24" style={{ backgroundColor: "var(--color-ink)" }}>
      <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "rgba(201,118,58,0.7)" }}>How it works</p>
      <h2 className="text-4xl font-bold tracking-tight mb-14 max-w-lg leading-snug" style={{ fontFamily: "var(--font-serif)", color: "var(--color-caramel-lighter)" }}>
        From first call to live site in 14 days
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={step.title}>
            <p className="text-5xl font-black leading-none mb-3" style={{ fontFamily: "var(--font-serif)", color: "rgba(201,118,58,0.2)" }}>
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="text-base font-medium mb-2" style={{ color: "var(--color-caramel-lighter)" }}>{step.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(251,246,238,0.45)" }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

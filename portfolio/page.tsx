"use client";

import Image from "next/image";

const projects = [
  {
    title: "London Accounting Firm",
    desc: "High-converting website with booking + AI chatbot.",
    image: "/project1.jpg",
    tags: ["Web Design", "SEO", "Automation"],
  },
  {
    title: "Tax Consultancy",
    desc: "Clean, fast site with HubSpot CRM integration.",
    image: "/project2.jpg",
    tags: ["CRM", "Performance", "UX"],
  },
  {
    title: "Finance Startup",
    desc: "Modern SaaS-style landing page with lead funnels.",
    image: "/project3.jpg",
    tags: ["UI/UX", "Branding", "Funnels"],
  },
];

export default function PortfolioPage() {
  return (
    <main className="px-6 lg:px-12 py-24 max-w-7xl mx-auto">
      
      {/* Hero */}
      <section className="mb-20 text-center animate-fade-up">
        <h1 className="text-5xl font-serif font-black mb-4 text-ink">
          Our Work
        </h1>
        <p className="text-ink-muted max-w-xl mx-auto">
          A selection of high-performing websites built for accountants and finance brands.
        </p>
      </section>

      {/* Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group rounded-2xl overflow-hidden bg-white border border-caramel/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-serif text-xl font-bold mb-2 text-ink">
                {project.title}
              </h3>
              <p className="text-sm text-ink-muted mb-4">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded bg-caramel-light text-caramel-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-24 text-center animate-fade-up-delay">
        <h2 className="text-3xl font-serif font-bold mb-4 text-ink">
          Want results like these?
        </h2>
        <p className="text-ink-muted mb-6">
          Let’s build a website that actually brings you clients.
        </p>
        <a
          href="/book"
          className="inline-block px-8 py-3 rounded-full font-bold text-sm bg-caramel text-white hover:bg-caramel-dark transition-all duration-300 hover:-translate-y-0.5"
        >
          Book a free call
        </a>
      </section>
    </main>
  );
}
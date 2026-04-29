"use client";
import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="contact"
      className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-8 lg:px-12 py-24"
      style={{ backgroundColor: "var(--color-ink-dark)" }}
    >
      <div>
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight" style={{ fontFamily: "var(--font-serif)", color: "var(--color-caramel-lighter)" }}>
          Ready to make your firm{" "}
          <em style={{ fontStyle: "italic", color: "var(--color-caramel)" }}>impossible</em>
          <br />
          to ignore online?
        </h2>
      </div>
      <div className="space-y-5">
        <p className="text-sm leading-relaxed" style={{ color: "rgba(251,246,238,0.5)" }}>
          Book a free 30-minute website review. We&apos;ll audit your current online presence and show you exactly what&apos;s possible — no jargon, no pressure.
        </p>
        <Link
          href="/book"
          className="inline-block px-7 py-3 rounded-full font-medium text-sm text-white transition-colors"
          style={{ backgroundColor: "var(--color-caramel)" }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--color-caramel-dark)")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--color-caramel)")}
        >
          Book your free review →
        </Link>
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="mailto:info@caramelwebstudios.com"
            className="text-sm px-4 py-2 rounded-full border transition-colors"
            style={{ borderColor: "color-mix(in srgb, var(--color-caramel) 25%, transparent)", color: "rgba(201,118,58,0.8)" }}
          >
            info@caramelwebstudios.com
          </a>
          <span className="text-sm px-4 py-2 rounded-full border" style={{ borderColor: "color-mix(in srgb, var(--color-caramel) 25%, transparent)", color: "rgba(201,118,58,0.8)" }}>
            Barking, London
          </span>
        </div>
      </div>
    </section>
  );
}

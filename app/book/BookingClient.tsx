"use client";

import { useEffect } from "react";
import Link from "next/link";
import Cal, { getCalApi } from "@calcom/embed-react";


const perks = [
  { icon: "🎯", title: "Sector-specific audit", desc: "We review your site through the lens of what London accounting clients actually look for." },
  { icon: "💬", title: "No jargon", desc: "Plain English throughout. We explain everything clearly so you can make informed decisions." },
  { icon: "⚡", title: "Quick wins identified", desc: "You'll leave with at least 3 actionable improvements — whether or not you work with us." },
  { icon: "🤝", title: "Zero pressure", desc: "This is a review call, not a sales call. We're here to help, full stop." },
];

export default function BookingClient() {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"website-consultation"});
      cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#d47912"},"dark":{"cal-brand":"#e9b437"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
 

  


  return (
    <>
     

      <main style={{ backgroundColor: "var(--color-caramel-lighter)", minHeight: "100vh" }}>
        {/* Header */}
        <div
          className="px-8 lg:px-12 pt-32 pb-16"
          style={{
            background: `linear-gradient(to bottom, var(--color-ink-dark) 0%, var(--color-ink) 100%)`,
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: "rgba(201,118,58,0.15)", color: "var(--color-caramel-light)", border: "1px solid rgba(201,118,58,0.25)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ backgroundColor: "var(--color-caramel)" }} />
              Free · No obligation · 30 minutes
            </div>
            <h1
              className="text-4xl lg:text-6xl font-black leading-[1.06] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-caramel-lighter)" }}
            >
              Book your free<br />
              <em style={{ fontStyle: "italic", color: "var(--color-caramel)" }}>website review</em>
            </h1>
            <p className="text-base leading-relaxed max-w-lg mx-auto" style={{ color: "rgba(251,246,238,0.55)" }}>
              A focused 30-minute call where we audit your accounting firm&apos;s online
              presence and map out exactly what would make a difference.
            </p>
          </div>
        </div>

        {/* Perks strip */}
        <div
          className="px-8 lg:px-12 py-10"
          style={{ backgroundColor: "var(--color-caramel)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p) => (
              <div key={p.title} className="flex gap-3 items-start">
                <span className="text-xl shrink-0 mt-0.5">{p.icon}</span>
                <div>
                  <p className="text-sm font-medium text-white mb-1">{p.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cal.com embed area */}
        <div className="px-4 lg:px-12 py-16 max-w-5xl mx-auto">
         <Cal namespace="website-consultation"
    calLink="caramelwebstudios/website-consultation"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}}
    
  />;

          {/* Fallback / direct link */}
          <p className="text-center text-sm mt-6" style={{ color: "var(--color-ink-muted)" }}>
            Having trouble with the booking widget?{" "}
            <a
              href="https://cal.com/caramelwebstudios/website-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
              style={{ color: "var(--color-caramel)" }}
            >
              Open directly on Cal.com →
            </a>
          </p>
        </div>

        {/* FAQ section */}
        <div
          className="px-8 lg:px-12 py-16"
          style={{ backgroundColor: "var(--color-ink)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-medium tracking-widest uppercase mb-6" style={{ color: "rgba(201,118,58,0.7)" }}>Common questions</p>
            <div className="space-y-6">
              {[
                { q: "Is the review really free?", a: "Yes, completely. We offer free reviews because we believe in showing our value before asking for anything in return." },
                { q: "Do I need to prepare anything?", a: "No preparation needed. Just have your website URL and a rough idea of your business goals. We'll take it from there." },
                { q: "What if I'm not based in London?", a: "We specialise in London-based accounting firms, but we do take on clients elsewhere in the UK. The call is video-based so location isn't a barrier." },
                { q: "What happens after the review?", a: "You'll get a follow-up summary with our recommendations. If you'd like to work together, we'll send a detailed proposal. There's no obligation either way." },
              ].map(({ q, a }) => (
                <div key={q} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "1.5rem" }}>
                  <p className="text-base font-medium mb-2" style={{ color: "var(--color-caramel-lighter)" }}>{q}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(251,246,238,0.45)" }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="px-8 lg:px-12 py-8 text-center" style={{ backgroundColor: "var(--color-ink-darker)" }}>
          <Link
            href="/"
            className="text-sm transition-colors"
            style={{ color: "rgba(201,118,58,0.6)", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-caramel)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(201,118,58,0.6)")}
          >
            ← Back to Caramel Web Studios
          </Link>
        </div>
      </main>

    
    </>
  );
}

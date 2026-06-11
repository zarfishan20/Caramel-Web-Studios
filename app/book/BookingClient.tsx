"use client";

import { useEffect } from "react";
import { Target, MessageCircle, Zap, Handshake } from "lucide-react";
import { LucideIcon } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";

type Perk = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const perks: Perk[] = [
  { icon: Target, title: "Sector-specific audit", desc: "We review your site through the lens of what London accounting clients actually look for." },
  { icon: MessageCircle, title: "No jargon", desc: "Plain English throughout. We explain everything clearly so you can make informed decisions." },
  { icon: Zap, title: "Quick wins identified", desc: "You'll leave with at least 3 actionable improvements — whether or not you work with us." },
  { icon: Handshake, title: "Zero pressure", desc: "This is a review call, not a sales call. We're here to help, full stop." },
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
     

    <main className="bg-cream text-charcoal min-h-screen">
        {/* Header */}
       <div className="px-8 lg:px-12 pt-32 pb-16 bg-charcoal text-caramel-light">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: "rgba(201,118,58,0.15)", color: "var(--color-caramel-light)", border: "1px solid rgba(201,118,58,0.25)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ backgroundColor: "var(--color-caramel)" }} />
              Free · No obligation · 30 minutes
            </div>
         <h1 className="text-4xl lg:text-6xl leading-[1.06] tracking-tight mb-5 font-(--font-serif-tech)">
  Book your free
  <br />
  <em className="text-caramel italic">
    website review
  </em>
</h1>

<p className="text-base max-w-lg mx-auto text-white/60">
              A focused 30-minute call where we audit your accounting firm&apos;s online
              presence and map out exactly what would make a difference.
            </p>
          </div>
        </div>

        {/* Perks strip */}
      <div className="px-8 lg:px-12 py-10 bg-caramel text-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         {perks.map((p) => {
            const Icon = p.icon;

            return (
              <div key={p.title} className="flex gap-3 items-start">
                <div className="p-2 rounded-lg bg-white/10 backdrop-blur-xs">
  <Icon className="w-5 h-5 text-white" />
</div>

                <div>
                  <p className="text-sm font-medium text-white mb-1">
                    {p.title}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
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
        <p className="text-center text-sm mt-6 text-charcoal-muted">
            Having trouble with the booking widget?{" "}
            <a
              href="https://cal.com/caramelwebstudios/website-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
              style={{ color: "var(--color-caramel)" }}
            >
              Open directly on Cal.com 
            </a>
          </p>
        </div>

        {/* FAQ section */}
      <div className="px-8 lg:px-12 py-16 bg-charcoal text-caramel-light">
          <div className="max-w-3xl mx-auto">
           <h2 className="tracking-widest uppercase mb-6 text-caramel">Common questions</h2>
      <div className="space-y-6">
              {[
                { q: "Is the review really free?", a: "Yes, completely. We offer free reviews because we believe in showing our value before asking for anything in return." },
                { q: "Do I need to prepare anything?", a: "No preparation needed. Just have your website URL and a rough idea of your business goals. We'll take it from there." },
                { q: "What if I'm not based in London?", a: "We specialise in London-based accounting firms, but we do take on clients elsewhere in the UK. The call is video-based so location isn't a barrier." },
                { q: "What happens after the review?", a: "You'll get a follow-up summary with our recommendations. If you'd like to work together, we'll send a detailed proposal. There's no obligation either way." },
              ].map(({ q, a }) => (
                <div key={q} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "1.5rem" }}>
                  <p className="text-base font-medium mb-2" style={{ color: "var(--color-caramel-lighter)" }}>{q}</p>
                 <p className="text-sm leading-relaxed text-caramel">
  {a}
</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="px-8 lg:px-12 py-8 text-center" style={{ backgroundColor: "var(--color-ink-darker)" }}>
       
        </div>
      </main>

    
    </>
  );
}

"use client";

import Link from "next/link";

const services = ["Web Development","AI Chatbot","Booking Integration","CRM Integration","Web Care"];
const company = ["About Us","Blog","FAQs","Contact","Privacy Policy"];

export default function Footer() {
  return (
    <footer className="px-8 lg:px-12 pt-14 pb-6" style={{ backgroundColor: "var(--color-ink-darker)" }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <p className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-serif)", color: "var(--color-caramel-lighter)" }}>
            Caramel <span style={{ color: "var(--color-caramel)" }}>Web</span> Studios
          </p>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(251,246,238,0.35)" }}>
            Specialist web design and digital solutions for accounting firms across London. Trading under Bytesphere Digital Ltd. Registered in England &amp; Wales, No. 16844459.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--color-caramel-lighter)" }}>Services</h4>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s}>
                <Link href="#services" className="text-sm transition-colors" style={{ color: "rgba(251,246,238,0.35)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--color-caramel)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(251,246,238,0.35)")}
                >{s}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--color-caramel-lighter)" }}>Company</h4>
          <ul className="space-y-2.5">
            {company.map((c) => (
              <li key={c}>
                <Link href="#" className="text-sm transition-colors" style={{ color: "rgba(251,246,238,0.35)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--color-caramel)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(251,246,238,0.35)")}
                >{c}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-3 pt-5 text-xs" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "rgba(251,246,238,0.3)" }}>
        <span>© 2023–2026 Caramel Web Studios. All rights reserved.</span>
        <span>Bytesphere Digital Ltd · Company No. 16844459</span>
      </div>
    </footer>
  );
}

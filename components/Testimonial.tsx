"use client";



export default function Testimonial() {
  return (
    <section className="px-8 lg:px-12 py-20 text-center" style={{ backgroundColor: "var(--color-caramel)" }}>
      <p className="font-black leading-none mb-2" style={{ fontFamily: "var(--font-serif)", fontSize: "5rem", color: "rgba(255,255,255,0.15)" }}>&ldquo;</p>
      <blockquote className="text-2xl lg:text-3xl font-bold text-white max-w-2xl mx-auto leading-snug mb-5" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
        Caramel built our site and chatbot in under two weeks. We now get qualified enquiries while we sleep.
      </blockquote>
      <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>— Principal Accountant, West London practice</p>
    </section>
  );
}

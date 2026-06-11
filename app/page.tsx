
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import NicheBand from "@/components/NicheBand";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
     
      <Hero />
      <StatsBand />
      <Services />
      <HowItWorks />
      <Testimonial />
      <CTA />
    </main>
  );
}

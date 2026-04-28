import Hero from "@/components/Hero";
import Services from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function Home() {
  
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      {/* We'll add the Pricing Table and FAQ next */}

      <Footer />
  
    </main>
  );
}
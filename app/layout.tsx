import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Mono, Syne } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from "@/components/Chatbot";
import Cursor from "@/components/Cursor";



const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Caramel Web Studios | Websites for London Accountants",
  description:
    "We design, build, and maintain professional websites exclusively for accounting firms in London — with AI chatbots, online booking, and CRM integration.",
  keywords: "web design accountants London, accounting website, CRM integration, AI chatbot accountants",
  openGraph: {
    title: "Caramel Web Studios | Websites for London Accountants",
    description: "Professional websites built exclusively for London accounting firms.",
    url: "https://caramelwebstudios.com",
    siteName: "Caramel Web Studios",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmMono.variable} ${cormorant.variable} ${syne.variable}`}>

        <Cursor />
         <main>
          <Navbar />
         
            {children}
          <Footer />

          <Chatbot />
        </main>
      </body>
    </html>
  );
}
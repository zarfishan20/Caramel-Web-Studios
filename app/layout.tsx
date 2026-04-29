import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
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
      <body className={`${playfair.variable} ${dmSans.variable} font-sans`}>
         <main>
          <Navbar />
         
            {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
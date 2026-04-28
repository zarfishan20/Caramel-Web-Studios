import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Caramel Web Studios — Specialist Web Design for Accountants",
  description: "Bespoke web design, AI chatbots, and CRM integration for accounting firms in London. Grow your practice with a high-performance digital system.",
  keywords: ["Accountant Web Design", "London Web Studio", "AI Chatbot for Accountants", "HubSpot for Accounting"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${dmSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
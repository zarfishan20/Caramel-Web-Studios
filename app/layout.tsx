import type { Metadata } from "next";
import { DM_Mono, DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const siteUrl = "https://caramelwebstudios.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Web Design for Accountants in London | Caramel Web Studios",
    template: "%s | Caramel Web Studios",
  },
  description:
    "Caramel Web Studios designs and develops professional websites for London accounting firms, with local SEO foundations, online booking, AI chatbots and ongoing website care.",
  applicationName: "Caramel Web Studios",
  keywords: [
    "web design for accountants London",
    "accountant website design",
    "accounting firm web development",
    "website designer for accountants",
    "London accountancy website",
    "local SEO for accountants",
    "AI chatbot for accountants",
    "accountant booking integration",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Web Design for Accountants in London | Caramel Web Studios",
    description:
      "Professional, enquiry-focused websites for London accountants, tax advisers and bookkeeping firms.",
    url: siteUrl,
    siteName: "Caramel Web Studios",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design for Accountants in London | Caramel Web Studios",
    description:
      "Professional, enquiry-focused websites for London accounting practices.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Caramel Web Studios",
  url: siteUrl,
  email: "info@caramelwebstudios.com",
  description:
    "Web design and digital development studio specialising in websites and digital systems for accounting practices in London.",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "London",
  },
  knowsAbout: [
    "Website design for accounting firms",
    "Accountancy website development",
    "Local search engine optimisation",
    "Online appointment booking",
    "AI chatbot integration",
    "CRM integration",
    "Website maintenance",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${dmMono.variable} ${dmSans.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}

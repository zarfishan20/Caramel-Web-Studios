import type { Metadata } from "next";
import ServiceLandingPage, { type ServicePageContent } from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Local SEO for Accountants in London | Caramel Web Studios",
  description: "Local SEO foundations for London accountants: search-friendly website structure, metadata, location relevance and technical essentials.",
  alternates: { canonical: "/local-seo-foundations" },
  openGraph: {
    title: "Local SEO Foundations for Accountants | Caramel Web Studios",
    description: "Make your accountancy website easier for search engines and prospective local clients to understand.",
    url: "https://caramelwebstudios.com/local-seo-foundations",
    type: "website",
  },
};

const content: ServicePageContent = {
  eyebrow: "Local search · London accountancy firms",
  title: "Local SEO foundations for accountants.",
  emphasis: "Help the right local clients find your firm.",
  intro: "We build practical SEO foundations into your accountancy website so search engines can understand your services and location, and visitors can quickly see whether your practice is right for them. SEO is an ongoing process; no position or volume of enquiries can be guaranteed.",
  summaryTitle: "A useful website is the starting point for local visibility.",
  summary: [
    "When someone searches for an accountant, tax adviser or bookkeeper, they need relevant information they can trust. Clear service pages, accurate business details and helpful location-aware content make it easier to understand what your firm offers and where you work.",
    "We focus on sound website foundations rather than quick ranking promises. That means making pages understandable, technically accessible and connected through a sensible internal structure.",
    "Your firm's Google Business Profile, reviews, local reputation, competition and ongoing content also influence local visibility. We can help you understand the website elements and identify sensible next steps."
  ],
  benefitsTitle: "The foundations we can put in place.",
  benefits: [
    { title: "Search-friendly page structure", description: "Organise your website around the services your firm genuinely provides, with clear headings and useful page relationships." },
    { title: "Titles and descriptions", description: "Write distinct page titles and meta descriptions that accurately explain each page to searchers and search engines." },
    { title: "Local relevance", description: "Make your service areas and business location clear without awkwardly repeating place names or creating thin location pages." },
    { title: "Technical essentials", description: "Review indexability, canonical URLs, sitemap, robots directives, mobile usability and other basic technical signals." },
    { title: "Internal linking", description: "Connect related services, helpful information and contact routes so visitors and search engines can navigate the site." },
    { title: "Measurement and next steps", description: "Use available search performance data to understand what people find and prioritise improvements over time." }
  ],
  process: [
    { title: "Review your current presence", description: "We look at your website structure, key pages, location information and available search data." },
    { title: "Agree priorities", description: "We identify the most useful fixes and content improvements for your firm and agree the scope." },
    { title: "Implement foundations", description: "We improve the agreed page structure, metadata, internal links and technical essentials." },
    { title: "Review and refine", description: "We can review performance data over time and recommend further improvements. Search results can fluctuate and outcomes are not guaranteed." }
  ],
  faqs: [
    { question: "Can you guarantee that my firm will appear at the top of Google?", answer: "No. Search rankings depend on many factors outside a website developer's control, including competition, relevance, reputation and search engine changes. We focus on implementing sound foundations and explaining what can be improved." },
    { question: "Do you work with Google Business Profile?", answer: "We can help review how your website and business information support your local presence and advise on relevant profile improvements. Access and any profile changes are agreed with you first." },
    { question: "Is local SEO a one-off job?", answer: "Technical and on-page foundations can be implemented as a project, but local search visibility usually benefits from ongoing attention to useful content, reviews, business information and performance." },
    { question: "Do I need a new website for SEO?", answer: "Not always. We can review your existing website first and recommend whether focused improvements or a redesign would be more appropriate." }
  ]
};

export default function LocalSeoPage() {
  return <ServiceLandingPage content={content} />;
}

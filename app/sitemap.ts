import type { MetadataRoute } from "next";

const siteUrl = "https://caramelwebstudios.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/web-design-for-accountants-london`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/local-seo-foundations`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/ai-chatbot-integration`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/online-booking`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/crm-website-care`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/our-work`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/book`, changeFrequency: "yearly", priority: 0.7 },
  ];
}

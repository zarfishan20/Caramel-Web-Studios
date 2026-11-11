import type { Metadata } from "next";
import ServiceLandingPage, { type ServicePageContent } from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "CRM Integration & Website Care for Accountants | Caramel Web Studios",
  description: "CRM and website care for London accounting practices. Connect website enquiries to your workflow and keep your site maintained after launch.",
  alternates: { canonical: "/crm-website-care" },
  openGraph: {
    title: "CRM Integration & Website Care | Caramel Web Studios",
    description: "Practical enquiry workflows, website maintenance and ongoing support for accountancy firms.",
    url: "https://caramelwebstudios.com/crm-website-care",
    type: "website",
  },
};

const content: ServicePageContent = {
  eyebrow: "CRM integration · Website care",
  title: "CRM integration and website care.",
  emphasis: "Keep enquiries organised and your website looked after.",
  intro: "Your website is one part of your client journey. We can connect enquiry forms to an agreed CRM workflow and provide ongoing website care so your online presence has a clear owner after launch.",
  summaryTitle: "A website should fit into the way your practice already works.",
  summary: [
    "When a prospective client makes an enquiry, your team needs a reliable way to receive it and decide what happens next. Connecting your website to a CRM can reduce manual copying and help keep new enquiries in one place.",
    "The right integration depends on your existing systems, team responsibilities and the information you genuinely need. We agree the fields, destination and notifications before connecting anything, and avoid collecting unnecessary sensitive information.",
    "Websites also need attention after launch. Updates, backups, security checks and small content changes can all form part of an agreed care arrangement. The exact service level and response times should be set out clearly."
  ],
  benefitsTitle: "Support for the systems around your website.",
  benefits: [
    { title: "Website enquiry capture", description: "Connect agreed website forms to your CRM or enquiry inbox so new contacts reach the right place." },
    { title: "Practical CRM fields", description: "Map only the information your team needs, with a sensible structure for handling and following up enquiries." },
    { title: "Notifications and hand-off", description: "Configure supported notifications so the right person knows when a new enquiry arrives." },
    { title: "Updates and maintenance", description: "Keep agreed website software, dependencies and content areas maintained as part of a defined care plan." },
    { title: "Backups and checks", description: "Agree an approach to backups and routine checks appropriate to the website's hosting and technology." },
    { title: "Ongoing improvements", description: "Request small updates and discuss future improvements without treating every change as a new website project." }
  ],
  process: [
    { title: "Map your current workflow", description: "Understand how enquiries arrive, who handles them and which CRM or tools your team already uses." },
    { title: "Agree the integration", description: "Confirm the fields, permissions, notifications and data handling before implementation." },
    { title: "Connect and test", description: "Set up the agreed connection and test that enquiries reach the intended destination." },
    { title: "Define website care", description: "Agree the maintenance scope, update process, backup approach and support expectations for after launch." }
  ],
  faqs: [
    { question: "Which CRM platforms can you connect?", answer: "Integration options depend on the CRM and its available forms, APIs or automation tools. We review your current setup before confirming what is practical." },
    { question: "Can website enquiries go straight into HubSpot?", answer: "Where the website and HubSpot setup support it, we can connect forms or enquiry workflows so submitted details are sent to the agreed HubSpot destination." },
    { question: "What does website care include?", answer: "The scope can include agreed maintenance, backups, software updates, monitoring and small content changes. The exact inclusions and response expectations are confirmed in your care agreement." },
    { question: "Does website care guarantee that my site can never go down or be hacked?", answer: "No. Maintenance can reduce risk and help identify issues, but no website service can guarantee uninterrupted availability or complete protection. We explain the measures included in the agreed plan." }
  ]
};

export default function CrmWebsiteCarePage() {
  return <ServiceLandingPage content={content} />;
}

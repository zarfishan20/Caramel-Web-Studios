import type { Metadata } from "next";
import ServiceLandingPage, { type ServicePageContent } from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "AI Chatbot Integration for Accountants | Caramel Web Studios",
  description: "AI chatbot integration for London accountants. Help visitors find service information, answer general questions and reach your team.",
  alternates: { canonical: "/ai-chatbot-integration" },
  openGraph: {
    title: "AI Chatbot Integration for Accountants | Caramel Web Studios",
    description: "A helpful, carefully scoped chatbot for your accountancy website.",
    url: "https://caramelwebstudios.com/ai-chatbot-integration",
    type: "website",
  },
};

const content: ServicePageContent = {
  eyebrow: "AI chatbot integration · Accountancy websites",
  title: "AI chatbot integration for accountants.",
  emphasis: "A helpful first step for website visitors.",
  intro: "Give visitors another way to explore your services and find answers to common general questions. We can integrate a chatbot configured around information your practice approves, with clear boundaries and an easy route to a member of your team.",
  summaryTitle: "Make it easier for visitors to find their next step.",
  summary: [
    "People visiting an accountancy website may want to understand which services you offer, what information to prepare or how to arrange an initial conversation. A well-scoped chatbot can guide them to relevant pages and help them find the right contact route.",
    "The chatbot should reflect your firm's tone and approved information. It is not a substitute for an accountant, tax adviser or other qualified professional, and it should not make decisions about a visitor's personal tax or financial circumstances.",
    "We plan the chatbot around your website, the questions you are comfortable answering and the way your team handles enquiries. Data collection, retention and integrations should be agreed before launch."
  ],
  benefitsTitle: "A chatbot designed with your practice in mind.",
  benefits: [
    { title: "Firm-specific information", description: "Configure responses around your approved service descriptions, opening information, processes and frequently asked general questions." },
    { title: "Guided visitor journeys", description: "Help visitors navigate to relevant service pages, contact details or your consultation booking page." },
    { title: "Enquiry hand-off", description: "Provide a clear route to your team when a question needs human attention or falls outside the chatbot's scope." },
    { title: "Responsible boundaries", description: "Use clear disclaimers and guardrails so the bot does not present itself as a qualified adviser or give personalised tax advice." },
    { title: "Optional lead capture", description: "Where agreed, collect limited contact details and pass enquiries into your chosen workflow with appropriate privacy information." },
    { title: "Website integration", description: "Add the chat experience to your existing website and style it to sit naturally alongside your brand." }
  ],
  process: [
    { title: "Choose the chatbot's role", description: "Agree which general questions it can handle, which topics it must avoid and when it should hand a visitor to your team." },
    { title: "Prepare approved content", description: "Gather the service information, FAQs and links the chatbot can use as its knowledge source." },
    { title: "Configure and integrate", description: "Set up the conversation flow, visual styling, hand-off and any agreed enquiry integrations." },
    { title: "Test before launch", description: "Review realistic questions and edge cases together, then refine the experience before it is made available to visitors." }
  ],
  faqs: [
    { question: "Can an AI chatbot give tax or accounting advice?", answer: "It should not provide personalised professional advice. We recommend limiting it to approved general information and directing personal or complex questions to your qualified team." },
    { question: "Can it book appointments?", answer: "Yes, where your booking platform supports integration. The chatbot can direct visitors to your booking page or an agreed booking flow." },
    { question: "Can it collect client information?", answer: "A limited enquiry form or lead hand-off can be considered, but the information collected, privacy notice, storage and access must be agreed. Sensitive financial or identity information should not be requested in an ordinary chat." },
    { question: "Will the chatbot always answer correctly?", answer: "No AI system is error-free. Its scope should be limited, its responses tested and reviewed, and visitors should have a clear way to contact a person." }
  ]
};

export default function AiChatbotPage() {
  return <ServiceLandingPage content={content} />;
}

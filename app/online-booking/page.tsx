import type { Metadata } from "next";
import ServiceLandingPage, { type ServicePageContent } from "@/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Online Booking for Accountants | Caramel Web Studios",
  description: "Online appointment booking integration for London accountants and tax advisers. Give prospective clients a clear route to arrange a conversation.",
  alternates: { canonical: "/online-booking" },
  openGraph: {
    title: "Online Booking Integration | Caramel Web Studios",
    description: "Connect your accountancy website to a simple consultation booking journey.",
    url: "https://caramelwebstudios.com/online-booking",
    type: "website",
  },
};

const content: ServicePageContent = {
  eyebrow: "Online appointment booking · Accountancy websites",
  title: "Online booking for accountants.",
  emphasis: "Turn interest into a clear next step.",
  intro: "Make it straightforward for prospective clients to arrange an introductory call or consultation. We integrate online booking into your website and shape the journey around your availability, meeting types and preferred way of speaking to new enquiries.",
  summaryTitle: "Let prospective clients arrange a conversation in their own time.",
  summary: [
    "A visitor may be interested in your services but not ready to phone during office hours. An online booking option gives them a clear way to request a suitable time and understand what happens next.",
    "The right setup depends on how your practice works. You may want a short introductory call, a paid consultation, a discovery meeting or a request that your team confirms manually.",
    "We can connect a suitable booking platform, add clear calls to action and make sure the booking journey works naturally on desktop and mobile. Your team remains in control of appointment types, availability and follow-up."
  ],
  benefitsTitle: "A booking journey that fits the way you work.",
  benefits: [
    { title: "Clear booking calls to action", description: "Place booking links where visitors are likely to need them, including service pages and contact sections." },
    { title: "Your meeting types", description: "Set up the journey around the consultation or introductory appointment types your practice chooses to offer." },
    { title: "Availability you control", description: "Use your booking platform's own availability settings, buffers and scheduling rules." },
    { title: "Calendar connection", description: "Where supported by the booking provider, connect calendars to help manage availability and avoid scheduling conflicts." },
    { title: "Confirmation and reminders", description: "Use the booking provider's supported confirmation and reminder options to keep clients informed." },
    { title: "Mobile-friendly experience", description: "Make the booking journey easy to use on phones as well as desktop screens." }
  ],
  process: [
    { title: "Understand your appointment process", description: "Decide what visitors can book, how long appointments should be and whether any bookings need approval." },
    { title: "Choose or review a booking tool", description: "We discuss a suitable platform based on your workflow, calendar and any existing subscriptions." },
    { title: "Connect it to your website", description: "Add the booking journey and style the entry points so they feel like part of your website." },
    { title: "Test the client journey", description: "Check booking, confirmation and calendar behaviour before making the new flow available." }
  ],
  faqs: [
    { question: "Can clients book directly from my website?", answer: "Yes. We can embed a supported booking tool or link to its booking page, depending on the provider and the experience you prefer." },
    { question: "Can I offer a free introductory call?", answer: "Yes. You can configure a free introductory appointment if your chosen booking platform supports that appointment type." },
    { question: "Can bookings sync with my calendar?", answer: "Many booking tools support calendar connections. The exact options depend on the platform and your calendar provider." },
    { question: "Can I keep control of who books?", answer: "You can choose the booking rules available in your platform, such as minimum notice, available hours, appointment types and manual confirmation where supported." }
  ]
};

export default function OnlineBookingPage() {
  return <ServiceLandingPage content={content} />;
}

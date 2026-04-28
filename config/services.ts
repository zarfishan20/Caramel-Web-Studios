// config/services.ts
import { Globe, Server, ShieldCheck, Bot } from "lucide-react";

export const services = [
  {
    title: "Domain Registration",
    description: "Secure a professional .com or .co.uk identity that builds instant trust with your clients.",
    icon: Globe,
    features: ["Instant Setup", "Privacy Protection", "DNS Management"]
  },
  {
    title: "Premium Hosting",
    description: "Ultra-fast Litespeed servers specifically optimized for high-traffic accounting portals.",
    icon: Server,
    features: ["99.9% Uptime", "Free SSL Certificates", "Daily Backups"]
  },
  {
    title: "WebCare Plans",
    description: "Monthly maintenance so you can focus on taxes while we handle the security patches.",
    icon: ShieldCheck,
    features: ["Uptime Monitoring", "Plugin Updates", "Security Scans"]
  },
  {
    title: "AI Accounting Chatbots",
    description: "Automate client onboarding and FAQ handling with custom AI trained on your firm's data.",
    icon: Bot,
    features: ["24/7 Client Support", "Lead Qualification", "Seamless Handover"]
  }
];
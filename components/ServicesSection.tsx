import { Monitor, Bot, Calendar, Database, ShieldCheck, Zap } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Bespoke high-performance websites designed specifically for accounting practices.",
    icon: <Monitor className="text-caramel" size={24} />,
    tag: "Essential"
  },
  {
    title: "AI Chatbot",
    desc: "A 24/7 assistant trained on your services to capture leads and answer client FAQs.",
    icon: <Bot className="text-caramel" size={24} />,
    tag: "Growth"
  },
  {
    title: "Booking System",
    desc: "Seamless integration with Cal.com or Calendly to automate your consultation bookings.",
    icon: <Calendar className="text-caramel" size={24} />,
    tag: "Automation"
  },
  {
    title: "CRM Integration",
    desc: "Sync your website leads directly into HubSpot or your existing practice software.",
    icon: <Database className="text-caramel" size={24} />,
    tag: "Data"
  },
  {
    title: "Managed Hosting",
    desc: "Ultra-fast London-based servers with weekly updates and security monitoring.",
    icon: <ShieldCheck className="text-caramel" size={24} />,
    tag: "Security"
  },
  {
    title: "SEO Strategy",
    desc: "Local SEO targeting to ensure your firm appears when clients search in London.",
    icon: <Zap className="text-caramel" size={24} />,
    tag: "Visibility"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-caramel-extra-light">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-2xl mb-16">
          <span className="text-caramel font-bold tracking-widest text-xs uppercase">
            Solutions for Growth
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">
            Digital systems built for <em>modern</em> accountants.
          </h2>
          <p className="text-muted leading-relaxed">
            We don&apos;t just build websites; we build lead-generation machines that 
            save your firm hours of manual administration every week.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card-glass group">
              <div className="w-12 h-12 bg-caramel/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-caramel group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <h3 className="font-display text-xl font-bold">{service.title}</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-caramel-light text-caramel-dark uppercase tracking-tighter">
                  {service.tag}
                </span>
              </div>

              <p className="text-muted text-sm leading-relaxed">
                {service.desc}
              </p>
              
              <div className="mt-6 pt-6 border-t border-caramel/5 flex items-center text-xs font-bold text-caramel opacity-0 group-hover:opacity-100 transition-opacity">
                LEARN MORE →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
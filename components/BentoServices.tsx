'use client';
import { motion } from 'framer-motion';

const BentoServices = () => {
  const services = [
    {
      id: '01',
      title: 'Custom Web Design',
      desc: 'High-converting, compliance-aware websites built specifically for accounting practices.',
      features: ['Trust-first design', 'Mobile-optimized', 'SEO for local accounting'],
      size: 'md:col-span-2' // Making the first one a wide "Bento" block
    },
    {
      id: '02',
      title: 'Booking & CRM',
      desc: 'Automated scheduling integrated with your workflow.',
      features: ['24/7 scheduling', 'Auto-reminders'],
      size: 'md:col-span-1'
    },
    {
      id: '03',
      title: 'AI Chatbot',
      desc: 'Intelligent bots trained on your firm’s specific services.',
      features: ['Lead qualification', 'Instant FAQ'],
      size: 'md:col-span-3' // A large bottom feature block
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 grid md:grid-cols-2 gap-12 items-end">
        <div>
          <span className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-[#C4874A] mb-4">
            <span className="w-8 h-px bg-[#C4874A]" /> What We Do
          </span>
          <h2 className="font-serif text-5xl md:text-7xl leading-tight text-[#1A1814]">
            Three Pillars of <br /><em className="italic text-[#C4874A]">Firm Growth</em>
          </h2>
        </div>
        <p className="text-[#8A8278] text-sm leading-relaxed max-w-sm">
          Every service is purpose-built for accounting and CPA firms. We understand the compliance and trust dynamics unique to financial professionals.
        </p>
      </div>

      {/* THE BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`${service.size} group relative bg-[#F0EBE1] p-10 overflow-hidden hover:bg-[#1A1814] transition-colors duration-500 border border-transparent hover:border-[#C4874A]/30`}
          >
            <div className="relative z-10">
              <span className="font-serif text-6xl text-[#1A1814]/5 group-hover:text-[#C4874A]/20 transition-colors duration-500 block mb-6">
                {service.id}
              </span>
              <h3 className="font-syne text-xl font-semibold mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-xs leading-loose text-[#8A8278] mb-8 group-hover:text-gray-400">
                {service.desc}
              </p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="text-[10px] text-[#C4874A] flex items-center gap-2">
                    <span>→</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            {/* Bottom Border Accent */}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#C4874A] group-hover:w-full transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BentoServices;
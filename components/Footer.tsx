import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-main text-white mt-12 py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 border-b border-white/5 pb-8">
          
          {/* Brand Column */}
          <div className="space-y-3">
            <div className="font-display text-xl font-bold">
              Caramel <span className="text-caramel">Web</span> Studios
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Specialist web design for accountants. <br />
              Trading as Bytesphere Digital Ltd. No. 16844459.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-caramel text-xs font-bold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li><Link href="#dev" className="hover:text-caramel transition-colors">Web Dev</Link></li>
              <li><Link href="#ai" className="hover:text-caramel transition-colors">AI Chatbot</Link></li>
              <li><Link href="#care" className="hover:text-caramel transition-colors">Web Care</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-caramel text-xs font-bold uppercase tracking-wider mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li><Link href="/about" className="hover:text-caramel transition-colors">About</Link></li>
              <li><Link href="/privacy" className="hover:text-caramel transition-colors">Privacy</Link></li>
              <li><Link href="mailto:info@caramelwebstudios.com" className="hover:text-caramel transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-[10px] uppercase tracking-widest text-white/20">
          <span>© 2023–2026 Caramel Web Studios</span>
          <span className="mt-2 md:mt-0">London · Barking Office</span>
        </div>
      </div>
    </footer>
  );
}
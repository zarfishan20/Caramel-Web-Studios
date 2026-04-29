"use client";

import { useState } from "react";
import { MessageSquare, X, Send, Bot, Calendar } from "lucide-react";
import Link from "next/link";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-100 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-3rem)] sm:w-95 h-125 bg-white rounded-2xl shadow-2xl border border-caramel/10 overflow-hidden flex flex-col animate-fade-up">
          
          {/* Header */}
          <div className="bg-ink p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-caramel/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-caramel" />
              </div>
              <div>
                <p className="text-white text-sm font-bold leading-none">CWS Assistant</p>
                <p className="text-caramel-light/60 text-[10px] uppercase tracking-widest mt-1">Online · London</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-caramel-off space-y-4">
            {/* Bot Message */}
            <div className="flex flex-col items-start gap-1 max-w-[85%]">
              <div className="bg-white border border-caramel/10 p-3 rounded-2xl rounded-bl-sm text-sm text-ink leading-relaxed shadow-sm">
                Hi there! 👋 I&apos;m the CWS assistant. Are you looking to upgrade your firm&apos;s digital presence?
              </div>
              <span className="text-[10px] text-ink-muted ml-2">Just now</span>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col gap-2 pt-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-caramel">Suggested</p>
              <button className="text-left text-xs p-3 rounded-xl border border-caramel/20 bg-white text-ink hover:border-caramel hover:bg-caramel-lighter transition-all">
                How does the Smart Engine work?
              </button>
              <Link 
                href="/book" 
                className="text-left text-xs p-3 rounded-xl border border-caramel/20 bg-caramel/10 text-caramel-dark font-bold flex items-center justify-between group"
              >
                Book my Free Audit
                <Calendar size={14} className="group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-caramel/10 flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-1 bg-caramel-lighter rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-caramel text-ink placeholder:text-ink-muted/50"
            />
            <button className="bg-ink p-2 rounded-full text-caramel hover:bg-caramel-dark transition-colors">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen ? "bg-white text-ink rotate-90" : "bg-ink text-caramel hover:scale-110"
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} fill="currentColor" className="fill-caramel" />}
      </button>
      
      {/* Tooltip (Only visible when closed) */}
      {!isOpen && (
        <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-ink text-white px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap animate-fade-up shadow-xl border border-white/10 hidden sm:block">
          Need help? <span className="text-caramel ml-1">Ask CWS</span>
        </div>
      )}
    </div>
  );
}
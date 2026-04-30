"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Calendar, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "Welcome to Caramel Web Studios. I am your concierge. How may we elevate your digital presence today?", 
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.toLowerCase();
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // 1. Add User Message
    const userMsg: Message = { id: Date.now(), text: inputValue, sender: "user", timestamp: now };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    // 2. Trigger "Concierge is thinking" state
    setTimeout(() => setIsTyping(true), 600);

    // 3. Smart Response Logic
    setTimeout(() => {
      setIsTyping(false);
      let responseText = "";

      if (userText.includes("pricing") || userText.includes("cost") || userText.includes("rate")) {
        responseText = "Our bespoke digital solutions are tailored to your firm's goals. Projects typically start from £5,000. Would you like to schedule a discovery call for a precise quote?";
      } else if (userText.includes("portfolio") || userText.includes("work") || userText.includes("show me")) {
        responseText = "Certainly. Our portfolio features award-winning designs for London's leading firms. You can explore our 'Masterpieces' section on the main site.";
      } else if (userText.includes("audit") || userText.includes("free")) {
        responseText = "Excellent choice. Our Free Digital Audit identifies high-impact opportunities for your brand. You can book one directly using the link below.";
      } else if (userText.includes("hello") || userText.includes("hi") || userText.includes("hey")) {
        responseText = "Greetings. I'm here to assist you with any inquiries regarding our design and development services. What can I do for you?";
      } else {
        responseText = "That is a great question. I am flagging this for our London strategy team to provide a detailed response. Is there anything else you'd like to know in the meantime?";
      }

      const botMsg: Message = { 
        id: Date.now() + 1, 
        text: responseText, 
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 2200);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[100] flex flex-col items-end font-sans">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="
              mb-4 sm:mb-6 
              w-[calc(100vw-2rem)] sm:w-[410px] 
              h-[75vh] sm:h-[620px] 
              bg-white/95 backdrop-blur-2xl 
              rounded-[2.2rem] sm:rounded-[2.8rem] 
              shadow-[0_25px_70px_-15px_rgba(0,0,0,0.35)] 
              border border-caramel/20 
              overflow-hidden flex flex-col
            "
          >
            {/* Header: Concierge Branding */}
            <div className="bg-ink p-6 sm:p-8 flex items-center justify-between relative overflow-hidden shrink-0">
              <div className="absolute -top-6 -right-6 p-4 opacity-[0.04] pointer-events-none">
                <Sparkles size={200} className="text-caramel" />
              </div>
              
              <div className="flex items-center gap-4 z-10">
                <div className="relative">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-caramel via-caramel-light to-white flex items-center justify-center shadow-inner">
                    <Bot className="w-6 h-6 text-ink" />
                  </div>
                  <motion.div 
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-ink rounded-full"
                  />
                </div>
                <div>
                  <p className="text-white text-base sm:text-xl font-semibold tracking-tight">CWS Concierge</p>
                  <p className="text-caramel/70 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-medium">Bespoke Digital Support</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="z-10 p-2 text-white/30 hover:text-white transition-all bg-white/5 hover:bg-white/10 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            {/* Conversation Flow */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 bg-gradient-to-b from-transparent to-caramel/[0.03]">
              {messages.map((msg) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id} 
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} gap-2`}
                >
                  <div className={`max-w-[88%] px-6 py-4 rounded-[1.8rem] text-[13.5px] sm:text-[14.5px] leading-relaxed shadow-sm ${
                    msg.sender === 'user' 
                      ? 'bg-ink text-white rounded-br-none shadow-xl shadow-ink/10' 
                      : 'bg-white border border-caramel/15 text-ink rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                  <span className="text-[8.5px] text-ink/30 uppercase tracking-[0.15em] font-bold px-2">{msg.timestamp}</span>
                </motion.div>
              ))}

              {/* Dynamic Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-start gap-2"
                  >
                    <div className="bg-white border border-caramel/15 px-6 py-4 rounded-[1.8rem] rounded-bl-none shadow-sm flex gap-2">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] }}
                          transition={{ repeat: Infinity, duration: 1.4, delay: i * 0.2 }}
                          className="w-1.5 h-1.5 bg-caramel rounded-full"
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contextual Actions */}
              {messages.length < 5 && !isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-col gap-3 pt-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-caramel/60 ml-2">Recommended</p>
                  <Link 
                    href="/book" 
                    className="flex items-center justify-between p-5 rounded-2xl bg-caramel text-ink font-bold text-[11px] sm:text-xs shadow-xl shadow-caramel/20 group hover:translate-y-[-2px] transition-all"
                  >
                    Book Free Strategic Audit
                    <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Premium Input Bar */}
            <form onSubmit={handleSendMessage} className="p-6 sm:p-8 bg-white border-t border-neutral-50 shrink-0">
              <div className="flex items-center gap-2 bg-neutral-50 p-2 rounded-full border border-neutral-100 focus-within:border-caramel/30 focus-within:bg-white transition-all duration-500 shadow-inner">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="How can we help?" 
                  className="flex-1 bg-transparent px-5 py-2 text-sm focus:outline-none text-ink placeholder:text-ink/20"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="bg-ink p-3.5 rounded-full text-caramel hover:scale-110 active:scale-95 transition-all disabled:opacity-5 shadow-lg shadow-ink/20"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Icon */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-15 h-15 sm:w-18 sm:h-18 rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-500 ${
          isOpen ? "bg-white text-ink" : "bg-ink text-caramel"
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}>
              <MessageSquare size={30} fill="currentColor" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
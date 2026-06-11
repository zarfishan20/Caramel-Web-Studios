"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import Link from "next/link";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: string;
  link?: {
    text: string;
    url: string;
  };
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "Welcome to Caramel Web Studios. How can we assist with your digital project today?", 
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

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

    const userText = inputValue.toLowerCase().trim();
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const userMsg: Message = { id: Date.now(), text: inputValue, sender: "user", timestamp: now };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    setTimeout(() => setIsTyping(true), 400);

    setTimeout(() => {
      setIsTyping(false);
      let responseText = "";
      let responseLink: { text: string; url: string } | undefined = undefined;

      if (userText === "hi" || userText === "hello" || userText === "hey" || userText.startsWith("hi ")) {
        responseText = "Hello. I am here to help you navigate our services. Feel free to ask about our pricing, view our portfolio, or ask how to book a website review.";
      } 
      else if (userText.includes("book") || userText.includes("schedule") || userText.includes("call") || userText.includes("meeting")) {
        responseText = "You can schedule your free website review directly on this page using the calendar widget on the left, or visit our /book page to choose a convenient time slot.";
      } 
      // Pricing action forwards them to your project inquiry form
      else if (userText.includes("pricing") || userText.includes("cost") || userText.includes("rate")) {
        responseText = "Our web development and design projects are tailored specifically to your accounting firm's needs. Please fill out our quick quote form so we can provide an accurate estimate.";
        responseLink = {
          text: "Fill out the Quote Form",
          url: "/quote" // Swap this with your actual form URL path if different (e.g., "/quote" or "/contact")
        };
      } 
      else if (userText.includes("portfolio") || userText.includes("work")) {
        responseText = "You can view our case studies and previous project work directly in the 'Masterpieces' section of our main menu.";
      } 
      else if (userText.includes("audit") || userText.includes("free")) {
        responseText = "We provide a complimentary Digital Audit to review your current website performance. Just type 'book' if you would like to pick a time for an introductory session.";
      } 
      else {
        responseText = "Thank you for your message. I have logged these details for our client strategy team, and a representative will follow up with you shortly.";
      }

      const botMsg: Message = { 
        id: Date.now() + 1, 
        text: responseText, 
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        link: responseLink
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end font-sans text-[#2A2421]">
      
      {isOpen && (
        <div className="
          mb-4
          w-[calc(100vw-2rem)] sm:w-90 
          h-125 max-h-[80vh]
          bg-[#FDFBF7] 
          rounded-2xl 
          shadow-xl 
          border border-[#C5A880]/30 
          overflow-hidden flex flex-col
        ">
          {/* Header */}
          <div className="bg-[#2A2421] p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#3A322E] flex items-center justify-center border border-[#C5A880]/20">
                <Bot className="w-5 h-5 text-[#C5A880]" />
              </div>
              <div>
                <p className="text-[#FDFBF7] text-sm font-medium tracking-wide">CWS Concierge</p>
                <p className="text-[#C5A880] text-[10px] tracking-wider uppercase font-medium">Support Assistant</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-[#C5A880]/60 hover:text-[#C5A880] p-1 rounded transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat History Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F9F5EF]">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} gap-1`}
              >
                <div className={`max-w-[85%] px-3.5 py-2 text-sm rounded-xl flex flex-col gap-2 ${
                  msg.sender === 'user' 
                    ? 'bg-[#2A2421] text-[#FDFBF7] rounded-tr-none shadow-sm' 
                    : 'bg-[#FDFBF7] border border-[#C5A880]/20 text-[#2A2421] rounded-tl-none shadow-xs'
                }`}>
                  <span>{msg.text}</span>
                  
                  {/* Clean form link container for pricing requests */}
                  {msg.link && (
                    <Link 
                      href={msg.link.url}
                      className="mt-1 block text-center bg-[#2A2421] text-[#C5A880] font-medium py-2 px-3 rounded-lg text-xs hover:bg-[#3A322E] transition-colors border border-[#C5A880]/20"
                    >
                      {msg.link.text}
                    </Link>
                  )}
                </div>
                <span className="text-[9px] text-[#2A2421]/60 font-medium px-1 tracking-wider">{msg.timestamp}</span>
              </div>
            ))}

            {/* Typing Placeholder */}
            {isTyping && (
              <div className="flex gap-1 p-2 bg-[#FDFBF7] border border-[#C5A880]/20 rounded-lg w-fit items-center">
                <span className="text-xs text-[#C5A880] font-medium px-1">Typing...</span>
              </div>
            )}
          </div>

          {/* Input Form Footer */}
          <form onSubmit={handleSendMessage} className="p-3 bg-[#FDFBF7] border-t border-[#C5A880]/20 shrink-0">
            <div className="flex items-center gap-2 bg-[#F9F5EF] border border-[#C5A880]/20 rounded-lg p-1 focus-within:border-[#C5A880] focus-within:bg-[#FDFBF7] transition-all">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask a question..." 
                className="flex-1 bg-transparent px-3 py-1.5 text-sm outline-none text-[#2A2421] placeholder:text-[#2A2421]/40"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim()}
                className="bg-[#2A2421] hover:bg-[#3A322E] p-2 rounded-md text-[#C5A880] disabled:opacity-30 transition-all shadow-xs"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Primary Toggle Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2A2421] hover:bg-[#3A322E] text-[#C5A880] flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all border border-[#C5A880]/20"
        aria-label={isOpen ? "Close chat panel" : "Open support chat panel"}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} fill="currentColor" />}
      </button>
    </div>
  );
}
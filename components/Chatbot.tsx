"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import Link from "next/link";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: string;
  link?: { text: string; url: string };
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello, I’m Cara, the Caramel Web Studios assistant. I can answer questions about our websites and digital services for accounting practices.",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submittedText = inputValue.trim();
    if (!submittedText || isTyping) return;

    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const userMessage: Message = {
      id: Date.now(),
      text: submittedText,
      sender: "user",
      timestamp,
    };
    const conversation = [
      ...messages.map((message) => ({
        role: message.sender === "bot" ? "assistant" as const : "user" as const,
        content: message.text,
      })),
      { role: "user" as const, content: submittedText },
    ];

    setMessages((previous) => [...previous, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: conversation }),
      });

      if (!response.ok) throw new Error("Chat request failed");
      const data: { reply?: string } = await response.json();
      if (!data.reply) throw new Error("Empty assistant response");

      const bookingRequested = data.reply.includes("[BOOK_REVIEW]");
      const workRequested = data.reply.includes("[VIEW_WORK]");
      const botMessage: Message = {
        id: Date.now() + 1,
        text: data.reply.replace("[BOOK_REVIEW]", "").replace("[VIEW_WORK]", "").trim(),
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        link: bookingRequested
          ? { text: "Book a free 15-minute website review", url: "/book" }
          : workRequested
            ? { text: "View our work", url: "/our-work" }
            : undefined,
      };
      setMessages((previous) => [...previous, botMessage]);
    } catch {
      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          text: "Sorry, the chat assistant is temporarily unavailable. You can still contact the studio using the link below.",
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          link: { text: "Contact Caramel Web Studios", url: "/contact" },
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end font-sans text-[#2A2421] sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          aria-label="Chat with Cara"
          className="mb-4 flex h-[min(31rem,80vh)] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-[#C5A880]/30 bg-[#FDFBF7] shadow-xl sm:w-96"
        >
          <div className="flex shrink-0 items-center justify-between bg-[#2A2421] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#C5A880]/20 bg-[#3A322E]">
                <Bot className="h-5 w-5 text-[#C5A880]" />
              </div>
              <div>
                <p className="text-sm font-medium tracking-wide text-[#FDFBF7]">Cara · CWS Assistant</p>
                <p className="text-[10px] font-medium uppercase tracking-wider text-[#C5A880]">Accounting website assistant</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded p-1 text-[#C5A880]/70 transition-colors hover:text-[#C5A880]"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <div ref={scrollRef} aria-live="polite" className="flex-1 space-y-4 overflow-y-auto bg-[#F9F5EF] p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={"flex flex-col gap-1 " + (message.sender === "user" ? "items-end" : "items-start")}
              >
                <div
                  className={
                    "flex max-w-[85%] flex-col gap-2 rounded-xl px-3.5 py-2 text-sm " +
                    (message.sender === "user"
                      ? "rounded-tr-none bg-[#2A2421] text-[#FDFBF7]"
                      : "rounded-tl-none border border-[#C5A880]/20 bg-[#FDFBF7] text-[#2A2421]")
                  }
                >
                  <span>{message.text}</span>
                  {message.link && (
                    <Link
                      href={message.link.url}
                      className="mt-1 block rounded-lg border border-[#C5A880]/20 bg-[#2A2421] px-3 py-2 text-center text-xs font-medium text-[#C5A880] transition-colors hover:bg-[#3A322E]"
                    >
                      {message.link.text}
                    </Link>
                  )}
                </div>
                <span className="px-1 text-[9px] font-medium tracking-wider text-[#2A2421]/60">
                  {message.timestamp}
                </span>
              </div>
            ))}
            {isTyping && (
              <p role="status" className="w-fit rounded-lg border border-[#C5A880]/20 bg-[#FDFBF7] p-2 text-xs font-medium text-[#8A704F]">
                Cara is thinking…
              </p>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="shrink-0 border-t border-[#C5A880]/20 bg-[#FDFBF7] p-3">
            <div className="flex items-center gap-2 rounded-lg border border-[#C5A880]/20 bg-[#F9F5EF] p-1 transition-all focus-within:border-[#C5A880] focus-within:bg-[#FDFBF7]">
              <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Ask Cara a question…"
                aria-label="Your message"
                className="flex-1 bg-transparent px-3 py-1.5 text-sm text-[#2A2421] outline-none placeholder:text-[#2A2421]/40"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="rounded-md bg-[#2A2421] p-2 text-[#C5A880] shadow-sm transition-all hover:bg-[#3A322E] disabled:opacity-30"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </div>
            <p className="mt-2 px-1 text-[10px] leading-4 text-[#2A2421]/55">
              Please don’t share passwords, bank details or sensitive tax information in chat.
            </p>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C5A880]/20 bg-[#2A2421] text-[#C5A880] shadow-lg transition-all hover:scale-105 hover:bg-[#3A322E] active:scale-95 sm:h-14 sm:w-14"
        aria-label={isOpen ? "Close chat panel" : "Open Cara chat assistant"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} fill="currentColor" />}
      </button>
    </div>
  );
}

import { NextRequest, NextResponse } from "next/server";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    const clientMessages: ChatMessage[] = body.messages.map((msg: ChatMessage) => ({
      role: msg.role === "assistant" ? "assistant" : "user",
      content: msg.content || "",
    }));

  const systemMessage: ChatMessage = {
  role: "system",
  content: `You are the expert AI assistant for CWS, a specialist web studio in London that builds websites exclusively for accounting firms.
  
  CORE SERVICES:
  - Bespoke Web Design & Branding for accountants.
  - AI Chatbot Integration (Lead generation).
  - Online Booking Integration (Calendly/Setter).
  - CRM Integration (Automated syncing to HubSpot).
  - Managed Web & Hosting (Speed & Security).

  INTERACTION RULES:
  - You are London-based, professional, and tech-forward.
  - Use British English (e.g., 'specialising', 'optimising').
  - If a user asks for a 'website review', 'consultation', or 'to speak with someone', you MUST provide the trigger: [BOOK_REVIEW].
  - Mention that CWS automates lead capture by pushing new contacts directly into HubSpot.

  GOAL:
  Encourage firms to modernise their practice through automation and high-end design.`
};

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY?.trim()}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", 
        messages: [systemMessage, ...clientMessages],
        temperature: 0.2,
        max_tokens: 500,
      }),
    });

    const data = await response.json();
    if (!response.ok) return NextResponse.json({ error: data.error?.message }, { status: response.status });

    return NextResponse.json({ reply: data.choices[0].message.content });
  } catch (error) {
    // FIX: Logging the error to the console uses the variable and clears the ESLint warning
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
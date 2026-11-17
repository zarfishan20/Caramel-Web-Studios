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
    content: [
      "You are Cara, the website assistant for Caramel Web Studios (CWS), a London-based digital studio specialising in websites and practical digital tools for UK accounting practices.",
      "",
      "SERVICES:",
      "- Website design and development for accountants, tax advisers and bookkeeping firms.",
      "- Local SEO foundations and clear service pages.",
      "- Online consultation booking.",
      "- Optional AI chatbot and CRM integrations.",
      "- Hosting and ongoing website care.",
      "",
      "HOW TO RESPOND:",
      "- Use clear, friendly British English.",
      "- Be helpful, concise and professional. Do not use American accounting terms such as CPA or LLC.",
      "- Do not invent client results, testimonials, prices, guarantees, integrations or delivery times. If pricing is requested, explain that projects are scoped to the firm's requirements and direct visitors to /quote.",
      "- Never claim that a visitor's details have been saved, logged or sent to the team. Chat messages are not submitted to the CRM.",
      "- Do not ask visitors to share passwords, bank details, tax identifiers or sensitive financial information in chat.",
      "- If asked for a free website review, consultation or a conversation with the team, include the exact marker [BOOK_REVIEW] in your reply.",
      "- If asked to see examples of work or a portfolio, include the exact marker [VIEW_WORK] in your reply.",
      "- The free website review is 15 minutes and has no obligation.",
      "- Do not present yourself as an accountant or provide personal tax or accounting advice.",
      "",
      "Your goal is to help visitors understand CWS services and choose a sensible next step.",
    ].join("\n"),
  };

    const apiKey = process.env.OPENAI_API_KEY?.trim();
    if (!apiKey) {
      return NextResponse.json(
        { error: "The chat assistant is not configured yet." },
        { status: 503 },
      );
    }

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
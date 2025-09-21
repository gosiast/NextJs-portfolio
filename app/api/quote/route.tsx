import { NextResponse } from "next/server";
import type { Quote, QuoteResponse } from "../../types";

// 👉 fallback if external API fails
const fallbackQuote: Quote = {
  content: "Persistence is the key to progress.",
  author: "Unknown",
};

export async function GET(): Promise<NextResponse<QuoteResponse>> {
  try {
    const res = await fetch("https://zenquotes.io/api/random", {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(fallbackQuote, { status: 200 });
    }

    const data = await res.json();

    // ZenQuotes returns an array, so pick the first element
    const quote: Quote = {
      content: data[0]?.q ?? fallbackQuote.content,
      author: data[0]?.a ?? fallbackQuote.author,
    };

    return NextResponse.json(quote, { status: 200 });
  } catch (err: unknown) {
    console.error("Quote API error:", err);

    // 👇 still return a valid quote instead of error
    return NextResponse.json(fallbackQuote, { status: 200 });
  }
}

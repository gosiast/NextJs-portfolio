import { NextResponse } from "next/server";
import type { Quote, QuoteResponse } from "../../types";

const fallbackQuote: Quote = {
  content: "Persistence is the key to progress.",
  author: "Unknown",
};

export async function GET(): Promise<NextResponse<QuoteResponse>> {
  try {
    const res = await fetch(
      `https://zenquotes.io/api/random?time=${Date.now()}`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      return NextResponse.json(fallbackQuote, { status: 200 });
    }

    const data = await res.json();

    const quote: Quote = {
      content: data[0]?.q ?? fallbackQuote.content,
      author: data[0]?.a ?? fallbackQuote.author,
    };

    return NextResponse.json(quote, { status: 200 });
  } catch (err: unknown) {
    console.error("Quote API error:", err);

    return NextResponse.json(fallbackQuote, { status: 200 });
  }
}

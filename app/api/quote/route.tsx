import { NextResponse } from "next/server";
import type { Quote, QuoteResponse } from "../../types";

const fallbackQuote: Quote = {
  content: "Persistence is the key to progress.",
  author: "Unknown",
};

// Dynamic, per-request data — never cache at the edge or in the browser.
const NO_STORE = { "Cache-Control": "no-store" };

export async function GET(): Promise<NextResponse<QuoteResponse>> {
  try {
    const res = await fetch(
      `https://zenquotes.io/api/random?time=${Date.now()}`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      return NextResponse.json(fallbackQuote, { status: 200, headers: NO_STORE });
    }

    const data = await res.json();

    const quote: Quote = {
      content: data[0]?.q ?? fallbackQuote.content,
      author: data[0]?.a ?? fallbackQuote.author,
    };

    return NextResponse.json(quote, { status: 200, headers: NO_STORE });
  } catch (err: unknown) {
    console.error("Quote API error:", err);

    return NextResponse.json(fallbackQuote, { status: 200, headers: NO_STORE });
  }
}

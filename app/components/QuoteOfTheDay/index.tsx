"use client";
import React, { useEffect, useState } from "react";
import { Quote, QuoteResponse } from "../../types";

const button_labels = [
  "Inspire me",
  "Another thought",
  "Fresh quote",
  "Spark wisdom",
  "Next insight",
];

const Spinner = () => (
  <div className="h-5 w-5 animate-spin rounded-full border-2 border-pink-400 border-t-transparent" />
);

const QuoteOfTheDay: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [buttonIndex, setButtonIndex] = useState(0);

  const handleNewQuote = () => {
    fetchQuote();
    setButtonIndex((prev) => (prev + 1) % button_labels.length);
  };

  const fetchQuote = async () => {
    try {
      setIsLoading(true);
      setErrorMessage(null);

      const res = await fetch("/api/quote");
      const data: QuoteResponse = await res.json();

      if ("error" in data) {
        setErrorMessage(data.error);
      } else {
        setQuote(data);
      }
    } catch (err: unknown) {
      console.error("Quote API error:", err);
      const message =
        err instanceof Error ? err.message : "Unknown error occurred";
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <section
      id="inspiration"
      className="text-white my-12 text-center scroll-mt-24"
    >
      <h2 className="font-bold mb-5 mt-3 text-2xl sm:text-3xl">
        Quote of the Day ✨
      </h2>

      {errorMessage && (
        <div className="text-[#ADB7BE]">
          <p className="mb-4">Couldn’t load a quote, try again!</p>
          <button
            onClick={fetchQuote}
            className="px-5 py-2 rounded-lg bg-gradient-to-br from-pink-700 via-purple-400 to-blue-400 text-white hover:brightness-110 transition"
          >
            Try again
          </button>
        </div>
      )}

      {quote && (
        <figure>
          <blockquote className="text-lg sm:text-xl italic leading-relaxed text-[#E5E7EB]">
            “{quote.content}”
          </blockquote>
          <figcaption className="mt-3 text-pink-400 font-medium">
            — {quote.author}
          </figcaption>
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleNewQuote}
              className="px-5 py-2 rounded-lg border border-white/20 text-white hover:scale-105 transition flex items-center justify-center gap-2 min-w-[150px]"
              disabled={isLoading}
            >
              {isLoading ? <Spinner /> : button_labels[buttonIndex]}
            </button>
          </div>
        </figure>
      )}
    </section>
  );
};

export default QuoteOfTheDay;

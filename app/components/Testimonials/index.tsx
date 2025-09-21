"use client";
import React, { useState } from "react";
import { testimonials } from "./testimonials_data";

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section id="testimonials" className="text-white my-16 scroll-mt-24">
      <h2 className="text-center text-3xl font-bold mb-6">Testimonials</h2>

      <div className="container mx-auto px-6">
        <div className="bg-[#181818] rounded-lg p-6 relative">
          <blockquote className="italic text-sm leading-relaxed text-[#E5E7EB] mb-4 whitespace-pre-line">
            “{testimonials[index].testimonial}”
          </blockquote>
          <div className="font-medium flex flex-col sm:flex-row sm:items-center justify-start gap-1 sm:gap-2 mt-2">
            <a
              href={testimonials[index].link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:underline text-xs"
            >
              {testimonials[index].author}
            </a>
            <span className="text-gray-500 text-xs sm:text-sm italic">
              {testimonials[index].date}
            </span>
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={prev}
              className="px-3 py-1 rounded-lg border border-white/20 hover:bg-white/10"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="px-3 py-1 rounded-lg border border-white/20 hover:bg-white/10"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

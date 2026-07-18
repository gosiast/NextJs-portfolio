"use client";
import React from "react";

const TedTalk = () => {
  return (
    <section className="text-white py-12 md:py-20 scroll-mt-24" id="tedtalk">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
            On stage
          </p>
          <h2 className="text-white font-bold mb-5 text-3xl sm:text-4xl">
            Persistence in Action
          </h2>
          <p className="text-[#ADB7BE] md:text-lg leading-relaxed max-w-[60ch]">
            In 2023, I gave a TED-style talk through{" "}
            <a
              href="https://www.linkedin.com/company/wavemakers-io/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:underline"
            >
              WaveMakers.io
            </a>{" "}
            personal development program about
            <span className="text-pink-400"> perseverance</span>. The message
            was simple:
            <strong className="text-white"> keep going</strong>. For me, that
            mindset isn’t just personal - it’s how I approach code. Debugging,
            learning new frameworks - it all takes resilience and curiosity.
            Sharing this talk was a way to show that persistence shapes not only
            my story, but also the way I grow as a developer.
          </p>
        </div>

        <div>
          <video
            controls
            className="w-full rounded-lg shadow-lg"
          >
            <source src="/TedTalk.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default TedTalk;

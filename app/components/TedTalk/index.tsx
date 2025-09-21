"use client";
import React from "react";

const TedTalk = () => {
  return (
    <section className="text-white mt-10 scroll-mt-24" id="tedtalk">
      <div className="h-px bg-slate-500/30 my-6" />
      <h2 className="text-center text-white font-bold my-5 mt-3 text-3xl sm:text-5xl lg:text-3xl">
        Persistence in Action
      </h2>
      <p className="text-[#ADB7BE] text-center md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
        In 2023, I gave a TED-style talk through{" "}
        <a
          href="https://www.linkedin.com/company/wavemakers-io/posts/?feedView=all"
          className="text-pink-400"
        >
          WaveMakers.io
        </a>{" "}
        personal development program about
        <span className="text-pink-400"> perseverance</span>. The message was
        simple:
        <strong className="text-white"> keep going</strong>. For me, that
        mindset isn’t just personal - it’s how I approach code. Debugging,
        learning new frameworks, it all requires resilience and curiosity.
        Sharing this talk was a way to show that persistence shapes not only my
        story, but also the way I grow as a developer.
      </p>

      <div className="flex justify-center">
        <video controls className="rounded-lg shadow-lg w-full max-w-2xl">
          <source src="/TedTalk.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="h-px bg-slate-500/30 mt-6" />
    </section>
  );
};

export default TedTalk;

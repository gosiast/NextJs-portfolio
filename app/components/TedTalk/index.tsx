"use client";
import React from "react";

const TedTalk = () => {
  return (
    <section className="text-white my-6" id="tedtalk">
      <h2 className="text-center text-white font-bold mb-5 mt-3 text-3xl sm:text-5xl lg:text-3xl">
        Persistence in Action
      </h2>
      <p className="text-[#ADB7BE] text-center md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
        In 2023, I gave a TED-style talk through WaveMakers.io about
        <span className="text-pink-400"> perseverance</span>. The message was
        simple: <strong className="text-white">keep going</strong>. Persistence
        carried me from teaching to tech, and it continues to guide me as a
        Frontend Developer today.
      </p>

      <div className="flex justify-center">
        <video controls className="rounded-lg shadow-lg w-full max-w-2xl">
          <source src="/TedTalk.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default TedTalk;

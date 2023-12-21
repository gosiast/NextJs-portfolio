"use client";
import React, {useTransition, useState } from "react";
import Image from "next/image";

// we create tab and useState so it stores info which tab is open
const AboutSection = () => {
   const [tab, setTab] = useState("skills");
   const [startTransition, isPending] = useTransition ();

   //so it transitions and updates the UI with the hook above
   // it updates the state without blocking the UI
   const handleTabChange = (id) => (
    startTransition(() => {
      setTab(id);
    }),
   );

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/oyster_image.png"
          alt="image of an oyster with the world instead of the pearl"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-white font-bold mb-4 text-xl sm:text:5xl lg:text-3xl">
            About Me
          </h2>
          <p className="text-[#ADB7BE] text-base md:text-lg mb-6">
            My name is Małgorzata, but everyone calls me Gosia. I'm Polish but
            I've been living abroad over the past few years. Currently, Spain
            has become my home. Since 2019 I've been working as an English
            Teacher. In 2021 I've decided to shift my career and I fell in love
            with coding. It's fascinating, challenging but incredibly rewarding.
            I would like to continue to grow as a Frontend Developer and learn
            more about the IT sector. I live by the “World Is Your Oyster”
            phrase and I strongly believe that we should take the opportunities
            that are waiting for us in the world.
          </p>
          <div className="flex flex-row mt-8">
            <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE border-b border-pink-400">
              Skills
            </span>
            <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE border-b border-pink-400">
              Education
            </span>
            <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE border-b border-pink-400">
              Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:flex px-0">
      <div className="display-block grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text:5xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-700 via-purple-400 to-blue-400 hover:bg-slate-400">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Gosia",
                1500,
                "Frontend Developer",
                1500,
                "Lifelong Learner",
                1500,
              ]}
              wrapper="span"
              speed={50}
              width={500}
              height={500}
              repeat={Infinity}
              priority={true}
            />
            <br />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-m lg:text-l mb-8">
            Welcome to my digital playground! I&apos;m on a journey to craft
            seamless and captivating web experiences. Dive in, explore my
            creations, and get to know the code that brings ideas to life.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-pink-700 via-purple-400 to-blue-400 hover:bg-slate-400 text-white hover:text-black mb-3">
              Hire Me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent from-pink-700 via-purple-400 to-blue-400 hover:bg-slate-200 text-white hover:text-black border mb-3">
              <span>
                <a href="/Malgorzata_Stano_Resume.pdf" target="_blank">
                  Download CV
                </a>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/images/hero_photo.png"
            alt="animation of me, sitting with a computer and world map in the background"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full sm:w-full"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

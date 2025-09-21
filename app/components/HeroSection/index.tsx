"use client";
{
  /* eslint-disable-next-line react/no-unescaped-entities */
}
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:flex px-0">
      <div className="display-block grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-8 mt-10 text-4xl sm:text:5xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-700 via-purple-400 to-blue-400 hover:bg-slate-400">
              Hello, I&apos;m
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
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-justify md:text-lg mb-6">
            Hi, I&apos;m <strong className="text-pink-400 mr-1">Gosia</strong>
            (short for <strong className="text-white">Małgorzata</strong>),
            former English teacher turned{" "}
            <strong className="text-white">Frontend Developer</strong>, I’ve
            been living and working across six countries and now call
            <strong className="text-white"> Barcelona</strong> home. I love
            building sleek, functional web applications with React, Next.js, and
            TypeScript — mixing creativity, problem-solving, and a pinch of
            curiosity ✨
          </p>
          <div>
            <button
              className="px-7 py-4 w-full sm:w-fit rounded-lg mr-5 bg-gradient-to-br from-pink-700 via-purple-400 to-blue-400 text-white font-medium mb-3
  transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110"
            >
              <a href="/#contact">Contact Me</a>
            </button>

            <button className="px-7 py-4 rounded-lg mr-5 bg-transparent border border-pink-400 text-white font-medium mb-3 transition-all duration-300 ease-in-out hover:scale-105">
              <a
                href="/Malgorzata Stano_Frontend_Developer.pdf"
                download="/Malgorzata Stano_Frontend_Developer.pdf"
                target="_blank"
              >
                Resume Ready ✨{" "}
              </a>
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

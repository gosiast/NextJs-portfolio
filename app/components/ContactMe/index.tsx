import React from "react";
import Link from "next/link";
import Image from "next/image";

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row items-center md:gap-8 xl:gap-16 sm:py-10 xl:px-4"
    >
      {" "}
      <div className="md:w-1/2 text-center md:text-left">
        <h5 className="text-3xl font-bold text-white mb-5">
          Let&apos;s Connect!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-justify md:text-lg">
          I am currently looking for full-time remote opportunities as a
          Frontend Developer. Feel free to reach out!
        </p>
        <div className="socials flex flex-row gap-4 justify-stretch">
          <Link href="https://github.com/gosiast" target="_blank">
            <Image
              src="/images/githubIcon.svg"
              alt="GitHub Icon"
              className="transition-transform duration-300 hover:scale-110 hover:brightness-125 cursor-pointer"
              width={48}
              height={48}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/malgorzata-stano/"
            target="_blank"
          >
            <Image
              src="/images/linkedinIcon.svg"
              alt="LinkedIn Icon"
              className="transition-transform duration-300 hover:scale-110 hover:brightness-125 cursor-pointer"
              width={48}
              height={48}
            />
          </Link>
          <Link href="mailto:stano.malgorzata@gmail.com" target="_blank">
            <Image
              src="/images/EmailIcon.svg"
              alt="Email Icon"
              className="transition-transform duration-300 hover:scale-110 hover:brightness-125 cursor-pointer"
              width={48}
              height={48}
            />
          </Link>
        </div>
      </div>
      <div className="mt-4 md:mt-0 text-center md:text-left">
        <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/images/oyster_image.png"
            alt="animation of me, sitting with a computer and world map in the background"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

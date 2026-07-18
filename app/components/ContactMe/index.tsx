import React from "react";
import Link from "next/link";
import Image from "next/image";

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="grid items-center gap-8 md:grid-cols-2 md:gap-12 py-12 md:py-20 scroll-mt-24"
    >
      <div className="order-1 md:order-2">
        <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
          Let&apos;s stay in touch
        </h2>
        <p className="text-[#ADB7BE] mb-6 max-w-[60ch] md:text-lg leading-relaxed">
        I love building and I&apos;m always happy to connect -
          whether it&apos;s to swap ideas, talk shop, or collaborate on
          something interesting. Feel free to reach out! ✨
        </p>
        <div className="socials flex flex-row gap-6">
          <Link
            href="https://github.com/gosiast"
            target="_blank"
            rel="noopener noreferrer"
          >
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
            rel="noopener noreferrer"
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
              src="/images/emailIcon.svg"
              alt="Email Icon"
              className="transition-transform duration-300 hover:scale-110 hover:brightness-125 cursor-pointer"
              width={48}
              height={48}
            />
          </Link>
        </div>
      </div>
      <div className="order-2 md:order-1 flex justify-center">
        <Image
          src="/images/oyster_image.png"
          alt="Illustration of Gosia - the world is her oyster"
          width={400}
          height={400}
          className="h-auto w-full max-w-[280px] lg:max-w-[380px]"
        />
      </div>
    </section>
  );
};

export default ContactMe;

import React from "react";
import GithubIcon from "../../public/images/githubIcon.svg";
import LinkedIcon from "../../public/images/linkedinIcon.svg";
import EmailIcon from "../../public/images/emailIcon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactMe = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="col-span-8 place-self-center text-left">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for full-time remote (or hybrid from Barcelona)
          opportunities as a Junior Frontend Developer. Feel free to reach out!
        </p>
        <div className="socials flex flex-row gap-2 m-2">
          <Link href="https://github.com/gosiast">
            <Image src={GithubIcon} alt="GitHub Icon" className="h-14 w-14" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/malgorzata-stano/"
            className="h-12 w-12"
          >
            <Image src={LinkedIcon} alt="LinkedIn Icon" />
          </Link>
          <Link
            href="mailto:stano.malgorzata@gmail.com"
            target="_blank"
            className="h-12 w-12"
          >
            <Image src={EmailIcon} alt="Email Icon" />
          </Link>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/images/oyster_image.png"
            alt="animation of me, sitting with a computer and world map in the background"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

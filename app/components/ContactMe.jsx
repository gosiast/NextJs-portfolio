import React from "react";
import GithubIcon from "../../public/images/githubIcon.svg";
import LinkedIcon from "../../public/images/linkedinIcon.svg";
import EmailIcon from "../../public/images/emailIcon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactMe = () => {
  return (
    <section className="grid md:grid-cols2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for full-time remote (or hybrid from Barcelona)
          opportunities as a Junior Frontend Developer. Feel free to reach out!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/gosiast">
            <Image src={GithubIcon} alt="GitHub Icon" />
          </Link>
        </div>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.linkedin.com/in/malgorzata-stano/">
            <Image src={LinkedIcon} alt="LinkedIn Icon" />
          </Link>
        </div>
        <div className="socials flex flex-row gap-2">
          <Link href="mailto:stano.malgorzata@gmail.com" target="_blank">
            <Image src={EmailIcon} alt="Email Icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

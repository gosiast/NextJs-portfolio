"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5">
        <li>
          <strong className="text-pink-400">Frontend Technologies: </strong>
          HTML5, CSS3, ES6, JavaScript, Bootstrap, Tailwind, Responsive Web
          Design
        </li>
        <li>
          <strong className="text-pink-400">Frameworks and Libraries:</strong>{" "}
          ReactJs, NextJs
        </li>
        <li>
          <strong className="text-pink-400">CSS Preprocessors:</strong> SASS
        </li>
        <li>
          <strong className="text-pink-400">Version Control:</strong> Git,
          GitHub, GitLab
        </li>
        <li>
          <strong className="text-pink-400">Development Tools:</strong> Browser
          Developer Tools, ESLint
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5">
        <li>
          <a
            href="https://www.shecodes.io/"
            target="_blank"
            className="hover:text-pink-400 
    hover:duration-300 hover:undeline"
          >
            SheCodes Training Program 2021-2022
          </a>
        </li>
        <li>MA Applied Linguistics, University of Warsaw, Poland 2016-2018</li>
        <li>
          Lingue e Letterature Straniere , Università degli Studi di Bari, Italy
          2017-2018
        </li>
        <li>
          Scienze Politiche, Università degli Studi di Milano, Italy 2015-2016
        </li>
        <li>BA European Studies, University of Warsaw, Poland 2012-2015</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5">
        <li>
          <a
            href="/certificates/TailwindUdemyCertificate.pdf"
            target="_blank"
            className="hover:text-pink-400 hover:duration-300 hover:undeline"
          >
            Tailwind CSS - Zero to Hero - Tailwind v3 2023{" "}
          </a>
          - Udemy 01/2024{" "}
        </li>
        <li>
          <a
            href="/certificates/malgorzata_stano_ certificate_learn_command_line.pdf"
            target="_blank"
            className="hover:text-pink-400 hover:duration-300 hover:undeline"
          >
            Learn the Command Line
          </a>
          - Codecademy 06/2023{" "}
        </li>
        <li>
          <a
            href="/certificates/SheCodesReactCertificate.png"
            target="_blank"
            className="hover:text-pink-400 
    hover:duration-300 hover:undeline"
          >
            SheCodes React{" "}
          </a>
          - 10/2022
        </li>
        <li>
          {" "}
          <a
            href="/certificates/SheCodesResponsiveCertificate.png"
            target="_blank"
            className="hover:text-pink-400 
    hover:duration-300 hover:undeline"
          >
            SheCodes Responsive{" "}
          </a>
          - 04/2022
        </li>
        <li>
          {" "}
          <a
            href="/certificates/SheCodesPlusCertificate.png"
            target="_blank"
            className="hover:text-pink-400 
    hover:duration-300 hover:undeline"
          >
            SheCodes Plus{" "}
          </a>
          - 02/2022
        </li>
        <li>
          <a
            href="/certificates/SheCodesBasicCertificate.png"
            target="_blank"
            className="hover:text-pink-400 
    hover:duration-300 hover:undeline"
          >
            SheCodes Basics{" "}
          </a>
          - 10/2021
        </li>
      </ul>
    ),
  },
];

// we create tab and useState so it stores info which tab is open
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  //so it transitions and updates the UI with the hook above
  // it updates the state without blocking the UI
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-2 mb-5" id="about">
      <div className="display-block md:grid md:grid-cols-2 gap-8 items-center xl:gap-4 sm:py-16 xl:px-4 w-full">
        <Image
          src="/images/aboutme_photo.png"
          alt="image of an oyster with the world instead of the pearl"
          width={400}
          height={400}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-center text-white font-bold mb-5 mt-3 text-3xl sm:text:5xl lg:text-3xl">
            About Me
          </h2>
          <p className="text-[#ADB7BE] text-justify md:text-lg mb-6">
            Hey, it&apos;s <strong className="text-white">Małgorzata</strong>{" "}
            here, but call me <strong className="text-pink-400">Gosia</strong>.
            I&apos;m Polish but I&apos;ve been living abroad most of my time
            since 2018. Currently, Spain 🇪🇸 became my home. Since 2019 I&apos;ve
            been working as an English Teacher. In <strong>2021</strong> I
            decided to shift my career and I fell in love with coding. It&apos;s
            fascinating, challenging but incredibly rewarding. I completed
            several courses, worked on some projects. I would like to continue
            to grow as a Frontend Developer and learn more about the IT sector.
            I live by the
            <strong className="text-pink-400">
              “World Is Your Oyster”
            </strong>{" "}
            phrase and I strongly believe that we should take the opportunities
            that are waiting for us in the world. We learn well by observing
            others, but also with others. Check out my Instagram channel{" "}
            <strong className="text-pink-400">
              <a
                href="https://www.instagram.com/cheers2errors/"
                target="_blank"
              >
                Cheers2errors
              </a>{" "}
            </strong>
            where I share my journey as Frontend Developer.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

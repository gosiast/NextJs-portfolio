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
          Frontend Technologies: HTML5, CSS3, ES6, JavaScript, Bootstrap,
          Responsive Web Design
        </li>
        <li>Frameworks and Libraries: ReactJs, NextJs</li>
        <li>Version Control: Git, GitHub, GitLab</li>
        <li>Responsive Web Design</li>
        <li>Development Tools: ESLint</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5">
        <li>
          <a href="https://www.shecodes.io/" className="shecodes link">
            SheCodes
          </a>
        </li>
        <li>MA Applied Linguistics, University of Warsaw, Poland</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5">
        <li>Learn the Command Line- Codecademy 06/2023</li>
        <li>SheCodes React - 10/2022</li>
        <li>SheCodes Responsive - 04/2022</li>
        <li>SheCodes Plus - 02/2022</li>
        <li>SheCodes Basics - 10/2021</li>
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
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/me_animation.png"
          alt="image of an oyster with the world instead of the pearl"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className=" text-center text-white font-bold mb-4 mt-2 text-xl sm:text:5xl lg:text-3xl">
            About Me
          </h2>
          <p className="text-[#ADB7BE] text-base md:text-lg mb-6">
            Hey, it's <strong>Małgorzata</strong> here, but call me{" "}
            <strong>Gosia</strong>. I'm Polish but I've been living abroad over
            the past years. Currently, Spain has become my home. Since 2019 I've
            been working as an English Teacher. In <strong>2021</strong> I've
            decided to shift my career and I fell in love with coding. It's
            fascinating, challenging but incredibly rewarding. I would like to
            continue to grow as a Frontend Developer and learn more about the IT
            sector. I live by the <strong>“World Is Your Oyster”</strong> phrase
            and I strongly believe that we should take the opportunities that
            are waiting for us in the world.
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

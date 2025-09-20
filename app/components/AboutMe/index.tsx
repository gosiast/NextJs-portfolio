"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../TabButton";

interface TabData {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5">
        <li>
          <strong className="text-pink-400">Frontend Technologies: </strong>
          HTML5, CSS3, ES6, JavaScript, Responsive Web Design
        </li>
        <li>
          <strong className="text-pink-400">Frameworks & Libraries:</strong>{" "}
          React.js, Next.js, TypeScript, Apollo Client (GraphQL)
        </li>
        <li>
          <strong className="text-pink-400">Styling:</strong> Tailwind CSS,
          Bootstrap, SASS, Storybook (for reusable UI components)
        </li>
        <li>
          <strong className="text-pink-400">APIs & Data:</strong> GraphQL, REST
        </li>
        <li>
          <strong className="text-pink-400">
            Version Control & Collaboration:
          </strong>{" "}
          Git, GitHub, GitLab
        </li>
        <li>
          <strong className="text-pink-400">Developer Tools & Workflow:</strong>{" "}
          ESLint, Prettier, Browser DevTools, CI/CD workflows, GitHub API
          automation
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
            className="hover:text-pink-400 hover:duration-300 hover:underline"
          >
            SheCodes Training Program 2021–2022
          </a>
        </li>
        <li>
          MA Applied Linguistics, University of Warsaw, Poland (2016–2018)
        </li>
        <li>
          Erasmus Exchange - Lingue e Letterature Straniere, Università degli
          Studi di Bari, Italy (2017–2018)
        </li>
        <li>
          Erasmus Exchange - Scienze Politiche, Università degli Studi di
          Milano, Italy (2015–2016)
        </li>
        <li>BA European Studies, University of Warsaw, Poland (2012–2015)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5">
        {/* shortened for readability — your list goes here */}
        <li>
          <a
            href="/certificates/TailwindUdemyCertificate.pdf"
            target="_blank"
            className="text-pink-400 hover:duration-300 hover:underline"
          >
            Tailwind CSS - Zero to Hero - Tailwind v3 2023
          </a>{" "}
          - Udemy 01/2024
        </li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const activeTab = TAB_DATA.find((t) => t.id === tab);

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
            Born and raised in Poland, I’ve been thriving in multicultural
            environments since 2017 and speak five languages fluently. In{" "}
            <strong className="text-white">2022</strong>, I made the leap from
            teaching English to coding — and never looked back.
          </p>

          <p className="text-[#ADB7BE] text-justify md:text-lg mb-6">
            At <strong className="text-white">Decubate</strong>, I designed and
            implemented the{" "}
            <strong className="text-pink-400">Compliance Hub</strong> — a tool
            that helps compliance officers review users, monitor risks, and
            enforce policies with transparency.
          </p>

          <p className="text-[#ADB7BE] text-justify md:text-lg mb-6">
            Along the way, I built internal tools to streamline developer
            workflows, optimized user-facing platforms, and introduced reusable
            UI components with Storybook. My journey from self-taught junior to
            mid-level developer taught me to embrace challenges, learn fast, and
            always put user experience first 💡
          </p>

          <p className="text-[#ADB7BE] text-justify md:text-lg">
            Today, I bring together{" "}
            <strong className="text-white">
              React, Next.js, TypeScript, GraphQL, and Tailwind
            </strong>{" "}
            to craft applications that scale — while keeping them intuitive and
            enjoyable to use.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>

          <div className="mt-8">{activeTab?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

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
          <strong className="text-pink-400">Frontend:</strong> HTML5, CSS3,
          ES6+, JavaScript, React.js, Next.js, TypeScript, Apollo Client
        </li>
        <li>
          <strong className="text-pink-400">Backend:</strong> GraphQL, REST
        </li>
        <li>
          <strong className="text-pink-400">Styling:</strong> Tailwind CSS,
          Bootstrap, SASS, Storybook
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
            rel="noopener noreferrer"
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
        <li>
          <a
            href="https://www.linkedin.com/learning/certificates/f441ea9a0b28e99aaf0564e8bc8a2ca3c2c710dd98380c920382385d14c3e669?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BmY36m3WlQ5GeEFVvEyJxzg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:duration-300 hover:underline"
          >
            Agile Foundations
          </a>{" "}
          – LinkedIn, 07/2025
        </li>
        <li>
          <a
            href="https://www.codecademy.com/profiles/malgorzata_stano/certificates/1790781f3857d258b06a24f3c53424cd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:duration-300 hover:underline"
          >
            Learn React Testing Course
          </a>{" "}
          – Codecademy, 06/2025
        </li>
        <li>
          <a
            href="https://charteredcertifications.com/learning/certificate/99006840"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:duration-300 hover:underline"
          >
            Certified Compliance Professional in Cryptocurrency Financial Crimes
            (CCPC™)
          </a>{" "}
          – Chartered Institute of Professional Certifications, 05/2025
        </li>
        <li>
          <a
            href="https://www.linkedin.com/learning/certificates/6b527ec0654b063affbc4947db1be19a47789e9a8d81c9989b289b3f4c18c625?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2D0D83ZvScOAj7TnAHbTMA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:duration-300 hover:underline"
          >
            Tech Career Skills: Communication for Developers
          </a>{" "}
          – LinkedIn, 03/2025
        </li>
        <li>
          <a
            href="https://www.linkedin.com/learning/certificates/ceb00ee84696201dee9c88afae736ebdda7327efe45f1446d0a52582ff13645e?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2D0D83ZvScOAj7TnAHbTMA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:duration-300 hover:underline"
          >
            How Blockchains Will Change Business
          </a>{" "}
          – LinkedIn, 02/2025
        </li>
        <li>
          <a
            href="https://www.linkedin.com/learning/certificates/2eef26fe9ac4db1c701209c2bf88f4a880c604dbac886ec8f8442b149ef5ddae?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2D0D83ZvScOAj7TnAHbTMA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:duration-300 hover:underline"
          >
            JavaScript: Async
          </a>{" "}
          – LinkedIn, 01/2025
        </li>
        <li>
          <a
            href="/certificates/TailwindUdemyCertificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:duration-300 hover:undeline"
          >
            Tailwind CSS - Zero to Hero - Tailwind v3 2023{" "}
          </a>
          - Udemy 01/2024{" "}
        </li>
        <li className="mt-4 text-[#ADB7BE]">
          Full list of my certifications can be found on my{" "}
          <a
            href="https://www.linkedin.com/in/malgorzata-stano/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:underline"
          >
            LinkedIn profile
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-12 md:py-20 scroll-mt-24" id="about">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center xl:gap-4 sm:py-16 xl:px-4 w-full">
        {" "}
        <Image
          src="/images/aboutme_photo.png"
          alt="professional image of me"
          width={400}
          height={400}
          className="order-2 md:order-1 hidden md:block"
        />
        <div className="order-1 md:order-2 mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
            About
          </p>
          <h2 className="text-white font-bold mb-5 text-3xl sm:text-4xl">
            Teacher turned developer
          </h2>
          <div className="max-w-[60ch] space-y-5">
            <p className="text-[#ADB7BE] md:text-lg leading-relaxed">
              I&apos;ve thrived in multicultural environments since 2017 and
              speak five languages. In{" "}
              <strong className="text-white">2022</strong> I traded teaching
              English for code - self-taught, no CS degree or bootcamp - and
              never looked back.
            </p>
            <p className="text-[#ADB7BE] md:text-lg leading-relaxed">
              Since then I&apos;ve gone from small practice apps to shipping
              production features on a live web platform used by real people -
              stretching well beyond the UI into testing, security, CI,
              infrastructure, and AI-assisted workflows.
            </p>
            <p className="text-[#ADB7BE] md:text-lg leading-relaxed">
              Today I build with{" "}
              <strong className="text-white">
                React, Next.js, TypeScript, GraphQL, and Tailwind
              </strong>
              . I&apos;m not chasing my next job title - I&apos;m chasing the
              next thing to learn, and I treat every project as a chance to
              grow.{" "}
              <strong className="text-pink-400">
                The world is your oyster
              </strong>{" "}
              🌍
            </p>
          </div>

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
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

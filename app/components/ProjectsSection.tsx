import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Decubate Platform & Compliance Hub",
    description: (
      <p>
        At Decubate, I maintained and enhanced the launchpad platform, built the{" "}
        <strong>Compliance Hub</strong> from scratch for admins, and led UI/UX
        improvements across the site — work that helped Decubate become the
        first MiCAR-licensed crypto launchpad in the EU. The hero section above
        is one of the Storybook components I designed and implemented. More
        about my Decubate experience can be found on my{" "}
        <a
          href="https://www.linkedin.com/in/malgorzata-stano/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:underline"
        >
          LinkedIn profile
        </a>
        .
      </p>
    ),
    image: "/images/projects/decubate.png",
    github_url: "",
    website_url: "https://platform.decubate.com/",
  },
  {
    id: 2,
    title: "Frontend Developer",
    description:
      "8Billionminds is building a new free education system for the world via a live-learning platform. Teach, share, and learn any subject from anyone, anywhere. All via real-time live lessons - the best way to learn! Think Couchsurfing for education.",
    image: "/images/projects/8billionminds.png",
    github_url: "https://www.8billionminds.com/",
    website_url: "https://www.8billionminds.com/",
  },
  {
    id: 3,
    title: "React Weather App",
    description:
      "Built with React, advanced HTML, CSS, Javascript and Boostrap. Using real data and API. Final project of the SheCodes React course",
    image: "/images/projects/react_weather_app.png",
    github_url: "https://github.com/gosiast/final-weather-app",
    website_url: "https://final-weather-app-react.netlify.app/",
  },
  {
    id: 4,
    title: "React Dictionary App",
    description:
      "Built with React, advanced HTML, CSS, Javascript and Boostrap. Using real data and API. Final project of the SheCodes React course",
    image: "/images/projects/react_dictionary_app.png",
    github_url: "https://github.com/gosiast/react-dictionary-app",
    website_url: "https://my-first-react-dictionary-ms.netlify.app/",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2
        className="text-center text-3xl font-bold text-white mb-5 mt-3 scroll-mt-24"
        id="projects"
      >
        Projects & Experience{" "}
      </h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            github_url={project.github_url}
            website_url={project.website_url}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;

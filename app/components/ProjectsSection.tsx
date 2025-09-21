import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Frontend Developer",
    description:
      "8Billionminds is building a new free education system for the world via a live-learning platform. Teach, share, and learn any subject from anyone, anywhere. All via real-time live lessons - the best way to learn! Think Couchsurfing for education.",
    image: "/images/projects/8billionminds.png",
    githubUrl: "https://www.8billionminds.com/",
    websiteUrl: "https://www.8billionminds.com/",
  },
  {
    id: 2,
    title: "React Weather App",
    description:
      "Built with React, advanced HTML, CSS, Javascript and Boostrap. Using real data and API. Final project of the SheCodes React course",
    image: "/images/projects/react_weather_app.png",
    githubUrl: "https://github.com/gosiast/final-weather-app",
    websiteUrl: "https://final-weather-app-react.netlify.app/",
  },
  {
    id: 3,
    title: "React Dictionary App",
    description:
      "Built with React, advanced HTML, CSS, Javascript and Boostrap. Using real data and API. Final project of the SheCodes React course",
    image: "/images/projects/react_dictionary_app.png",
    githubUrl: "https://github.com/gosiast/react-dictionary-app",
    websiteUrl: "https://my-first-react-dictionary-ms.netlify.app/",
  },
  {
    id: 4,
    title: "Frontend Mentor",
    description:
      "Look at some more projects of mine on Frontend Mentor where I contribute to an open source and practice my skills.",
    image: "/images/projects/frontend_mentor_profile.png",
    githubUrl: "https://github.com/gosiast",
    websiteUrl: "https://www.frontendmentor.io/profile/gosiast",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2
        className="text-center text-3xl font-bold text-white mb-5 mt-3 scroll-mt-24"
        id="projects"
      >
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            githubUrl={project.githubUrl}
            websiteUrl={project.websiteUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;

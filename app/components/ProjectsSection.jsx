import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Weather App",
    description:
      "Built with React, advanced HTML, CSS, Javascript and Boostrap. Using real data and API. Final project of the SheCodes React course",
    image: "/images/projects/react_weather_app.png",
  },
  {
    id: 2,
    title: "React Dictionary App",
    description:
      "Built with React, advanced HTML, CSS, Javascript and Boostrap. Using real data and API. Final project of the SheCodes React course",
    image: "/images/projects/react_dictionary_app.png",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "Built with advanced HTML, CSS, Javascript and Boostrap. Using real data and API. Final project of the SheCodes Plus course",
    image: "/images/projects/weather_app_photo.png",
  },
  {
    id: 4,
    title: "First Portfolio",
    description:
      "My First Portfolio build with HTMl and CSS. In this project I learnt how to build responsive websites. Final project of the SheCodes Responsive course",
    image: "/images/projects/first_portfolio.png",
  },
  {
    id: 5,
    title: "First Website",
    description:
      "Built with HTML, CSS and Javascript. Final project of the SheCodes Basic course",
    image: "/images/projects/first_website.png",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-2xl font-bold text-white mt-4 mb-5">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;

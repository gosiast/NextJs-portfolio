import React from "react";
import ProjectCard from "../ProjectsCard";
import { projects_data } from "./projects";

const ProjectsSection = () => {
  return (
    <>
      <h2
        className="text-center text-3xl font-bold text-white mb-5 mt-3 scroll-mt-24"
        id="projects"
      >
        Personal Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projects_data.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            technologies={project.technologies}
            description={project.description}
            img_url={project.image}
            github_url={project.github_url}
            website_url={project.website_url}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;

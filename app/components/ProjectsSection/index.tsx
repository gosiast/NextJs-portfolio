import React from "react";
import ProjectCard from "../ProjectsCard";
import { projects_data } from "./projects";

const ProjectsSection = () => {
  return (
    <section className="py-12 md:py-20 scroll-mt-24" id="projects">
      <p className="mb-3 text-center text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
        Personal projects
      </p>
      <h2 className="text-center text-white font-bold mb-8 text-3xl sm:text-4xl">
        Things I&apos;ve built
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
    </section>
  );
};

export default ProjectsSection;

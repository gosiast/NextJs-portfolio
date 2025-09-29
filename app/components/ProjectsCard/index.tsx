import React from "react";
import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps {
  img_url: string;
  title: string;
  technologies: string[];
  description: React.ReactNode;
  github_url?: string;
  website_url?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  img_url,
  title,
  technologies,
  description,
  github_url,
  website_url,
}) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${img_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          {github_url && (
            <Link
              href={github_url}
              target="_blank"
              className="h-14 w-14 mr-4 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
            </Link>
          )}

          {website_url && (
            <Link
              href={website_url}
              target="_blank"
              className="w-[25%] aspect-square border-2 rounded-full border-[#ADB7BE] hover:border-white group/link flex items-center justify-center min-w-[40px] max-w-[70px]"
            >
              <GlobeAltIcon className="w-[60%] h-[60%] text-[#ADB7BE] group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-bold mb-2">{title}</h5>
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-pink-400 bg-pink-400/10 text-xs px-3 py-1 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="text-[#ADB7BE]">{description}</div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

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
        <div className="absolute inset-0 flex items-center justify-center bg-[#181818]/0 opacity-0 group-hover:opacity-100 group-hover:bg-[#181818]/80 transition-all duration-500 ease-in-out pointer-events-none group-hover:pointer-events-auto">
          {github_url && (
            <Link
              href={github_url}
              target="_blank"
              className="flex items-center justify-center h-14 w-14 rounded-full border border-[#ADB7BE] bg-white/80 hover:bg-white hover:scale-110 transition-transform duration-300 ease-out"
            >
              <Image
                src="/images/github.png"
                alt="GitHub Icon"
                width={28}
                height={28}
              />
            </Link>
          )}

          {website_url && (
            <Link
              href={website_url}
              target="_blank"
              className="flex items-center justify-center h-14 w-14 rounded-full border border-[#ADB7BE] bg-white/80 hover:bg-white hover:scale-110 transition-transform duration-300 ease-out ml-6"
            >
              <Image
                src="/images/www.png"
                alt="Website Icon"
                width={28}
                height={28}
              />
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

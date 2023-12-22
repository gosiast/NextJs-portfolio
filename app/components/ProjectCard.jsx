import React from "react";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className="h-50 md:7-70"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>
      <div className="text-white">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

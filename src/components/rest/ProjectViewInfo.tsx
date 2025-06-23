import React from "react";
import { ProjectTypes } from "../../types/ProjectTypes";

const ProjectViewInfo = ({ projects }: { projects: ProjectTypes }) => {
  return (
    <div className="project__view__info">
      <h2>{projects.projectName}</h2>
      <span>{projects.projectBuName}</span>
    </div>
  );
};

export default ProjectViewInfo;

import React from "react";
import { ProjectTypes } from "../../types/ProjectTypes";
import ProjectViewInfo from "./ProjectViewInfo";
import ProjectTag from "./ProjectTag";
import ProjectHiddenInfo from "./ProjectHiddenInfo";

const ProjectBx = ({ projects }: { projects: ProjectTypes }) => {
  return (
    <div className="project-bx">
      <ProjectViewInfo projects={projects} />
      <ProjectTag projects={projects} />
      <ProjectHiddenInfo projects={projects} />
    </div>
  );
};

export default ProjectBx;

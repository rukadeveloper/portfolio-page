import React from "react";
import { ProjectTypes } from "../../types/ProjectTypes";

const ProjectHiddenInfo = ({ projects }: { projects: ProjectTypes }) => {
  return (
    <div className="project__hidden">
      <h2>{projects.projectName}</h2>
      <button>자세히 보기</button>
    </div>
  );
};

export default ProjectHiddenInfo;

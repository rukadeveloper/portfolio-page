import React from "react";
import { ProjectTypes } from "../../types/ProjectTypes";

const ProjectTag = ({ projects }: { projects: ProjectTypes }) => {
  return (
    <div className="project__tag">
      {projects.tag.map((tag) => (
        <div>{tag}</div>
      ))}
    </div>
  );
};

export default ProjectTag;

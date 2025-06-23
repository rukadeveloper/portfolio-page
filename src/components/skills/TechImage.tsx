import React from "react";
import { ConObject } from "../../types/SkillsTypes";

const TechImage = ({ skills }: { skills: ConObject }) => {
  return (
    <div className="tech__image">
      <img src={skills.icon} alt={skills.subject} />
    </div>
  );
};

export default TechImage;

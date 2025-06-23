import React from "react";
import { ConObject } from "../../types/SkillsTypes";
import TechImage from "./TechImage";
import TechInfo from "./TechInfo";

const TechComponent = ({ skills }: { skills: ConObject }) => {
  return (
    <div className="tech__each">
      <TechImage skills={skills} />
      <TechInfo skills={skills} />
    </div>
  );
};

export default TechComponent;

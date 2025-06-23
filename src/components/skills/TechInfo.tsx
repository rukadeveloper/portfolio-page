import React from "react";
import { ConObject } from "../../types/SkillsTypes";

const TechInfo = ({ skills }: { skills: ConObject }) => {
  return (
    <dl className="tech__info">
      <dd>{skills.subject}</dd>
      <dt>{skills.details}</dt>
    </dl>
  );
};

export default TechInfo;

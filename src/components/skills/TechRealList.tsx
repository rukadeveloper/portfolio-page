import React, { useRef } from "react";
import { ConObject } from "../../types/SkillsTypes";
import TechComponent from "./TechComponent";

const TechRealList = ({ SkillsContent }: { SkillsContent: ConObject[] }) => {
  const techRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="tech__list" ref={techRef}>
      {SkillsContent.map((skills: ConObject) => (
        <TechComponent skills={skills} />
      ))}
    </div>
  );
};

export default TechRealList;

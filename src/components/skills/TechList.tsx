import React from "react";
import { SkillsType } from "../../types/SkillsTypes";
import TechRealList from "./TechRealList";

const TechList = ({
  SkillsContent,
  activeIndex,
}: {
  SkillsContent: SkillsType[];
  activeIndex: number;
}) => {
  return (
    <div className="tech__list__wrapper">
      <h2>
        Programming Skills Stack
        <span>@{SkillsContent[activeIndex].menuName}</span>
      </h2>
      <TechRealList SkillsContent={SkillsContent[activeIndex].conObject} />
    </div>
  );
};

export default TechList;

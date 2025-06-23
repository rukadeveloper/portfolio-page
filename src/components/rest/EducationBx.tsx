import React from "react";
import { EducationTypes } from "../../types/EducationTypes";

const EducationBx = ({ education }: { education: EducationTypes }) => {
  return (
    <div className="education-bx">
      <span>{education.date}</span>
      <h2>{education.name}</h2>
      <dl>
        <dd>{education.work}</dd>
        {education.realWork.map((r: string, i: number) => (
          <dt key={i}>
            <span>{r}</span>
          </dt>
        ))}
      </dl>
      <div className="tech__wrapper">
        {education.icons.map((icon: string) => (
          <div className="tech__images">
            <img src={icon} alt="icons" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationBx;

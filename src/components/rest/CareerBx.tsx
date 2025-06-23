import React from "react";
import { CareerTypes } from "../../types/CareerTypes";

const CareerBx = ({ career }: { career: CareerTypes }) => {
  return (
    <div className="career-bx">
      <span>{career.date}</span>
      <h2>{career.name}</h2>
      <dl>
        <dd>{career.work}</dd>
        {career.realWork.map((r: string, i: number) => (
          <dt key={i}>
            <span>{r}</span>
          </dt>
        ))}
      </dl>
      <div className="tech__wrapper">
        {career.icons.map((icon: string) => (
          <div className="tech__images">
            <img src={icon} alt="icons" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerBx;

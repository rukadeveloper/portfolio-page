import React, { Dispatch, forwardRef, SetStateAction } from "react";
import EducationBx from "./EducationBx";

type EducationProps = {
  setMenuIdx: Dispatch<SetStateAction<number | null>>;
};

const EducationSection = forwardRef<HTMLElement | null, EducationProps>(
  (props, ref) => {
    const eduCont = [
      {
        date: "2023.10 ~ 2024.03",
        name: "산대특 그린 컴퓨터 아카데미",
        work: "@ 프론트엔드 React, Node.js 과정 수료",
        realWork: [
          "Javascript, React, Node.js 매일 학습",
          "6개월 동안 HTML,CSS 기본부터 시작해 웹디자인까지 거치며, 프로젝트 준비",
          "솔로 프로젝트 1회, 팀 프로젝트 1회 진행 (팀 프로젝트는 중간 팀원들의 사정으로 해체)",
          "동료들과 원만한 커뮤니케이션 수행",
        ],
        icons: [
          "/images/tech/html.png",
          "/images/tech/css.png",
          "/images/tech/figma.svg",
          "/images/tech/springboot.png",
        ],
      },
      {
        date: "2024.08 ~ 2024.12",
        name: "슈퍼코딩 풀스택 과정",
        work: "@ 프론트엔드 React, Spring Boot 과정 수료",
        realWork: [
          "Javascript, React, Spring Boot 학습",
          "4개월 동안 HTML,CSS 기본부터 시작해 Spring Boot까지 프로젝트 준비",
          "팀 프로젝트 3회 진행 (팀 프로젝트는 중간 팀원들의 사정으로 해체)",
          "동료들과 원만한 커뮤니케이션 수행",
        ],
        icons: [
          "/images/tech/html.png",
          "/images/tech/css.png",
          "/images/tech/react-icon.png",
          "/images/tech/springboot.png",
        ],
      },
    ];

    return (
      <section id="education" ref={ref}>
        {eduCont.map((education) => (
          <EducationBx education={education} />
        ))}
      </section>
    );
  }
);

export default EducationSection;

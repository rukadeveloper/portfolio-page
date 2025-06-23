import React, { Dispatch, forwardRef, SetStateAction } from "react";
import ProjectBx from "./ProjectBx";
import { ProjectTypes } from "../../types/ProjectTypes";

type ProjectProps = {
  setMenuIdx: Dispatch<SetStateAction<number | null>>;
};

const ProjectSection = forwardRef<HTMLElement, ProjectProps>(
  (props: ProjectProps, ref: React.ForwardedRef<HTMLElement>) => {
    const projectsCont: ProjectTypes[] = [
      {
        projectName: "베이스볼 코믹스 v2",
        link: "https://rukadeveloper.github.io/",
        projectBuName: "야구 직관 예약 서비스입니다.",
        tag: ["개인", "사이드", "반응형"],
        dates: "2024.05 ~ 진행중",
        infos: "직관 서비스를 제공하는 예약 서비스 어플리케이션입니다.",
        infos2:
          "현재 개인적으로 프로젝트를 진행중이며, 개인 프로젝트이므로 최대한 서비스가 가능한 정도로 개발하는 것을 목표로 하고 있습니다.",
        character: [
          "Spring Boot를 이용한 Spring Security 로그인",
          "굿즈샵 제공",
        ],
        usedLanguage: [
          {
            name: "React",
            details:
              "컴포넌트 기반의 React를 사용해 상태 관리를 용이하게 하고 재사용성을 높입니다.",
          },
          {
            name: "zustand",
            details:
              "상태 관리 라이브러리를 통해 상태값을 전역에서 사용할 수 있습니다.",
          },
        ],
      },
    ];

    return (
      <section id="projects" ref={ref}>
        {projectsCont.map((projects: ProjectTypes) => (
          <ProjectBx projects={projects} />
        ))}
      </section>
    );
  }
);

export default ProjectSection;

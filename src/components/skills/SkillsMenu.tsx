import React, { useState } from "react";
import TechNav from "./TechNav";
import { SkillsType } from "../../types/SkillsTypes";
import TechList from "./TechList";

const SkillsMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const SkillsContent: SkillsType[] = [
    {
      menuName: "프로그래밍 언어",
      conObject: [
        {
          subject: "HTML",
          details: "HTML 태그를 통한 마크업을 할 수 있습니다.",
          icon: "/images/tech/html.png",
        },
        {
          subject: "CSS",
          details: "CSS를 통해 스타일링으로 레이아웃을 잡을 수 있습니다.",
          icon: "/images/tech/css.png",
        },
        {
          subject: "Javascript",
          details:
            "HTML,CSS 통해 만든 정적인 사이트에 인터렉션 기능을 추가할 수 있습니다.",
          icon: "/images/tech/JS.png",
        },
        {
          subject: "Typescript",
          details: "타입 설정을 통해 명확한 코드를 작성할 수 있습니다.",
          icon: "/images/tech/typescript.png",
        },
        {
          subject: "Java SE",
          details: "Java SE의 전체적인 문법에 대해 공부했습니다.",
          icon: "/images/tech/java.svg",
        },
      ],
    },
    {
      menuName: "프론트엔드",
      conObject: [
        {
          subject: "React",
          details:
            "React로 컴포넌트형 레이아웃을 짤 수 있으며, useState, useEffect 등 여러 빌트인 훅과 커스텀 훅을 작성할 수 있습니다.",
          icon: "/images/tech/react-icon.png",
        },
        {
          subject: "Next.js",
          details: "SSR에 대해 이해하고, 풀스택 환경을 구성할 수 있습니다.",
          icon: "/images/tech/next.png",
        },
        {
          subject: "Axios",
          details:
            "axios 라이브러리를 통해 프론트엔드와 백엔드의 통신을 비동기 환경에서 할 수 있습니다.",
          icon: "/images/tech/axios.png",
        },
        {
          subject: "Zustand",
          details: "전역 상태 관리를 Redux 대신 사용하고 있습니다.",
          icon: "/images/tech/zustand.png",
        },
      ],
    },
    {
      menuName: "백엔드",
      conObject: [
        {
          subject: "Spring Boot",
          details:
            "REST API를 구성해 프론트엔드와 직접적으로 소통할 수 있습니다.",
          icon: "/images/tech/springboot.png",
        },
        {
          subject: "MySQL",
          details: "DB 쿼리를 통해 DB 데이터를 관리할 수 있습니다.",
          icon: "/images/tech/mysql.svg",
        },
      ],
    },
  ];

  return (
    <div id="skills__menu__all">
      <TechNav
        SkillsContent={SkillsContent}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <TechList SkillsContent={SkillsContent} activeIndex={activeIndex} />
    </div>
  );
};

export default SkillsMenu;

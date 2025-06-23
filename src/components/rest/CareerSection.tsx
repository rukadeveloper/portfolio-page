import React, {
  Dispatch,
  ForwardedRef,
  forwardRef,
  SetStateAction,
} from "react";
import CareerBx from "./CareerBx";
import { CareerTypes } from "../../types/CareerTypes";

type CareerProps = {
  setMenuIdx: Dispatch<SetStateAction<number | null>>;
};

const CareerSection = forwardRef<HTMLElement, CareerProps>(
  (props: CareerProps, ref: ForwardedRef<HTMLElement | null>) => {
    const careerCont: CareerTypes[] = [
      {
        date: "2025.01 ~ 진행중",
        name: "주식회사 행복 파트너",
        work: "@ 개발팀 - 디자인 및 개발 총괄",
        realWork: [
          "Figma를 이용한 간단한 배너 제작",
          "Figma를 이용해 금융 랜딩 페이지 웹 디자인",
          "HTML,CSS를 통해 디자인 토대로 랜딩 페이지 퍼블리싱",
          "php를 통해 form 제출을 DB로 넘겨주기 작업",
          "Spring Boot를 이용해 관리자 사이트 수정",
        ],
        icons: [
          "/images/tech/html.png",
          "/images/tech/css.png",
          "/images/tech/figma.svg",
          "/images/tech/springboot.png",
        ],
      },
    ];

    return (
      <section id="career" ref={ref}>
        {careerCont.map((career: CareerTypes) => (
          <CareerBx career={career} />
        ))}
      </section>
    );
  }
);

export default CareerSection;

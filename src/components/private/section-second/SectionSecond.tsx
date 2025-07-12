import React, { useEffect, useRef } from "react";

import styled from "styled-components";
import NestedTitle from "../../shared/titler/NestedTitle";
import StacksGrid from "./StacksGrid";
import useScrollData from "../../../store/useScrollData";

const SectionTwo = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #000;
  border-top: 5px solid #fff;
`;

const SectionSecond = () => {
  const section1Ref = useRef<HTMLElement | null>(null);

  const { changeFirst } = useScrollData();

  useEffect(() => {
    changeFirst(section1Ref.current!.getBoundingClientRect().top, section1Ref);
  }, [changeFirst]);

  return (
    <SectionTwo id="section-second" ref={section1Ref}>
      <NestedTitle
        bigTitle={"기술 스택 및 도구"}
        english={"Technic Stack"}
        details={"아래와 같은 기술 스택들을 사용할 수 있습니다."}
      />
      <StacksGrid />
    </SectionTwo>
  );
};

export default SectionSecond;

import React from "react";

import styled from "styled-components";
import NestedTitle from "../../shared/titler/NestedTitle";
import StacksGrid from "./StacksGrid";

const SectionTwo = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #000;
  border-top: 5px solid #fff;
`;

const SectionSecond = () => {
  return (
    <SectionTwo id="section-second">
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

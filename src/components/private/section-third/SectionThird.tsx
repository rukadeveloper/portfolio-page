import React from "react";

import styled from "styled-components";
import NestedTitle from "../../shared/titler/NestedTitle";
import CoreList from "./CoreList";

const SectionThree = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #000;
  border-top: 2px solid #fff;
`;

const SectionThird = () => {
  return (
    <SectionThree>
      <NestedTitle
        bigTitle="핵심 역량 및 발전"
        english="Core Competencies"
        details="개발 시 다음과 같은 핵심 역량을 사용하여 회사의 발전에 기여합니다."
      />
      <CoreList />
    </SectionThree>
  );
};

export default SectionThird;

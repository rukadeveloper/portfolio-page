import React from "react";

import styled from "styled-components";
import NicoMojiText from "./NicoMojiText";
import GoalText from "./GoalText";

const SectionOne = styled.section`
  &#section-first {
    width: 100%;
    height: 100vh;
    background-color: #000;
  }
`;

const SectionFirst = ({ firstMount }: { firstMount: boolean }) => {
  return (
    <SectionOne id="section-first">
      <NicoMojiText firstMount={firstMount} />
      <GoalText />
    </SectionOne>
  );
};

export default SectionFirst;

import React from "react";

import styled from "styled-components";

const NestTitle = styled.div`
  color: #fff;
  text-align: center;
  padding-top: 4.5rem;
  position: relative;
  h2 {
    font-size: 1.4rem;
  }
  span {
    font-family: "Bruno Ace", sans-serif !important;
    font-size: 3rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 4.3rem;
    opacity: 0.2;
  }
  p {
    padding-top: 2rem;
    font-size: 1.1rem;
    font-family: "Esamanru Light", sans-serif !important;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const NestedTitle = ({
  bigTitle,
  english,
  details,
}: {
  bigTitle: string;
  english: string;
  details: string;
}) => {
  return (
    <NestTitle>
      <h2>{bigTitle}</h2>
      <span>{english}</span>
      <p>{details}</p>
    </NestTitle>
  );
};

export default NestedTitle;

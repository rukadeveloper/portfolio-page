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

  @media screen and (max-width: 860px) {
    span {
      font-size: 2.1rem;
      top: 4.6rem;
    }
  }

  @media screen and (max-width: 600px) {
    span {
      font-size: 1.5rem;
      top: 5.2rem;
    }
  }

  @media screen and (max-width: 430px) {
    span {
      font-size: 1.2rem;
      top: 5.4rem;
    }
    p {
      font-size: 0.95rem;
    }
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

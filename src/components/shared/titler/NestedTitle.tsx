import React from "react";

import styled from "styled-components";

const NestTitle = styled.div`
  color: #fff;
  text-align: center;
  padding-top: 4.5rem;
  padding-bottom: 3.5rem;
  position: relative;
  h2 {
    font-size: 1.4rem;
  }
  span {
    font-family: "Bruno Ace", sans-serif !important;
    font-size: 3rem;
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    top: 4.3rem;
    color: rgba(255, 255, 255, 0.2);
  }
  p {
    padding-top: 2rem;
    font-size: 1.1rem;
    font-family: "Esamanru Light", sans-serif !important;
    color: rgba(255, 255, 255, 0.8);
  }

  @media screen and (max-width: 1150px) {
    span {
      font-size: 2.1rem;
      top: 4.6rem;
    }
  }

  @media screen and (max-width: 825px) {
    span {
      font-size: 1.5rem;
      top: 5.2rem;
    }
  }

  @media screen and (max-width: 580px) {
    span {
      font-size: 1.2rem;
      top: 5.4rem;
    }
    p {
      font-size: 0.95rem;
    }
  }

  @media screen and (max-width: 490px) {
    span {
      font-size: 1rem;
      top: 5.5rem;
    }
    p {
      font-size: 0.85rem;
    }
  }

  @media screen and (max-width: 400px) {
    span {
      font-size: 0.9rem;
      top: 5.6rem;
    }
    p {
      font-size: 0.7rem;
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
      <h2 data-aos="fade-up">{bigTitle}</h2>
      <span data-aos="fade-up">{english}</span>
      {details.length > 0 && <p data-aos="fade-up">{details}</p>}
    </NestTitle>
  );
};

export default NestedTitle;

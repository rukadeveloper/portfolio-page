import React from "react";

import styled from "styled-components";

const NicoMoji = styled.div`
  padding-top: 10rem;
  padding-bottom: 3rem;
  color: #fff;
  font-family: "Nico Moji", sans-serif !important;
  h1 {
    font-size: 3.5rem;
    text-align: center;
    span {
      transform: translateY(-100%);
    }
  }
  h2 {
    font-size: 3.1rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    span {
      transform: translateX(100%);
    }
  }
  h3 {
    font-size: 3.1rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    span {
      transform: translateY(100%);
    }
  }
  h1,
  h2,
  h3 {
    overflow: hidden;
    span {
      display: block;
    }
  }
  &.nico-animation {
    h1 {
      span {
        animation: h1Ani 0.8s forwards;
      }
    }
    h2 {
      span {
        animation: h2Ani 0.8s forwards;
      }
    }
    h3 {
      span {
        animation: h3Ani 0.8s forwards;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    h1 {
      font-size: 3.2rem;
    }
    h2,
    h3 {
      font-size: 2.6rem;
    }
  }

  @keyframes h1Ani {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes h2Ani {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes h3Ani {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const NicoMojiText = ({ firstMount }: { firstMount: boolean }) => {
  return (
    <NicoMoji className={`${firstMount ? "nico-animation" : ""}`}>
      <h1>
        <span>FRONTEND DEVELOPER</span>
      </h1>
      <h2>
        <span>BRAND NEW DESIGN</span>
      </h2>
      <h3>
        <span>KIM SE JOONG</span>
      </h3>
    </NicoMoji>
  );
};

export default NicoMojiText;

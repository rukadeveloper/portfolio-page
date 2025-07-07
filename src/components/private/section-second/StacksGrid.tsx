import React from "react";

import { stacksMocks } from "../../../static/mocks/stacksMocks";

import styled from "styled-components";
import { StackType } from "../../../static/types/stacksTypes";

const StackGrids = styled.ul`
  max-width: 768px;
  height: 500px;
  margin: 0 auto;
  margin-top: 4rem;
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  position: relative;
  z-index: 10;
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 80%;
    height: 200px;
    background-color: #20576d;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 50%;
    filter: blur(90px);
  }
  li {
    background-color: rgba(47, 60, 69, 0.7);
    border-radius: 1rem;
    box-shadow: inset 0px 0px 10px 1px rgba(255, 255, 255, 0.25);
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    justify-content: center;
    align-items: center;
    h2 {
      color: #fff;
      font-size: 1.2rem;
    }
    span {
      color: #fff;
    }
    img {
      width: 45px;
    }
  }

  @media screen and (max-width: 800px) {
    & {
      max-width: 630px;
      li {
        h2 {
          font-size: 1.05rem;
        }
        span {
          font-size: 0.9rem;
        }
      }
    }
  }

  @media screen and (max-width: 660px) {
    max-width: 250px;
    height: 550px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, 150px);
    align-content: center;
    overflow: hidden;
    margin-top: 1rem;
    li {
      &.active {
        border: 4px solid #f5f2ff;
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 50;
      background-image: radial-gradient(
        85% 50% at 50% 50%,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.8) 100%
      );
    }
  }
`;

const StacksGrid = () => {
  return (
    <StackGrids>
      {stacksMocks.map((stacks: StackType, index: number) => (
        <li
          className={`${
            index === Math.ceil(stacksMocks.length / 2) - 1 ? "active" : ""
          }`}
        >
          <h2>{stacks.type}</h2>
          <span>{stacks.detail}</span>
          <img src={stacks.imageUrl} alt={stacks.detail} />
        </li>
      ))}
    </StackGrids>
  );
};

export default StacksGrid;

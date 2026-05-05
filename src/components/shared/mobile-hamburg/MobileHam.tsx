import React, { Dispatch, SetStateAction } from "react";

import styled from "styled-components";

const HamButton = styled.button`
  width: 60px;
  height: 60px;
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  span {
    width: 80%;
    height: 4px;
    background-color: #fff;
    display: block;
  }
  &:hover {
    background-color: rgb(61, 60, 60);
    border-radius: 50%;
  }

  @media screen and (max-width: 1100px) {
    & {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
  }

  @media screen and (max-width: 610px) {
    & {
      span {
        width: 75%;
      }
    }
  }
`;

const MobileHam = ({
  setMobileHeader,
}: {
  setMobileHeader: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <HamButton onClick={() => setMobileHeader(true)}>
      <span></span>
      <span></span>
      <span></span>
    </HamButton>
  );
};

export default MobileHam;

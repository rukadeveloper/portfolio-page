import React from "react";
import styled from "styled-components";

const MainHeader = styled.header`
  width: calc(100% - 2rem);
  position: absolute;
  left: 1rem;
  top: 2rem;
  z-index: 20;
  display: flex;
  gap: 20px;
  a {
    display: inline-block;
    padding: 0.5rem 1rem;
    padding-top: 0.65rem;
    background-color: #000;
    color: #fff;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 1rem;
      width: 0;
      height: 1px;
      background-color: #fff;
      top: calc(100% - 6px);
    }
    &:hover {
      &::after {
        width: calc(100% - 2rem);
        transition: width ease-in-out 1s;
      }
    }
  }
`;

const Header = () => {
  return (
    <MainHeader id="header">
      <a href="https://github.com/rukadeveloper">Github</a>
      <a href="https://github.com/rukadeveloper">Notion</a>
    </MainHeader>
  );
};

export default Header;

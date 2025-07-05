import React from "react";
import styled from "styled-components";

const NavIcon = styled.div`
  &#navbar_icon {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      &:first-child {
        background-color: #ffe100;
      }
      &:nth-child(2) {
        background-color: #0000ff;
      }
      &:last-child {
        background-color: #000;
      }
    }
  }
`;

const NavBarIcon = () => {
  return (
    <NavIcon id="navbar_icon">
      <span></span>
      <span></span>
      <span></span>
    </NavIcon>
  );
};

export default NavBarIcon;

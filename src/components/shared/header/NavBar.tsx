import React from "react";

import styled from "styled-components";
import NavBarIcon from "./NavBarIcon";
import NavBarMenu from "./NavBarMenu";

const Nav = styled.div`
  &#gnb {
    padding: 1.1rem;
    background-color: #fff;
    border-radius: 0.7rem;
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 1100px) {
    &#gnb {
      display: none;
    }
  }
`;

const NavBar = () => {
  return (
    <Nav id="gnb">
      <NavBarIcon />
      <NavBarMenu />
    </Nav>
  );
};

export default NavBar;

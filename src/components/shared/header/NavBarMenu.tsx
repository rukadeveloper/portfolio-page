import React from "react";

import styled from "styled-components";

const NavMenu = styled.nav`
  margin-left: 0.7rem;
  ul {
    display: flex;
    align-items: center;
    li {
      button {
        background-color: transparent;
        border: none;
        color: #000;
        font-family: "Esamanru Light", sans-serif !important;
        font-size: 1rem;
        padding: 0 1rem;
      }
    }
  }
`;

const NavBarMenu = () => {
  return (
    <NavMenu>
      <ul>
        <li>
          <button>사용 기술</button>
        </li>
        <li>
          <button>경력</button>
        </li>
        <li>
          <button>교육</button>
        </li>
        <li>
          <button>프로젝트</button>
        </li>
        <li>
          <button>블로그</button>
        </li>
        <li>
          <button>사전 인터뷰</button>
        </li>
      </ul>
    </NavMenu>
  );
};

export default NavBarMenu;

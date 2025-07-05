import React from "react";

import styled from "styled-components";

const Logo = styled.h1`
  &.logo {
    img {
      width: 100px;
    }
  }
`;

const LogoLink = () => {
  return (
    <Logo className="logo">
      <img src="/images/logo.png" alt="logo" />
    </Logo>
  );
};

export default LogoLink;

import React from "react";

import styled from "styled-components";
import PageInner from "../page-inner/PageInner";
import LogoLink from "../logo/LogoLink";
import NavBar from "./NavBar";
import ContactButton from "./ContactButton";

const Header = styled.header`
  height: 100px;
`;

const TranspHeader = () => {
  return (
    <Header>
      <PageInner isHeader={true}>
        <LogoLink />
        <NavBar />
        <ContactButton />
      </PageInner>
    </Header>
  );
};

export default TranspHeader;

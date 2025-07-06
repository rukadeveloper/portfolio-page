import React from "react";

import styled from "styled-components";
import PageInner from "../page-inner/PageInner";
import LogoLink from "../logo/LogoLink";
import NavBar from "./NavBar";
import ContactButton from "./ContactButton";
import MobileHam from "../mobile-hamburg/MobileHam";

const Header = styled.header`
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const TranspHeader = () => {
  return (
    <Header>
      <PageInner isHeader={true}>
        <LogoLink />
        <NavBar />
        <ContactButton />
        <MobileHam />
      </PageInner>
    </Header>
  );
};

export default TranspHeader;

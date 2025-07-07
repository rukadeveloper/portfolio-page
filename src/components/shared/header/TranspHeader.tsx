import React, { useState } from "react";

import styled from "styled-components";
import PageInner from "../page-inner/PageInner";
import LogoLink from "../logo/LogoLink";
import NavBar from "./NavBar";
import ContactButton from "./ContactButton";
import MobileHam from "../mobile-hamburg/MobileHam";
import MobileScrollMenu from "../mobile-scroll-menu/MobileScrollMenu";

const Header = styled.header`
  height: 100px;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
`;

const TranspHeader = () => {
  const [mobileHeader, setMobileHeader] = useState(false);

  return (
    <Header>
      <PageInner isHeader={true}>
        <LogoLink />
        <NavBar />
        <ContactButton />
        <MobileHam setMobileHeader={setMobileHeader} />
        <MobileScrollMenu
          mobileHeader={mobileHeader}
          setMobileHeader={setMobileHeader}
        />
      </PageInner>
    </Header>
  );
};

export default TranspHeader;

import React from "react";

import styled from "styled-components";

const PInner = styled.div`
  &.page-inner {
    max-width: 90%;
    margin: 0 auto;
    height: 100%;
  }
  &.header-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function PageInner({
  children,
  isHeader,
}: {
  children: React.ReactNode;
  isHeader: boolean;
}) {
  return (
    <PInner className={`page-inner ${isHeader ? "header-flex" : ""}`}>
      {children}
    </PInner>
  );
}

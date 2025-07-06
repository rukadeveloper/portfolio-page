import React from "react";

import styled from "styled-components";

const CB = styled.button`
  width: 7rem;
  padding: 0.6rem 0;
  padding-bottom: 0.7rem;
  border: none;
  border-radius: 30px;
  background-color: #fff;
  font-family: "Neuton", sans-serif !important;
  font-size: 1.1rem;
  cursor: pointer;
`;

const ContactButton = () => {
  return <CB>Contact</CB>;
};

export default ContactButton;

import React from "react";

import styled from "styled-components";
import NestedTitle from "../../shared/titler/NestedTitle";

const SectionEight = styled.section`
  background-color: #000;
`;

const LastLink = styled.ul`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 2rem;
  li {
    width: 220px;
    padding: 1rem 0;
    background-color: rgba(47, 60, 69, 0.7);
    border-radius: 1rem;
    font-family: "SUIT", sans-serif !important;
    a {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }

  @media screen and (max-width: 720px) {
    li {
      width: 180px;
    }
  }

  @media screen and (max-width: 600px) {
    li {
      width: 140px;
      h2 {
        font-size: 0.9rem;
      }
      span {
        font-size: 0.85rem;
      }
      img {
        width: 26px;
      }
    }
  }

  @media screen and (max-width: 490px) {
    & {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const SectionEighth = () => {
  return (
    <SectionEight>
      <NestedTitle
        bigTitle="감사합니다."
        english="Thank you"
        details="앞으로 뛰어난 개발자가 되겠습니다"
      />
      <LastLink>
        <li>
          <a href="https://github.com/rukadeveloper">
            <h2>깃허브 홈페이지</h2>
            <span>Github</span>
            <img src="/images/icons/github.png" alt="github" width={36} />
          </a>
        </li>
      </LastLink>
    </SectionEight>
  );
};

export default SectionEighth;

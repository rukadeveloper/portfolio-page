import React, { useEffect, useRef } from "react";

import styled from "styled-components";

import NestedTitle from "../../shared/titler/NestedTitle";
import PageInner from "../../shared/page-inner/PageInner";

import useScrollData from "../../../store/useScrollData";

const SectionFour = styled.section`
  background-color: #000;
`;

const SectionCareerOrEducation = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const CareerAndEducation = styled.div`
  h2 {
    text-align: center;
    display: flex;
    align-items: center;
    padding-bottom: 3rem;
    &::before,
    &::after {
      content: "";
      flex: 1;
      height: 1px;
      line-height: 2px;
      background-color: #595959;
    }
    span {
      font-family: "SUIT", sans-serif !important;
      color: #fff;
      padding: 0 6px;
    }
  }

  @media screen and (max-width: 550px) {
    h2 {
      &::before,
      &::after {
        content: none;
      }
    }
  }
`;

const AgingListWrapper = styled.div``;

const AgingList = styled.div`
  color: #fff;
  font-family: "SUIT", sans-serif !important;
  display: flex;
  padding-bottom: 2rem;
  h3 {
    padding-left: 2rem;
    position: relative;
    display: inline-block;
    margin-right: 30px;
    font-weight: 700;
    &::before {
      content: "";
      position: absolute;
      width: 9px;
      height: 9px;
      background-color: #8d6aff;
      top: 3px;
      left: 0;
      border-radius: 50%;
    }
  }

  @media screen and (max-width: 550px) {
    & {
      flex-direction: column;
      h3 {
        padding-bottom: 1.7rem;
      }
    }
  }

  @media screen and (max-width: 350px) {
    & {
      h3 {
        font-size: 0.9rem;
        padding-bottom: 1.3rem;
        &::before {
          width: 6px;
          height: 6px;
        }
      }
    }
  }
`;

const AgingListInfo = styled.div`
  font-weight: 100;
  display: flex;
  flex-direction: column;
  span,
  p {
    display: inline-block;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 550px) {
    & {
      margin-left: 2rem;
    }
  }

  @media screen and (max-width: 350px) {
    & {
      span,
      p {
        margin-bottom: 0.7rem;
        font-size: 0.9rem;
      }
    }
  }
`;

const LanguageCard = styled.ul`
  display: flex;
  gap: 1rem;
  li {
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 350px) {
    li {
      width: 30px;
      height: 30px;
    }
  }
`;

const SectionFourth = () => {
  const section2Ref = useRef<HTMLDivElement | null>(null);
  const section3Ref = useRef<HTMLDivElement | null>(null);

  const { changeSecond, changeThird } = useScrollData();

  useEffect(() => {
    changeSecond(section2Ref.current!.getBoundingClientRect().top, section2Ref);
    changeThird(section3Ref.current!.getBoundingClientRect().top, section3Ref);
  }, [changeSecond, changeThird]);

  return (
    <SectionFour>
      <SectionCareerOrEducation ref={section2Ref}>
        <NestedTitle bigTitle="경력" english="Career" details="" />
        <CareerAndEducation>
          <PageInner isHeader={false}>
            <h2>
              <span>업무 경험</span>
            </h2>
            <AgingListWrapper>
              <AgingList>
                <h3>2023.04 ~ 2023.08</h3>
                <AgingListInfo>
                  <span>(주) 퍼퓸홀릭</span>
                  <p>자사몰 마케팅 업무 및 웹 퍼블리싱</p>
                  <LanguageCard>
                    <li>
                      <img src="/images/icons/cafe24.png" alt="cafe24" />
                    </li>
                    <li>
                      <img src="/images/icons/html.png" alt="html" />
                    </li>
                    <li>
                      <img src="/images/icons/css.jpg" alt="css" />
                    </li>
                  </LanguageCard>
                </AgingListInfo>
              </AgingList>
              <AgingList>
                <h3>2025.01 ~ 2025.07</h3>
                <AgingListInfo>
                  <span>(주) 행복 파트너</span>
                  <p>금융 페이지 프론트엔드 및 백엔드 작업</p>
                  <LanguageCard>
                    <li>
                      <img src="/images/icons/php.png" alt="php" />
                    </li>
                    <li>
                      <img src="/images/icons/html.png" alt="html" />
                    </li>
                    <li>
                      <img src="/images/icons/css.jpg" alt="css" />
                    </li>
                    <li>
                      <img src="/images/icons/sb.png" alt="spring-boot" />
                    </li>
                    <li>
                      <img src="/images/icons/mysql.jpeg" alt="mysql" />
                    </li>
                  </LanguageCard>
                </AgingListInfo>
              </AgingList>
            </AgingListWrapper>
          </PageInner>
        </CareerAndEducation>
      </SectionCareerOrEducation>
      <SectionCareerOrEducation ref={section3Ref}>
        <NestedTitle bigTitle="교육" english="Education" details="" />
        <CareerAndEducation>
          <PageInner isHeader={false}>
            <h2>
              <span>교육 경험</span>
            </h2>
            <AgingListWrapper>
              <AgingList>
                <h3>2023.10 ~ 2024.03</h3>
                <AgingListInfo>
                  <span>그린 컴퓨터 아카데미 (산업특화대응훈련)</span>
                  <p>React.js, Node.js를 활용한 프로젝트형 프론트엔드 개발</p>
                  <LanguageCard>
                    <li>
                      <img
                        src="/images/icons/react-icon.png"
                        alt="react-icon"
                      />
                    </li>
                    <li>
                      <img src="/images/icons/html.png" alt="html" />
                    </li>
                    <li>
                      <img src="/images/icons/css.jpg" alt="css" />
                    </li>
                    <li>
                      <img src="/images/icons/nodejs.png" alt="node-js" />
                    </li>
                  </LanguageCard>
                </AgingListInfo>
              </AgingList>
              <AgingList>
                <h3>2024.08 ~ 2024.12</h3>
                <AgingListInfo>
                  <span>슈퍼코딩 프로젝트</span>
                  <p>React.js, Spring Boot를 활용한 프로젝트형 풀스택 개발</p>
                  <LanguageCard>
                    <li>
                      <img
                        src="/images/icons/react-icon.png"
                        alt="react-icon"
                      />
                    </li>
                    <li>
                      <img src="/images/icons/html.png" alt="html" />
                    </li>
                    <li>
                      <img src="/images/icons/css.jpg" alt="css" />
                    </li>
                    <li>
                      <img src="/images/icons/sb.png" alt="spring-boot" />
                    </li>
                  </LanguageCard>
                </AgingListInfo>
              </AgingList>
            </AgingListWrapper>
          </PageInner>
        </CareerAndEducation>
      </SectionCareerOrEducation>
    </SectionFour>
  );
};

export default SectionFourth;

import React from "react";

import styled from "styled-components";
import NestedTitle from "../../shared/titler/NestedTitle";
import PageInner from "../../shared/page-inner/PageInner";

const SectionFive = styled.section`
  background-color: #000;
`;

const Projects = styled.div`
  padding-bottom: 3rem;
`;

const ProjectsWrapper = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  li {
    width: 240px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #181818;
    font-family: "SUIT", sans-serif !important;
    h3 {
      color: #fff;
      padding: 1rem 1rem 0.8rem 1rem;
    }
    span {
      color: #fff;
      display: block;
      padding: 0 1rem;
      padding-bottom: 2rem;
      font-size: 0.85rem;
      font-weight: 200;
    }
  }

  @media screen and (max-width: 900px) {
    li {
      width: 180px;
      h3 {
        font-size: 0.9rem;
      }
      span {
        font-size: 0.75rem;
      }
    }
  }

  @media screen and (max-width: 700px) {
    & {
      flex-direction: column;
      align-items: center;
      li {
        width: 240px;
      }
    }
  }
`;

const ProjectsImg = styled.div`
  width: 100%;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 900px) {
    & {
      height: 160px;
    }
  }
`;

const SectionFifth = () => {
  return (
    <SectionFive>
      <NestedTitle
        bigTitle="참여 프로젝트"
        english="Projects"
        details="사이드 프로젝트 & 회사에서 참여한 프로젝트들을 소개합니다"
      />
      <Projects>
        <PageInner isHeader={false}>
          <ProjectsWrapper>
            <li>
              <ProjectsImg>
                <img
                  src="/images/projects/thumbnail_01.png"
                  alt="thumbnail_1"
                />
              </ProjectsImg>
              <h3>Baseball Comics</h3>
              <span>베이스볼 코믹스</span>
            </li>
            <li>
              <ProjectsImg>
                <img
                  src="/images/projects/thumbnail_02.png"
                  alt="thumbnail_2"
                />
              </ProjectsImg>
              <h3>안심 근로자 대출</h3>
              <span>근로자들을 위한 대출 사이트!</span>
            </li>
            <li>
              <ProjectsImg>
                <img
                  src="/images/projects/thumbnail_03.png"
                  alt="thumbnail_3"
                />
              </ProjectsImg>
              <h3>자동차 담보 대출</h3>
              <span>자동차 담보로 대출자들을 위한 사이트!</span>
            </li>
          </ProjectsWrapper>
        </PageInner>
      </Projects>
    </SectionFive>
  );
};

export default SectionFifth;

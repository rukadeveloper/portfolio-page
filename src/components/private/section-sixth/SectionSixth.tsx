import React from "react";

import styled from "styled-components";
import NestedTitle from "../../shared/titler/NestedTitle";
import PageInner from "../../shared/page-inner/PageInner";

const SectionSix = styled.section`
  background-color: #000;
`;

const Velog = styled.div``;

const VelogWrapper = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  li {
    width: 260px;
    a {
      display: block;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media screen and (max-width: 960px) {
    li {
      width: 200px;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      flex-direction: column;
      align-items: center;
      li {
        width: 300px;
      }
    }
  }
`;

const BlogInfo = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.79);
  color: #fff;
  font-family: "SUIT", sans-serif !important;
  padding: 1.5rem 1rem 1rem 1rem;
  h2 {
    padding-bottom: 1.1rem;
  }
  span {
    font-size: 0.9rem;
    font-weight: 200;
    display: block;
    padding-bottom: 1rem;
  }

  @media screen and (max-width: 960px) {
    h2 {
      font-size: 0.85rem;
    }
    span {
      font-size: 0.8rem;
    }
  }
`;

const SectionSixth = () => {
  return (
    <SectionSix>
      <NestedTitle
        bigTitle="테크 블로그"
        english="Tech Blog"
        details="문제의 해결 과정을 제시합니다."
      />
      <Velog>
        <PageInner isHeader={false}>
          <VelogWrapper>
            <li>
              <a href="https://velog.io/@cotasi135/React-basic-0707">
                <img src={"images/tech_blog/thumbnail.png"} alt="thumbnail" />
                <BlogInfo>
                  <h2>[React] React.js의 기본 😘</h2>
                  <span>작성자 rukadeveloper</span>
                  <span>2025.07.05</span>
                </BlogInfo>
              </a>
            </li>
            <li>
              <a href="https://velog.io/@cotasi135/create-react-0708">
                <img src={"images/tech_blog/thumbnail.png"} alt="thumbnail" />
                <BlogInfo>
                  <h2>[React] React App 생성하기</h2>
                  <span>작성자 rukadeveloper</span>
                  <span>2025.07.07</span>
                </BlogInfo>
              </a>
            </li>
            <li>
              <a href="https://velog.io/@cotasi135/react-component-0710">
                <img src={"images/tech_blog/thumbnail.png"} alt="thumbnail" />
                <BlogInfo>
                  <h2>[React] 리액트 컴포넌트</h2>
                  <span>작성자 rukadeveloper</span>
                  <span>2025.07.08</span>
                </BlogInfo>
              </a>
            </li>
          </VelogWrapper>
        </PageInner>
      </Velog>
    </SectionSix>
  );
};

export default SectionSixth;

import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import NestedTitle from "../../shared/titler/NestedTitle";
import PageInner from "../../shared/page-inner/PageInner";
import { cn } from "../../../libs/utils";
import useScrollData from "../../../store/useScrollData";

const SectionSeven = styled.section`
  background-color: #000;
`;

const AccordionWrapper = styled.div`
  padding-bottom: 2rem;
`;

const AccordionMain = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    display: flex;
    flex-direction: column;
    width: 460px;
    button {
      background-color: rgb(42, 42, 42);
      cursor: pointer;
      border: none;
      width: 100%;
      padding: 0.6rem 1.2rem;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      color: #fff;
      font-family: "SUIT", sans-serif !important;
      font-size: 1rem;
      margin-bottom: 1rem;
      &.active {
        background-color: #fff;
        span {
          color: #000;
        }
      }
      span {
        &:first-child {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    li {
      width: 360px;
      button {
        span {
          &:first-child {
            font-size: 1.25rem;
          }
          &:last-child {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
`;

const OpenContent = styled.p`
  color: #fff;
  padding: 0;
  font-family: "SUIT", sans-serif !important;
  font-weight: 300;
  font-size: 0.9rem;
  line-height: 1.15;
  height: 0;
  overflow: hidden;
  transition: height ease-in-out 0.6s;
  &.open {
    height: 115px;
    padding: 0.8rem;
    padding-top: 0;
  }
`;

const SectionSeventh = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const section6Ref = useRef<HTMLElement | null>(null);

  const { changeSix } = useScrollData();

  useEffect(() => {
    changeSix(section6Ref.current!.getBoundingClientRect().top, section6Ref);
  }, [changeSix]);

  return (
    <SectionSeven ref={section6Ref}>
      <NestedTitle
        bigTitle="사전 인터뷰 질문"
        english="PreInterview"
        details="인터뷰를 대비한 사전 질문에 대해 답합니다."
      />
      <AccordionWrapper>
        <PageInner isHeader={false}>
          <AccordionMain>
            <li>
              <button
                className={cn(openIdx === 0 && "active")}
                onClick={() => {
                  setOpenIdx(0);
                }}
              >
                <span>Q</span>
                <span>자신의 강점 및 약점은 무엇이라 생각하는지?</span>
              </button>
              <OpenContent className={cn(openIdx === 0 && "open")}>
                저의 강점은 새로운 기술에 대한 열린 태도라고 생각합니다. <br />
                문제 해결력 및 수학에 대한 흥미를 통한 논리적 사고 능력도 <br />
                그 중 하나입니다. 하지만 디테일한 문제 해결력에 <br />
                대해서는 많이 부족합니다.
                <br />
                이를 보완하기 위해 팀원들과 서로 협업하는 시간을 <br />
                많이 가지기 위해 노력합니다.
              </OpenContent>
            </li>
            <li>
              <button
                className={cn(openIdx === 1 && "active")}
                onClick={() => {
                  setOpenIdx(1);
                }}
              >
                <span>Q</span>
                <span>주로 사용하는 프레임워크는 무엇이며 그 이유?</span>
              </button>
              <OpenContent className={cn(openIdx === 1 && "open")}>
                저는 React.js를 주로 사용합니다 <br />
                직접 여러 프로젝트에서 실제로 사용해보면서 컴포넌트 기반의{" "}
                <br />
                개발 방식과 효율적인 상태 관리 <br />
                풍부한 생태계의 장점을 많이 체감했기 때문입니다. <br />
                사이드 프로젝트에서 REST API와 연동해 데이터 흐름을 관리하고{" "}
                <br />
                Hook을 통해 성능 최적화 해본 경험도 있습니다
              </OpenContent>
            </li>
          </AccordionMain>
        </PageInner>
      </AccordionWrapper>
    </SectionSeven>
  );
};

export default SectionSeventh;

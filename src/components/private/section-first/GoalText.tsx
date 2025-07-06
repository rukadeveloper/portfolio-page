import React from "react";

import styled from "styled-components";

const Goal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: #fff;
    display: block;
    text-align: center;
    font-size: 2.6rem;
    margin-bottom: 1.1rem;
    br {
      display: none;
    }
  }
  p {
    color: rgba(255, 255, 255, 0.4);
    text-align: center;
    font-size: 1.3rem;
    padding-top: 1.1rem;
    padding-bottom: 2.4rem;
  }

  @media screen and (max-width: 1100px) {
    span {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.15rem;
    }
  }
`;

const GoalText = () => {
  return (
    <Goal>
      <span>
        크로스 브라우징과
        <br /> 사용자 기반의 경험을 바탕으로
      </span>
      <span>
        모두를 만족시키고 성장할 수 있는 <br />
        어플리케이션을 만듭니다.
      </span>
      <p>디자이너와 개발자적인 측면에서 컨텐츠를 만듭니다.</p>
      <img src="/images/logo.png" alt="logo_bigger" width={160} />
    </Goal>
  );
};

export default GoalText;

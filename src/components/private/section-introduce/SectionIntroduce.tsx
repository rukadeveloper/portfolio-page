import React from "react";

import styled from "styled-components";

const Introduce = styled.section`
  width: 100%;
  background-color: #000;
  border-top: 1px solid #fff;
  p {
    font-family: "Dotum Medium", sans-serif !important;
    font-size: 1.3rem;
    color: #fff;
    line-height: 1.4;
    align-self: start;
    margin-bottom: 1.9rem;
    span {
      display: inline-block;
      color: #000;
      background-color: #1fffc3;
    }
    br {
      display: none;
    }
  }

  @media screen and (max-width: 900px) {
    p {
      font-size: 1.15rem;
    }
  }
`;

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  > span {
    color: #fff;
    display: block;
    text-align: center;
    font-family: "Noto Sans KR", sans-serif !important;
    margin-bottom: 2.6rem;
    b {
      display: inline-block;
      background-color: #fff;
      color: #000;
      padding: 0.3rem;
    }
  }
  > img {
    display: inline-block;
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 900px) {
    max-width: 600px;
  }

  @media screen and (max-width: 600px) {
    max-width: 340px;
  }
`;

const ProfileWrapper = styled.div`
  margin: 4rem 0;
  position: relative;
  img {
    width: 150px;
  }
  > h1 {
    font-family: "Dotum Bold", sans-serif !important;
    font-size: 2.4rem;
    color: #fff;
    position: absolute;
    bottom: -30px;
    left: 0;
    right: 0;
    text-align: center;
  }
`;

const SectionIntroduce = () => {
  return (
    <Introduce>
      <Wrapper>
        <ProfileWrapper>
          <img src="/KakaoTalk_Photo_2025-07-14-18-55-26.jpeg" alt="profile" />
          <h1>Introduce</h1>
        </ProfileWrapper>
        <p>
          Web App Frontend 개발자로써의 여러 경험이 있습니다.
          <br /> 회사에서는 <span>PHP, CSS, Javascript, Spring Boot</span>를
          <br /> 사용하여 서비스를 개발하면서 확장성이 높은 FE 아키텍쳐를 위해
          항상 고민합니다. (주) 퍼퓸홀릭에서의 쇼핑몰 퍼블리싱 경험을 시작으로,
          <br /> 현재는 (주) 행복 파트너에서 금융 랜딩 페이지 서비스 개발에
          참여하고 있습니다.
        </p>
        <p>
          올 라운더 개발자로써 기획부터 디자인, 개발까지 관여하고 있습니다.{" "}
          <br />
          일례로, 여러 폰트 디자인을 고민하며 자유롭게 오픈소스 폰트들을 <br />
          레이아웃에 구성하여 표현하는 능력을 가지고 있습니다.
        </p>
        <p>
          여러 팀 프로젝트와 개인 프로젝트에 참여하면서 다양한 개발 경험을
          즐기고 있습니다. <br /> 현재 개발하면서 배웠던 경험들과 느낀점 들을
          블로그에 포스팅하고 있습니다. <br /> 트렌드가 다양하게 바뀌는
          프론트엔드 환경에서 <br />
          살아남기 위해 여러 프레임워크들을 공부함으로써 뉴 트렌드에 대비합니다.
        </p>
        <p>
          백엔드와의 협업을 위해 백엔드 분야의
          <span>Java, Spring, MySQL, Oracle</span> 등을 공부하고 있습니다.
        </p>
        <p>
          여러 부트캠프 교육을 통해 실무에 필요한 기술들을 교육받았습니다.{" "}
          <br />
          특히, 팀원들과 협업하면서 능동적이고 적극적인 커뮤니케이션으로 문제
          해결 능력을 키웠습니다.
        </p>
        <p>
          이를 바탕으로 더 좋은 프론트엔드 개발자가 되기 위해 항상 고민합니다.
        </p>
        <span>
          Last Updated By <b>2025.07.17</b>
        </span>
        <img src="/Lucadeveloper.png" alt="scripts" width={120} />
      </Wrapper>
    </Introduce>
  );
};

export default SectionIntroduce;

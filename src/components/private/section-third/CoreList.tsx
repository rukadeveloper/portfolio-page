import React from "react";

import styled from "styled-components";

const CoreLists = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  li {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    h2,
    p {
      color: #fff;
    }
    h2 {
      padding-top: 1rem;
      font-family: "SUIT", sans-serif !important;
      font-weight: 700;
      font-size: 1.3rem;
      padding-bottom: 1.3rem;
    }
    p {
      font-family: "SUIT", sans-serif !important;
      font-weight: 200;
      line-height: 1.25;
      font-size: 0.95rem;
    }
  }
`;

const CoreThumbnail = styled.div`
  width: 300px;
  aspect-ratio: 1 / 1;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const coreMocks = [
  {
    imageUrl: "/images/competencies/core_01.png",
    h2: "모던한 프론트엔드 개발",
    p: (
      <p>
        React.js를 통한 모던한 프론트엔드
        <br />
        개발 및 Javascript, Typescript
        <br />에 능숙하며, 핵심적인 React Library에
        <br />
        대한 경험이 풍부합니다.
      </p>
    ),
  },
  {
    imageUrl: "/images/competencies/core_02.png",
    h2: "웹 사이트 최적화",
    p: (
      <p>
        웹 사이트 개발 및 유지 보수를 통해
        <br />웹 사이트를 최적화 시킵니다.
      </p>
    ),
  },
  {
    imageUrl: "/images/competencies/core_03.png",
    h2: "커뮤니케이션 및 협업",
    p: (
      <p>
        Github, Jira, Confluence를 이용한
        <br />
        효율적인 협업 경험이 있습니다.
      </p>
    ),
  },
];

const CoreList = () => {
  return (
    <CoreLists>
      {coreMocks.map((core) => (
        <li>
          <CoreThumbnail>
            <img src={core.imageUrl} alt={core.h2} />
          </CoreThumbnail>
          <h2>{core.h2}</h2>
          {core.p}
        </li>
      ))}
    </CoreLists>
  );
};

export default CoreList;

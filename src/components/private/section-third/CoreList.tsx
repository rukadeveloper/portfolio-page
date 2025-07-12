import React from "react";

import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

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

  @media screen and (max-width: 1080px) {
    li {
      h2 {
        font-size: 1.2rem;
        padding-bottom: 1rem;
      }
      p {
        font-size: 0.85rem;
      }
    }
  }

  @media screen and (max-width: 850px) {
    li {
      padding-left: 1rem;
      padding-right: 1rem;
      p {
        font-size: 0.8rem;
      }
    }
  }

  @media screen and (max-width: 700px) {
    & {
      display: none;
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

  @media screen and (max-width: 1080px) {
    & {
      width: 230px;
    }
  }

  @media screen and (max-width: 850px) {
    & {
      width: 190px;
    }
  }

  @media screen and (max-width: 700px) {
    & {
      width: 100%;
    }
  }
`;

const CoreSwiper = styled.div`
  display: none;
  max-width: 300px;
  height: 600px;
  margin: 0 auto;
  margin-top: 2rem;
  overflow: hidden;
  .swiper {
    background-color: #181818;
    overflow: visible;
    .swiper-wrapper {
      .swiper-slide {
        padding: 1rem;
        h2 {
          color: #fff;
          font-family: "SUIT", sans-serif !important;
          font-size: 1.5rem;
          padding-top: 1rem;
          padding-bottom: 1.2rem;
          font-weight: 800;
        }
        p {
          color: #fff;
          font-family: "SUIT", sans-serif !important;
          font-weight: 200;
          line-height: 1.2;
          font-size: 0.88rem;
        }
      }
    }
    .swiper-button-next,
    .swiper-button-prev {
      &::after {
        font-size: 0;
      }
    }
    .swiper-button-prev {
      width: 35px;
      height: 35px;
      background-color: #fff;
      top: auto;
      bottom: -45px;
      left: auto;
      right: 45px;
      &::after {
        display: block;
        width: 25px;
        height: 25px;
        background: url("/images/competencies/left-button.png") no-repeat
          center/90%;
        transform: rotate(180deg);
      }
    }
    .swiper-button-next {
      width: 35px;
      height: 35px;
      background-color: #fff;
      top: auto;
      bottom: -45px;
      right: 0;
      left: auto;
      &::after {
        display: block;
        width: 25px;
        height: 25px;
        background: url("/images/competencies/left-button.png") no-repeat
          center/90%;
      }
    }
  }
  @media screen and (max-width: 700px) {
    & {
      display: block;
    }
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
    <>
      <CoreLists>
        {coreMocks.map((core) => (
          <li key={core.h2}>
            <CoreThumbnail>
              <img src={core.imageUrl} alt={core.h2} />
            </CoreThumbnail>
            <h2>{core.h2}</h2>
            {core.p}
          </li>
        ))}
      </CoreLists>
      <CoreSwiper>
        <Swiper
          loop={true}
          navigation={{ hideOnClick: false }}
          modules={[Navigation]}
        >
          {coreMocks.map((core) => (
            <SwiperSlide key={core.h2}>
              <CoreThumbnail>
                <img src={core.imageUrl} alt={core.h2} />
              </CoreThumbnail>
              <h2>{core.h2}</h2>
              {core.p}
            </SwiperSlide>
          ))}
        </Swiper>
      </CoreSwiper>
    </>
  );
};

export default CoreList;

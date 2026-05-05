import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import NestedTitle from "../../shared/titler/NestedTitle";
import PageInner from "../../shared/page-inner/PageInner";

import useScrollData from "../../../store/useScrollData";
import { projectsMocks } from "../../../static/mocks/projectsMocks";

import { IoCloseOutline } from "react-icons/io5";

const SectionFive = styled.section`
  background-color: #000;
`;

const Projects = styled.div`
  padding-bottom: 3rem;
`;

const ProjectsSliderWrapper = styled.div`
  .swiper {
    padding: 20px 0 50px 0;
    overflow: hidden;
  }

  .swiper-slide {
    cursor: pointer;
    width: 300px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #181818;
    font-family: "SUIT", sans-serif !important;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 30px rgba(78, 169, 255, 0.3);
    }

    a {
      display: block;
      text-decoration: none;

      h3 {
        color: #fff;
        padding: 1rem 1rem 0.8rem 1rem;
        font-size: 1.1rem;
        font-weight: 600;
        transition: color 0.3s ease;
      }
      span {
        color: #ccc;
        display: block;
        padding: 0 1rem;
        padding-bottom: 2rem;
        font-size: 0.85rem;
        font-weight: 200;
        line-height: 1.4;
        transition: color 0.3s ease;
      }

      &:hover {
        h3 {
          color: #4ea9ff;
        }
        span {
          color: #fff;
        }
      }
    }
  }

  .swiper-pagination {
    bottom: 10px;
  }

  .swiper-pagination-bullet {
    background-color: #4ea9ff;
    opacity: 0.5;
    width: 10px;
    height: 10px;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    transform: scale(1.2);
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #4ea9ff;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 50%;
    width: 44px;
    height: 44px;
    margin-top: -22px;
    transition: all 0.3s ease;

    &:after {
      font-size: 18px;
      font-weight: 600;
    }

    &:hover {
      background: rgba(78, 169, 255, 0.2);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 900px) {
    .swiper-slide {
      width: 250px;

      a {
        h3 {
          font-size: 0.9rem;
        }
        span {
          font-size: 0.75rem;
        }
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      width: 38px;
      height: 38px;
      margin-top: -19px;

      &:after {
        font-size: 16px;
      }
    }
  }

  @media screen and (max-width: 700px) {
    .swiper-slide {
      width: 280px;
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    .swiper {
      padding: 20px 10px 50px 10px;
    }

    .swiper-slide {
      width: 260px;
    }
  }
`;

const ProjectsImg = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const ProjectModal = styled.div`
  position: fixed;
  width: 850px;
  height: 800px;
  background-color: #fff;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 500;
  border-radius: 10px;
  overflow: hidden;
  > button {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 500;
    cursor: pointer;
  }

  @media screen and (max-width: 870px) {
    width: 650px;
  }

  @media screen and (max-width: 680px) {
    width: 450px;
    overflow-y: auto;
  }

  @media screen and (max-width: 480px) {
    width: 330px;
    height: 500px;
  }
`;

const ProjectHeader = styled.div`
  font-family: "SUIT", sans-serif !important;
  background-color: #4ea9ff;
  h2 {
    color: black;
    font-size: 1.1rem;
    text-align: center;
    font-weight: 800;
    padding-top: 2.2rem;
  }
  h3 {
    text-align: center;
    padding-top: 0.9rem;
  }
  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    padding-bottom: 20px;
    li {
      color: #fff;
      background-color: #000;
      padding: 0.3rem 0.5rem;
      font-size: 0.885rem;
      border-radius: 6px;
    }
  }
  span {
    display: block;
    text-align: center;
    padding-bottom: 2.6rem;
  }
`;

const ProjectBody = styled.div`
  font-family: "SUIT", sans-serif !important;
  max-width: 80%;
  margin: 0 auto;
  h1 {
    padding-top: 1.1rem;
    padding-bottom: 1.8rem;
    text-align: center;
    line-height: 1.6;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    margin-bottom: 20px;
  }
  dl {
    margin-bottom: 26px;
    dd {
      padding-left: 20px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 6px;
        height: 6px;
        background-color: black;
        border-radius: 50%;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto 0;
      }
    }
    dt {
      padding-left: 20px;
      font-size: 0.8rem;
      padding-top: 10px;
      font-weight: 200;
    }
    &.languages {
      display: flex;
      flex-wrap: wrap;
      row-gap: 10px;
      dd {
        width: 100%;
        margin-bottom: 16px;
      }
      dt {
        color: #fff;
        background-color: #4ea9ff;
        padding: 0.5rem;
        margin-right: 10px;
      }
    }
    &.contribution {
      dd,
      dt {
        width: 100%;
      }
      dt {
        background-color: #d9d9d9;
        padding: 0.5rem;
        margin-top: 16px;
        font-weight: 700;
      }
    }
  }
`;

const SectionFifth = () => {
  const section4Ref = useRef<HTMLElement | null>(null);

  const [isModal, setIsModal] = useState({
    is: false,
    idx: 0,
  });

  const { changeFour } = useScrollData();

  const goModal = (e: React.MouseEvent<HTMLAnchorElement>, ixx: number) => {
    e.preventDefault();
    setIsModal({
      is: true,
      idx: ixx,
    });
    document.body.classList.add("dimmed");
  };

  const closeModal = () => {
    setIsModal({ ...isModal, is: false });
    document.body.classList.remove("dimmed");
  };

  useEffect(() => {
    changeFour(section4Ref.current!.getBoundingClientRect().top, section4Ref);
  }, [changeFour]);

  return (
    <SectionFive ref={section4Ref}>
      <NestedTitle
        bigTitle="참여 프로젝트"
        english="Projects"
        details="사이드 프로젝트 & 회사에서 참여한 프로젝트들을 소개합니다"
      />
      <Projects>
        <PageInner isHeader={false}>
          <ProjectsSliderWrapper>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={"auto"}
              centeredSlides={true}
              navigation
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  centeredSlides: true,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 25,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  centeredSlides: false,
                },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper: SwiperType) => console.log(swiper)}
            >
              {projectsMocks.map((pm, ix) => (
                <SwiperSlide key={ix}>
                  <a
                    href={pm.link}
                    onClick={(e) => {
                      goModal(e, ix);
                    }}
                  >
                    <ProjectsImg>
                      <img src={pm.imageUrl} alt="thumbnail_1" />
                    </ProjectsImg>
                    <h3>{pm.subject}</h3>
                    <span>{pm.second_subject}</span>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </ProjectsSliderWrapper>
        </PageInner>
      </Projects>
      {isModal.is &&
        ReactDOM.createPortal(
          <ProjectModal>
            <ProjectHeader>
              <h2>프로젝트 소개</h2>
              <h3>{projectsMocks[isModal.idx].second_subject}</h3>
              <ul>
                {projectsMocks[isModal.idx].modals.tag.map((t) => (
                  <li>{t}</li>
                ))}
              </ul>
              <span>
                {projectsMocks[isModal.idx].modals.startPeriod} ~{" "}
                {projectsMocks[isModal.idx].modals.endPeriod}
              </span>
            </ProjectHeader>
            <ProjectBody>
              <h1>
                {projectsMocks[isModal.idx].modals.details.split("|")[0]}
                <br />
                {projectsMocks[isModal.idx].modals.details.split("|")[1]}
              </h1>
              <dl className="functions">
                <dd>주요 기능</dd>
                {projectsMocks[isModal.idx].modals.functions.map((f, i) => (
                  <dt key={i}>{f}</dt>
                ))}
              </dl>
              <dl className="languages">
                <dd>사용기술 및 언어</dd>
                {projectsMocks[isModal.idx].modals.usedLanguage.map((l, i) => (
                  <dt key={i}>{l}</dt>
                ))}
              </dl>
              <dl className="contribution">
                <dd>작업 기여도</dd>
                {projectsMocks[isModal.idx].modals.contribution.map((d, i) => (
                  <dt key={i}>{d}</dt>
                ))}
              </dl>
              <dl className="trouble-shooting">
                <dd>트러블 슈팅</dd>
                {projectsMocks[isModal.idx].modals.troubleShooting.map(
                  (t, i) => (
                    <dt key={i}>{t}</dt>
                  )
                )}
              </dl>
              <dl className="link">
                <dd>각 링크들</dd>
                <dt>
                  <a href={projectsMocks[isModal.idx].link}>홈페이지 링크</a>
                </dt>
                <dt>
                  <a href={projectsMocks[isModal.idx].figmaLink}>피그마 링크</a>
                </dt>
              </dl>
            </ProjectBody>
            <button onClick={closeModal}>
              <IoCloseOutline size={26} color={"#fff"} />
            </button>
          </ProjectModal>,
          document.getElementById("root")!
        )}
    </SectionFive>
  );
};

export default SectionFifth;

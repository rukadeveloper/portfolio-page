import React, { useEffect, useRef } from "react";

import { stacksMocks } from "../../../static/mocks/stacksMocks";

import styled from "styled-components";
import { StackType } from "../../../static/types/stacksTypes";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const StackGrids = styled.ul`
  max-width: 768px;
  height: 500px;
  margin: 0 auto;
  margin-top: 4rem;
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  position: relative;
  z-index: 10;
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 80%;
    height: 200px;
    background-color: #20576d;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 50%;
    filter: blur(90px);
  }
  li {
    background-color: rgba(47, 60, 69, 0.7);
    border-radius: 1rem;
    box-shadow: inset 0px 0px 10px 1px rgba(255, 255, 255, 0.25);
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    justify-content: center;
    align-items: center;
    h2 {
      color: #fff;
      font-size: 1.2rem;
    }
    span {
      color: #fff;
    }
    img {
      width: 45px;
    }
  }

  @media screen and (max-width: 800px) {
    & {
      max-width: 630px;
      li {
        h2 {
          font-size: 1.05rem;
        }
        span {
          font-size: 0.9rem;
        }
      }
    }
  }

  @media screen and (max-width: 660px) {
    display: none;
  }
`;

const GridSwiper = styled.div`
  &#grid-swiper {
    display: none;
    max-width: 300px;
    height: 500px;
    margin: 0 auto;
    margin-top: 4rem;
    .swiper {
      height: 100%;
      &:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: radial-gradient(
          82.83% 50% at 50% 50%,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.8) 100%
        );
        z-index: 50;
      }
      .swiper-wrapper {
        .swiper-slide {
          background-color: rgba(47, 60, 69, 0.7);
          border-radius: 1rem;
          box-shadow: inset 0px 0px 10px 1px rgba(255, 255, 255, 0.25);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          h2 {
            color: #fff;
            font-size: 1.4rem;
          }
          span {
            color: #fff;
            font-size: 1.1rem;
          }
          img {
            width: 40px;
          }
          &.swiper-slide-active {
            border: 4px solid #f5f2ff;
          }
        }
      }
      .swiper-pagination {
        z-index: 70;
        span {
          cursor: pointer;
          background-color: rgb(187, 179, 254);
        }
      }
    }
  }

  @media screen and (max-width: 660px) {
    &#grid-swiper {
      display: block;
    }
  }
`;

const StacksGrid = () => {
  // 브라우저 resize 대응
  const swiperRef = useRef<SwiperClass | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (swiperRef.current) {
        swiperRef.current.init();
        console.log("Swiper updated due to resize/display change");
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <StackGrids>
        {stacksMocks.map((stacks: StackType, index: number) => (
          <li key={index} data-aos="fade-right">
            <h2>{stacks.type}</h2>
            <span>{stacks.detail}</span>
            <img src={stacks.imageUrl} alt={stacks.detail} />
          </li>
        ))}
      </StackGrids>
      <GridSwiper id="grid-swiper" ref={containerRef}>
        <Swiper
          direction="vertical"
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          onSwiper={(swiper: SwiperClass) => {
            swiperRef.current = swiper;
          }}
        >
          {stacksMocks.map((staks: StackType) => (
            <SwiperSlide key={staks.detail}>
              <h2>{staks.type}</h2>
              <span>{staks.detail}</span>
              <img src={staks.imageUrl} alt={staks.detail} />
            </SwiperSlide>
          ))}
        </Swiper>
      </GridSwiper>
    </>
  );
};

export default StacksGrid;

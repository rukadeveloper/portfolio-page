import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";

import styled from "styled-components";

import { IoCloseOutline } from "react-icons/io5";

import useScrollData from "../../../store/useScrollData";

const MobileMenu = styled.div`
  width: 500px;
  height: 100vh;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(37, 37, 37, 0.94);
  font-family: "SUIT", sans-serif !important;
  padding: 2rem 1.5rem;
  transform: translateX(-100%);
  transition: transform ease-in-out 0.7s;
  &.open {
    transform: translateX(0);
  }
  span {
    color: #fff;
  }
  ul {
    padding-top: 3rem;
    li {
      button {
        background-color: transparent;
        border: none;
        font-family: "SUIT", sans-serif !important;
        color: rgba(255, 255, 255, 0.4);
        font-size: 4rem;
        font-weight: 100;
        padding: 0;
        cursor: pointer;
        &:hover,
        &.active {
          font-weight: 800;
          color: #fff;
        }
      }
    }
    &:last-of-type {
      display: flex;
      align-items: center;
      li {
        button {
          font-size: 1.5rem;
          font-weight: 100;
          color: rgba(255, 255, 255, 0.4);
          padding: 0 0.5rem;
        }
        a {
          font-size: 1.5rem;
          font-weight: 100;
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          display: block;
          padding: 0 0.5rem;
        }
      }
    }
  }
  > button {
    position: absolute;
    top: 2rem;
    right: 1.5rem;
    background-color: transparent;
    border: none;
    width: 50px;
    height: 50px;
    transform: translateY(-25%);
    cursor: pointer;
    svg {
      transform: scale(1.8);
    }
  }

  @media screen and (max-width: 610px) {
    & {
      width: 300px;
      ul {
        &:first-of-type {
          li {
            button {
              font-size: 2.5rem;
            }
          }
        }
        &:last-of-type {
          flex-direction: column;
          align-items: start;
          gap: 1rem;
        }
      }
    }
  }
`;

const MobileScrollMenu = ({
  mobileHeader,
  setMobileHeader,
}: {
  mobileHeader: boolean;
  setMobileHeader: Dispatch<SetStateAction<boolean>>;
}) => {
  const button1Ref = useRef<HTMLButtonElement | null>(null);
  const button2Ref = useRef<HTMLButtonElement | null>(null);
  const button3Ref = useRef<HTMLButtonElement | null>(null);
  const button4Ref = useRef<HTMLButtonElement | null>(null);
  const button5Ref = useRef<HTMLButtonElement | null>(null);
  const button6Ref = useRef<HTMLButtonElement | null>(null);

  const {
    firstTop,
    firstRef,
    secondTop,
    secondRef,
    thirdTop,
    thirdRef,
    fourTop,
    fourRef,
    fiveTop,
    fiveRef,
    sixTop,
    sixRef,
  } = useScrollData();

  const firstButton = () => {
    firstRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const secondButton = () => {
    secondRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const thirdButton = () => {
    thirdRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fourButton = () => {
    fourRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fiveButton = () => {
    fiveRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sixButton = () => {
    sixRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const scrollEvent = () => {
      if (
        window.scrollY >= Math.floor(firstTop) &&
        window.scrollY < Math.floor(secondTop)
      ) {
        button1Ref.current!.classList.add("active");
      } else {
        button1Ref.current!.classList.remove("active");
      }

      if (
        window.scrollY >= Math.floor(secondTop) &&
        window.scrollY < Math.floor(thirdTop)
      ) {
        button2Ref.current!.classList.add("active");
      } else {
        button2Ref.current!.classList.remove("active");
      }

      if (
        window.scrollY >= Math.floor(thirdTop) &&
        window.scrollY < Math.floor(fourTop)
      ) {
        button3Ref.current!.classList.add("active");
      } else {
        button3Ref.current!.classList.remove("active");
      }

      if (
        window.scrollY >= Math.floor(fourTop) &&
        window.scrollY < Math.floor(fiveTop)
      ) {
        button4Ref.current!.classList.add("active");
      } else {
        button4Ref.current!.classList.remove("active");
      }

      if (
        window.scrollY >= Math.floor(fiveTop) &&
        window.scrollY < Math.floor(sixTop)
      ) {
        button5Ref.current!.classList.add("active");
      } else {
        button5Ref.current!.classList.remove("active");
      }

      if (window.scrollY >= Math.floor(sixTop)) {
        button6Ref.current!.classList.add("active");
      } else {
        button6Ref.current!.classList.remove("active");
      }
    };

    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [firstTop, secondTop, thirdTop, fourTop, fiveTop, sixTop]);

  return (
    <MobileMenu className={`${mobileHeader ? "open" : ""}`}>
      <span>SCROLL MENU</span>
      <ul>
        <li>
          <button onClick={firstButton} ref={button1Ref}>
            사용 기술
          </button>
        </li>
        <li>
          <button onClick={secondButton} ref={button2Ref}>
            경력 사항
          </button>
        </li>
        <li>
          <button onClick={thirdButton} ref={button3Ref}>
            교육
          </button>
        </li>
        <li>
          <button onClick={fourButton} ref={button4Ref}>
            프로젝트
          </button>
        </li>
        <li>
          <button onClick={fiveButton} ref={button5Ref}>
            테크 블로그
          </button>
        </li>
        <li>
          <button onClick={sixButton} ref={button6Ref}>
            사전 인터뷰
          </button>
        </li>
      </ul>
      <ul>
        <li>
          <button>CONTACT</button>
        </li>
        <li>
          <a href="https://github.com/rukadeveloper">GITHUB</a>
        </li>
        <li>
          <a href="https://github.com/rukadeveloper">VELOG</a>
        </li>
        <li>
          <a href="https://github.com/rukadeveloper">NOTION</a>
        </li>
      </ul>
      <button onClick={() => setMobileHeader(false)}>
        <IoCloseOutline size={26} fill={"#fff"} stroke={"#fff"} />
      </button>
    </MobileMenu>
  );
};

export default MobileScrollMenu;

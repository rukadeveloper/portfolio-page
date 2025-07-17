import React, { useEffect, useRef } from "react";

import styled from "styled-components";

import useScrollData from "../../../store/useScrollData";

const NavMenu = styled.nav`
  margin-left: 0.7rem;
  ul {
    display: flex;
    align-items: center;
    li {
      button {
        background-color: transparent;
        border: none;
        color: #000;
        font-family: "Esamanru Light", sans-serif !important;
        font-size: 1rem;
        padding: 0.4rem 1rem;
        cursor: pointer;
        transition: all ease-in-out 0.4s;
        &.active {
          background-color: #000;
          color: #fff;
          border-radius: 6px;
        }
        &:hover {
          background-color: #000;
          color: #fff;
          border-radius: 6px;
        }
      }
    }
  }
`;

const NavBarMenu = () => {
  const {
    firstRef,
    firstTop,
    secondRef,
    secondTop,
    thirdRef,
    thirdTop,
    fourRef,
    fourTop,
    sixRef,
    sixTop,
  } = useScrollData();

  const button1Ref = useRef<HTMLButtonElement | null>(null);
  const button2Ref = useRef<HTMLButtonElement | null>(null);
  const button3Ref = useRef<HTMLButtonElement | null>(null);
  const button4Ref = useRef<HTMLButtonElement | null>(null);
  const button6Ref = useRef<HTMLButtonElement | null>(null);

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

  const sixButton = () => {
    sixRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const scrollEvent = () => {
      if (window.scrollY >= firstTop && window.scrollY < secondTop) {
        button1Ref.current!.classList.add("active");
      } else {
        button1Ref.current!.classList.remove("active");
      }
      if (
        window.scrollY >= secondTop &&
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
        window.scrollY < Math.floor(sixTop)
      ) {
        button4Ref.current!.classList.add("active");
      } else {
        button4Ref.current!.classList.remove("active");
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
  }, [firstTop, secondTop, thirdTop, fourTop, sixTop]);

  return (
    <NavMenu>
      <ul>
        <li>
          <button onClick={firstButton} ref={button1Ref}>
            사용 기술
          </button>
        </li>
        <li>
          <button onClick={secondButton} ref={button2Ref}>
            경력
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
          <button onClick={sixButton} ref={button6Ref}>
            사전 인터뷰
          </button>
        </li>
      </ul>
    </NavMenu>
  );
};

export default NavBarMenu;

import React, { Dispatch, SetStateAction } from "react";

import styled from "styled-components";

import { IoCloseOutline } from "react-icons/io5";

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
        &:hover {
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
          li {
            button,
            a {
              font-size: 1rem;
            }
          }
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
  return (
    <MobileMenu className={`${mobileHeader ? "open" : ""}`}>
      <span>SCROLL MENU</span>
      <ul>
        <li>
          <button>사용 기술</button>
        </li>
        <li>
          <button>경력 사항</button>
        </li>
        <li>
          <button>교육</button>
        </li>
        <li>
          <button>프로젝트</button>
        </li>
        <li>
          <button>테크 블로그</button>
        </li>
        <li>
          <button>사전 인터뷰</button>
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

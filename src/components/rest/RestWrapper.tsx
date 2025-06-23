import React, { useRef, useState } from "react";

import styled from "styled-components";
import RightSection from "./RightSection";

const Rest = styled.div`
  &#rest__sec {
    position: relative;
    z-index: 100000000;
    background-color: #0a192f;
    padding: 2.5rem;
    display: flex;
    gap: 20px;
    #rest__right__sec {
      flex: 1;
      section#career {
        height: 100vh;
        opacity: 0;
        transform: translateY(-30px);
        transition: all ease-in-out 0.6s;
        &.active {
          opacity: 1;
          transform: translateY(0);
        }
        .career-bx {
          width: 32rem;
          padding: 1.2rem;
          height: 30rem;
          background-color: rgb(23, 39, 59);
          border-radius: 0.25rem;
          color: rgba(255, 255, 255, 0.55);
          position: relative;
          span {
            &:first-of-type {
              font-size: 0.95rem;
            }
          }
          h2 {
            &:first-of-type {
              color: #fff;
              font-weight: 500;
              padding-top: 1.6rem;
            }
          }
          dl {
            margin: 0;
            dd {
              color: #fff;
              padding: 10px 0;
              display: inline-block;
              letter-spacing: -1px;
              margin: 0;
            }
            dt {
              padding: 6px 0;
              display: flex;
              align-items: center;
              gap: 10px;
              span {
                display: block;
                flex: 1;
              }
              &::before {
                content: "";
                display: block;
                width: 4px;
                height: 4px;
                background-color: rgba(255, 255, 255, 0.55);
              }
            }
          }
          .tech__wrapper {
            position: absolute;
            bottom: 1.2rem;
            left: 1.2rem;
            display: flex;
            gap: 16px;
            .tech__images {
              width: 50px;
              height: 50px;
              background-color: #0a192f;
              border-radius: 0.25rem;
              display: flex;
              justify-content: center;
              align-items: center;
              &:nth-child(2) {
                img {
                  width: 80%;
                  height: 80%;
                }
              }
              &:nth-child(3) {
                img {
                  width: 70%;
                  height: 70%;
                }
              }
              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
          }
        }
      }
      section#education {
        margin-top: 1rem;
        opacity: 0;
        transform: translateY(-30px);
        transition: all ease-in-out 0.6s;
        position: relative;
        height: 160vh;
        &.active {
          opacity: 1;
          transform: translateY(0);
        }
        .education-bx {
          width: 32rem;
          padding: 1.2rem;
          height: 30rem;
          background-color: rgb(23, 39, 59);
          border-radius: 0.25rem;
          color: rgba(255, 255, 255, 0.55);
          position: relative;
          margin-bottom: 30px;
          span {
            &:first-of-type {
              font-size: 0.95rem;
            }
          }
          h2 {
            &:first-of-type {
              color: #fff;
              font-weight: 500;
              padding-top: 1.6rem;
            }
          }
          dl {
            margin: 0;
            dd {
              color: #fff;
              padding: 10px 0;
              display: inline-block;
              letter-spacing: -1px;
              margin: 0;
            }
            dt {
              padding: 6px 0;
              display: flex;
              align-items: center;
              gap: 10px;
              span {
                display: block;
                flex: 1;
              }
              &::before {
                content: "";
                display: block;
                width: 4px;
                height: 4px;
                background-color: rgba(255, 255, 255, 0.55);
              }
            }
          }
          .tech__wrapper {
            position: absolute;
            bottom: 1.2rem;
            left: 1.2rem;
            display: flex;
            gap: 16px;
            .tech__images {
              width: 50px;
              height: 50px;
              background-color: #0a192f;
              border-radius: 0.25rem;
              display: flex;
              justify-content: center;
              align-items: center;
              &:nth-child(2) {
                img {
                  width: 80%;
                  height: 80%;
                }
              }
              &:nth-child(3) {
                img {
                  width: 70%;
                  height: 70%;
                }
              }
              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
          }
        }
      }
      section#projects {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        opacity: 0;
        transform: translateY(-20px);
        transition: ease-in-out 1s;
        height: 100vh;
        &.active {
          opacity: 1;
          transform: translateY(0);
        }
        .project-bx {
          height: 25rem;
          background-color: rgb(23, 39, 59, 0.45);
          border-radius: 0.25rem;
          padding: 2.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgb(23, 39, 59);
            transform: translateY(-100%);
            transition: transform ease-in-out 1s;
            z-index: 10000;
          }
          .project__view__info {
            > h2 {
              color: #fff;
              font-size: 1.3rem;
              font-weight: 500;
              padding-bottom: 1.5rem;
            }
            > span {
              color: rgba(255, 255, 255, 0.45);
              font-weight: 300;
            }
          }
          .project__tag {
            display: flex;
            gap: 10px;
            div {
              background-color: #000;
              color: #fff;
              padding: 0.3rem 0.5rem;
              font-size: 0.8rem;
            }
          }
          .project__hidden {
            opacity: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1000000;
            transition: opacity 1s ease-in-out;
            > h2 {
              color: #fff;
              width: 200px;
            }
            > button {
              width: 100%;
              padding: 1rem 0.9rem;
              padding-top: 1.2rem;
              font-size: 1.1rem;
              color: #fff;
              border: 1px solid #fff;
              margin-top: 1.5rem;
              &:hover {
                background-color: #fff;
                color: #000;
              }
            }
          }
          &:hover {
            &::after {
              transform: translateY(0);
            }
            .project__hidden {
              opacity: 1;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 890px) {
    &#rest__sec {
      #rest__right__sec {
        section#career {
          .career-bx {
            width: 27rem;
          }
        }
        section#education {
          .education-bx {
            width: 27rem;
          }
        }
        section#projects {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }

  @media screen and (max-width: 760px) {
    &#rest__sec {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 500px) {
    &#rest__sec {
      #rest__right__sec {
        section#career {
          .career-bx {
            width: 21rem;
          }
        }
        section#education {
          .education-bx {
            width: 21rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 400px) {
    &#rest__sec {
      #rest__right__sec {
        section#career {
          .career-bx {
            width: 17rem;
            span {
              font-size: 0.85rem !important;
            }
            h2 {
              padding-top: 1rem !important;
              font-size: 1.3rem !important;
            }
            dl {
              dd {
                font-size: 0.95rem;
              }
            }
            .tech__wrapper {
              .tech__images {
                width: 40px;
                height: 40px;
              }
            }
          }
        }
        section#education {
          .education-bx {
            width: 17rem;
            span {
              font-size: 0.85rem !important;
            }
            h2 {
              padding-top: 1rem !important;
              font-size: 1.3rem !important;
            }
            dl {
              dd {
                font-size: 0.95rem;
              }
            }
            .tech__wrapper {
              .tech__images {
                width: 40px;
                height: 40px;
              }

          }
        }
      }
    }
  }
`;

const RestLink = styled.ul`
  position: sticky;
  top: 1rem;
  height: 100vh;
  li {
    button {
      font-size: 3.3rem;
      font-weight: 800;
      color: rgba(255, 255, 255, 0.05);
      padding-bottom: 1rem;
    }
    &.active {
      button {
        color: #fff;
      }
    }
  }

  @media screen and (max-width: 890px) {
    &.rest__link {
      li {
        button {
          font-size: 2.7rem;
        }
      }
    }
  }

  @media screen and (max-width: 760px) {
    &.rest__link {
      width: 100%;
      height: auto;
      top: 0;
      background-color: #0a192f;
      z-index: 100000000;
      padding: 2rem 0;
    }
  }
`;

type SectionRefs = {
  career: HTMLElement | null;
  educations: HTMLElement | null;
  projects: HTMLElement | null;
};

const RestWrapper = () => {
  const [menuIdx, setMenuIdx] = useState<number | null>(null);
  const restLink = useRef<HTMLUListElement | null>(null);

  const refObject = useRef<SectionRefs | null>(null);

  const careerOnClick = () => {
    if (refObject.current) {
      refObject.current.career?.scrollIntoView({ behavior: "smooth" });
      setMenuIdx(0);
    }
  };

  const educationOnClick = () => {
    if (refObject.current) {
      refObject.current.educations?.scrollIntoView({ behavior: "smooth" });
      setMenuIdx(1);
    }
  };

  const projectsOnClick = () => {
    if (refObject.current) {
      refObject.current.projects?.scrollIntoView({ behavior: "smooth" });
      setMenuIdx(2);
    }
  };

  return (
    <Rest id="rest__sec">
      <RestLink className="rest__link" ref={restLink}>
        <li className={`${menuIdx === 0 ? "active" : ""}`}>
          <button onClick={careerOnClick}>Careers</button>
        </li>
        <li className={`${menuIdx === 1 ? "active" : ""}`}>
          <button onClick={educationOnClick}>Educations</button>
        </li>
        <li className={`${menuIdx === 2 ? "active" : ""}`}>
          <button onClick={projectsOnClick}>Project</button>
        </li>
      </RestLink>
      <RightSection
        setMenuIdx={setMenuIdx}
        ref={refObject}
        restLinkRef={restLink}
      />
    </Rest>
  );
};

export default RestWrapper;

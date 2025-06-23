import React from "react";

import styled from "styled-components";
import SkillsMenu from "./SkillsMenu";

const Skills = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0a192f;
  padding: 2.5rem;
  position: relative;
  z-index: 100000;
  > h2 {
    color: #fff;
    font-size: 2.4rem;
    display: inline-block;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: calc(100% + 30px);
      top: 0;
      bottom: 0;
      margin: auto 0;
      width: 100%;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.45);
    }
  }
  #skills__menu__all {
    padding-top: 50px;
    display: flex;
    .tech__menu {
      position: relative;
      ul {
        li {
          width: 180px;
          button {
            font-size: 1.1rem;
            color: #fff;
            padding: 1rem 1.5rem;
            opacity: 0.25;
            border-left: 2px solid rgb(255, 255, 255);
          }
          &.active {
            button {
              color: #6ffeda;
              opacity: 1;
              border-left: 2px solid rgba(255, 255, 255,.25);
          }
            }
          }
        }
      }
      #active__lines {
        position: absolute;
        background-color: #6ffeda;
        transition: transform ease-in-out .4s;
      }
    }
    .tech__list__wrapper {
        margin-left: 30px;
        > h2 {
            color: rgba(255,255,255,.25);
            font-size: 1.4rem;
            font-weight: 400; 
            margin-bottom: 1rem;
            span {
                margin-left: 10px;
                color: #6ffeda;
            }
        }
        .tech__list {
            margin-top: 2rem;
            .tech__each {
                padding-bottom: 2rem;
                display: flex;
                .tech__image {
                    width: 80px;
                    height: 80px;
                    background-color: #233555;
                    border-radius: 50%;
                    border: 3px solid #6ffeda;
                    position: relative;
                    &::after {
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%,-50%);
                        width: 60px;
                        height: 60px;
                        border: 3px solid #6ffeda;
                        border-radius: 50%;
                    }
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }
                &:nth-child(2),
                &:nth-child(3),
                &:nth-child(4) {
                    .tech__image {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        img {
                            width: 70%;
                            height: 70%;
                        }
                    }
                }
                .tech__info {
                    color: #fff;
                    text-align: left;
                    margin: 0;
                    margin-left: 1rem;
                    dd {
                        margin: 0;
                        font-size: 1.55rem;
                        padding-bottom: 1rem;
                    }
                    dt {
                        font-size: 1.15rem;
                        color: rgba(255,255,255,.75);
                    }
                }
            }
        }
    }
  }

  @media screen and (max-width: 950px) {
    #skills__menu__all {
      .tech__menu {
        ul {
          li {
            button {
              padding: 0.6rem 1.2rem !important;
              font-size: 0.9rem !important;
            }
          }
        }
      }
      .tech__list__wrapper {
        > h2 {
          font-size: 1.2rem; 
        }
        .tech__list {
          .tech__each {
            .tech__image {
              width: 60px;
              height: 60px;
              &::after {
                width: 40px;
                height: 40px;
              }
            }
            .tech__info {
              flex: 1;
              dd {
                font-size: 1.35rem;
              }
              dt {
                font-size: 0.95rem;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 670px) {
      #skills__menu__all {
        flex-direction: column;
        .tech__menu {
          ul {
            display: flex;
            li {
              button {
                width: 100%;
                border-left: none !important;
                border-bottom: 2px solid rgba(255,255,255,.25);
                opacity: 1 !important;
              }
            }
          }
        }
        .tech__list__wrapper {
          margin: 0;
          > h2 {
            margin-top: 3rem; 
          }
        }
    }
  }

  @media screen and (max-width: 500px) {
    #skills > h2 {
      &::after {
        content: none !important;
      }
    }
    #skills__menu__all {
        .tech__menu {
          ul {
            flex-direction: column;
            li {
              width: 100% !important;
              button {
                padding: 0.8rem 1.6rem !important;
              }
            }
          }
        }
        .tech__list__wrapper {
          > h2 {
            font-size: 1.1rem;
          }
          .tech__list {
            .tech__each {
              .tech__image {
                width: 40px;
                height: 40px;
                &::after {
                  width: 20px;
                  height: 20px;
                }
              }
              .tech__info {
                dd {
                  font-size: 1.15rem;
                  padding-bottom: 10px;
                }
                dt {
                  font-size: 0.8rem;
                }
              }
            }
          }
        }
    }
  }

  @media screen and (max-width: 430px) {
    #skills__menu__all {
        .tech__list__wrapper {
          > h2 {
            span {
              display: block;
              margin-left: 0;
              margin-top: 10px;
            }
          }
        }
    }
  }

  @media screen and (max-width: 390px) {
     #skills__menu__all {
        .tech__list__wrapper {
          .tech__list {
            .tech__each {
              padding-bottom: 0.5rem;
              &:last-child {
                padding-bottom: 0;
              }
            }
          }
        }
    }
  }
`;

const SkillsWrapper = () => {
  return (
    <Skills id="skills">
      <h2>Web Frontend Skills</h2>
      <SkillsMenu />
    </Skills>
  );
};

export default SkillsWrapper;

import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import Title from "./Title";
import Goals from "./Goals";
import Header from "./Header";

const Intro = styled.section`
  &#my-intro {
    width: 100%;
    height: 100vh;
    padding: 2rem 1rem;
    background-color: rgb(239, 239, 241);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    #title {
      #top__title {
        margin-top: 10vh;
        position: absolute;
        width: 100%;
        left: 0;
        > h2 {
          text-align: center;
          font-size: 2.8rem;
          font-weight: 400;
          strong {
            font-weight: 700;
          }
        }
        > p {
          position: absolute;
          color: #fff;
          font-size: 4.9rem;
          bottom: calc(100% - 50px);
          width: 100%;
          text-align: center;
          z-index: -1;
          overflow: hidden;
          span {
            display: block;
          }
        }
      }
      #bottom__title {
        margin-top: calc(10vh + 90px);
        position: absolute;
        left: 0;
        width: 100%;
        opacity: 0;
        transform: translateY(-20px);
        &.on {
          transition: all ease-in-out 1s;
          transition-delay: 1.5s;
          opacity: 1;
          transform: translateY(0);
        }
        p {
          text-align: center;
          font-size: 1.3rem;
          line-height: 1.4;
          font-weight: 400;
        }
      }
    }
    #goals {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 30%;
      opacity: 0;
      &.on {
        transition: opacity ease-in-out 1s;
        transition-delay: 2s;
        opacity: 1;
      }
      #goals-box {
        width: 100%;
        padding: 1rem;
        padding-top: 1.1rem;
        background-color: #000;
        color: #fff;
        margin-bottom: 30px;
        text-align: center;
        border-radius: 10px;
      }
    }
    > img {
      position: absolute;
      bottom: 0;
    }
  }

  @media screen and (max-width: 960px) {
    &#my-intro {
      #title {
        #top__title {
          h2 {
            font-size: 2.3rem;
          }
          p {
            font-size: 4.3rem;
          }
        }
        #bottom__title {
          p {
            font-size: 1.1rem;
          }
        }
      }
      #goals {
        width: 100%;
        #goals-box {
          border-radius: 0;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    &#my-intro {
      #title {
        #top__title {
          h2 {
            font-size: 1.9rem;
          }
          p {
            font-size: 3.3rem;
            bottom: calc(100% - 30px);
          }
        }
        #bottom__title {
          p {
            font-size: 0.95rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 590px) {
    &#my-intro {
      #title {
        #top__title {
          h2 {
            font-size: 1.6rem;
          }
          p {
            font-size: 2.4rem;
            bottom: calc(100% - 30px);
          }
        }
        #bottom__title {
          p {
            font-size: 0.85rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 430px) {
    &#my-intro {
      #title {
        #top__title {
          h2 {
            font-size: 1.3rem;
          }
          p {
            font-size: 2rem;
            bottom: calc(100% - 20px);
          }
        }
        #bottom__title {
          p {
            font-size: 0.85rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 360px) {
    &#my-intro {
      #title {
        #top__title {
          p {
            font-size: 1.6rem;
            bottom: calc(100% - 15px);
          }
        }
      }
    }
  }
`;

const Introduction = () => {
  const [addClass, setAddClass] = useState(false);
  const [goalsClass, setGoalsClass] = useState(false);
  const [image, setImage] = useState(false);

  const introRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const scroll = () => {
      if (window.scrollY > 0) {
        introRef.current!.style.position = "sticky";
        introRef.current!.style.top = "0";
      }
    };
    const animation = () => {
      if (topTitleRef.current) {
        const heightPlusMargin =
          topTitleRef.current.getBoundingClientRect().height;
        topTitleRef.current.style.transform = `translateY(${
          window.innerHeight / 2 -
          heightPlusMargin / 2 -
          parseFloat(window.getComputedStyle(topTitleRef.current).marginTop)
        }px) scale(1.25)`;

        const span = topTitleRef.current.children[1]
          .children[0]! as HTMLElement;

        span.style.transform = "translateY(-100%)";

        timeout = setTimeout(() => {
          setImage(true);
          topTitleRef.current!.style.transform = "translateY(0px)";
          topTitleRef.current!.style.transition = "transform ease-in-out 1s";
          span.style.transform = "translateY(0)";
          span.style.transition = "transform ease-in-out 1s";
          span.style.transitionDelay = "0.5s";

          document.body.style.overflowY = "visible";
        }, 2000);
      }
    };

    setAddClass(true);
    setGoalsClass(true);

    animation();

    window.addEventListener("scroll", scroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const topTitleRef = useRef<HTMLDivElement | null>(null);

  return (
    <Intro id="my-intro" ref={introRef}>
      <Header />
      <Title ref={topTitleRef} addClass={addClass} />
      <Goals goalsClass={goalsClass} />
      {image && <img src="/images/sd_png.png" alt="intro_png" width={390} />}
    </Intro>
  );
};

export default Introduction;

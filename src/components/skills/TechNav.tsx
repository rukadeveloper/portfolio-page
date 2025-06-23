import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";

import { SkillsType } from "../../types/SkillsTypes";

const TechNav = ({
  SkillsContent,
  activeIndex,
  setActiveIndex,
}: {
  SkillsContent: SkillsType[];
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}) => {
  const techRef = useRef<HTMLLIElement | null>(null);
  const linesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const resize = () => {
      if (techRef.current && linesRef.current) {
        if (window.innerWidth >= 670) {
          linesRef.current.style.transform = `translateY(${
            techRef.current.getBoundingClientRect().height * activeIndex
          }px)`;
          linesRef.current.style.height = `${
            techRef.current.getBoundingClientRect().height
          }px`;
          linesRef.current.style.width = "2px";
          linesRef.current.style.left = "0";
          linesRef.current.style.top = "0";
        } else if (window.innerWidth >= 500 && window.innerWidth < 670) {
          linesRef.current.style.transform = `translateX(${
            techRef.current.getBoundingClientRect().width * activeIndex
          }px)`;
          linesRef.current.style.width = `${
            techRef.current.getBoundingClientRect().width
          }px`;
          linesRef.current.style.height = "2px";
          linesRef.current.style.bottom = "0";
          linesRef.current.style.top = "auto";
        } else {
          linesRef.current.style.width = `${
            techRef.current.getBoundingClientRect().width
          }px`;
          linesRef.current.style.height = "2px";
          linesRef.current.style.transform = `translateY(${
            techRef.current.getBoundingClientRect().height * (activeIndex + 1) -
            1
          }px)`;
          linesRef.current.style.top = "0";
          linesRef.current.style.bottom = "auto";
        }
      }
    };

    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [activeIndex]);

  return (
    <nav className="tech__menu">
      <ul>
        {SkillsContent.map((skills: SkillsType, index: number) => (
          <li
            ref={techRef}
            className={`${activeIndex === index ? "active" : ""}`}
          >
            <button
              onClick={() => {
                setActiveIndex(index);
              }}
            >
              {skills.menuName}
            </button>
          </li>
        ))}
      </ul>
      <div id="active__lines" ref={linesRef}></div>
    </nav>
  );
};

export default TechNav;

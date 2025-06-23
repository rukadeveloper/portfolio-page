import React, {
  Dispatch,
  forwardRef,
  useImperativeHandle,
  SetStateAction,
  useRef,
  useEffect,
} from "react";
import CareerSection from "./CareerSection";
import EducationSection from "./EducationSection";
import ProjectSection from "./ProjectSection";

type RightSectionProps = {
  setMenuIdx: Dispatch<SetStateAction<number | null>>;
  restLinkRef: React.RefObject<HTMLUListElement | null>;
};

type SectionRefs = {
  career: HTMLElement | null;
  educations: HTMLElement | null;
  projects: HTMLElement | null;
};

const RightSection = forwardRef<SectionRefs, RightSectionProps>(
  (props, ref) => {
    const careerRef = useRef<HTMLElement | null>(null);
    const educationsRef = useRef<HTMLElement | null>(null);
    const projectsRef = useRef<HTMLElement | null>(null);

    // useImperativeHandle로 ref에 객체를 노출
    useImperativeHandle(ref, () => ({
      career: careerRef.current,
      educations: educationsRef.current,
      projects: projectsRef.current,
    }));

    useEffect(() => {
      const checkPosition1 = () => {
        if (careerRef.current && props.restLinkRef.current) {
          if (
            careerRef.current.getBoundingClientRect().top <=
              window.innerHeight * 0.5 &&
            careerRef.current.getBoundingClientRect().top >=
              -1 * careerRef.current.getBoundingClientRect().height
          ) {
            careerRef.current.classList.add("active");
            props.setMenuIdx(0);
          } else {
            careerRef.current.classList.remove("active");
          }

          if (window.innerWidth < 760) {
            careerRef.current.style.paddingTop = `${
              props.restLinkRef.current.getBoundingClientRect().height + 10
            }px`;
          } else {
            careerRef.current.style.paddingTop = "0";
          }
        }
      };

      checkPosition1();

      window.addEventListener("scroll", checkPosition1);
      window.addEventListener("resize", checkPosition1);

      return () => {
        window.removeEventListener("scroll", checkPosition1);
        window.removeEventListener("resize", checkPosition1);
      };
    }, [props]);

    useEffect(() => {
      const checkPosition2 = () => {
        if (educationsRef.current && props.restLinkRef.current) {
          if (
            educationsRef.current.getBoundingClientRect().top <=
              window.innerHeight * 0.5 &&
            educationsRef.current.getBoundingClientRect().top >=
              -1 * educationsRef.current.getBoundingClientRect().height
          ) {
            educationsRef.current.classList.add("active");
            props.setMenuIdx(1);
          } else {
            educationsRef.current.classList.remove("active");
          }

          if (window.innerWidth < 760) {
            educationsRef.current.style.paddingTop = `${
              props.restLinkRef.current.getBoundingClientRect().height + 10
            }px`;
          } else {
            educationsRef.current.style.paddingTop = "0";
          }
        }
      };

      checkPosition2();

      window.addEventListener("scroll", checkPosition2);
      window.addEventListener("resize", checkPosition2);

      return () => {
        window.removeEventListener("scroll", checkPosition2);
        window.removeEventListener("resize", checkPosition2);
      };
    }, [props]);

    useEffect(() => {
      const checkPosition3 = () => {
        if (projectsRef.current && props.restLinkRef.current) {
          if (
            projectsRef.current.getBoundingClientRect().top <=
              window.innerHeight * 0.5 &&
            projectsRef.current.getBoundingClientRect().top >=
              -1 * projectsRef.current.getBoundingClientRect().height
          ) {
            projectsRef.current.classList.add("active");
            props.setMenuIdx(2);
          } else {
            projectsRef.current.classList.remove("active");
          }

          if (window.innerWidth < 760) {
            projectsRef.current.style.paddingTop = `${
              props.restLinkRef.current.getBoundingClientRect().height + 10
            }px`;
          } else {
            projectsRef.current.style.paddingTop = "0";
          }
        }
      };

      checkPosition3();

      window.addEventListener("scroll", checkPosition3);
      window.addEventListener("resize", checkPosition3);

      return () => {
        window.removeEventListener("scroll", checkPosition3);
        window.removeEventListener("resize", checkPosition3);
      };
    }, [props]);

    return (
      <div id="rest__right__sec">
        <CareerSection setMenuIdx={props.setMenuIdx} ref={careerRef} />
        <EducationSection setMenuIdx={props.setMenuIdx} ref={educationsRef} />
        <ProjectSection setMenuIdx={props.setMenuIdx} ref={projectsRef} />
      </div>
    );
  }
);

export default RightSection;

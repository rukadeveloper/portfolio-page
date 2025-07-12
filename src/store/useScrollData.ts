import { create } from "zustand";
import React from "react";

interface ScrollDataProps {
  firstTop: number;
  firstRef: React.RefObject<HTMLElement | null>;
  secondTop: number;
  secondRef: React.RefObject<HTMLElement | null>;
  thirdTop: number;
  thirdRef: React.RefObject<HTMLDivElement | null>;
  fourTop: number;
  fourRef: React.RefObject<HTMLElement | null>;
  fiveTop: number;
  changeFirst: (
    first: number,
    firstRef: React.RefObject<HTMLElement | null>
  ) => void;
  changeSecond: (
    second: number,
    secondRef: React.RefObject<HTMLDivElement | null>
  ) => void;
  changeThird: (
    third: number,
    thirdRef: React.RefObject<HTMLDivElement | null>
  ) => void;
  changeFour: (
    four: number,
    fourRef: React.RefObject<HTMLElement | null>
  ) => void;
  changeFive: (five: number) => void;
}

const useScrollData = create<ScrollDataProps>((set) => ({
  firstTop: 0,
  firstRef: React.createRef<HTMLElement>(),
  secondTop: 0,
  secondRef: React.createRef<HTMLDivElement>(),
  thirdTop: 0,
  thirdRef: React.createRef<HTMLDivElement>(),
  fourTop: 0,
  fourRef: React.createRef<HTMLElement>(),
  fiveTop: 0,
  changeFirst: (first: number, firstRef: React.RefObject<HTMLElement | null>) =>
    set(() => ({
      firstTop: first,
      firstRef: firstRef,
    })),
  changeSecond: (
    second: number,
    secondRef: React.RefObject<HTMLDivElement | null>
  ) =>
    set(() => ({
      secondTop: second,
      secondRef,
    })),
  changeThird: (
    third: number,
    thirdRef: React.RefObject<HTMLDivElement | null>
  ) => set(() => ({ thirdTop: third, thirdRef })),
  changeFour: (four: number, fourRef: React.RefObject<HTMLElement | null>) =>
    set(() => ({
      fourTop: four,
      fourRef,
    })),
  changeFive: (five: number) => ({ secondTop: five }),
}));

export default useScrollData;

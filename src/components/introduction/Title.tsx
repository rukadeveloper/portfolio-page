import React, { forwardRef } from "react";
import TopTitle from "./TopTitle";
import BottomTitle from "./BottomTitle";

interface PropsElement {
  addClass: boolean;
}

const Title = forwardRef<HTMLDivElement, PropsElement>(
  (props: PropsElement, ref: React.Ref<HTMLDivElement | null>) => {
    return (
      <div id="title">
        <TopTitle ref={ref} />
        <BottomTitle addClass={props.addClass} />
      </div>
    );
  }
);

export default Title;

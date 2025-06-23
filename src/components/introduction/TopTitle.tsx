import React, { forwardRef } from "react";

const TopTitle = forwardRef<HTMLDivElement>(
  (props: any, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div id="top__title" ref={ref}>
        <h2>
          프론트엔드 개발자 <strong>김세중</strong>입니다.
        </h2>
        <p>
          <span>FRONT END DEVELOPER</span>
        </p>
      </div>
    );
  }
);

export default TopTitle;

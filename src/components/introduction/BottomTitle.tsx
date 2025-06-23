import React from "react";

const BottomTitle = ({ addClass }: { addClass: boolean }) => {
  return (
    <div id="bottom__title" className={`${addClass ? "on" : ""}`}>
      <p>
        사용자를 생각하며 UX 발전을 꾀하는 개발자
        <br /> 그것이 저의 책임감 있는 목표입니다.
      </p>
    </div>
  );
};

export default BottomTitle;

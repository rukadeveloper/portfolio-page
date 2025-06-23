import React from "react";
import GoalsBox from "./GoalsBox";

const Goals = ({ goalsClass }: { goalsClass: boolean }) => {
  const goals_contents = [
    "크로스 브라우징을 만족하는 UI 제작하기",
    "사용자 경험을 만족하는 UI 제작하기",
  ];

  return (
    <div id="goals" className={`${goalsClass ? "on" : ""}`}>
      {goals_contents.map((goal: string) => (
        <GoalsBox goal={goal} />
      ))}
    </div>
  );
};

export default Goals;

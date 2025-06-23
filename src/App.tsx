import React from "react";
import Introduction from "./components/introduction/Introduction";
import SkillsWrapper from "./components/skills/SkillsWrapper";
import RestWrapper from "./components/rest/RestWrapper";

function App() {
  return (
    <div className="app-main">
      <Introduction />
      <SkillsWrapper />
      <RestWrapper />
    </div>
  );
}

export default App;

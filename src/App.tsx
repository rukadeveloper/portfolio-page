import React from "react";

import GlobalStyle from "./reset/GlobalStyle";
import TranspHeader from "./components/shared/header/TranspHeader";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="app">
        <TranspHeader />
      </div>
    </>
  );
}

export default App;

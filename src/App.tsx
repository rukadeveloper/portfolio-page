import React, { useState, useEffect } from "react";

import GlobalStyle from "./reset/GlobalStyle";
import TranspHeader from "./components/shared/header/TranspHeader";
import SectionFirst from "./components/private/section-first/SectionFirst";
import SectionSecond from "./components/private/section-second/SectionSecond";
import SectionThird from "./components/private/section-third/SectionThird";

function App() {
  // 마운트 될때만 애니메이션 처리하기
  const [firstMount, setFirstMount] = useState(false);

  useEffect(() => {
    setFirstMount(true);
    return () => {
      setFirstMount(false);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className="app">
        <TranspHeader />
        <main>
          <SectionFirst firstMount={firstMount} />
          <SectionSecond />
          <SectionThird />
        </main>
      </div>
    </>
  );
}

export default App;

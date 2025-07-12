import React, { useState, useEffect } from "react";

import GlobalStyle from "./reset/GlobalStyle";
import TranspHeader from "./components/shared/header/TranspHeader";
import SectionFirst from "./components/private/section-first/SectionFirst";
import SectionSecond from "./components/private/section-second/SectionSecond";
import SectionThird from "./components/private/section-third/SectionThird";
import SectionFourth from "./components/private/section-fourth/SectionFourth";
import SectionFifth from "./components/private/section-fifth/SectionFifth";
import SectionSixth from "./components/private/section-sixth/SectionSixth";
import SectionSeventh from "./components/private/section-seventh/SectionSeventh";
import SectionEighth from "./components/private/section-eighth/SectionEighth";
import AOS from "aos";

import "aos/dist/aos.css";

function App() {
  // 마운트 될때만 애니메이션 처리하기
  const [firstMount, setFirstMount] = useState(false);

  useEffect(() => {
    setFirstMount(true);
    AOS.init();
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
          <SectionFourth />
          <SectionFifth />
          <SectionSixth />
          <SectionSeventh />
          <SectionEighth />
        </main>
      </div>
    </>
  );
}

export default App;

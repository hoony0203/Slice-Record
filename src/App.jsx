import { useEffect, React } from "react";
import { Routes, Route } from "react-router-dom";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section5 from "./components/Section5/Section5";
import { usePlayerStore } from "./store/playerStore";

import lenis from "./util/lenis";

const App = () => {
  useEffect(() => {
    lenis();
  });
  const { listOn } = usePlayerStore();

  return (
    <div className="">
      <header id="header" role="banner"></header>
      <body>
        <main>
          <div className="wrapper">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section5 />
          </div>
        </main>
      </body>
      {/* <Routes>
        <Route path="/" element={<div>앱</div>} />
      </Routes> */}
    </div>
  );
};

export default App;

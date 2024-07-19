import React from "react";
import { Routes, Route } from "react-router-dom";
import Section1 from "./components/Section/Section1";
import Section2 from "./components/Section/Section2";

const App = () => {
  return (
    <div className="">
      <header id="header" role="banner"></header>
      <main>
        <div className="wrapper">
          <Section1></Section1>
          <Section2></Section2>
        </div>
      </main>
      {/* <Routes>
        <Route path="/" element={<div>앱</div>} />
      </Routes> */}
    </div>
  );
};

export default App;

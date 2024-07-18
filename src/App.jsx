import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <header id="header" role="banner"></header>
      <main>
        <div className="wrapper">
          <section className="gap-record">
            <div className="container grid">
              <h1 className="title txt-black txt-up">
                Kustom <br></br>Packaging & Products For Konscious <br></br>
                Brands
              </h1>
              <div className="turntable"></div>
            </div>
          </section>
          <section className="gap-artist-record">
            <div className="container grid"></div>
          </section>
        </div>
      </main>
      {/* <Routes>
        <Route path="/" element={<div>앱</div>} />
      </Routes> */}
    </div>
  );
};

export default App;

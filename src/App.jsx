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
                Kustom Packaging & Products For Konscious Brands
              </h1>
              <div className="turntable"></div>
            </div>
          </section>
          <section className="gap-artist-record">
            <div className="container grid ">
              <div className="slice-record-main">
                <h1 className="title txt-black txt-up">
                  Kustom Packaging & Products For Konscious Brands
                </h1>
                <div className="menus txt-up">
                  <div>
                    <a href="" className="flex">
                      <p>Genre</p>
                      <p>01</p>
                    </a>
                  </div>
                  <div>
                    <a href="" className="flex">
                      <p>Artist</p>
                      <p>02</p>
                    </a>
                  </div>
                  <div>
                    <a href="">Favorite</a>
                  </div>
                  <div>
                    <a href="">Contact</a>{" "}
                  </div>
                </div>
              </div>
              <div className="turntable2"></div>
            </div>
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

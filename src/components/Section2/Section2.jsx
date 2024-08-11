import React from "react";
import { musicQuotes } from "../../data/data";
import { useEffect } from "react";

const Section2 = () => {
  let value;
  let array = new Array();
  value = musicQuotes[Math.floor(Math.random() * musicQuotes.length)];

  return (
    <>
      <section className="section-2">
        <h2 className="title txt-black txt-up flex">
          <div className="quote">
            <span>{value.quote}</span>
          </div>
          <div className="quote-artist">
            <span>{value.artist}</span>
          </div>
        </h2>
      </section>
    </>
  );
};

export default Section2;

import React from "react";
import ImgItem from "./ImgItem";

const Section5 = () => {
  return (
    <section className="section-5">
      <div className="container-grid">
        <div className="title">
          <h2 className="txt-up txt-black">
            <span>Award-</span> Winning Excellence, Trusted <br />
            by Industry <div className="txt-green">Leaders</div>
          </h2>
        </div>
        <div className="sub-title">
          <p className="txt-up txt-black">
            Proudly recognized for our innovation and quality, we are the
            trusted partner of choice for leading businesses across various
            sectors.
          </p>
        </div>
        <div className="grid-holder"></div>
        {/* <div className="map"></div> */}
        <ImgItem />
      </div>
    </section>
  );
};

export default Section5;

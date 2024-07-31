import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import { useRef } from "react";
import Section5 from "../Section5/Section5";

const Section2 = () => {
  return (
    <>
      <section className="section-2">
        <h2 className="title txt-black txt-up flex">
          <div>
            <span>Your</span>
          </div>
          <div>
            <span className="record-point">Reputation</span>
          </div>
          <div>
            <span>is our</span>
          </div>
          <div>
            <span>Pride</span>
          </div>
        </h2>
      </section>
    </>
  );
};

export default Section2;

import { useEffect, React } from "react";
import { Routes, Route } from "react-router-dom";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section5 from "./components/Section5/Section5";
import { usePlayerStore } from "./store/playerStore";

import lenis from "./util/lenis";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {
  useEffect(() => {
    lenis();
  });

  const circle = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const record = gsap.from(circle.current, {
      scrollTrigger: {
        trigger: ".record-point",
        start: "top 80%",
        end: "bottom 20%",
        // scrub: true,
        // markers: true,
      },
      rotateY: "+=360",
      duration: 5,
      repeat: -1,
      ease: "none",
    });

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      pin: true,
      // markers: true,
      onUpdate: (self) => {
        self.direction === -1 ? record.reverse() : record.play();
      },
    });

    // const showNav = gsap
    //   .from("#parallax__nav", {
    //     yPercent: -200,
    //     paused: true,
    //     duration: 0.2,
    //   })
    //   .progress(1);

    // ScrollTrigger.create({
    //   start: "top top",
    //   end: 99999,
    //   // markers: true,
    //   onUpdate: (self) => {
    //     self.direction === -1 ? showNav.play() : showNav.reverse();
    //   },
    // });
  });

  return (
    <div className="">
      <header id="header" role="banner">
        {/* <nav id="parallax__nav">
          <ul>
            <li>
              <a href="#section1" className="active">
                s1
              </a>
            </li>
            <li>
              <a href="#section2">s2</a>
            </li>
            <li>
              <a href="#section3">s3</a>
            </li>
            <li>
              <a href="#section4">s4</a>
            </li>
            <li>
              <a href="#section5">s5</a>
            </li>
            <li>
              <a href="#section6">s6</a>
            </li>
            <li>
              <a href="#section7">s7</a>
            </li>
            <li>
              <a href="#section8">s8</a>
            </li>
            <li>
              <a href="#section9">s9</a>
            </li>
          </ul>
        </nav> */}
      </header>

      <main>
        <div className="wrapper">
          <Section1 />
          <div className="turntable1">
            <div ref={circle} className="record">
              <img src="src/assets/img/record2.png" alt="" />
            </div>
          </div>
          <Section2 />
          <Section3 />
          <Section5 />
        </div>
      </main>
    </div>
  );
};

export default App;

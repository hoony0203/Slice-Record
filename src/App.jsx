import { useEffect, lazy } from "react";

import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Introduce from "./components/Section2-2/Introduce";
import WordsPlayer from "./components/Section3/WordsPlayer";
import Section6 from "./components/Section6/Section6";

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
  });

  return (
    <div className="">
      <header id="header" role="banner"></header>

      <main>
        <div className="wrapper">
          <Section1 />
          <div className="turntable1">
            <div ref={circle} className="record">
              <img src="src/assets/img/record2.png" alt="" />
            </div>
          </div>
          <Section2 />
          <Introduce />
          <WordsPlayer />
          {/* <Section5 /> */}
          <Section6 />
        </div>
      </main>
    </div>
  );
};

export default App;

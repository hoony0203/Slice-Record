import { useEffect, lazy } from "react";
const Section1 = lazy(() => import("./components/Section1/Section1"));
const Section2 = lazy(() => import("./components/Section2/Section2"));
const Introduce = lazy(() => import("./components/Section2-2/Introduce"));
const Section3 = lazy(() => import("./components/Section3/Section3"));
const Section5 = lazy(() => import("./components/Section5/Section5"));
const Section6 = lazy(() => import("./components/Section6/Section6"));

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
          <Section3 />
          <Section5 />
          <Section6 />
        </div>
      </main>
    </div>
  );
};

export default App;

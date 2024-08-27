import { useEffect, lazy } from "react";

const Section1 = lazy(() => import("./components/Section1/Section1"));
const Section2 = lazy(() => import("./components/Section2/Section2"));
const Introduce = lazy(() => import("./components/Section2-2/Introduce"));
const WordsPlayer = lazy(() => import("./components/Section3/WordsPlayer"));
const Section6 = lazy(() => import("./components/Section6/Section6"));

import lenis from "./util/lenis";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Suspense } from "react";
import Section5 from "./components/Section5/Section5";

const App = () => {
  useEffect(() => {
    lenis();
  });

  const circle = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const record = gsap.from(circle.current, {
      scrollTrigger: {
        trigger: ".record-point",
        start: "top 80%",
        end: "bottom 20%",
        // scrub: true,
        // markers: true,
        pin: true,
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
  const [introduce, setIntroduce] = useState(false);
  const [wp, setWp] = useState(false);
  const [s5, sets5] = useState(false);
  const [s6, sets6] = useState(false);
  const [target2, inView2] = useInView();
  const [target3, inView3] = useInView();
  const [target4, inView4] = useInView();
  const [target5, inView5] = useInView();

  useEffect(() => {
    if (inView2) {
      setIntroduce(true);
    }
  }, [inView2]);

  useEffect(() => {
    if (inView3) {
      setWp(true);
    }
  }, [inView3]);

  useEffect(() => {
    if (inView4) {
      sets5(true);
    }
  }, [inView4]);

  useEffect(() => {
    if (inView5) {
      sets6(true);
    }
  }, [inView5]);

  return (
    <div className="">
      <header id="header" role="banner"></header>

      <main>
        <div className="wrapper">
          <div className="record-wrap">
            <div ref={circle} className="record">
              <img src="./img/record2.png" alt="" />
            </div>
            <Section1 />
            <Section2 />
          </div>
          <div ref={target2}></div>

          {introduce == true ? (
            <>
              <Introduce />
              <div ref={target3}></div>
            </>
          ) : null}

          {wp == true ? (
            <>
              <WordsPlayer />
              <div ref={target4}></div>
            </>
          ) : null}
          <Section5 />
          <div ref={target5}></div>

          {s6 == true ? <Section6 /> : null}
        </div>
      </main>
    </div>
  );
};

export default App;

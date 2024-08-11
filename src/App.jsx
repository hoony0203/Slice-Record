import { useEffect, lazy } from "react";

const Section1 = lazy(() => import("./components/Section1/Section1"));
const Section2 = lazy(() => import("./components/Section2/Section2"));
const Introduce = lazy(() => import("./components/Section2-2/Introduce"));
const WordsPlayer = lazy(() => import("./components/Section3/WordsPlayer"));
const Section6 = lazy(() => import("./components/Section6/Section6"));
// import Section1 from "./components/Section1/Section1";
// import Section2 from "./components/Section2/Section2";
// import Introduce from "./components/Section2-2/Introduce";
// import WordsPlayer from "./components/Section3/WordsPlayer";
// import Section6 from "./components/Section6/Section6";

import lenis from "./util/lenis";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";

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

  const [target, inView] = useInView();
  const [target2, inView2] = useInView();

  useEffect(() => {
    if (inView) {
      console.log("111111");
    }
  }, [inView]);
  useEffect(() => {
    if (inView2) {
      console.log("22222");
    }
  }, [inView2]);

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
          <div ref={target2}></div>
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

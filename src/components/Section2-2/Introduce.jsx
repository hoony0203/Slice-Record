import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { lazy } from "react";
import Colorstack from "./Colorstack";
import { Suspense } from "react";
const Skills = lazy(() => import("./Skills"));
const About = lazy(() => import("./About"));

const Introduce = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(sectionRef.current, { translateX: 50 });
    gsap.to(sectionRef.current, {
      translateX: -sectionRef.current.offsetWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".section2-2",
        start: "top top",
        end: "bottom center",
        scrub: 1, //
        pin: ".section2-2",
        triggerHook: 0,
        pinSpacing: false,
        invalidateOnRefresh: true,
      },
    });
  });
  return (
    <section ref={sectionRef} className="section2-2">
      <div className="horizon-item">
        <Suspense>
          <Colorstack />
        </Suspense>
      </div>
      <div className="horizon-item">
        <div className="skills flex">
          <Suspense>
            <Skills />
          </Suspense>
        </div>
      </div>
      <div className="horizon-item">
        <Suspense>
          <About />
        </Suspense>
      </div>
    </section>
  );
};

export default Introduce;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Skills from "./Skills";
import About from "./About";
import Colorstack from "./Colorstack";

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
      },
    });
  });
  return (
    <section ref={sectionRef} className="section2-2">
      <div className="horizon-item">
        <Colorstack />
      </div>
      <div className="horizon-item">
        <div className="skills flex">
          <Skills />
        </div>
      </div>
      <div className="horizon-item">
        <About />
      </div>
    </section>
  );
};

export default Introduce;

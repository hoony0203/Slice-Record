import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import { useRef } from "react";
import Section5 from "../Section5/Section5";
import ImgItem from "../Section5/ImgItem";

const Introduce = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(sectionRef.current, { translateX: 50 });
    gsap.to(sectionRef.current, {
      translateX: -sectionRef.current.offsetWidth + 200,
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
        <div className="color-stack grid">
          <div className="main-colors">
            <div className="frame">
              <div className="main-bg-color">
                <div className="wrap">
                  <div className="front">
                    <i className="fa-solid fa-music"></i>
                  </div>
                  <div className="back">#e7ddcf light grayish-orange</div>
                </div>
              </div>
            </div>
            <div className="main-point-color">
              <div className="wrap">
                <i className="fa-solid fa-music"></i>
                #dd6013 Vivid Red-Tangelo
              </div>
            </div>
          </div>
          <div className="stack flex"></div>
        </div>
      </div>
      <div className="horizon-item">
        <div className="skills flex">
          <Skills/>
      </div>
      <div className="horizon-item">
        <div className="about flex">
          <div className="profile">
            <img src="src/assets/img/limChangHoon.jpg" alt="" />
          </div>
          github email
        </div>
      </div>
    </section>
  );
};

export default Introduce;

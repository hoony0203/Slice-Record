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
          <div>
            <label>html5, css3</label>
            <progress value="35" max="100" />
          </div>
          <div>
            <label>react</label>
            <progress value="40" max="100" />
            합리적인 방식으로 컴포넌트를 분리하여 컴포넌트의 재사용성을
            높입니다. React Hooks 사용이 능숙하고 Recoil, Redux 등으로 상태
            관리가 가능합니다. 라이프 사이클을 이해하며 사용하고, 성능 최적화를
            고민합니다.
          </div>
          <div>
            <label>javascript</label>
            <progress value="40" max="100" />
          </div>
        </div>
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

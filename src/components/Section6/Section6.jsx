import { stack } from "./../../data/stackSkills";
import artistInfo from "./../../data/data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const Section6 = () => {
  const imgRef = useRef([]);
  const section6Ref = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".imgTrigger",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 2,
      },
    });
    gsap.from(imgRef.current, {
      x: -400,
      opacity: 0.1,
    }),
      tl.add(
        gsap.to(
          imgRef.current,
          {
            duration: 2000,
            x: 200,
            stagger: 0.2,
            opacity: 1,
          },
          "+=1000"
        )
      );
  });
  return (
    <section ref={section6Ref} className="section-6">
      <div className="container-grid">
        <div className="title imgTrigger">
          <h2 className="txt-up txt-black">
            <span>Award-</span> Winning Excellence, Trusted <br />
            by Industry <div className="txt-green">Leaders</div>
          </h2>
        </div>
        <div className="sub-title">
          <p className="txt-up txt-black">dddddddddd</p>
        </div>
        <div className="grid-holder"></div>
        <div className="grid-holder2"></div>

        {artistInfo.map((artist, i) => {
          return (
            <div
              ref={(el) => (imgRef.current[i] = el)}
              className="img-item"
              key={i}>
              <img src={artist.imgUrl} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section6;

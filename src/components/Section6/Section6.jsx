import { stack } from "./../../data/stackSkills";
import { artistInfo } from "../../data/data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const Section6 = () => {
  const no1Ref = useRef(null);
  const imgRef = useRef([]);
  const section6Ref = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(no1Ref.current, {
      opacity: 0,
    });
    gsap.to(no1Ref.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: ".imgTrigger",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 2,
      },
    });
    gsap.from(imgRef.current, {
      x: -700,
      opacity: 0,
    });
    artistInfo.map((artist, i) => {
      gsap.to(imgRef.current[i], {
        duration: 2000,
        x: 100,
        stagger: 0.1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".imgTrigger",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 2,
        },
      });
    });
  });
  return (
    <section ref={section6Ref} className="section-6">
      <div className="container-grid">
        <div className="title imgTrigger">
          <h2 className="txt-up txt-black">
            <span>Award-</span> Winning Artists, <br />
            User Favorite <div></div>
          </h2>
        </div>
        <div ref={no1Ref} className="sub-title">
          <p className="txt-up txt-black">
            No. 1 &nbsp; <i className="fa-solid fa-crown"></i>
          </p>
        </div>
        <div className="grid-holder"></div>
        <div className="grid-holder2"></div>

        {artistInfo.map((artist, i) => {
          return (
            <div
              ref={(el) => (imgRef.current[i] = el)}
              className="img-item"
              key={i}>
              <a
                href={`https://www.youtube.com/channel/${artist.channelId}`}
                target="_blank"
                rel="noopener noreferrer">
                <img src={artist.imgUrl} alt="" loading="lazy" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section6;

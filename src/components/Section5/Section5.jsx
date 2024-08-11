import { useGSAP } from "@gsap/react";
import ImgItem from "./ImgItem";
import { artistInfo } from "./../../data/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const Section5 = () => {
  let galleryRef = useRef(null);
  let imgsRef = useRef([]);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sliderWidth = galleryRef.current.offsetWidth;

    let images = gsap.utils.toArray(".imgs");

    images.forEach((item) => {
      gsap.to(item, {
        x: "-=" + Number(sliderWidth / 2),
        duration: 30,
        repeat: -1,
        ease: "none",
      });
    });
  });

  return (
    <section className="section-5">
      <div ref={galleryRef} className="gallery">
        {artistInfo.map((artist, i) => {
          return (
            <div
              ref={(el) => (imgsRef.current[i] = el)}
              className="imgs"
              key={i}>
              <a
                href={`https://www.youtube.com/channel/${artist.channelId}`}
                target="_blank"
                rel="noopener noreferrer">
                <img src={artist.imgUrl} alt="" width="500px" loading="lazy" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section5;

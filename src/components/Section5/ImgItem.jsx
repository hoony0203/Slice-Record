import { useRef } from "react";
import { stack } from "../../data/stackSkills";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ImgItem = () => {
  const imgRef = useRef(null);

  useGSAP(() => {
    // gsap.from(imgRef.current, { opacity: 0.3 });
    gsap.to(imgRef.current, {
      // opacity: 1,
      ease: "back.in",
      duration: 5,
      stagger: 0.2,
      // invalidateOnRefresh: true,
    });
  });

  return (
    <>
      {stack.map((stack, i) => {
        return (
          <div ref={imgRef} className="img-item" key={i}>
            <label>
              <p>{stack.name}</p>
            </label>
            <img
              src={stack.url}
              alt=""
              width="180"
              height="180"
              loading="lazy"
              decoding="async"
            />
          </div>
        );
      })}
    </>
  );
};

export default ImgItem;

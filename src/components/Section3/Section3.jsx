import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Turntable2 from "./Turntable2";
import Menu from "./Menu";

const Section2 = () => {
  let refs = useRef([]);
  let container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  let phrase = `Kustom Packaging & Products For Konscious Brands Kustom Packaging &
            Products For Konscious Brands Kustom Packaging & Products For
            Konscious Brands Kustom Packaging & Products For Konscious Brands`;

  let splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });

    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}>
          {letter}
        </span>
      );
    });

    return letters;
  };

  useGSAP(() => {
    gsap.from(refs.current, { opacity: 0.3 });
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: ".split-word",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
      opacity: 1,
      ease: "slow",
      duration: 5,
      stagger: 1,
    });
  });

  return (
    <>
      <section className="section-3">
        <div className="container grid ">
          <h1 ref={container} className="title txt-black txt-up split-word">
            {splitWords(phrase)}
          </h1>

          <Turntable2 />
          <Menu />
        </div>
      </section>
    </>
  );
};

export default Section2;

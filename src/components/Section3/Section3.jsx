import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Turntable2 from "./Turntable2";
import Player from "../Section3/Player/Player";
import Menu from "./Menu";
import { usePlayerStore } from "../../store/playerStore";

const Section2 = () => {
  const listOn = usePlayerStore((state) => state.listOn);

  let wordRefs = useRef([]);

  let phrase = `Explore our services, customized by favorite genre and artists.
Declared Genre and Artist category are give you more convenience and Youtube accessibility.`;

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
            wordRefs.current.push(el);
          }}>
          {letter}
        </span>
      );
    });

    return letters;
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(wordRefs.current, { opacity: 0.3 });
    gsap.to(wordRefs.current, {
      scrollTrigger: {
        trigger: ".split-word",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        // markers: true,
      },
      opacity: 1,
      ease: "slow",
      duration: 5,
      stagger: 1,
      // invalidateOnRefresh: true,
    });
  });

  return (
    <>
      <section className="section-3">
        <div className="container grid ">
          <h1 className="title txt-black txt-up split-word">
            {splitWords(phrase)}
          </h1>
          <Turntable2 />

          <Menu />
        </div>
        {listOn ? <Player /> : null}
      </section>
    </>
  );
};

export default Section2;

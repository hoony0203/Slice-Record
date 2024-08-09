import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Turntable2 from "./Turntable2";
import Player from "./Player/Player";
import Menu from "./Menu";
import { usePlayerStore } from "../../store/playerStore";

const WordsPlayer = () => {
  const listOn = usePlayerStore((state) => state.listOn);

  let wordRefs = useRef([]);
  let container = useRef(null);
  let phrase = `Explore our services, customized by favorite genre and artists. Declared Genre and Artist category are give you more convenience and Youtube accessibility.`;

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
    gsap.from(wordRefs.current, { opacity: 0.3 });

    ScrollTrigger.create({
      trigger: ".split-word",
      start: "top 10%",
      end: "bottom 100%",
      animation: gsap.to(wordRefs.current, {
        ease: "slow",
        opacity: 1,
        duration: 10,
        stagger: 0.1,
      }),
      scrub: 1,
      invalidateOnRefresh: true,
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
        {listOn ? <Player /> : null}
      </section>
    </>
  );
};

export default WordsPlayer;

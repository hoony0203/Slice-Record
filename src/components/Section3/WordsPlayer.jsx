import { useRef, useEffect, lazy, Suspense } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Turntable2 from "./Turntable2";
const Player = lazy(() => import("./Player/Player"));
import Menu from "./Menu";
import { usePlayerStore } from "../../store/playerStore";
import SplitType from "split-type";

const WordsPlayer = () => {
  const listOn = usePlayerStore((state) => state.listOn);

  let refs = useRef([]);
  let container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

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
  });

  useGSAP(() => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: ".split-word",
        start: "top 10%",
        end: "bottom 100%",
        scrub: 1,
        // markers: true,
        invalidateOnRefresh: true,
        // toggleActions: "restart reverse resume reset",
      },
      opacity: 1,
      ease: "slow",
      duration: 50,
      stagger: 1,
    });
  });

  return (
    <section className="section-3">
      <div className="container grid ">
        <h1 ref={container} className="title txt-black txt-up split-word">
          {splitWords(phrase)}
        </h1>
        <Turntable2 />

        <Menu />
      </div>
      {listOn ? (
        <Suspense fallback="..loading">
          <Player />
        </Suspense>
      ) : null}
    </section>
  );
};

export default WordsPlayer;

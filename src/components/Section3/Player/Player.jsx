import React from "react";
import ArtistVideoList from "./ArtistVideoList";
import { usePlayerStore } from "../../../store/playerStore";
import { useEffect } from "react";
import { useState } from "react";

const Section3 = () => {
  const { listOn, playContent, playerMode } = usePlayerStore();
  const { resetVideoList } = usePlayerStore((state) => state.actions);

  const [opacity, setOpacity] = useState("");

  useEffect(() => {
    let visible = setTimeout(() => {
      setOpacity("visible");
    }, 100);
    return () => {
      clearTimeout(visible);
      setOpacity("");
    };
  }, [listOn]);
  return (
    <>
      <section className={`section-4 ${opacity}`}>
        <div className="section-4-title">
          <button className="backBtn" onClick={resetVideoList}>
            Back
          </button>
          <p className="txt-black txt-up txt-light-sub">{playContent}</p>
        </div>
        <div
          data-lenis-prevent
          className={`turntable4 ${playerMode ? "playerMode" : null}`}>
          <ArtistVideoList />
        </div>
      </section>
    </>
  );
};

export default Section3;

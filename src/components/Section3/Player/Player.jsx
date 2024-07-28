import React from "react";
import ArtistVideoList from "./ArtistVideoList";
import { useMenuStore } from "../../../store/store";
import { usePlayerStore } from "../../../store/playerStore";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import VideoPlay from "./VideoPlay";
import { useShallow } from "zustand/react/shallow";

const Section3 = () => {
  const pageName = useMenuStore((state) => state.pageName);
  const [listOn, playContent, playerMode] = usePlayerStore(
    useShallow((state) => [state.listOn, state.playContent, state.playerMode])
  );
  const resetVideoList = usePlayerStore(
    (state) => state.actions.resetVideoList
  );

  const [opacity, setOpacity] = useState("");

  const videoListScrollRef = useRef(null);

  useEffect(() => {
    let visible = setTimeout(() => {
      setOpacity("visible");
    }, 100);
    return () => {
      clearTimeout(visible);
      setOpacity("");
    };
  }, [listOn]);

  useEffect(() => {
    if (playerMode == true) {
      videoListScrollRef.current.scrollTop = 0;
    }
  }, [playerMode]);

  return (
    <>
      <section className={`section-4 ${opacity}`}>
        <div className="section-4-title">
          <button className="backBtn" onClick={resetVideoList}>
            Back
          </button>
          <p className="txt-black txt-up txt-light-sub">
            {pageName}
            {playContent}
          </p>
        </div>
        {playerMode ? <VideoPlay /> : null}
        <div
          data-lenis-prevent
          ref={videoListScrollRef}
          className={`turntable4 ${playerMode ? "playerMode" : null}`}>
          <ArtistVideoList />
        </div>
      </section>
    </>
  );
};

export default Section3;

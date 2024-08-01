import { useEffect } from "react";
import { useArtistStore } from "../../../store/artistStore";
import { usePlayerStore } from "../../../store/playerStore";
import { useState } from "react";

const ArtistVideoList = () => {
  const artistVideoList = useArtistStore((state) => state.artistVideoList);
  const { setplayerMode } = usePlayerStore((state) => state.actions);

  return (
    <>
      {artistVideoList.map((item, i) => {
        return (
          <div
            className="video-item"
            key={i}
            onClick={() => setplayerMode(item.videoId)}>
            <label className="player-thumb-label">
              <p title={item.title}>{item.title}</p>
            </label>
            <div className="player-thumb">
              <img className={i} src={item.thumbnail} alt="" />
              <div className="player-thumb-overlay">
                <i className="fa-solid fa-play fa-3x"></i>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ArtistVideoList;

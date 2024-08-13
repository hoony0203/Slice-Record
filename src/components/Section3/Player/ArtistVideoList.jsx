import { useEffect } from "react";
import { useArtistStore } from "../../../store/artistStore";
import { usePlayerStore } from "../../../store/playerStore";
import { useState } from "react";
import { useRef } from "react";

const ArtistVideoList = () => {
  const artistVideoList = useArtistStore((state) => state.artistVideoList);
  const { setplayerMode } = usePlayerStore((state) => state.actions);

  const itemRef = useRef([]);

  let starFillTrue = (i) => {
    itemRef.current[i].children[0].className =
      "fa-sharp-duotone fa-solid fa-star fa-3x";
  };

  let starFillFalse = (i) => {
    itemRef.current[i].children[0].className =
      "fa-sharp fa-regular fa-star fa-3x";
  };

  return (
    <>
      {artistVideoList.map((item, i) => {
        return (
          <div className="video-item" key={i}>
            <label className="player-thumb-label">
              <p onClick={() => setplayerMode(item.videoId)} title={item.title}>
                {item.title}
              </p>
              <div
                className="favorite-star"
                data-click=""
                ref={(el) => itemRef.current.push(el)}
                onMouseEnter={() => starFillTrue(i)}
                onMouseLeave={() => starFillFalse(i)}
                onClick={() => {
                  starFillTrue(i);
                  // item.videoId;
                  console.log(i + "click");
                }}>
                <i className="fa-sharp fa-regular fa-star fa-3x"></i>
              </div>
            </label>
            <div
              className="player-thumb"
              onClick={() => setplayerMode(item.videoId)}>
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

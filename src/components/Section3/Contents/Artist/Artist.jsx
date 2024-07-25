import React from "react";

import { useArtistStore } from "../../../../store/artistStore";

const Artist = () => {
  const { artistName } = useArtistStore();
  return (
    <>
      {artistName.map((item, i) => {
        return (
          <div
            className="thumb"
            key={i}
            onClick={() => {
              // console.log("thumb");
            }}>
            <label className="thumb-label">
              {item.name}
              <span className="label-point"> {item.genre} </span>
            </label>
            {/* {item.channelId} */}
            <div className="thumb-overlay"></div>
            <img src={item.imgUrl} />
          </div>
        );
      })}
    </>
  );
};

export default Artist;

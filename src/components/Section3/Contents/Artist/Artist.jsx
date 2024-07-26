import React from "react";

import { useArtistStore } from "../../../../store/artistStore";
import { useEffect } from "react";

const Artist = () => {
  const { artistPage, artistName } = useArtistStore();

  const { setArtistPage } = useArtistStore((state) => state.actions);

  return (
    <>
      {/* {artistPage} */}
      {artistName.map((item, i) => {
        return (
          <div
            className="thumb"
            key={i}
            onClick={() => setArtistPage("2-2", item.name, item.playlistId)}>
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

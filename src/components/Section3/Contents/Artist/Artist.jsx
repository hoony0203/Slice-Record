import React from "react";

import { useArtistStore } from "../../../../store/artistStore";
import { useEffect } from "react";

import ArtistVideoList from "./ArtistVideoList";

const Artist = () => {
  const { artistPage, artistName, playlistId } = useArtistStore();
  const { setArtistPage } = useArtistStore((state) => state.actions);

  return (
    <>
      {/* {artistPage} */}
      {artistPage == "2-2" ? (
        <ArtistVideoList />
      ) : (
        artistName.map((item, i) => {
          return (
            <div
              className="thumb"
              key={i}
              onClick={() => setArtistPage("2-2", item.playlistId)}>
              <label className="thumb-label">
                {item.name}
                <span className="label-point"> {item.genre} </span>
              </label>
              {/* {item.channelId} */}
              <div className="thumb-overlay"></div>
              <img src={item.imgUrl} />
            </div>
          );
        })
      )}
    </>
  );
};

export default Artist;

import React from "react";

import { useArtistStore } from "../../../../store/artistStore";

const Artist = () => {
  const artistList = useArtistStore((state) => state.artistList);
  const setArtistPage = useArtistStore((state) => state.actions.setArtistPage);

  return (
    <>
      {artistList.map((item, i) => {
        return (
          <div className="thumb-wrap" key={i}>
            <div
              className="thumb"
              onClick={() => setArtistPage(item.name, item.playlistId)}>
              <label className="thumb-label">
                {item.name}
                <span className="label-point"> {item.genre} </span>
              </label>
              <div className="thumb-overlay"></div>
              <img src={item.imgUrl} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Artist;

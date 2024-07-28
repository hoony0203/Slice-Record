import React from "react";

import { useArtistStore } from "../../../../store/artistStore";
import { useShallow } from "zustand/react/shallow";

const Artist = () => {
  const artistList = useArtistStore((state) => state.artistList);
  const setArtistPage = useArtistStore(
    useShallow((state) => state.actions.setArtistPage)
  );

  return (
    <>
      {artistList.map((item, i) => {
        return (
          <div
            className="thumb"
            key={i}
            onClick={() => setArtistPage(item.name, item.playlistId)}>
            <label className="thumb-label">
              {item.name}
              <span className="label-point"> {item.genre} </span>
            </label>
            <div className="thumb-overlay"></div>
            <img src={item.imgUrl} />
          </div>
        );
      })}
    </>
  );
};

export default Artist;

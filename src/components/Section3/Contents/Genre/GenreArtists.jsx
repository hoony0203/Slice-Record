import React from "react";
import { useGenreStore } from "../../../../store/genreStore";
import { useArtistStore } from "../../../../store/artistStore";

const GenreArtists = () => {
  const setArtistPage = useArtistStore((state) => state.actions.setArtistPage);
  const genreArtistList = useGenreStore((state) => state.genreArtistList);
  const resetArtistName = useGenreStore(
    (state) => state.actions.resetArtistName
  );

  return (
    <>
      <button onClick={resetArtistName}>back</button>
      {genreArtistList.map((item, i) => {
        return (
          <div
            key={i}
            className="thumb"
            onClick={() => setArtistPage(item.name, item.playlistId)}>
            <label className="thumb-label">{item.name}</label>
            <div className="thumb-overlay"></div>
            <img src={item.imgUrl} />
          </div>
        );
      })}
    </>
  );
};

export default GenreArtists;

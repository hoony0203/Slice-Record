import React from "react";
import { useGenreStore } from "../../../../store/genreStore";

const Genre = () => {
  const genreName = useGenreStore((state) => state.genreName);
  const getGenreArtistName = useGenreStore(
    (state) => state.actions.getGenreArtistName
  );
  return (
    <>
      {genreName.map((genre, i) => {
        return (
          <div className="thumb-wrap" key={i}>
            <div className="thumb" onClick={() => getGenreArtistName(genre)}>
              <label className="thumb-label">{genre}</label>
              <div className="thumb-overlay"></div>
              <img src={`./img/genreImg/${genre}.jpg`} alt={`${genre}`} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Genre;

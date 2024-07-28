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
          <div
            className="thumb"
            key={i}
            onClick={() => getGenreArtistName(genre)}>
            <label className="thumb-label">{genre}</label>
            <div className="thumb-overlay"></div>
            <img
              src={`src/assets/img/genreImg/${genre}.jpg`}
              alt={`${genre}`}
            />
          </div>
        );
      })}
    </>
  );
};

export default Genre;

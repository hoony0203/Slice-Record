import React from "react";
import { useGenreStore } from "../../../../store/genreStore";

const Genre = () => {
  const { genreName, genreArtists } = useGenreStore();
  const { getGenreArtistName } = useGenreStore((state) => state.actions);
  return (
    <>
      {genreName.map((item, i) => {
        return (
          <div
            className="thumb"
            key={i}
            onClick={() => getGenreArtistName(item)}>
            <label className="thumb-label">{item}</label>
            <div className="thumb-overlay"></div>
            <img
              src={`src/assets/img/genreImg/${item}.jpg`}
              alt="src/assets/img/genreImg/CityPop.jpg"
            />
          </div>
        );
      })}
    </>
  );
};

export default Genre;

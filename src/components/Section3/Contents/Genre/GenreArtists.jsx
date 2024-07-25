import React from "react";
import { useGenreStore } from "../../../../store/genreStore";

const GenreArtists = () => {
  const { genreArtists } = useGenreStore();
  const { resetArtistName } = useGenreStore((state) => state.actions);

  return (
    <>
      <button onClick={resetArtistName}>back</button>
      {genreArtists.map((item, i) => {
        return <div key={i}>{item.name}</div>;
      })}
    </>
  );
};

export default GenreArtists;

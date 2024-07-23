import React from "react";
import { useGenreStore } from "../store/genreStore";

const GenreArtists = () => {
  const { genreArtists } = useGenreStore();

  return (
    <div>
      {genreArtists.map((item, i) => {
        return <div key={i}>{item.name}</div>;
      })}
    </div>
  );
};

export default GenreArtists;

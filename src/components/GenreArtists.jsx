import React from "react";
import { useGenreStore } from "../store/genreStore";

const GenreArtists = () => {
  const { genreArtists } = useGenreStore();
  return (
    <div>
      genreArtists
      {genreArtists.map((item, i) => {
        {
          item.name;
        }
      })}
    </div>
  );
};

export default GenreArtists;

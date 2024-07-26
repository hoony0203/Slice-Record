import React from "react";
import { useMenuStore } from "../../../store/store";
import { useArtistStore } from "../../../store/artistStore";
import { useGenreStore } from "../../../store/genreStore";
import axios from "axios";
import { useEffect } from "react";
import Artist from "./Artist/Artist";
import Genre from "./Genre/Genre";
import GenreArtists from "./Genre/GenreArtists";

const Contents = () => {
  const { menu, page } = useMenuStore();
  const { artistName } = useArtistStore();
  const { genreName, genreArtists, genreImage } = useGenreStore();
  const { getGenreArtistName } = useGenreStore((state) => state.actions);

  return (
    <div data-lenis-prevent className="content-select-list">
      {/* {genreArtists.length > 0 ? (<GenreArtists />) : null} */}

      {menu[page - 1] == "artist" ? (
        <Artist />
      ) : menu[page - 1] == "genre" ? (
        <Genre />
      ) : null}
    </div>
  );
};

export default Contents;

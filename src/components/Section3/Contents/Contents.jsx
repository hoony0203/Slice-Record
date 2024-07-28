import React from "react";
import { useMenuStore } from "../../../store/store";
import { useArtistStore } from "../../../store/artistStore";
import { useGenreStore } from "../../../store/genreStore";
import Artist from "./Artist/Artist";
import Genre from "./Genre/Genre";
import GenreArtists from "./Genre/GenreArtists";
import { useShallow } from "zustand/react/shallow";

const Contents = () => {
  const [menu, page] = useMenuStore(
    useShallow((state) => [state.menu, state.page])
  );
  const artistList = useArtistStore((state) => state.artistList);
  const { genreName, genreArtists, genreImage } = useGenreStore();
  const getArtistName = useArtistStore((state) => state.actions.getArtistName);
  const { getGenreArtistName } = useGenreStore((state) => state.actions);

  return (
    <div data-lenis-prevent className="content-select-list">
      {/* {genreArtists.length > 0 ? (<GenreArtists />) : null} */}

      {menu[page - 1] == "artist" ? (
        <>
          <Artist />
          <div>
            {artistList.length > 1 ? (
              <button onClick={getArtistName}>load More</button>
            ) : null}
          </div>
        </>
      ) : menu[page - 1] == "genre" ? (
        <Genre />
      ) : null}
    </div>
  );
};

export default Contents;

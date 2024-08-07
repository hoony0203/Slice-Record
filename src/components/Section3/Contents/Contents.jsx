import { useShallow } from "zustand/react/shallow";
import { useMenuStore } from "../../../store/store";
import { useArtistStore } from "../../../store/artistStore";
import { useGenreStore } from "../../../store/genreStore";
import Artist from "./Artist/Artist";
import Genre from "./Genre/Genre";
import GenreArtists from "./Genre/GenreArtists";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Contents = () => {
  const [menu, page] = useMenuStore(
    useShallow((state) => [state.menu, state.page])
  );
  const artistList = useArtistStore((state) => state.artistList);
  const { genreName, genreArtistList, genreImage } = useGenreStore();
  const getArtistName = useArtistStore((state) => state.actions.getArtistName);
  const { getGenreArtistName } = useGenreStore((state) => state.actions);
  // const target = useRef(null);
  const [target, inView] = useInView();

  useEffect(() => {
    if (inView) {
      getArtistName;
    }
  }, [inView]);

  return (
    <div data-lenis-prevent className="content-select-list">
      {menu[page - 1] == "artist" ? (
        <>
          <Artist />
          <div>
            {artistList.length >= 1 ? (
              <button onClick={getArtistName}>load More</button>
            ) : null}
          </div>
          <div ref={target}></div>
        </>
      ) : menu[page - 1] == "genre" ? (
        <>
          {genreArtistList.length >= 1 ? (
            <>
              <GenreArtists />
              <button onClick={getGenreArtistName}>load More</button>
            </>
          ) : (
            <Genre />
          )}
        </>
      ) : null}
    </div>
  );
};

export default Contents;

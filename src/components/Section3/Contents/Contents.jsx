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
  const [menu, page, pageName] = useMenuStore(
    useShallow((state) => [state.menu, state.page, state.pageName])
  );
  const artistList = useArtistStore((state) => state.artistList);
  const { genreName, genreArtistList, selectedGenre } = useGenreStore();
  const getArtistName = useArtistStore((state) => state.actions.getArtistName);
  const { getGenreArtistName } = useGenreStore((state) => state.actions);
  const listRef = useRef(null);
  const [target, inView] = useInView();
  const [target2, inView2] = useInView();

  useEffect(() => {
    if (selectedGenre != "") {
      listRef.current.scrollTop = 0;
    }
  }, [selectedGenre]);

  useEffect(() => {
    if (inView) {
      getArtistName(selectedGenre);
    }
  }, [inView]);

  useEffect(() => {
    if (inView2) {
      getGenreArtistName();
    }
  }, [inView2]);

  return (
    <div data-lenis-prevent ref={listRef} className="content-select-list">
      {menu[page - 1] == "artist" ? (
        <>
          <Artist />
          <div ref={target}></div>
        </>
      ) : menu[page - 1] == "genre" ? (
        <>
          {genreArtistList.length >= 1 ? (
            <>
              <GenreArtists />
              <div ref={target2}></div>
            </>
          ) : (
            <>
              <Genre />
            </>
          )}
        </>
      ) : null}
    </div>
  );
};

export default Contents;

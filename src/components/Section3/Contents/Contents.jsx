import { useShallow } from "zustand/react/shallow";
import { useMenuStore } from "../../../store/store";
import { useArtistStore } from "../../../store/artistStore";
import { useGenreStore } from "../../../store/genreStore";
import Artist from "./Artist/Artist";
import Genre from "./Genre/Genre";
import GenreArtists from "./Genre/GenreArtists";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import DefaultImg from "./DefaultImg";
import Favorite from "./Favorite/Favorite";

const Contents = () => {
  const [menu, page, pageName] = useMenuStore(
    useShallow((state) => [state.menu, state.page, state.pageName])
  );
  const { defaultImg, artistList } = useArtistStore();

  const { genreName, genreArtistList, selectedGenre } = useGenreStore();
  const getArtistName = useArtistStore((state) => state.actions.getArtistName);
  const { getGenreArtistName } = useGenreStore((state) => state.actions);
  const listRef = useRef(null);
  const [target, inView] = useInView();
  const [target2, inView2] = useInView();
  const [isList, setIsList] = useState("");

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

  useEffect(() => {
    if (artistList.length == 0 || genreName.length == 0) {
      setIsList("");
    }
    if (artistList.length > 0 || genreName.length > 0) {
      setIsList("isList");
    }
  });

  return (
    <div
      data-lenis-prevent
      ref={listRef}
      className={`content-select-list ${isList}`}>
      {menu[page - 1] == "artist" ? (
        <>
          {artistList.length < 1 ? (
            <DefaultImg />
          ) : (
            <>
              <Artist />
              <div ref={target}></div>
            </>
          )}
        </>
      ) : menu[page - 1] == "genre" ? (
        <>
          {genreArtistList.length < 1 ? (
            <>{genreName.length < 1 ? <DefaultImg /> : <Genre />}</>
          ) : (
            <>
              <GenreArtists />
              <div ref={target2}></div>
            </>
          )}
        </>
      ) : menu[page - 1] == "favorite" ? (
        <>
          {
            <>
              <Favorite />
              <div></div>
            </>
          }
        </>
      ) : (
        <>
          <DefaultImg />
        </>
      )}
    </div>
  );
};

export default Contents;

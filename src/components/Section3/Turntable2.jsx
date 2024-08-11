import React from "react";
import { useMenuStore } from "../../store/store";
import { useEffect } from "react";
import Contents from "./Contents/Contents";
import { useRef } from "react";
import { useShallow } from "zustand/react/shallow";
import { useGenreStore } from "../../store/genreStore";

const Turntable2 = () => {
  const [menu, page, pages, pageName] = useMenuStore(
    useShallow((state) => [state.menu, state.page, state.pages, state.pageName])
  );
  const [increasePage, decreasePage] = useMenuStore(
    useShallow((state) => [
      state.actions.increasePage,
      state.actions.decreasePage,
    ])
  );
  const selectedGenre = useGenreStore((state) => state.selectedGenre);

  const turn2Ref = useRef(null);

  useEffect(() => {}, [turn2Ref]);

  return (
    <div ref={turn2Ref} className="turntable2">
      <div className="turn2-nav flex">
        <div className="turn2-heading">
          <p className="txt-up txt-black">
            {selectedGenre == "" ? pageName : `${pageName} / ${selectedGenre}`}
          </p>
        </div>
        <div className="turn2-nav-control flex">
          <div className="turn2-nav-arrow">
            <button
              className={page <= 1 ? "disable" : "arrow-active"}
              onClick={page > 1 ? decreasePage : null}>
              <i className="fa-solid fa-arrow-left fa-4x"></i>
            </button>
          </div>
          <div className="turn2-nav-arrow">
            <button
              className={page == pages ? "disable" : "arrow-active"}
              onClick={page < pages ? increasePage : null}>
              <i className="fa-solid fa-arrow-right fa-4x"></i>
            </button>
          </div>
        </div>
      </div>

      <Contents />
    </div>
  );
};

export default Turntable2;

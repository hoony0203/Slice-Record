import React from "react";
import { useNavigate } from "react-router-dom";
import { useMenuStore } from "../../store/store";
import { useArtistStore } from "../../store/artistStore";
import { useGenreStore } from "../../store/genreStore";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

const Menu = () => {
  const [menu, page] = useMenuStore(
    useShallow((state) => [state.menu, state.page])
  );
  const setPage = useMenuStore((state) => state.actions.setPage);
  const loadCount = useArtistStore((state) => state.loadCount);
  const getArtistName = useArtistStore((state) => state.actions.getArtistName);
  const genreArtistLoadCount = useGenreStore(
    (state) => state.genreArtistLoadCount
  );
  const getGenreName = useGenreStore((state) => state.actions.getGenreName);
  const navigate = useNavigate();

  return (
    <div className="menu">
      <div>
        {menu.map((item, i) => {
          return (
            <div
              onMouseEnter={() => setPage(i, item)}
              onClick={
                i == 0 && genreArtistLoadCount == 0
                  ? getGenreName
                  : i == 1 && loadCount == 0
                  ? getArtistName
                  : null
              }
              className="flex menu-item"
              key={i}>
              <div>
                <h3
                  className={
                    `txt-up txt-black` + (page == i + 1 ? " menu-active" : "")
                  }>
                  {item}
                </h3>
              </div>
              <div className="menu-num">
                <p>0{i + 1}</p>
                <div className="num-inner">
                  <i className="fa-sharp fa-solid fa-square-arrow-up-right"></i>
                </div>
              </div>
              <div className="line">
                <div className="line-inner"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;

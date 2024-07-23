import React from "react";
import { useNavigate } from "react-router-dom";
import { useMenuStore } from "../../store/store";
import { useArtistStore } from "../../store/artistStore";
import { useGenreStore } from "../../store/genreStore";
import { useEffect } from "react";

const Menu = () => {
  const { menu, page, pages, pageName } = useMenuStore();
  const { setPage } = useMenuStore((state) => state.actions);
  const { getArtistName } = useArtistStore((state) => state.actions);
  const { getGenreName } = useGenreStore((state) => state.actions);
  const navigate = useNavigate();

  return (
    <div className="menu">
      <div>
        {menu.map((item, i) => {
          return (
            <div
              onMouseEnter={() => setPage(i)}
              onClick={i == 0 ? getGenreName : i == 1 ? getArtistName : null}
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

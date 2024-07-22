import React from "react";
import { useNavigate } from "react-router-dom";
import { useMenuStore } from "../../store/store";
import { useState, useEffect } from "react";

const Menu = () => {
  const { menu, page, pages, pageName } = useMenuStore();
  const { setPage } = useMenuStore((state) => state.actions);
  let [hoverPage, sethoverPage] = useState();

  const navigate = useNavigate();

  return (
    <div className="menu">
      <div>
        {menu.map((item, i) => {
          return (
            <div
              onMouseEnter={() => setPage(i)}
              className="flex menu-item"
              key={i}>
              <div>
                <h3 className="txt-up txt-black">{item}</h3>
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

import React from "react";
import { useMenuStore } from "../../store/store";
import { useEffect } from "react";
import Contents from "../Contents";

const Turntable2 = () => {
  const { menu, page, pages, pageName } = useMenuStore();
  const { increasePage, decreasePage } = useMenuStore((state) => state.actions);

  return (
    <div className="turntable2">
      <div className="turn2-nav flex">
        <div className="turn2-heading">
          <p className="txt-up txt-black">
            {page == 0 ? pageName : menu[page - 1]}
          </p>
        </div>
        <div className="turn2-nav-control flex">
          <div className="turn2-nav-arrow">
            <button
              className={page <= 1 ? "disable" : "active"}
              onClick={page > 1 ? decreasePage : null}>
              <i className="fa-solid fa-arrow-left fa-4x"></i>
            </button>
          </div>
          <div className="turn2-nav-arrow">
            {page} / {pages}
            <button
              className={page == pages ? "disable" : "active"}
              onClick={page < pages ? increasePage : null}>
              <i className="fa-solid fa-arrow-right fa-4x"></i>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Contents />
      </div>
    </div>
  );
};

export default Turntable2;

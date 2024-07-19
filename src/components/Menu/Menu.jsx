import React from "react";
import { useNavigate } from "react-router-dom";
import { useMenuStore } from "../../store/store";

const Menu = () => {
  const navigate = useNavigate();
  const { menu, page, pages } = useMenuStore();
  return (
    <div className="menu">
      <div>
        {menu.map((item, i) => {
          return (
            <div
              onClick={() => {
                console.log("click");
                // navigate();
              }}
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

import React from "react";
import { useNavigate } from "react-router-dom";
import { useMenuStore } from "../../store/store";

const Item = () => {
  const navigate = useNavigate();
  const { actions } = useMenuStore();
  const menu = actions.getMenu();

  return (
    <div>
      {menu.map((item, i) => {
        return (
          <div
            onClick={() => {
              navigate();
            }}
            className="flex menu-item"
            key={i}>
            <p>{item}</p>
            <p>0{i}</p>
            <div className="line">
              <div className="line-inner"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Item;

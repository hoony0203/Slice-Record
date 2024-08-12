import React from "react";
import { useMenuStore } from "../../../store/store";
import { useShallow } from "zustand/react/shallow";
const DefaultImg = () => {
  const [menu, page, pageName] = useMenuStore(
    useShallow((state) => [state.menu, state.page, state.pageName])
  );
  return (
    <div className="defaultImg">
      {menu[page - 1] == "genre" ? (
        <div className="genreArt">Genre Select what you want</div>
      ) : menu[page - 1] == "artist" ? (
        <div className="artistArt">Various Artist wait for you</div>
      ) : menu[page - 1] == "contact" ? (
        <div className="contactArt">back to Contact</div>
      ) : null}
      <i className="fa-solid fa-music fa-5x"></i>
      <img
        src={
          menu[page - 1] == "genre"
            ? `./img/genreTurntable.png`
            : menu[page - 1] == "artist"
            ? `./img/artistTurntable.png`
            : `./img/turntableDefault.png`
        }
        alt="defaultImg"
      />
    </div>
  );
};

export default DefaultImg;

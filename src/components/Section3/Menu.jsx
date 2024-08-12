import { useMenuStore } from "../../store/store";
import { useArtistStore } from "../../store/artistStore";
import { useGenreStore } from "../../store/genreStore";
import { useShallow } from "zustand/react/shallow";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

const Menu = () => {
  const [menu, page, isContact] = useMenuStore(
    useShallow((state) => [state.menu, state.page, state.isContact])
  );
  const { setPage, goContact } = useMenuStore((state) => state.actions);
  const loadCount = useArtistStore((state) => state.loadCount);
  const getArtistName = useArtistStore((state) => state.actions.getArtistName);
  const genreArtistLoadCount = useGenreStore(
    (state) => state.genreArtistLoadCount
  );
  const getGenreName = useGenreStore((state) => state.actions.getGenreName);

  useGSAP(() => {
    gsap.registerPlugin(ScrollToPlugin);
    if (isContact == true) {
      gsap.to(window, { scrollTo: 2500 });
      useMenuStore.setState({ isContact: false });
    }
  }, [isContact]);

  return (
    <div className="menu">
      {menu.map((item, i) => {
        return (
          <div
            onMouseEnter={() => setPage(i, item)}
            onClick={
              i == 0 && genreArtistLoadCount == 0
                ? getGenreName
                : i == 1 && loadCount == 0
                ? getArtistName
                : i == 3
                ? goContact
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
  );
};

export default Menu;

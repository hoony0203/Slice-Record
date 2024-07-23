import React from "react";
import { useMenuStore } from "../store/store";
import { useArtistStore } from "../store/artistStore";
import { useGenreStore } from "../store/genreStore";
import axios from "axios";
import { useEffect } from "react";

const Contents = () => {
  const { menu, page } = useMenuStore();
  const { artistName } = useArtistStore();
  const { genreName, genreArtists, genreImage } = useGenreStore();
  const { getGenreArtistName } = useGenreStore((state) => state.actions);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
    // axios
    //   .get(
    //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCvpredjG93ifbCP1Y77JyFA&maxResults=10&q=%E5%8B%87%E8%80%85&key=${apiKey}`
    //   )
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <div className="content-select-list">
      {/* {menu[page - 1]} */}

      {menu[page - 1] == "artist"
        ? artistName.map((item, i) => {
            return (
              <div
                className="thumb"
                key={i}
                onClick={() => {
                  // console.log("thumb");
                }}>
                <label className="thumb-label">
                  {item.name}
                  <span className="label-point"> {item.genre} </span>
                </label>
                {/* {item.channelId} */}
                <div className="thumb-overlay"></div>
                <img src={item.imgUrl} />
              </div>
            );
          })
        : null}

      {menu[page - 1] == "genre"
        ? genreName.map((item, i) => {
            return (
              <div
                className="thumb"
                key={i}
                onClick={() => getGenreArtistName(item)}>
                <label className="thumb-label">{item}</label>
                <div className="thumb-overlay"></div>
                <img
                  src={`src/assets/img/genreImg/${item}.jpg`}
                  alt="src/assets/img/genreImg/CityPop.jpg"
                />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Contents;

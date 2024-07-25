import React from "react";
import { useMenuStore } from "../../../store/store";
import { useArtistStore } from "../../../store/artistStore";
import { useGenreStore } from "../../../store/genreStore";
import axios from "axios";
import { useEffect } from "react";
import Artist from "./Artist/Artist";
import Genre from "./Genre/Genre";
import GenreArtists from "./Genre/GenreArtists";

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
      {/* {genreArtists.length > 0 ? (<GenreArtists />) : null} */}

      {menu[page - 1] == "artist" ? (
        <Artist />
      ) : menu[page - 1] == "genre" ? (
        <Genre />
      ) : null}
    </div>
  );
};

export default Contents;

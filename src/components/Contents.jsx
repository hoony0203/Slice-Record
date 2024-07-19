import React from "react";
import { useMenuStore } from "../store/store";
import axios from "axios";
import { useEffect } from "react";

const Contents = () => {
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
  });

  const { menu, page, pages, pageName } = useMenuStore();
  return <div>{page == 0 ? null : menu[page - 1]}</div>;
};

export default Contents;

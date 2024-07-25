import React from "react";

import { useArtistStore } from "../../../../store/artistStore";
import { useEffect } from "react";
import axios from "axios";

const Artist = () => {
  const { artistName } = useArtistStore();

  let getVideo = (playlistId) => {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
      )

      .then((result) => {
        console.log(result);
        // console.log(result.data.items[0].snippet.title);
        // console.log(result.data.items[0].snippet.thumbnails);
        // console.log(result.data.items[0].snippet.thumbnails.maxres.url);
        // console.log(result.data.items[0].snippet.thumbnails.standard.url);
        //console.log(result.data.items[0].contentDetails.videoId);
        // `https://www.youtube.com/watch?v=lUDPjyfmJrs`
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {artistName.map((item, i) => {
        return (
          <div
            className="thumb"
            key={i}
            onClick={() => {
              // console.log("thumb");
              getVideo(item.playlistId);
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
      })}
    </>
  );
};

export default Artist;

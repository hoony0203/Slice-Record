import { create } from "zustand";
import artistInfo from "../data/data";
import axios from "axios";

export const useArtistStore = create((set, get) => {
  return {
    artist: artistInfo,
    // defaultImg: true,
    artistName: [],
    artistPage: "2-1",
    playlistId: "",
    artistVideoList: [],
    actions: {
      getArtistName: () => {
        let array = new Array();
        for (let i = 0; i < artistInfo.length; i++) {
          let obj = {};
          obj["name"] = artistInfo[i].name;
          obj["channelId"] = artistInfo[i].channelId;
          obj["playlistId"] = artistInfo[i].playlistId;
          obj["genre"] = artistInfo[i].genre;
          obj["imgUrl"] = artistInfo[i].imgUrl;
          array.push(obj);
        }
        set({
          artistName: array,
        });
      },
      setArtistPage: (artistpageNum, playlistId) => {
        const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
        axios
          .get(
            `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
          )

          .then((result) => {
            let list = result.data.items;

            list = list.filter(
              (video) => !video.snippet.description.includes("private")
            );
            console.log(list);

            let array = new Array();
            for (let i = 0; i < list.length; i++) {
              let obj = {};
              obj["title"] = list[i].snippet.title;
              obj["videoId"] = list[i].contentDetails.videoId;
              obj["playlistId"] = list[i].playlistId;
              obj["thumbnail"] = list[i].snippet.thumbnails.standard.url;
              // obj["imgUrl"] = list[i].imgUrl;
              array.push(obj);
            }

            set({
              artistPage: artistpageNum,
              playlistId: playlistId,
              artistVideoList: array,
            });
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
      },
    },
  };
});

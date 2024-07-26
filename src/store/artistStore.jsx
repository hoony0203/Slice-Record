import { create } from "zustand";
import artistInfo from "../data/data";
import axios from "axios";
import { usePlayerStore } from "./playerStore";

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
      setArtistPage: (artistpageNum, artist, playlistId) => {
        // const playerStore = usePlayerStore.getState();
        usePlayerStore.setState({ listOn: true });
        usePlayerStore.setState({ playContent: artist });
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
            let array = new Array();
            for (let i = 0; i < list.length; i++) {
              let obj = {};
              obj["artist"] = artist;
              obj["title"] = list[i].snippet.title;
              obj["videoId"] = list[i].contentDetails.videoId;
              //obj["thumbnail"] = list[i].snippet.thumbnails.standard.url;
              obj["thumbnail"] = list[i].snippet.thumbnails.high.url;

              array.push(obj);
            }

            set({
              artistPage: artistpageNum,
              playlistId: playlistId,
              artistVideoList: array,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      },
      resetArtistVideoList: () =>
        set({
          artistVideoList: [],
        }),
    },
  };
});

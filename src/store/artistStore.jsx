import { create } from "zustand";
import artistInfo from "../data/data";
import getArtistInfo from "../data/artistInfo";
import axios from "axios";
import { useMenuStore } from "./store";
import { usePlayerStore } from "./playerStore";

export const useArtistStore = create((set, get) => {
  let array = new Array();
  getArtistInfo(array);
  return {
    artist: artistInfo,
    loadCount: 0,
    defaultImg: false,
    artistList: [],
    playlistId: "",
    artistVideoList: [],
    actions: {
      getArtistName: () => {
        console.log("getArtistName");
        useMenuStore.setState({ pageName: "Artist" });
        let loadCount = useArtistStore.getState().loadCount;
        let firstSplice;
        const usualCount = 12;
        if (loadCount == 0) {
          firstSplice = array.splice(0, usualCount);
          let copy = [...firstSplice];
          set({
            loadCount: (loadCount += 1),
            artistList: copy,
          });
        } else if (loadCount >= 1 && array.length >= 12) {
          let pageArray = array.splice(0, usualCount);
          let newCopy = [...useArtistStore.getState().artistList, ...pageArray];
          set({
            loadCount: (loadCount += 1),
            artistList: newCopy,
          });
        } else if (loadCount >= 1 && array.length < 12) {
          let pageArray = array.splice(0, array.length);
          let newCopy = [...useArtistStore.getState().artistList, ...pageArray];
          set({
            loadCount: (loadCount += 1),
            artistList: newCopy,
          });
        }
      },
      setArtistPage: (artist, playlistId) => {
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
              obj["thumbnail"] = list[i].snippet.thumbnails.high.url;
              array.push(obj);
            }

            set({
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

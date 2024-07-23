import { create } from "zustand";
import artistInfo from "../data/data";

export const useArtistStore = create((set, get) => {
  return {
    artist: artistInfo,
    // defaultImg: true,
    artistName: [],
    actions: {
      getArtistName: () => {
        let array = new Array();
        for (let i = 0; i < artistInfo.length; i++) {
          let obj = {};
          obj["name"] = artistInfo[i].name;
          obj["channelId"] = artistInfo[i].channelId;
          obj["genre"] = artistInfo[i].genre;
          obj["imgUrl"] = artistInfo[i].imgUrl;
          array.push(obj);
        }
        set({
          artistName: array,
        });
      },
    },
  };
});

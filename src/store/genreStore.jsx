import { create } from "zustand";
import artistInfo from "../data/data";

export const useGenreStore = create((set, get) => {
  return {
    artist: artistInfo,
    genreName: [],
    genreArtists: [],
    actions: {
      getGenreName: () => {
        let array = new Array();
        for (let item of artistInfo) {
          array.push(item.genre);
        }
        let genreSet = new Set([...array]);

        set({
          genreName: [...genreSet],
        });
      },
      getGenreArtistName: (genre) => {
        let result = artistInfo.filter((artist) => artist.genre == genre);
        let array = new Array();
        array.push(...result);
        set({ genreArtists: array });
      },
      resetArtistName: () => {
        set({ genreArtists: [] });
      },
    },
  };
});

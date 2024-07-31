import { create } from "zustand";
import artistInfo from "../data/data";
import getArtistInfo from "../data/artistInfo";
import { useMenuStore } from "./store";

export const useGenreStore = create((set, get) => {
  let array = new Array();
  let result;
  let firstSplice;
  getArtistInfo(array);

  return {
    artist: artistInfo,
    genreName: [],
    selectedGenre: "",
    genreArtistLoadCount: 0,
    genreArtistList: [],
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
        result = array.filter((artist) => artist.genre == genre);

        set({ selectedGenre: genre });
        useMenuStore.setState({ pageName: "Genre" });

        let genreArtistLoadCount =
          useGenreStore.getState().genreArtistLoadCount;
        const usualCount = 12;

        if (genreArtistLoadCount == 0) {
          firstSplice = result.splice(0, usualCount);

          set({
            genreArtistLoadCount: (genreArtistLoadCount += 1),
            genreArtistList: firstSplice,
          });
        } else if (genreArtistLoadCount >= 1 && result.length >= 12) {
          console.log("genreArtist3");
          let pageArray = result.splice(0, usualCount);
          let newCopy = [
            ...useGenreStore.getState().genreArtistList,
            ...pageArray,
          ];
          set({
            genreArtistLoadCount: (genreArtistLoadCount += 1),
            genreArtistList: newCopy,
          });
        } else if (genreArtistLoadCount >= 1 && result.length < 12) {
          console.log("genreArtist4");
          let pageArray = result.splice(0, result.length);
          let newCopy = [
            ...useGenreStore.getState().genreArtistList,
            ...pageArray,
          ];

          set({
            genreArtistLoadCount: (genreArtistLoadCount += 1),
            genreArtistList: newCopy,
          });
        }
      },
      resetArtistName: () => {
        set({
          genreArtistList: [],
          genreArtistLoadCount: 0,
          selectedGenre: "",
        });
      },
    },
  };
});

import { create } from "zustand";
import artistInfo from "../data/data";
import getArtistInfo from "../data/artistInfo";
import { useMenuStore } from "./store";

export const useGenreStore = create((set, get) => {
  let array = new Array();
  let result;
  let remain;
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
        let genreCount = useGenreStore.getState().genreArtistLoadCount;
        const usualCount = 12;
        if (genreCount == 0) {
          set({ selectedGenre: genre });
          useMenuStore.setState({ pageName: "Genre" });
          firstSplice = result.splice(0, usualCount);
          remain = [...result];
          set({
            genreArtistLoadCount: (genreCount += 1),
            genreArtistList: firstSplice,
          });
        } else if (genreCount >= 1 && remain.length >= 12) {
          console.log("genreArtist3");
          let pageArray = remain.splice(0, usualCount);
          let newCopy = [
            ...useGenreStore.getState().genreArtistList,
            ...pageArray,
          ];
          set({
            genreArtistLoadCount: (genreCount += 1),
            genreArtistList: newCopy,
          });
        } else if (genreCount >= 1 && remain.length < 12) {
          let pageArray = remain.splice(0, remain.length);
          let newCopy = [
            ...useGenreStore.getState().genreArtistList,
            ...pageArray,
          ];

          set({
            genreArtistLoadCount: (genreCount += 1),
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

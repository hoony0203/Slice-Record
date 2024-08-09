import { create } from "zustand";
import { useGenreStore } from "./genreStore";
import { useArtistStore } from "./artistStore";

export const useMenuStore = create((set, get) => {
  const menu = ["genre", "artist", "favorite", "contact"];

  return {
    menu: menu,
    page: 0,
    pageName: "Menu Select",
    pages: menu.length,
    isContact: false,
    actions: {
      setPage: (i, item) => {
        if (item != "genre") {
          useGenreStore.setState({ genreName: [] });
        }
        // else if (item != "artist") {
        //   useArtistStore.setState({ artistList: [], loadCount: 0 });
        // }
        set({
          pageName: item,
          page: i + 1,
        });
      },
      goContact: () => {
        set({ isContact: true });
      },
      increasePage: () =>
        set((state) => ({
          page: state.page + 1,
        })),
      decreasePage: () =>
        set((state) => ({
          page: state.page - 1,
        })),
    },
  };
});

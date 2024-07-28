import { create } from "zustand";
import { useGenreStore } from "./genreStore";

export const useMenuStore = create((set, get) => {
  const menu = ["genre", "artist", "favorite", "contact"];

  return {
    menu: menu,
    page: 0,
    pageName: "Menu Select",
    pages: menu.length,
    actions: {
      setPage: (i, item) => {
        if (item != "genre") {
          useGenreStore.setState({ selectedGenre: "" });
        }
        set({
          pageName: item,
          page: i + 1,
        });
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

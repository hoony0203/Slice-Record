import { create } from "zustand";

export const useMenuStore = create((set, get) => {
  const menu = ["genre", "artist", "favorite", "contact"];

  return {
    menu: menu,
    page: 0,
    pageName: "product kategories",
    pages: menu.length,
    actions: {
      setPage: (i) =>
        set({
          page: i + 1,
        }),
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

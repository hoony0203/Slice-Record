import { create } from "zustand";

export const useMenuStore = create((set, get) => {
  const menu = ["genre", "artist", "favorite", "contact"];

  return {
    state: menu,
    actions: {
      getMenu: () => get().state,
    },
  };
});

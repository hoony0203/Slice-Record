import { create } from "zustand";
import { useArtistStore } from "./artistStore";

export const usePlayerStore = create((set, get) => {
  return {
    listOn: false,
    playerMode: false,

    playVideoId: "",
    actions: {
      setplayerMode: (videoId) => {
        set({ playerMode: true, playVideoId: videoId });
      },
      resetVideoList: () => {
        if (usePlayerStore.getState().playerMode == true) {
          set({ playerMode: false });
        } else {
          useArtistStore.setState({ artistVideoList: [] });
          set({
            listOn: false,
          });
        }
      },
    },
  };
});

import { create } from "zustand";
import { useArtistStore } from "./artistStore";

export const usePlayerStore = create((set, get) => {
  const menu = ["genre", "artist", "favorite", "contact"];

  return {
    listOn: false,
    playerMode: false,
    playContent: "",
    playVideoId: "",
    actions: {
      setplayerMode: (videoId) => {
        console.log(videoId);
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

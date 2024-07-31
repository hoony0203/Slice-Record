import { create } from "zustand";
import { useArtistStore } from "./artistStore";
import stack from "../data/stackImage";

export const useIntroduceStore = create((set, get) => {
  return {
    stack: stack,
    actions: {
      setplayerMode: (videoId) => {
        set({ playerMode: true, playVideoId: videoId });
      },
    },
  };
});

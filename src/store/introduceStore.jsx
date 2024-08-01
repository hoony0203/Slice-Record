import { create } from "zustand";
import { useArtistStore } from "./artistStore";
import { stack, skills } from "../data/stackImage";

export const useIntroduceStore = create((set, get) => {
  return {
    stack: stack,
    skills: skills,
    actions: {
      setplayerMode: (videoId) => {
        set({ playerMode: true, playVideoId: videoId });
      },
    },
  };
});

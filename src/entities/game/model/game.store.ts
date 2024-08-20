import { createStore } from "zustand";
import { GameStoreType } from "./types";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "@/shared/utils";

const gameStoreBase = createStore<GameStoreType>()((set) => ({
  status: "idle",
  magicNumber: undefined,
  setMagicNumber: (magicNumber) => set((state) => ({ ...state, magicNumber })),
  setGameStatus: (status) => set((state) => ({ ...state, status })),
}));

export const gameStore = createSelectors(gameStoreBase);

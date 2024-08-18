import { createStore } from "zustand";
import { UserStoreType } from "./types";
import { immer } from "zustand/middleware/immer";
import { createJSONStorage, persist } from "zustand/middleware";
import { LOCAL_STORAGE_USER } from "@/shared/consts";
import { createSelectors } from "@/shared/utils";

const userStoreBase = createStore<UserStoreType>()(
  persist(
    immer((set) => ({
      me: null,
      setMe: (me) =>
        set((state) => {
          state.me = me;
          console.log(me, state);
          return state;
        }),
    })),
    {
      name: LOCAL_STORAGE_USER,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const userStore = createSelectors(userStoreBase);

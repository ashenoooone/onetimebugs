export type AppStateType = "loading" | "default";

export type AppStoreType = {
  appState: AppStateType;
  setAppState: (state: AppStateType) => void;
};

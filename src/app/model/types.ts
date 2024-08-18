export type AppStateType = "loading" | "default" | "error";

export type AppStoreType = {
  appState: AppStateType;
  errorMessage: string;
  setAppState: (state: AppStateType) => void;
  setErrorMessage: (message: string) => void;
};

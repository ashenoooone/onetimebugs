import { cn } from "@/shared/utils";
import React, { ReactNode } from "react";
import { appStore } from "../model/app.store";
import { Loader } from "@/shared/ui/loader.tsx";

type AppStateProps = {
  children: ReactNode;
};

export const AppState = React.memo((props: AppStateProps) => {
  const { children } = props;
  const appState = appStore.use.appState();
  const appErrorMessage = appStore.use.errorMessage();

  if (appState === "loading") {
    return <Loader centered />;
  }

  if (appState === "error") {
    throw new Error(appErrorMessage);
  }

  return children;
});

AppState.displayName = "AppState";

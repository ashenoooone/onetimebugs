import { retrieveLaunchParams } from "@telegram-apps/sdk-react";
import React, { ReactNode, useEffect } from "react";
import { useGetMe } from "../model/hooks";
import { Loader } from "@/shared/components/loader";
import { appStore } from "@/app";
import { userStore } from "../model/user.store";

type WithUserInitProps = {
  children?: ReactNode;
};

export const WithUserInit = React.memo((props: WithUserInitProps) => {
  const { children } = props;
  const setAppState = appStore.use.setAppState();
  const setAppErrorMessage = appStore.use.setErrorMessage();
  const user = userStore.use.me();
  const setUser = userStore.use.setMe();

  // берем параметры из старта
  const { initDataRaw } = retrieveLaunchParams();

  // хук для получения текущего юзера
  const { data, isSuccess, isError, isFetching } = useGetMe({
    query: initDataRaw,
  });

  useEffect(() => {
    if (isSuccess && data) {
      setUser(user);
    }
  }, [isSuccess, data]);

  if (isFetching) {
    return <Loader centered fullScreen />;
  }

  if (isError) {
    return <div>to do erro halding</div>;
  }

  return children;
});

WithUserInit.displayName = "WithUserInit";

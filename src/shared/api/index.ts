import axios from "axios";
import { LOCAL_STORAGE_USER } from "../consts";
import { UserStoreType } from "@/entities/user";

export const baseUrl = "https://api.onetimebugs.xyz/";

export const $api = axios.create({
  baseURL: baseUrl,
});

$api.interceptors.request.use((config) => {
  const cookieToken = localStorage.getItem(LOCAL_STORAGE_USER);

  if (cookieToken) {
    const meState = localStorage.getItem(LOCAL_STORAGE_USER);
    if (meState) {
      // парсим токен юзера из локального хранилища
      const meParsed = JSON.parse(meState) as {
        state: UserStoreType;
      };

      const hasQueryParams = config.url?.includes("?");
      // если у нас уже есть квери параметры то добавляем через & иначе через ?
      config.url += `${hasQueryParams ? "&" : "?"}magicLink=${
        meParsed.state.me?.magicLink
      }`;
    }
  }

  return config;
});

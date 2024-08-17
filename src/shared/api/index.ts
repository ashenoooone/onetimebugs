import axios from "axios";
import { LOCAL_STORAGE_USER } from "../consts";

export const baseUrl = "https://api.onetimeduck.xyz/";

export const $api = axios.create({
  baseURL: baseUrl,
});

$api.interceptors.request.use((config) => {
  const cookieToken = localStorage.getItem(LOCAL_STORAGE_USER);

  if (cookieToken) {
    // TODO ПАРСИНГ ТОКЕНА
    // const parsedTokens = JSON.parse(cookieToken) as TokensResponseType;
    // config.headers.Authorization = `${parsedTokens.type} ${parsedTokens.accessToken}`;
  }

  return config;
});

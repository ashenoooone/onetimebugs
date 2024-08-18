import { useQuery } from "react-query";
import { UserApi } from "./user.api";
import { retrieveLaunchParams } from "@telegram-apps/sdk-react";
import { Loader } from "@/shared/ui/loader.tsx";

const ME_KEY = "ME";
const ME_STALE_TIME = 60 * 1000;

export const useGetMe = (params: { query?: string }) =>
  useQuery({
    queryFn: () =>
      UserApi.getMe({
        // можем поставить, так как enabled стоит на булеан params.query
        query: params.query!,
      }),
    staleTime: ME_STALE_TIME,
    queryKey: [ME_KEY],
    select: (data) => data.data,
    enabled: Boolean(params.query),
  });

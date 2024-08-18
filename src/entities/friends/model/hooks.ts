import { useQuery } from "react-query";
import { FriendsApi } from "./friends.api";

const FRIENDS_KEY = "FRIENDS";
const FRIENDS_STALE_TIME = 60 * 1000;

export const useGetFriends = () =>
  useQuery({
    queryFn: () => FriendsApi.getFriends(),
    staleTime: FRIENDS_STALE_TIME,
    queryKey: [FRIENDS_KEY],
    select: (data) => data.data,
  });

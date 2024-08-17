import { useQuery } from "react-query";
import { LeaderboardApi } from "./leaderboard.api";

export const LEADERBOARD_KEY = "LEADERBOARD";
export const LEADERBOARD_STALE_TIME = 60 * 1000;

export const useGetLeaderboard = () =>
  useQuery({
    queryFn: () => LeaderboardApi.getLeaderBoard(),
    queryKey: [LEADERBOARD_KEY],
    staleTime: LEADERBOARD_STALE_TIME,
    select: (data) => data.data,
  });

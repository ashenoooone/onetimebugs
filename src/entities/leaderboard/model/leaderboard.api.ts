import { $api } from "@/shared/api";
import { LeaderboardType } from "./types";

export class LeaderboardApi {
  static async getLeaderBoard() {
    return $api.get<LeaderboardType>("leaderboards");
  }
}

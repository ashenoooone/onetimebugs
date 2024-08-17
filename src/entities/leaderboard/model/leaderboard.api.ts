import { $api } from "@/shared/api";

export class LeaderboardApi {
  static async getLeaderBoard() {
    return $api.get("leaderboard");
  }
}

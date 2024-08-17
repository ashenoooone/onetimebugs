import { UserType } from "@/entities/user";

export type UserLeaderboardType = {
  position: number;
  balance: number;
};

export type LeaderboardType = {
  totalUsers: number;
  me: UserLeaderboardType;
  users: (UserType & UserLeaderboardType)[];
};

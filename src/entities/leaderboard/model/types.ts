import { UserType } from "@/entities/user";

export type UserLeaderboardType = {
  position: number;
  balance: number;
};

export type LeaderBoardUserType = UserType & UserLeaderboardType;

export type LeaderboardType = {
  totalUsers: number;
  me: LeaderBoardUserType;
  users: LeaderBoardUserType[];
};

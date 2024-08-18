import { LeaderBoardUserType } from "@/entities/leaderboard";

export const getUserAvatar = (username: string) => {
  return `https://ui-avatars.com/api/?name=${username}&background=random&size=72&bold=false`;
};

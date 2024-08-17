import { LeaderBoardUserType } from "./types";

export const getUserAvatar = (user: LeaderBoardUserType) => {
  return `https://ui-avatars.com/api/?name=${user.username}&background=random&size=72&bold=false`;
};

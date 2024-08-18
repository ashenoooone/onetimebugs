import { UserType } from "@/entities/user";

export type FriendType = UserType & {
  scores: number;
  tickets: number;
};

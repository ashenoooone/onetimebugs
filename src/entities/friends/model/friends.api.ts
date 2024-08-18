import { $api } from "@/shared/api";
import { FriendType } from "./types";
export class FriendsApi {
  static async getFriends() {
    return $api.get<{ friend: FriendType[]; totalFriends: number }>("friends");
  }
}

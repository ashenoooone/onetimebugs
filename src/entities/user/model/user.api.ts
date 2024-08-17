import { $api } from "@/shared/api";

export class UserApi {
  static async getMe() {
    return $api.get("getMe");
  }
}

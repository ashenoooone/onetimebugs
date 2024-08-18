import { $api } from "@/shared/api";
import { MeType } from "./types";

export class UserApi {
  static async getMe(params: { query: string }) {
    return $api.post<MeType>(`getMe`, {
      query: params.query,
    });
  }
}

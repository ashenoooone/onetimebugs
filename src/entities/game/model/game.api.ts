import { $api } from "@/shared/api";
import {
  PostFinishGameParams,
  PostFinishGameResult,
  PostStartGameResult,
} from "./types";

export class GameApi {
  static async postStartGame() {
    return $api.post<PostStartGameResult>("games/start");
  }

  static async postFinishGame(params: PostFinishGameParams) {
    return $api.post<PostFinishGameResult>("games/finish", params);
  }
}

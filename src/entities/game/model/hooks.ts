import { useMutation } from "react-query";
import { GameApi } from "./game.api";
import { PostFinishGameParams } from "./types";

const GAME_KEY = "GAME";

export const usePostStartGame = () =>
  useMutation({
    mutationFn: () => GameApi.postStartGame(),
    mutationKey: [GAME_KEY],
  });

export const usePostFinishGame = () => {
  return useMutation({
    mutationFn: (params: PostFinishGameParams) =>
      GameApi.postFinishGame(params),
    mutationKey: [GAME_KEY],
  });
};
